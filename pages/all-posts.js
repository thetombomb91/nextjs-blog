import Head from "next/head";
import HomeLayout, { siteTitle } from "../components/homeLayout";
import utilStyles from "../styles/utils.module.css";
import { getPostsByCategory as getAllPostsByCategory } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPosts = getAllPostsByCategory("all");

  return {
    props: {
      allPosts: allPosts,
    },
  };
}
export default function Home({ allPosts }) {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <section
            className="ml-20 flex flex-center align-center flex-wrap flex-col"
            id="all-posts"
          >
            <div className="text-center mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                📝All Blog Posts
              </h1>

              <div className="flex mt-6 justify-center">
                <div className="w-20 h-1 rounded-full bg-white inline-flex"></div>
              </div>
            </div>

            <ul className="rounded-xl mb-10 bg-white shadow-xl">
              {allPosts?.map(({ id, date, title, description }) => (
                <li className="pl-10 pt-10 pr-10   pb-5" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-black font-semibold underline">{title}</a>
                  </Link>
                  <p className="italic">{description}</p>
                  <Link href={`/posts/${id}`}>Read More...</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </HomeLayout>

      <style jsx>
        {`
          @media only screen and (max-width: 768px) {
            #all-posts {
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  );
}
