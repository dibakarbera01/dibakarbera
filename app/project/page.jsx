import React from 'react'
import project from "@/data/project.json";
import Link from 'next/link';
export default function page() {
    return (
        <>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">

                    {project.map((data, index) => (

                        <a key={index} class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href={data.redirect_url}>
                            <div class="sm:flex">
                                <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={data.image_url} alt="Image Description" />
                                </div>

                                <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                                    <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-900">
                                        {data.name}
                                    </h3>
                                    <p class="mt-3 text-gray-600 dark:text-gray-800">
                                        {data.description}
                                    </p>
                                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                                        {data.link}
                                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </p>
                                </div>
                            </div>
                        </a>

                    ))}

                </div>
            </div>

        </>
    )
}
