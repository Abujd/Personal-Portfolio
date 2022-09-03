
import React from 'react'
import styles  from '../Homepage/About.module.css'

export default function Navbar() {
  return (
  <>
   
<nav className="bg-[#0a192f] px-2 sm:px-4 py-[20px] sticky top-0">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#landing" className="flex items-center">
      <div>
        <img src='/profile.jpeg' className={`${styles.profileImage}`}/>
      </div>
      <div className="self-center text-xl font-semibold whitespace-nowrap text-white tracking-[1px] pl-[10px]">Dnyaneshwari Abuj</div>
    </a>
    <div className="hidden w-full md:block md:w-auto">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium flex items-center">
        <li>
          <a href="#about" className="block py-2 pr-4 pl-3 text-white text-[14px] tracking-[2px] hover:text-green-300 md:p-0">About</a>
        </li>
        <li>
          <a href="#experience" className="block py-2 pr-4 pl-3 text-white text-[14px] tracking-[2px] hover:text-green-300 md:p-0">Experience</a>
        </li>
        <li>
          <a href="#projects" className="block py-2 pr-4 pl-3 text-white text-[14px] tracking-[2px] hover:text-green-300 md:p-0">Projects</a>
        </li>
        <li>
          <a href="#contactMe" className="block py-2 pr-4 pl-3 text-white text-[14px] tracking-[2px] hover:text-green-300 md:p-0">Contact</a>
        </li>
        <li>
          <a href = '/resume.pdf' target = "_blank" className="text-[#fff] border border-[#fff] hover:border-[#64ffda] px-[40px] py-[10px] rounded tracking-[2px] text-[12px] w-full md:w-1/3 lg:w-1/4 hover:text-[#64ffda]">RESUME</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}
