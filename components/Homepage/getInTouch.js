import react from 'react'
export default function GetInTouch() {
    return (
        <div className='bg-[#0a192f] pt-[150px] md:pt-[200px] pb-[100px]' id='contactMe'>
        <div className='container w-9/12 m-auto text-center'>
                <div className="text-[30px] md:text-[40px] tracking-[3px] font-bold text-[#ffffff] hover:text-green-300 flex justify-center">Get In Touch</div>
                <div className='text-center text-[#fff] tracking-[1px] leading-[28px] text-[16px] pt-[10px] py-[40px] w-[3/4]'>
                    Currently I am looking for new opportunities in Frontend development and Fullstack developer. Whether you have a any suitable fit or just want to say hi, I’ll try my best to get back to you!
                </div>
                <div className='pt-[30px] md:pt-[10px]'>
                    <button className='text-[#fff] border border-[#fff] hover:border-[#64ffda] hover:text-[#64ffda] px-[40px] py-[10px] rounded tracking-[2px] text-[12px] w-full md:w-1/3 lg:w-1/4' onClick={() => window.location = 'mailto:abujd2002@gmail.com'}>Say Hello !</button>
                </div>
            </div>
        </div>
    )
}