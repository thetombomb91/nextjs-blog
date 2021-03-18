import Head from "next/head";
import HeaderLayout from "./headerLayout";

export const siteTitle = "Thomas Desmond - Writer, Speaker, Content Creator";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/bombFavicon.ico" />
        <meta
          name="description"
          content="Thomas Desmond aka TheTomBomb, a personal blog for sharing learning and interests, you'll find frontend tech content, my courses, and even a few fun camping trips I have taken."
        />
                <meta
          property="og:image"
          content={`https://thetombomb-public.s3.amazonaws.com/TomBombHeader.jpeg`}
        />
        <meta name="twitter:image" content={"/images/TomBombHeader.png"}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ThomasJDesmond" />
      </Head>
      <HeaderLayout />

      <div className=" h-full bg-gradient-to-b from-indigo-500 to-blue-600 flex align-center justify-center">
        <main className="md:w-3/5 w-4/5 pt-12 flex align-center justify-between">
          {children}
        </main>
      </div>
    </div>
  );
}