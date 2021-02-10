import Head from 'next/head'
import styles from './layout.module.css'
import HeaderLayout from './headerLayout'

export const siteTitle = 'Thomas Desmond - Writer, Speaker, Content Creator'

export default function HomeLayout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Thomas Desmond Sitecore Technical Evangelist Blog"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <HeaderLayout />
            
            <div class="w-screen flex align-center justify-center">
                <main class="md:w-3/5 w-4/5 pt-12 flex align-center justify-center">{children}</main>
            </div>
        </div>
    )
}