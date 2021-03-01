import Head from "next/head";
import HomeLayout, { siteTitle } from "../components/homeLayout";
import { getPostsByCategory as getAllPostsByCategory } from "../lib/posts";
import Link from "next/link";

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
          <section className="bg-white rounded-xl	 shadow-xl p-6 lex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="text-center mb-10">
              <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-900 mb-4">
                📝Cool Blog Posts:
              </h1>
              <p className="text-base leading-relaxed lg:w-3/4 mx-auto text-gray-500s">
                I like to write Tech articles so that others can learn from it.
                It really enjoy when I am writing these articles.
              </p>

              <div className="flex mt-2 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <ul className="p-1">
              {topPosts?.map(({ id, date, title, description }) => (
                <li className="pt-6 no-underline" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-black font-semibold text-lg title-font font-medium mb-3 underline">
                      {title}
                    </a>
                  </Link>
                  <p className="italic">{description}</p>
                  <Link href={`/posts/${id}`}>Read More...</Link>

                  <br />
                </li>
              ))}
              <li className="pt-4 no-underline" key="all-posts">
                <Link href={`/all-posts`}>
                  <a className="text-indigo-600 font-semibold text-lg">
                    View all articles 👉
                  </a>
                </Link>
                <br />
              </li>
            </ul>
          </section>

          <section className="my-20">
            <section className="bg-gray-200 rounded-xl	 shadow-xl p-6 lex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-900 mb-4">
                  👨‍🏫 My Courses:
              </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                  My tech courses hosted on Thinkster.io
              </p>

                <div className="flex mt-2 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                <div className="inline">
                  <div className="pt-4">
                    <Link href="https://thinkster.io/tutorials/building-a-crud-application-with-angular-asp-net-core-course-introduction">
                      <a className="text-black font-semibold text-lg title-font font-medium mb-3 underline">
                        Building a CRUD Application with Angular & ASP.Net Core
                    </a>
                    </Link>
                  </div>
                  <div className="pt-4">
                    <Link href="https://thinkster.io/tutorials/creating-a-c-asp-net-core-api-introduction">
                      <a className="text-black font-semibold text-lg title-font font-medium mb-3 underline">
                        Creating a C# ASP.Net Core API
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="bg-gray-800 rounded-xl shadow-xl p-6 lex flex-wrap sm:-mx-4 -mt-4">
            <h2 className="text-white text-2xl pt-8">
              <div className="text-center mb-10">
                <h1 className="sm:text-3xl text-xl font-medium title-font text-white mb-4">
                  ⛺ Hobby Posts (Mostly Camping):
              </h1>
              </div>

            </h2>
            <ul className="p-5">
              {hobbyPosts?.map(({ id, date, title }) => (
                <li className="text-white pt-4 underline list-disc" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a className="text-white font-semibold text-lg">{title}</a>
                  </Link>
                  <br />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </HomeLayout>
      <style>
        {`


      @media only screen and (max-width: 768px) {

        #info-img {
          margin-left: 50px
        }

        #info {
          margin-left: 0;
        }

        .info {
          padding-top: 0px;
        }

        #set-image {
         width: 50%
          
        }

        #info-img {
          margin-bottom: 10px
        }
        
      }
    
    `}
      </style>
    </>
  );
}
