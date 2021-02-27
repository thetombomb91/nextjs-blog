import Head from "next/head";
import HeaderLayout from "./headerLayout";
import FooterLayout from "./footerLayout";

const name = "Thomas aka TheTomBomb";
export const siteTitle = "Thomas Desmond - Writer, Speaker, Content Creator";

export default function PostLayout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/bombFavicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeaderLayout />

      <div className="w-screen bg-indigo-600 flex align-center justify-center">
        <main className="sm:w-3/5 w-11/12 bg-white flex justify-center align-center md:m-12 ">
          {children}
        </main>
      </div>
      <FooterLayout />
    </div>
  );
}
