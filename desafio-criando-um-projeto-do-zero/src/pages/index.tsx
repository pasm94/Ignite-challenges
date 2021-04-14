import { GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
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
  preview: string;
}

export default function Home({
  postsPagination,
  preview,
}: HomeProps): JSX.Element {
  // TODO

  const [posts, setPosts] = useState(
    postsPagination.results.map(result => {
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
    })
  );

  const [nextPage, setNextPage] = useState(postsPagination.next_page);

  async function handleLoadNextPage(): Promise<void> {
    if (nextPage === null) {
      return;
    }

    const loadPosts = await fetch(`${nextPage}`).then(response =>
      response.json()
    );

    const postFormatted = loadPosts.results.map(result => {
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
    setPosts([...posts, postFormatted[0]]);

    setNextPage(loadPosts.next_page);
  }

  return (
    <>
      <Header marginLeft={200} />
      <div className={styles.container}>
        <section className={commonStyles.container}>
          {posts.map(result => (
            <Link key={result.uid} href={`/post/${result.uid}`}>
              <a>
                <div>
                  <div className={styles.title}>{result.data.title}</div>
                  <div className={styles.body}>
                    <div>{result.data.subtitle}</div>
                    <div className={styles.authorAndDate}>
                      <div>
                        <FiCalendar />
                        {result.formattedDate}
                      </div>
                      <div>
                        <FiUser />
                        {result.data.author}
                      </div>
                    </div>
                  </div>
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
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
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
