import { GetStaticPaths, GetStaticProps, NextApiResponse } from 'next';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): any {
  // TODO
  console.log(post.data.content[0].body);

  return (
    <>
      <div>{post.data.title}</div>
      <div>{post.data.author}</div>
      <img src={post.data.banner.url} style={{ width: '300px' }} alt="" />
      <div>{post.data.content[0].heading}</div>
      <div
        dangerouslySetInnerHTML={{ __html: String(post.data.content[0].body) }}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      fetch: ['posts.title', 'posts.content'],
      pageSize: 2,
    }
  );

  return {
    paths: [], // quais post quero carregar antes de um user acessar a page
    fallback: 'blocking', //
  };
  // TODO
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const response = await prismic.getByUID(
    'posts',
    String(context.params.slug),
    {}
  );
  // TODO

  const content = [
    response.data.content.map(cont => {
      return {
        heading: cont.heading,
        body: RichText.asHtml(cont.body),
      };
    }),
  ];

  const post = {
    first_publication_date: null,
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author,
      content: content[0],
    },
  };

  return { props: { post } };
};
