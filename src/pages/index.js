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
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home(){
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark": ""}>
      <Head>
        <title>Mrityunjay Deepak Portfolio</title>
        <meta name="description"></meta>
        
        
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Mrityunjay Deepak</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li><a className=" bg-gradient-to-r dark:bg-gray-900 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="https://drive.google.com/file/d/1B06JhE3jHOJwMo6tKPGbu0LThKSaQVvD/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>


          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Mrityunjay Deepak</h2>
            <h3 className="text-2xl py-2 dark:text-white">Developer</h3>
            <p className="text-medium py-5 leading-8 dark:text-gray-200 text-gray-800">Unleash your projects' potential! Elevate with a freelancer ready to innovate. Join me for cutting-edge solutions. Let's amplify success together. Connect now and revolutionize your development journey</p>

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
            <h3 className="text-3xl py-1 text-center dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">since the beginning of my journey as a freelancing Developer i have
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
              
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including
              programming and teaching.
            </p>
          </div>

          <div className="flex justify-between py-1 px-3  ">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 justify-center mr-6">
             <div className=" mx-auto"><Image  src={code} width={100} height={100} /></div> 
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Languages I Code in</h4>
              <div className="text-gray-800">
              <p className=" font-bold">React js</p></div>
              <div className="py-1 flex justify-center align-middle"><p className="text-gray-800 py-1 font-bold">Next js</p></div>
              <div className="text-gray-800 py-1 flex justify-center align-middle font-bold">Express js</div>
              <div className="text-gray-800 py-1 flex justify-center align-middle font-bold">HTML, CSS, JAVASCRIPT</div>
              
              </div>
          

          <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
              Empowering businesses through strategic consulting services. Elevate your vision with tailored solutions, expert advice, and collaborative insights. Let's navigate your success together
              </p>
              <h4 className="py-4 text-teal-600">Consultations I have  provided to </h4>
              <p className="text-gray-800 py-1 font-bold">startups</p>
              
            </div>
            </div>
        </section>

        <section className="py-10   text-center ">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Welcome to my portfolio! As a dedicated web developer, I craft dynamic and user-centric websites. Explore the projects below to witness my skills in action. From sleek designs to robust functionality, each project showcases my commitment to excellence. Let's bring your digital vision to life together.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
            <div className="basis-1/3 flex-1">
             <Link href="https://article-ai.netlify.app/" ><Image
                className="rounded-lg object-cover"
                width={100}
                height={120}
                layout="responsive"
                src={web2}
                
              /></Link> 
            </div>
            <div className="basis-1/3 flex-1">
             <Link href="https://snake-game-mrityunjay.netlify.app/">
              <Image
                className="rounded-lg object-cover"
                width={60}
                height={60}
                layout="responsive"
                src={web1}
              
              />
             </Link> 
            </div>
          <div className="basis-1/3 flex-1">
                <Link href="https://github.com/Mrityunjaydeepak/Dukaan-The-Store"><Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web3}
              /></Link>
            </div>
            <div className="basis-1/3 flex-1">
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
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
