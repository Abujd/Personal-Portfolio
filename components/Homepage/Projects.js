import react from 'react'
import pData from './projectData'
import parse from 'html-react-parser'

export default function Projects() {
    return (
        <div className='bg-[#0a192f] pt-[100px]' id='projects'>
            <div className='container w-9/12 m-auto text-center'>
                <div className="text-[30px] md:text-[40px] tracking-[3px] font-bold text-[#ffffff] hover:text-green-300 flex justify-center">Projects</div>
                <div className='text-center text-[#fff] tracking-[1px] leading-[28px] text-[16px] pt-[10px] py-[40px] w-[3/4]'>
                    Here you will find some of the personal that I created with each project containing its own case study
                 </div>
                {pData.map((item) => (
                    <div key={item.id}>
                        <div className='md:flex py-[40px] md:py-[80px] border-b border-[#fff] decoration-dotted'>
                            <div className='basis-1/12'>
                            </div>
                            <div className='basis-4/12'>
                                <div className='border-4'>
                                    <img src={item.projectImage} />
                                </div>
                            </div>
                            <div className='basis-1/12'>
                            </div>
                            <div className='basis-6/12 text-left mt-[25px] md:mt-0'>
                                <div className='text-[24px] text-[#fff] tracking-[1px] leading-[25px] font-bold'>{item.project}</div>
                                <div className='text-[#fff] tracking-[1px] leading-[28px] text-[16px] flex justify-left py-[20px]'>
                                    {parse(item.responsibilites)}
                                </div>
                                <div className='text-[20px] text-[#fff] tracking-[1px] leading-[20px] font-bold'>Technologies Used</div>
                                <div className='text-[#fff] tracking-[1px] leading-[22px] text-[14px] pt-[10px]'>{item.techstack}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}