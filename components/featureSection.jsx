import React from 'react'

export default function featureSection() {
  return (
    <>
    <section aria-labelledby="feature-five" id="feature-five" class="overflow-y-auto bg-white lg:h-screen">
                <div class="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
                  <div class="lg:w-1/2">
                    <div class="top-0 pt-8 pb-16 lg:sticky">
                      <div>
                        <div class="lg:pr-24 md:pr-12">
                          <div>
                            <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                             What I'm Doing
                            </p>
                            {/* <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                              You are not your mistakes, you are not your struggles, and you
                              are here NOW with the power to shape your day and your future
                            </p> */}
                          </div>
                          <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                            <a href="/project" class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                              Project
                            </a>
                            <a href="/about" class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                              Learn more &nbsp; →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:w-1/2">
                    <div class="flex-shrink-0">
                      <div>
                        <ul class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24" role="list">
                          <li>
                            <div>
                              <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                                ❖
                              </div>
                              <p class="mt-5 text-lg font-medium leading-6 text-black">
                               Frontend Development
                              </p>
                            </div>
                            <div class="mt-2 text-base text-gray-500">
                             As a frontend developer, I am passionate about crafting intuitive and visually appealing user interfaces that enhance the overall digital experience. With a keen eye for design and a strong foundation in coding languages and frameworks, I specialize in bringing creative concepts to life through clean, efficient, and responsive code. Below are some highlights of my work and the skills I bring to the table.
                            </div>
                          </li>
                          <li>
                            <div>
                              <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                                ❖
                              </div>
                              <p class="mt-5 text-lg font-medium leading-6 text-black">
                                Backend Development
                              </p>
                            </div>
                            <div class="mt-2 text-base text-gray-500">
                            As a dedicated backend developer specializing in Node.js, I thrive on architecting robust, scalable, and efficient server-side solutions. Leveraging the power of JavaScript, I have honed my skills in building high-performance applications and RESTful APIs that drive seamless interactions between the frontend and the database. Below are some of the projects that showcase my expertise in Node.js backend development.
                            </div>
                          </li>
                          
                          
                         
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
    </>
  )
}
