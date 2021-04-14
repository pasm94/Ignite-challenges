import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiClock, FiCalendar, FiUser } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Head } from 'next/document';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Header from '../../components/Header';
import { UtterancesComments } from '../../components/UtterancesComments';

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
  preview: boolean;
}

export default function Post({ post, preview }: PostProps): any {
  // TODO

  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Carregando...</h1>;
  }

  let formattedDate = null;

  if (post.first_publication_date) {
    formattedDate = format(
      new Date(post.first_publication_date),
      'dd MMM yyyy',
      {
        locale: ptBR,
      }
    );
  }

  const totalHeadingWords = post.data.content
    .map(cont => {
      return cont.heading.split(' ').length;
    })
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);

  const totalBodyWords = post.data.content
    .map(cont => {
      return cont.body.map(b => b.text.split(' ').length);
    })
    .reduce((total, currentValue) => {
      const cv = currentValue.reduce((t, cV) => {
        return t + cV;
      }, 0);
      return total + cv;
    }, 0);

  const totalWords = totalBodyWords + totalHeadingWords;
  const timeToReadText = Math.ceil(totalWords / 200);
  return (
    <>
      <Header marginLeft={366} />
      <div className={commonStyles.container}>
        <div className={styles.container}>
          <img src={post.data.banner.url} alt="imagem" />
          <main>
            <div className={styles.title}>{post.data.title}</div>

            <div className={styles.authorAndDate}>
              <div>
                <FiUser />
                {post.data.author}
              </div>

              <div>
                <FiCalendar />
                {formattedDate}
              </div>
              <div>
                <FiClock />
                {timeToReadText} min
              </div>
            </div>

            {post.data.content.map(cont => (
              <article key={cont.heading}>
                <h2 className={styles.heading}>{cont.heading}</h2>
                <div
                  className={styles.body}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(cont.body),
                  }}
                />
              </article>
            ))}
          </main>
        </div>
      </div>
      <UtterancesComments />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.predicates.at('document.type', 'posts'),
  ]);

  // poderia filtar pelos 5 mais recentes por exemplo
  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths, // quais post quero carregar antes de um user acessar a page
    fallback: true, //
  };
  // TODO
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const prismic = getPrismicClient();
  const response = await prismic.getByUID('posts', String(params.slug), {
    ref: previewData?.ref || null,
  });
  // TODO

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      author: response.data.author,
      banner: {
        url: response.data.banner.url,
      },
      content: response.data.content.map(cont => {
        return {
          heading: cont.heading,
          body: [...cont.body],
        };
      }),
    },
  };

  return { props: { post } };
};
