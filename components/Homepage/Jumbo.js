
import React from 'react'
import styles from './About.module.css'

export default function Jumbo() {
  const handleClick = () =>{
    const mailto = 'abujd2002@gmail.com';
    window.location.href = mailto;
    e.preventDefault();
  }
  return (
    <>
      <div className='pt-[100px] pb-[115px] bg-[#0a192f] md:pl-[70px]' id='landing'>
        <div className='fixed left-[40px] bottom-0 hidden md:block'>
          <div className='py-[15px]'>
            <a href='https://github.com/Abujd' className={`${styles.socialIcon} cursor-pointer`}>
              <svg width="31" height="31" fill="none" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0C5.598 0 0 5.597 0 12.5c0 5.523 3.581 10.208 8.549 11.861.624.116.826-.271.826-.6v-2.328c-3.477.757-4.201-1.475-4.201-1.475-.569-1.444-1.389-1.829-1.389-1.829-1.134-.776.087-.76.087-.76 1.255.088 1.915 1.29 1.915 1.29 1.115 1.91 2.924 1.358 3.638 1.038.111-.807.435-1.36.794-1.671-2.776-.318-5.695-1.39-5.695-6.178 0-1.366.489-2.48 1.287-3.355-.129-.316-.557-1.588.122-3.309 0 0 1.05-.335 3.439 1.282a11.988 11.988 0 0 1 3.128-.421c1.063.005 2.132.144 3.131.42 2.387-1.616 3.435-1.28 3.435-1.28.68 1.721.252 2.993.123 3.308.802.875 1.286 1.99 1.286 3.355 0 4.801-2.924 5.858-5.707 6.168.448.387.857 1.148.857 2.314v3.43c0 .333.2.723.834.6C21.423 22.705 25 18.02 25 12.5 25 5.597 19.403 0 12.5 0Z" fill="#fff" /></svg>
            </a>
          </div>
          <div className='py-[15px]'>
            <a href='https://linkedin.com/in/dnyaneshwari-abuj-3b7b10194' className={`py-[15px] ${styles.socialIcon} cursor-pointer`}>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="31" height="31"><path d="M18.794.396H2.43A1.818 1.818 0 0 0 .612 2.214v16.363c0 1.005.813 1.818 1.818 1.818h16.364a1.818 1.818 0 0 0 1.818-1.818V2.214A1.818 1.818 0 0 0 18.794.396ZM6.934 16.759H4.252V8.13h2.682v8.63ZM5.565 6.896a1.564 1.564 0 1 1 0-3.127 1.564 1.564 0 0 1 0 3.127ZM16.98 16.76H14.3v-4.196c0-1.001-.018-2.288-1.394-2.288-1.395 0-1.61 1.09-1.61 2.215v4.27h-2.68V8.13h2.573v1.18h.036c.359-.679 1.233-1.394 2.538-1.394 2.715 0 3.217 1.787 3.217 4.11v4.733Z" fill="#fff"></path></svg>
            </a>
          </div>
          <div className='py-[15px]'>
            <a href='https://twitter.com/Dnyaneshwari_A?t=fTsDC2k5DRxP7Obd9wVYkg&s=09' className={`py-[15px] ${styles.socialIcon} cursor-pointer`}>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21" width="31" height="31"><path d="M24.612 2.763a10.08 10.08 0 0 1-2.9.795 5.058 5.058 0 0 0 2.22-2.793c-.976.578-2.057.998-3.208 1.225a5.05 5.05 0 0 0-8.603 4.604A14.334 14.334 0 0 1 1.713 1.319a5.037 5.037 0 0 0-.682 2.54c0 1.751.89 3.297 2.245 4.202A5.039 5.039 0 0 1 .99 7.428v.064a5.05 5.05 0 0 0 4.05 4.95 5.055 5.055 0 0 1-2.28.088 5.055 5.055 0 0 0 4.717 3.507 10.127 10.127 0 0 1-6.271 2.162c-.407 0-.81-.024-1.205-.072a14.294 14.294 0 0 0 7.74 2.268c9.288 0 14.365-7.693 14.365-14.366 0-.218-.005-.436-.014-.653a10.276 10.276 0 0 0 2.52-2.613Z" fill="#fff"></path></svg>
            </a>
          </div>
          <div className='py-[15px]'>
            <a href='https://instagram.com/dnyaneshwari_abuj?igshid=YmMyMTA2M2Y=' className={`py-[15px] ${styles.socialIcon} cursor-pointer`}>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="31" height="31"><path d="M6.546.396A5.84 5.84 0 0 0 .715 6.23v8.334a5.84 5.84 0 0 0 5.835 5.831h8.333a5.84 5.84 0 0 0 5.832-5.835V6.227A5.84 5.84 0 0 0 14.88.396H6.546Zm10.002 3.333a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667Zm-5.833 1.667c2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5 0-2.758 2.242-5 5-5Zm0 1.666a3.333 3.333 0 1 0 0 6.667 3.333 3.333 0 0 0 0-6.667Z" fill="#fff"></path></svg>
            </a>
          </div>
          <div className={`${styles.verticalLine}`}></div>
        </div>
        <div className='container w-9/12 m-auto'>
          <div className="text-[#ffffff] text-[16px] tracking-[2px] mb-[5px]">
            Hi, my name is
          </div>

          <div className="text-[#ccd6f6] tracking-[2px] text-[40px] md:text-[60px] leading-tight font-bold">
            Dnyaneshwari Abuj.
          </div>

          <div className="text-[#8892b0] tracking-[2px] text-[40px] md:text-[60px] leading-tight font-bold">
            I build things for the web
          </div>

          <p className="text-[#fff] tracking-[1px] leading-[28px] text-[16px] mt-[30px] w-11/12">
            I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at PLG works.
          </p>
          <div className='pt-[50px]'>
            <button className='text-[#fff] border border-[#fff] hover:border-[#64ffda] px-[40px] py-[10px] rounded tracking-[2px] text-[12px] w-full md:w-1/3 lg:w-1/4 hover:text-[#64ffda]' onClick={() => window.location = 'mailto:abujd2002@gmail.com'}>Contact Me</button>
          </div>
        </div>
        <div className='fixed right-[-60px] bottom-0 hidden md:block'>
          <div className={`tracking-[4px] text-[#fff] text-[16px] leading-[22px] cursor-pointer hover:text-[#64ffda] ${styles.rotateText}`} onClick={() => window.location = 'mailto:abujd2002@gmail.com'}>abujd2002@gmail.com</div>
          <div className={`${styles.verticalEmailLine}`}></div>
        </div>
      </div>
    </>
  )
}
