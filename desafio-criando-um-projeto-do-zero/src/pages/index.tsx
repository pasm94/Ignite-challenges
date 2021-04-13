import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import Link from 'next/link';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import Header from '../components/Header';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): any {
  // TODO
  const resultsFormatted = postsPagination.results.map(result => {
    const formattedDate = format(
      new Date(result.first_publication_date),
      'dd MMM yyyy',
      {
        locale: ptBR,
      }
    );
    return {
      ...result,
      formattedDate,
    };
  });

  const [posts, setPosts] = useState(resultsFormatted);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);

  async function handleLoadNextPage(): Promise<void> {
    if (nextPage === null) {
      return;
    }

    const loadPosts = await fetch(`${nextPage}`).then(response =>
      response.json()
    );

    setPosts([...posts, loadPosts.results[0]]);

    setNextPage(loadPosts.next_page);
  }

  return (
    <>
      <Header />
      <section className={commonStyles.container}>
        {posts.map(result => (
          <Link href={`/post/${result.uid}`}>
            <a>
              <div key={result.uid}>
                <div>{result.data.title}</div>
                <div>{result.data.subtitle}</div>
                <div>{result.data.author}</div>
                <div>{result.formattedDate}</div>
              </div>
            </a>
          </Link>
        ))}
      </section>
      {nextPage && (
        <button type="button" onClick={handleLoadNextPage}>
          Carregar mais posts
        </button>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      // fetch: [
      //   'posts.title',
      //   'posts.subtitle',
      //   'posts.author',
      //   'posts.content',
      //   'posts.first_publication_date',
      // ],
      pageSize: 1,
    }
  );

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  const postsPagination = {
    results: posts,
    next_page: postsResponse.next_page,
  };
  // TODO
  return {
    props: { postsPagination },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
