import Head from "next/head";
import styles from "./layout.module.css";
import HeaderLayout from "./headerLayout";

export const siteTitle = "Thomas Desmond - Writer, Speaker, Content Creator";

export default function HomeLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/bombFavicon.ico" />
        <meta
          name="description"
          content="Thomas Desmond aka TheTomBomb, a personal blog for sharing learning and interests, you'll find frontend tech content, my courses, and even a few fun camping trips I have taken."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ThomasJDesmond" />
      </Head>
      <HeaderLayout />

      <div className=" h-full bg-indigo-500  flex align-center justify-center">
        <main className="md:w-3/5 w-4/5 pt-12 flex align-center justify-between">
          {children}
        </main>
      </div>
    </div>
  );
}
