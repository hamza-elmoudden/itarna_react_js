import React from 'react'

export const Section = () => {
    return (
        <>
            <section className="w-[97%] mx-auto py-5">
                <div className="flex h md:flex-row flex-wrap md:gap-0 gap-8">
                    <div className="md:w-1/2 w-full flex items-center justify-center">
                        <div className="flex gap-28 flex-col">
                            <div className="font-bold uppercase space-y-7 text-3xl">
                                <h2>Lorem ipsum dolor sit.</h2>
                                <h2>Lorem ipsum dolor sit.</h2>
                            </div>
                            <div className="text-xl md:text-left text-center">
                                <button
                                    type="button"
                                    class="bg-white text-center w-[17rem] rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                                >
                                    <div
                                        class="bg-orange-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[263px] z-10 duration-500"
                                    >
                                        <svg
                                            width="25px"
                                            height="25px"
                                            viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                            ></path>
                                            <path
                                                fill="#000000"
                                                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p class="translate-x-2">Show Service</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex items-center justify-center ">
                        <div className="border border-spacing-8 border-white w-[35rem] h-[30rem] overflow-hidden rounded-lg">
                            <img src="" alt="Itarna" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
