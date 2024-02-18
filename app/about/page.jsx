import React from 'react'

export default function page() {
  return (
    <>
      <div className="w-full py-12 lg:py-24 xl:py-12 border-t border-b">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
              Full-stack developer specializing in accessible, visually appealing web applications. Certified in Core Java, MongoDB
              Node.js Developer Path and skilled in SDLC methodologies. Emphasizing strong communication, problem-solving,
              and teamwork for effective project delivery.
            </p>
          </div>
          <div className="mx-auto max-w-3xl grid gap-4 justify-center sm:grid-cols-2 lg:gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wide uppercase text-gray-500 dark:text-gray-800">Education</h3>
              <ul className="grid gap-2 list-none">
                <li>
                  <div className="grid gap-1">
                    <h4 className="font-semibold">Bachelor of Technology - Electronics and Communication Engineering</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-700">Haldia Institute Of Technology (2020-2024)</p>
                    <p className="text-sm text-gray-500 dark:text-gray-700">GPA :- 8.78/10.0</p>
                  </div>
                </li>
                {/* <li>
                  <div className="grid gap-1">
                    <h4 className="font-semibold">Master of Business Administration</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Business School (2014-2016)</p>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold tracking-wide uppercase text-gray-500 dark:text-gray-800">Skills</h3>
              <div className="flex flex-wrap gap-4">
                <span className="rounded-lg border border-gray-200  bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50">
                  Java
                </span>
                <span className="rounded-lg border border-gray-200  bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50">
                  JavaScript
                </span>
                <span className="rounded-lg border border-gray-200  bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50">
                  React
                </span>
                <span className="rounded-lg border border-gray-200  bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50">
                  Next.js
                </span>
                <span className="rounded-lg border border-gray-200  bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50">
                  Tailwind CSS
                </span>
                <span className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm dark:border-gray-800  dark:bg-gray-950 dark:text-gray-50">
                  Node.js
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* <div className="w-full py-12 lg:py-24">
      <div className="container grid md:gap-6 lg:grid-cols-12 lg:gap-12 xl:grid-cols-12">
        <div className="space-y-4 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm a passionate and dedicated professional with a strong background in my field. I'm committed to
              continuous learning and growth, always seeking new opportunities to expand my knowledge and expertise. My
              enthusiasm for my work and my attention to detail make me a valuable asset to any team.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold tracking-tight">Master of Science in Computer Science</h3>
              <p className="text-sm text-gray-500">2012-2014</p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold tracking-tight">Bachelor of Engineering in Information Technology</h3>
              <p className="text-sm text-gray-500">2008-2012</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800">
              Software Development
            </div>
            <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800">
              Web Design
            </div>
            <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800">
              Data Analysis
            </div>
            <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800">
              Project Management
            </div>
            <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800">
              Team Collaboration
            </div>
          </div>
        </div>
      </div>
    </div> */}

    </>
  )
}
