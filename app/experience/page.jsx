
export default function page() {
    return (
        <>
            <div classNameName="w-full">
                <div classNameName="relative overflow-hidden">
                    <div classNameName="absolute inset-0 z-0">
                        <img alt="" layout="fill" objectFit="cover" objectPosition="center" quality={100} src="/placeholder.svg" />
                    </div>
                    <div classNameName="relative z-10">
                        <div classNameName="container flex flex-col gap-4 px-4 py-16 text-center md:gap-8 md:px-6 lg:py-24">
                            <div classNameName="space-y-2">
                                <h1 classNameName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Experience</h1>
                                <p classNameName="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Building, learning, and growing through internships and freelance projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gray-100">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-8 lg:px-10 max-w-7xl">
                    <div className="flex w-full mx-auto">
                        <div className="relative inline-flex items-center m-auto align-middle">
                            <div className="relative max-w-6xl p-10 overflow-hidden bg-white rounded-3xl lg:p-20">
                                <div className="relative max-w-lg">
                                    <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                                        Freelance - Remote
                                    </p>
                                        <p className="text-1xl font-medium tracking-tight text-black sm:text-1xl">
                                            Jan 2024 - Present
                                        </p>
                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            Designed and developed a responsive website for a pest control company using Next.js, hosted via Cloudflare on
                                            a Hostinger domain. Implemented a blog using MDX and SEO strategies to drive website traffic.
                                            <br />
                                            <a classNameName="text-cyan-400" href="https://cosmicpestsolutions.com">https://cosmicpestsolutions.com</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-8 lg:px-10 max-w-7xl">
                    <div className="flex w-full mx-auto">
                        <div className="relative inline-flex items-center m-auto align-middle">
                            <div className="relative max-w-6xl p-10 overflow-hidden bg-white rounded-3xl lg:p-20">
                                <div className="relative max-w-lg">
                                    <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                                        Student Developer (Trainee)
                                    </p>
                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            United Network of Professionals
                                        </p>
                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            ◦ Proficient in full-stack development, adept at Java for server-side programming, and skilled in dynamic UI
                                            creation with HTML/CSS/JavaScript.<br></br>
                                            ◦ Designing, implementing SQL databases, optimizing queries, ensuring seamless integration with web
                                            applications for security and integrity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
