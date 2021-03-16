import React from 'react';
import Link from "next/link";

export default function Courses() {
    return (
        <section className="my-10">
            <section className="bg-gray-200 rounded-xl shadow-xl p-6 lex flex-wrap">
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
    )
}
