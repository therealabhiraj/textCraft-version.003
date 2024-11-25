import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const User = () => {

    const [slide, setslide] = useState(false)
    return (
        <>

            <div className='hidden w-full h-screen md:flex text-white bg-zinc-800'>



                <div className='flex flex-col sm:w-1/2  justify-center  bg-zinc-900 overflow-hidden h-full border-zinc-600 border-r-2 lg:w-1/4'>

                    <div className='  pb-12 flex items-start justify-center  bg-zinc-900  w-full h-fit'>
                        <img className='w-40 hover:big-0 bg-zinc-900 border-2  rounded-full object-contain' src="./images/profile.png" />
                    </div>
                    <div className='mb-12 border-zinc-700 bg-zinc-900 w-full h-fit'>
                        <div className='py-2 text-lg font-md hover:big-0 hover:bg-lgray flex  px-2 w-full justify-center   hover:border '>NEERAJ RANA</div>
                        <div className='py-2 text-sm font-sm hover:big-0 text-zinc-400 hover:bg-lgray flex  px-2  w-full justify-center  hover:border '>@RANAJI00234</div>

                    </div>

                    <div className='w-full flex hover:big-0 justify-center'><Link to="/edit" className=' border-2 px-2 py-1  rounded-lg '>EDIT PROFILE <i class="ri-pencil-line"></i></Link></div>

                </div>


                <div className='  px-2 py-2   w-full'>

                    <div className='w-full border-b-2 border-zinc-600 py-3 mb-10 mt-8 text-xl font-bold'>GENERATED IMAGE LIBRARY</div>

                    <div className='w-full flex   flex-wrap  gap-6  px-3 py-2'>

                        {/* Image of tokyp on */}


                        <div className='w-72 h-fit cursor-pointer hover:big-0 '>

                            <div className="w-full hover:border-zinc-400 hover:border-2 hover:bg-neutral-800  h-fit py-2  bg-lgray border border-zinc-500 overflow-hidden  rounded-lg ">
                                <div className="w-full relative h-fit px-1 py-1  rounded-xl overflow-hidden">
                                    <img id="image" className="w-full  px-1 py-1 h-full object-cover  " src="./images/tokyo.jpg" alt="Lord Rama" />
                                    <div className={`rounded-lg flex ${slide ? "" : "hidden"} justify-center`}>
                                        <div className="w-full backdrop-blur-sm   brightness-75 rounded-lg absolute bottom-0 h-20 "></div>
                                        <div className="w-full absolute bottom-0 overflow-hidden brightness-100 rounded-lg text-white text-xs text-wrap  h-20 px-1 flex justify-center items-center">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed soluta accusantium provident.
                                        </div>

                                    </div>
                                </div>
                                <div className=" w-full px-2 py-2  flex  justify-between items-center rounded-md">
                                    <div className="flex w-full mr-1 justify-between">
                                        <div onClick={() => { if (slide == true) { setslide(false) } else { setslide(true) } }} className='border-2 px-2 rounded-lg bg-violet-700 border-violet-700 text-sm hover:bg-violet-500 py-1'><button className=''>prompt</button></div>
                                        <div><i class=" text-blue-700 text-2xl hover:text-blue-500 ri-download-2-fill"></i></div>
                                    </div>

                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>




            {/* phone view */}


            <div className="lg:hidden  w-screen h-fit bg-zinc-900">

                <div className='w-full bg-zinc-800 flex justify-between   h-1/4 px-2 py-3'>

                    <div className='w-full flex gap-2 items-center'>

                        <div className='w-36 h-full '>
                            <img className='w-36 object-cover' src="./images/profile.png" />

                        </div>

                        <div className='text-white  px-2 py-3'>
                            <div className=' text-lg font-bold'>Neeraj Rana</div>
                            <div className='text-md text-zinc-400'>@Ranaji007</div>
                        </div>

                    </div>


                    <button className='text-white active:bg-zinc-700  h-fit w-20 flex justify-between px-2 rounded-lg'>
                     <Link to="/edit">Edit</Link>    <i class="ml-1 ri-pencil-line"></i>

                    </button>

                </div>


                {/* image */}
                <div className='  px-2 py-2 bg-zinc-900  text-white  w-full  h-screen'>

                    <div className='w-full border-b-2   border-zinc-600  mb-10 mt-8 text-xl font-bold'>GENERATED IMAGE LIBRARY</div>

                    <div className='w-full flex justify-center overflow-y-scroll h-96 flex-wrap   gap-6  px-3 py-2'>

                        {/* Image of tokyp on */}


                        <div className='w-72 h-fit cursor-pointer hover:big-0 '>

                            <div className="w-full hover:border-zinc-400 hover:border-2 hover:bg-neutral-800  py-2  bg-lgray border border-zinc-500 overflow-hidden  rounded-lg ">
                                <div className="w-full relative h-fit px-1 py-1  rounded-xl overflow-hidden">
                                    <img id="image" className="w-full  px-1 py-1 h-full object-cover  " src="./images/tokyo.jpg" alt="Lord Rama" />
                                    <div className={`rounded-lg flex ${slide ? "" : "hidden"} justify-center`}>
                                        <div className="w-full backdrop-blur-sm   brightness-75 rounded-lg absolute bottom-0 h-20 "></div>
                                        <div className="w-full absolute bottom-0 overflow-hidden brightness-100 rounded-lg text-white text-xs text-wrap  h-20 px-1 flex justify-center items-center">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed soluta accusantium provident.
                                        </div>

                                    </div>
                                </div>
                                <div className=" w-full px-2 py-2  flex  justify-between items-center rounded-md">
                                    <div className="flex w-full mr-1 justify-between">
                                        <div onClick={() => { if (slide == true) { setslide(false) } else { setslide(true) } }} className='border-2 px-2 rounded-lg bg-violet-700 border-violet-700 text-sm hover:bg-violet-500 py-1'><button className=''>prompt</button></div>
                                        <div><i class=" text-blue-700 text-2xl hover:text-blue-500 ri-download-2-fill"></i></div>
                                    </div>

                                </div>



                            </div>
                        </div>


                        
                        <div className='w-72 h-fit cursor-pointer hover:big-0 '>

                            <div className="w-full hover:border-zinc-400 hover:border-2 hover:bg-neutral-800  h-fit py-2  bg-lgray border border-zinc-500 overflow-hidden  rounded-lg ">
                                <div className="w-full relative h-fit px-1 py-1  rounded-xl overflow-hidden">
                                    <img id="image" className="w-full  px-1 py-1 h-full object-cover  " src="./images/tokyo.jpg" alt="Lord Rama" />
                                    <div className={`rounded-lg flex ${slide ? "" : "hidden"} justify-center`}>
                                        <div className="w-full backdrop-blur-sm   brightness-75 rounded-lg absolute bottom-0 h-20 "></div>
                                        <div className="w-full absolute bottom-0 overflow-hidden brightness-100 rounded-lg text-white text-xs text-wrap  h-20 px-1 flex justify-center items-center">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed soluta accusantium provident.
                                        </div>

                                    </div>
                                </div>
                                <div className=" w-full px-2 py-2  flex  justify-between items-center rounded-md">
                                    <div className="flex w-full mr-1 justify-between">
                                        <div onClick={() => { if (slide == true) { setslide(false) } else { setslide(true) } }} className='border-2 px-2 rounded-lg bg-violet-700 border-violet-700 text-sm hover:bg-violet-500 py-1'><button className=''>prompt</button></div>
                                        <div><i class=" text-blue-700 text-2xl hover:text-blue-500 ri-download-2-fill"></i></div>
                                    </div>

                                </div>



                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}

export default User