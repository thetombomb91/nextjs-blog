import React from 'react';
import Link from "next/link";

export default function TechBlogs(props) {
    return (
        <section className="bg-white rounded-xl	 shadow-xl p-6 flex flex-wrap">
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
                {props.posts?.map(({ id, title, description }) => (
                    <li className="pt-6 no-underline" key={id}>
                        <Link href={`/posts/${id}`}>
                            <a className="text-black font-semibold text-lg title-font font-medium mb-3 underline hover:text-gray-600">
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
    )
}
