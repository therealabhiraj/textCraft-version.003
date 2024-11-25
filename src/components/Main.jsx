import React, { useState } from "react";
// import './Main.css'
/* src/index.css or src/App.css */
import 'remixicon/fonts/remixicon.css';

const Main = () =>{

    const [slide, setslide] = useState(false)


    return <>


    <div className=" w-1/2 h-screen mt-1 relative mr-8  text-white  ">
{/* Main Heading walla section hai */}
    <div className="w-full py-2 mb-1 h-fit flex items-center justify-center rounded-md">
    <div className=" border-b-2  border-zinc-600 w-4/5 px-2 py-2  h-fit flex justify-between items-center">
              <h1 className="text-3xl cursor-text font-bold ml-4">Cute Ram Lala</h1>
              <div className="flex gap-5 mr-4">
                  <i class="hover:big-2 text-lg hover:text-yellow-300 py-2 ri-sparkling-line"></i>
                  <i class="hover:big-2 text-lg hover:text-blue-400 text-blue-700 py-2 ri-download-line"></i>
                  <i class=" hover:big-2 text-lg py-2 ri-more-fill"></i>
              </div>
              </div>

    </div>


        <div className=" w-full cursor-pointer mb-0  flex flex-col  items-center justify-center rounded-md" >
 


          <div className="w-3/4 py-2 h-1/2  bg-lgray border border-zinc-500 overflow-hidden  rounded-lg ">
                <div className="w-full relative h-fit aspect-[13/12] rounded-xl overflow-hidden">
                <img id="image" className="w-full h-full object-contain rounded-lg " src="./images/tokyo.jpg" alt="Lord Rama" />
                <div onClick={()=>setslide(false)} className={`  rounded-lg flex justify-center  ${slide?  "block": "hidden"}`}>
                <div className="w-11/12 backdrop-blur-sm   brightness-75 rounded-lg absolute bottom-0 h-40 "></div>
                <div className="w-11/12 absolute bottom-0 brightness-100 rounded-lg text-white text-md text-wrap  h-40 px-14 flex justify-center items-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed soluta accusantium provident.
                </div>
                
                </div>
                </div>
                <div className=" w-full px-2 py-2 mb-18  flex  justify-between items-center rounded-md">
              <div className="flex gap-3">
                  <span className="flex w-14 gap-1 justify-center items-center border-2 border-red-600 bg-red-400  rounded-md">50 <i class=" hover:big-2 ri-heart-3-fill text-red-600"></i></span>
                  <span className="flex gap-1 px-1 w-14 justify-center items-center border-2 border-white  rounded-md">12 <i class="hover:big-2 ri-message-2-fill"></i></span>
                  <button onClick={()=>{if (slide==false){ setslide(true)} else{setslide(false)}}} className="px-1 w-20 flex bg-violet-500 border-2 border-violet-500 justify-center py-1  active:scale-110 active:bg-violet-400 active:text-white rounded-md">Prompt</button>
              </div>
              <button className="  flex justify-center text-white bg-blue-500 px-3 py-2   rounded-md hover:big-1 ">Download</button>
            </div>
          </div>

          
      



        </div>


        
        <div className="fixed bottom-0 w-1/2   h-fit flex justify-center ">
          <div className="  gap-3 px-1 py-1  text-white  w-3/4 border-2 border-zinc-600 bg-lgray rounded-md flex justify-between items-center ">
              <input id="input" className=" rounded-lg outline-none focus:outline-none  bg-transparent  w-full px-2 py-3  text-white " type="text" placeholder="Enter your Prompt " />

              <button id="btn" className="w-8 mr-1  opacity-65 hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path></svg></button>
          </div>
        </div>

        </div>
     
    </>
}

export default Main;


