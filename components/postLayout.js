import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Thomas aka TheTomBomb'
export const siteTitle = 'Thomas Desmond - Writer, Speaker, Content Creator'

export default function PostLayout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
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
            <header className={styles.header}>
                {(
                    <><table class="table-fixed w-3/4">
                        <tbody>
                            <td class="w-1/2 flex">
                                <Link href="/">
                                    <a class="flex">
                                        <img
                                            src="/images/profile.jpg"
                                            class="col-start-1 max-h-24 max-w-24"
                                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                            alt={name}
                                        />
                                        <div class="text-2xl pl-2 place-self-center text-black">{name}</div>
                                    </a>
                                </Link>
                            </td>
                            <td class="w-1/2">
                                <div class="">
                                    <span>
                                        <Link href="/">
                                            <a>
                                                🏠Home {' '}{'|'}{' '}
                                            </a>
                                        </Link>
                                        <Link href="/bio">
                                            <a>
                                                🧔Bio {' '}{'|'}{' '}
                                            </a>
                                        </Link>
                                        <Link href="/contact">
                                            <a>
                                                📞Contact
                                </a>
                                        </Link>
                                    </span>
                                </div>
                            </td>
                        </tbody>
                    </table>                    </>
                )}
            </header>
            <main class="bg-white flex justify-center	align-center p-12">{children}</main>
            {(
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}