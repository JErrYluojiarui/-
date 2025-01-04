import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import { getAllPosts, getPostById, Post } from '../../lib/posts';
import { marked } from 'marked';

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  if (!post) {
    return (
      <Layout>
        <div>Post not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div className="text-gray-500 mb-8">{post.date}</div>
        <div
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          className="mt-8"
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = params?.id ? getPostById(params.id as string) : null;

  return {
    props: {
      post,
    },
  };
};
