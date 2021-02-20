import PostLayout from "../../components/postLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/codeblock"

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <PostLayout>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
        <title>{postData.title}</title>
        <meta name="og:title" content={postData.title} />
        <meta name="og:description" content={postData.description}></meta>
        <meta name="description" content={postData.description}></meta>
      </Head>

      <article className="max-w-full rounded-xl p-4 sm:p-10 prose lg:prose-lg shadow-xl">
        <h1 className="text-xl">{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <ReactMarkdown source={postData.markdown} renderers={{ code: CodeBlock }} />
      </article>
    </PostLayout>
  );
}
