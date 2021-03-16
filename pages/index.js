import Head from "next/head";
import HomeLayout, { siteTitle } from "../components/homeLayout";
import { getPostsByCategory as getAllPostsByCategory } from "../lib/posts";
import HobbyPosts from '../components/hobbyPosts';
import Courses from '../components/courses';
import TechBlogs from '../components/techBlogs';

export async function getStaticProps() {
  const topPosts = getAllPostsByCategory("topPost");
  const hobbyPosts = getAllPostsByCategory("hobby");

  return {
    props: {
      topPosts: topPosts,
      hobbyPosts: hobbyPosts,
    },
  };
}

export default function Home({ topPosts, hobbyPosts }) {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>{siteTitle}</title>

        </Head>
        <div className="mb-10">
          <section className="ml-20 pt-5 info pb-5" id="info">
            <div className="container mx-auto px-2 py-8">
              <div className="lg:flex ">
                <div className="lg:w-1/2">
                  <h2 className="text-black  dark:text-gray-100 text-3xl font-bold">
                    Welcome, from <span className="italic">Thomas</span> 👍
                  </h2>
                  <br />
                  <p className="text-white mb-10">
                    Here is where I share my tech, hobbies, and thoughts. You'll
                    find me sharing a lot of frontend tech fun and I encourage
                    you to check it all out.
                  </p>
                </div>
                <div className="mt-10 ml-20 lg:mt-0 " id="info-img">
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className="max-w-lg">
                      <img
                        className="w-full h-54 object-cover object-center rounded-xl shadow "
                        style={{
                          borderRadius: "50%",
                          width: "100%",
                        }}
                        src="/profile2.png"
                        alt="Picture of Thomas Desmond"
                        id="set-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <TechBlogs posts={topPosts} />
          <Courses />
          <HobbyPosts hobbyPosts={hobbyPosts}/>
        </div>
      </HomeLayout>
    </>
  );
}
