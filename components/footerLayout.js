import Link from "next/link";
import Image from 'next/image'

export default function FooterLayout({ children }) {

    return (
        <div className="w-screen bg-indigo-600 flex align-center justify-center">
            <div className="sm:w-3/5 w-11/12 block m-12">
                <div className="flex-auto">
                    {/* <Link href="/">
                        <a className="text-white">← Back to home</a>
                    </Link> */}
                </div>
                <div className="text-white font-bold p-4 text-xl invisible md:visible">
                    <div className="flex justify-center align-center">You've made it this far,</div>
                    <div className="flex flex-wrap justify-center align-center">
                        How about reaching out on Twitter&nbsp;<Link href="https://twitter.com/ThomasJDesmond"><a className="text-white">@ThomasJDesmond</a></Link>&nbsp;or&nbsp;  
                        <Link href="https://www.linkedin.com/in/thomas-desmond-9074475b/"><a className="text-white">LinkedIn!</a></Link>!
                    </div>
                </div>
                <div>
                    <nav className="invisible flex flex-wrap items-center justify-center">
                        <a
                            href="https://github.com/thomas-desmond"
                            className="mr-2 text-white hover:text-gray-900 no-underline"
                        >
                            <Image
                                src="/images/mark24.png"
                                alt="Github Profile Link"
                                width={24}
                                height={24}
                            />
                        </a>{" "}
                        <a
                            href="https://twitter.com/ThomasJDesmond"
                            className="mr-2 ml-2 text-white hover:text-gray-900 no-underline"
                        >
                            <Image
                                src="/images/twitter24.png"
                                alt="Twitter Profile Link"
                                width={24}
                                height={24}
                            />              </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}