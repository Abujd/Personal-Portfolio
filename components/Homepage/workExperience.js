import react from 'react'
import Slider from "react-slick"
import parse from 'html-react-parser';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import cData from './companiesData'

export default function WorkExperience() {
	const settings ={
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		appendDots: dots => (
			<div
			  style={{
				padding: "10px"
			  }}
			>
			  <ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		  ),
		  customPaging: i => (
			<div
			  style={{
				width: "30px",
				color: "#FFFFFF",
				borderBottom:"2px solid #FFFFFF"
			  }}
			>
			  {i + 1}
			</div>
		  )
	};
	return (<>
		<div className='pb-[100px] bg-[#0a192f] pl-[90px] justify-center'>
			<div className='text-[30px] tracking-[2px] font-bold text-[#ffffff] hover:text-green-300 flex items-center justify-center pb-[40px]'>Where I have Worked </div>
			<Slider {...settings}>
				{cData.map((item) => (
					<div key={item.id}>
						<div className='container'>
							<div className='px-[100px] w-6/12 border border-[#ffffff] w-full md:w-8/12 m-auto py-[30px]'>
								<div className='text-[20px] text-[#FFFFFF] font-bold'>{item.position}</div>
								<div className='flex text-[#FFFFFF] text-[16px]'>
									<div className='text-[#FFFFFF]'>{item.companyName}</div>
									<div className='ml-auto italic'>
										{item.startDate}-{item.endDate}
									</div>
								</div>
								<div className='text-[#FFFFFF] text-[14px]'>{item.project}</div>

								<div className='text-[12px] text-[#FFFFFF] pt-[10px]'>{parse(item.responsibilites)}</div>
								<div className='text-[14px] text-[#FFFFFF] pt-[20px]'> Technologies Used :  {item.techstack}</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	</>)
}