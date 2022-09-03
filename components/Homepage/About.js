import React from 'react'
export default function About() {

	return (
		<>
			<div className='bg-[#0a192f] pb-[90px] lg:pt-[115px] pb-[100px] md:pl-[10px]' id='about'>
				<div className='container w-9/12 m-auto'>
					<div className="text-[30px] md:text-[40px] tracking-[3px] font-bold text-[#ffffff] hover:text-green-300 flex justify-center">About Me</div>
					<div className='text-center text-[#fff] tracking-[1px] leading-[28px] text-[16px] pt-[10px] py-[40px] w-[3/4]'>Here you will find more information about me, what I do, and my current skills mostly in terms of <br /> programming and technology</div>
					<div className='lg:flex lg:flex-row mt-[35px]'>
						<div className='lg:basis-7/12'>
							<div className='text-[24px] text-[#ffffff] font-bold tracking-[2px] pb-[15px]'> Get to know me!</div>
							<p className="text-[#fff] tracking-[1px] leading-[28px] text-[16px]">
								I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

								I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

								I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
								</p>
							<a className='pt-[50px] hidden lg:block' href='#projects'>
								<button className='text-[#fff] border border-[#fff] hover:border-[#64ffda] hover:text-[#64ffda] px-[40px] py-[10px] rounded tracking-[2px] text-[12px] w-full md:w-1/3'>View Projects</button>
							</a>
						</div>
						<div className='lg:pl-[100px] mt-[30px] lg:mt-0'>
							<div className='text-[24px] text-[#ffffff] font-bold tracking-[2px] pb-[15px]'>My Skills</div>
							<div className='flex gap-[20px] pt-[20px] tracking-[1px] text-[16px] items-center'>
								<div className="text-center py-[10px] px-[20px] bg-[#808080] rounded">
									React
								</div>
								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									Javascript
								</div>

								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									Next
								</div>
							</div>
							<div className='flex gap-[20px] pt-[20px] tracking-[1px] text-[16px] items-center'>
								<div className="text-center py-[10px] px-[20px] bg-[#808080] rounded">
									HTML
								</div>
								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									CSS
								</div>

								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									SASS
								</div>
							</div>
							<div className='flex gap-[20px] pt-[20px] tracking-[1px] text-[16px] items-center'>
								<div className="text-center py-[10px] px-[20px] bg-[#808080] rounded">
									Github
								</div>
								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									Java
								</div>

								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									SQL basics
								</div>
							</div>
							<div className='flex gap-[20px] pt-[20px] tracking-[1px] text-[16px] items-center'>
								<div className="text-center py-[10px] px-[20px] bg-[#808080] rounded">
									C++
								</div>
								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									C
								</div>

								<div className="text-center py-[12px] px-[20px] bg-[#808080] rounded">
									RDBMS
								</div>
							</div>
						</div>
					</div>
					<div className='pt-[50px] block lg:hidden'>
							<a href="#projects" className='text-[#fff] border border-[#fff] hover:border-[#64ffda] hover:text-[#64ffda] px-[40px] py-[10px] rounded tracking-[2px] text-[12px] w-full'>View Projects</a>
					</div>
				</div>
			</div>

		</>
	)

}
