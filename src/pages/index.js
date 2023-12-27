import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs, TbBrandNodejs  } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png"
import consulting from "../../public/consulting.png"
import code from "../../public/code.png";
// import web1 from "../../public/web1.png";
// import web2 from "../../public/web2.png";
// import web3 from "../../public/web3.png";
// import web4 from "../../public/web4.png";
// import web5 from "../../public/web5.png";
// import web6 from "../../public/web6.png";
import { useState } from "react";
import Design from "../components/Design"
import SlidingCard from '../components/SlidingCard';
import md from "../../public/MD.png"
import ProjectsSection from "@/components/ProjectsSection";
import { TiStarFullOutline } from "react-icons/ti";
import { CiBookmarkCheck } from "react-icons/ci";


export default function Home(){
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="bg-cover">
    <div className={darkMode? "dark": ""}>
    
      
      <Head>
        <title>Mrityunjay Deepak Portfolio</title>
        <meta name="description"></meta>
        
        
      </Head>
    
     
      <main className="bg-white px-10 dark:bg-gray-600 md:px-20 lg:px-40 scroll-smooth">
      
         <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
           <span> <Image src={md} className="size-20 -rotate-12"></Image> </span>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="hover:animate-pulse cursor-pointer text-2xl" />
              </li>
              <li><a className=" bg-teal-500 dark:bg-gray-900 text-white px-4 py-2 hover:bg-cyan-800 rounded-md ml-8"href="https://drive.google.com/file/d/1B06JhE3jHOJwMo6tKPGbu0LThKSaQVvD/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>


          <div className="text-center p-3">
            <h1 className="text-8xl  text-teal-600 font-medium dark:text-teal-400">Mrityunjay Deepak</h1>
            <h2 className="text-5xl py-5 dark:text-white">Developer</h2>
            <h3 className="text-2xl py-4 leading-8 dark:text-gray-200 text-gray-800">Your web pal for success. Ideas to shine, guide with care. On-time launch, no fuss. Let's craft—your vision, my skill!</h3>

          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-400">
            <Link href="https://twitter.com/IChiefAlpha"><AiFillTwitterCircle /></Link>
            <Link href="https://www.linkedin.com/in/mrityunjay-deepak/"><AiFillLinkedin /></Link>
            <Link href="https://github.com/Mrityunjaydeepak"><AiFillGithub /></Link>
          
          
          </div>

          <div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
          </div>
          </div>
        </section>



        <section>
          <div>
            <h2 className="text-5xl p-6 text-center dark:text-white">As a Freelancing Developer I am Here to</h2>
            < h3 className="text-2xl py-4 leading-8 dark:text-gray-200 text-gray-800">Embark on a Seamless Journey: I meticulously guide you through the entire web development voyage, sculpting your ideas into a digital masterpiece. Your online presence isn't merely a project—it's a collaborative partnership where I'm dedicated to realizing your digital aspirations. Let's turn your vision into a compelling reality, together.
              
            </h3>

           
          </div>
          
          <div className="flex justify-between py-1 px-3  ">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 justify-center mr-6">
             
              
              <h3 className="py-2 text-2xl font-medium">
              Ready for business success? Let's discuss your project!
              </h3>
              <h4 className="py-4 text-xl text- text-teal-600">Languages I Code in</h4>
              <div className="text-gray-800 grid md:grid-cols-2 gap-2s md:gap-10">
              <p className=" font-bold  justify-items-center">HTML | CSS
              <span className="flex justify-between px-9"><TiStarFullOutline className="size-10 text-orange-300 " /> <TiStarFullOutline className="size-10 text-orange-300 " /> <TiStarFullOutline className="size-10 text-orange-300 " /><TiStarFullOutline className="size-10 text-orange-300" /><TiStarFullOutline className="size-10 text-orange-300" /> </span></p>
              <p className=" font-bold">React js
              <span className="flex justify-between px-9"><TiStarFullOutline className="size-10 text-orange-300 " /><TiStarFullOutline className="size-10 text-orange-300 " /> <TiStarFullOutline className="size-10 text-orange-300 " /><TiStarFullOutline className="size-10 text-orange-300 " /><TiStarFullOutline className="size-10 text-orange-300" /> </span></p>
              <p className=" font-bold">Next js
              <span className="flex justify-between px-9"><TiStarFullOutline className="size-10 text-orange-300 " /> <TiStarFullOutline className="size-10 text-orange-300 " /><TiStarFullOutline className="size-10 text-orange-300" /><TiStarFullOutline className="size-10 text-orange-300" /> </span></p>
              <p className=" font-bold">Express js
              <span className="flex justify-between px-9"><TiStarFullOutline className="size-10 text-orange-300" /> <TiStarFullOutline className="size-10 text-orange-300 " /><TiStarFullOutline className="size-10 text-orange-300" /><TiStarFullOutline className="size-10 text-orange-300" /> </span></p>
              
              </div>
              
              
              </div>
          

          <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              
              <h3 className=" font-medium pt-8 pb-2 text-2xl ">Transform your business with strategic consulting</h3>
              <p className="py-2">
              
              </p>
              <h4 className=" text-xl text-teal-600">Consultations I provide </h4>
              <p className="text-gray-800  flex justify-center font-bold text-center"> <CiBookmarkCheck className="size-10" />Website Assessment and Recommendations</p>
              <p className="text-gray-800 flex justify-center font-bold"> <CiBookmarkCheck className="size-10" />Responsive Design Consultation</p>
              <p className="text-gray-800 flex justify-center font-bold"> <CiBookmarkCheck className="size-10" />Technology Stack Guidance</p>
              <p className="text-gray-800 flex justify-center font-bold"> <CiBookmarkCheck className="size-10"/>SEO Analysis</p>
              
              
            </div>
            </div>
        </section>

        <section className="py-10   text-center ">
          <div>
            <ProjectsSection />
            {/* <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
            Welcome to my portfolio! As a dedicated web developer, I craft dynamic and user-centric websites. Explore the projects below to witness my skills in action. From sleek designs to robust functionality, each project showcases my commitment to excellence. Let's bring your digital vision to life together.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/3 flex-1 transition duration-300 ease-in-out hover:scale-110 blur-sm hover:blur-none">
             <Link href="https://article-ai.netlify.app/" ><Image
                className="rounded-lg object-cover"
                width={100}
                height={120}
                layout="responsive"
                src={web2}
                
              /></Link> 
            </div>
            <div className="basis-1/3 flex-1 transition duration-300 ease-in-out hover:scale-110 blur-sm hover:blur-none">
             <Link href="https://snake-game-mrityunjay.netlify.app/">
              <Image
                className="rounded-lg object-cover"
                width={60}
                height={60}
                layout="responsive"
                // src={web1}
              
              />
             </Link> 
            </div>
          <div className="basis-1/3 flex-1 transition duration-300 ease-in-out hover:scale-110 blur-sm hover:blur-none">
                <Link href="https://github.com/Mrityunjaydeepak/Dukaan-The-Store"><Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web3}
              /></Link>
            </div>
            <div className="basis-1/3 flex-1 transition duration-300 ease-in-out hover:scale-110 blur-sm hover:blur-none">
              <Link href="https://classy-haupia-805276.netlify.app/"> <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web4}
              /></Link>
          </div>
          
             
            </div>
            <div className="basis-1/3 flex-1">
             
            </div>
            <div className="basis-1/3 flex-1">
            
            </div> */}
          </div>
        </section>
      </main>
      <div className="absolute"> <Design /></div>
    </div>
    </div>
  );
}