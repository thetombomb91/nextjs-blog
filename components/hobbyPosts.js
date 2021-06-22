import React from 'react';
import Link from "next/link";
import Image from 'next/image'

export default function HobbyPosts(props) {
    return (
        <section className="bg-gray-800 rounded-xl shadow-xl p-6 lex flex-wrap">
            <h2 className="text-white text-2xl pt-8">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-xl font-medium title-font text-white mb-4">
                        ⛺ Hobby Posts (Mostly Camping):
                    </h1>
                </div>
            </h2>
            <ul className="p-5">
                {props.hobbyPosts?.map(({ id, title }) => (
                    <li className="text-white pt-4 underline list-none" key={id}>
                        <div className="flex align-center">
                            <Image
                                src="/images/mountain.svg"
                                alt="Mountain scape list icon"
                                width={30}
                                height={30}
                            />
                            <Link href={`/posts/${id}`}>
                                <a className="text-white font-semibold text-lg hover:text-blue-300 ml-2">
                                    {title}
                                </a>
                            </Link>
                        </div>
                        <br />
                    </li>
                ))}
            </ul>
        </section>
    )
}
