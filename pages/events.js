import Head from "next/head";
import HomeLayout, { siteTitle } from "../components/homeLayout";
import Link from "next/link";
import { getAllEvents} from "../lib/events";

export async function getStaticProps() {
  const allEvents = getAllEvents();

  return {
    props: {
      allEvents: allEvents,
    },
  };
}
export default function Events({ allEvents }) {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="w-full h-full">
          <section
            className="flexw align-center flex-wrap flex-col"
            id="all-posts"
          >
            <div className="text-center mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                🥑 My Past Events
              </h1>

              <div className="flex mt-6 justify-center">
                <div className="w-20 h-1 rounded-full bg-white inline-flex"></div>
              </div>
            </div>


            <ul className="rounded-xl pb-10 mb-10 bg-white w-full shadow-xl">
              {allEvents?.map(({ id, talkTitle, talkLocation, type, background, talkLink, date }) => (
                <li className="pl-10 pt-10 pr-10" key={id}>
                <label>{date}</label>
                <div className="flex">
                  <Link href={talkLink}>
                    <a className="text-black font-semibold underline hover:text-gray-600">{talkTitle}</a>
                  </Link>
                  <div>
                  <label className={`bg-red-200 ml-2 pl-1 pr-1 rounded`}>{type}</label> 
                  </div>
                </div>
                  <p className="italic">{talkLocation}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </HomeLayout>
    </>
  );
}
