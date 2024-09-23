import React from 'react'

export const Younow = () => {
    return (
        <>
            <section className="bg-[#181818]">
                <div className="w-[98%] mx-auto py-10">
                    <div className='flex flex-wrap xl:flex-row flex-col'>
                        <div className="xl:w-1/3 w-full  h-[40rem]">
                            <div className="w-full h-full relative">
                                <div className="bg-yellow-300 w-full h-full xl:w-[28rem] xl:h-[28rem] xl:absolute block z-20 right-10 top-8">
                                    <img src="" alt="you now" />
                                </div>
                                <div className="w-[25rem] h-[25rem] bg-orange-500 absolute bottom-0 xl:block hidden yonow-o">

                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 w-full h-[40rem] flex flex-col justify-center px-4 z-50 relative">
                            <div className="space-y-8">
                                <div className="text-3xl font-bold space-y-4">
                                    <h2>Ho Am</h2>
                                    <h2>Lorem, ipsum dolor.</h2>
                                </div>
                                <div className="text-xl capitalize opacity-65 leading-8">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus blanditiis maiores voluptas fugit laboriosam vitae ad sapiente deserunt explicabo, vero consequuntur natus, officia dolorem, delectus voluptatem nisi at iste hic?</p>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            class="overflow-hidden relative w-1/2 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group"
                                        >
                                            Now More
                                            <span
                                                class="absolute w-1/2 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                                            ></span>
                                            <span
                                                class="absolute w-1/2 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-[2.2] transition-transform group-hover:duration-700 duration-700 origin-left"
                                            ></span>
                                            <span
                                                class="absolute w-full h-48 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-[1] transition-transform group-hover:duration-1000 duration-500 origin-left"
                                            ></span>
                                            <span
                                                class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                            >Click</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 w-full  h-[40rem]">
                            <div className="w-full h-full relative">
                                <div className="bg-yellow-300 w-full h-full xl:w-[28rem] xl:h-[28rem] xl:absolute block  z-20 left-10 bottom-[-5rem]">
                                    <img src="" alt="you now" />
                                </div>
                                <div className="w-[25rem] h-[25rem] yonow-o bg-orange-500 absolute top-0 right-0 xl:block hidden">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
