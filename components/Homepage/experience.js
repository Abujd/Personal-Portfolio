import react from 'react'
import {useState} from 'react'
import styles from './About.module.css'

const expMap = {
    'plg': 'plg',
    'moxie' :'moxie',
    'moxieInternship':'moxieInternship'
}

export default function Experience() {
    const [toggleState, setToggleState ] = useState(expMap.plg);

    const handleClick = (state) =>{
        setToggleState(state);
    }

    return (
        <div className='bg-[#0a192f]' id='experience'>
            <div className='container w-9/12 m-auto text-[#fff] md:p-[40px]'>
                <div className="text-[30px] md:text-[40px] tracking-[3px] font-bold text-[#ffffff] hover:text-green-300 flex justify-center">Work Experience</div>
                <div className='text-center text-[#fff] tracking-[1px] leading-[28px] text-[16px] pt-[10px] py-[40px] w-[3/4]'>Here you will find more information about my work experience, projects and technology.</div>
                <div className='md:grid md:grid-cols-2 md:h-[608px]'>
                    <div className='text-[30px] text-[#fff] pl-[30px] tracking-[1.5px] leading-[40px] hidden md:block'>
                        <div className={`${toggleState === expMap.plg ? 'text-green-300 underline' : ''} font-bold  py-[30px]`} onClick={() => handleClick(expMap.plg)}>PLG Works</div>
                        <div className={`${toggleState === expMap.moxie ? 'text-green-300 underline' : ''} font-bold  py-[30px]`} onClick={() => handleClick(expMap.moxie)}>Moxie People Inc.</div>
                        <div className={`${toggleState === expMap.moxieInternship ? 'text-green-300 underline' : ''} font-bold  py-[30px]`} onClick={() => handleClick(expMap.moxieInternship)}>Moxie People Inc - Intern</div>
                    </div>

                    <div className='text-[18px] text-[#fff] tracking-[1px] leading-[22px] flex block md:hidden'>
                        <div className={`${toggleState === expMap.plg ? 'text-green-300 underline' : 'pb-[3px]'} font-bold py-[5px]`} onClick={() => handleClick(expMap.plg)}>PLG Works</div>
                        <div className={`${toggleState === expMap.moxie ? 'text-green-300 underline' : 'pb-[3px]'} font-bold py-[5px] pl-[20px]`} onClick={() => handleClick(expMap.moxie)}>Moxie People Inc.</div>
                    </div>
                    <div className='text-[20px] text-[#fff] tracking-[1px] leading-[22px] flex block md:hidden'>
                        <div className={`${toggleState === expMap.moxieInternship ? 'text-green-300 underline' : 'pb-[3px]'} font-bold py-[5px]`} onClick={() => handleClick(expMap.moxieInternship)}>Moxie People Inc - Intern</div>
                    </div>

                    <div className={`${toggleState === expMap.plg ? styles.showDetails : styles.hideDetails} py-[30px]`}>
                        <div className='tracking-[1px] leading-[22px] text-[20px] font-bold'>Software Development Engineer (SDE)</div>
                        <div className='tracking-[1px] leading-[22px] text-[14px] pt-[20px] md:pt-[5px]'>April 2022 - Present</div>
                        <div className={`pt-[10px]`}>
                            <ul className='list-disc'>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Introduced workout history and progress pages to make attendee to track and share their workout history and progress on various social media platforms. This helped to increase the customer engagement by 20 %.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    We made enhancement in attendee profile to make it more attractive, added last workout history and weekly, Monthly and all time workouts progress.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Implemented the filters functionality, which helped attendees to find the most relevant Live stream, On-demand workouts and instructors.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Introduced the challenge details page and leaderboard feature, Attendees can complete with each others and review their progress. It helps attendees to be more consistent.
                                </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Redesign workouts page and instructor profile page UI to make it more user friendly.
                                </li>
                            </ul>
                        </div>
                        <div className='text-[18px]  tracking-[1px]  text-[#fff] font-bold pt-[10px]'>Technology stack used </div>
                        <div className='tracking-[1px] leading-[22px] text-[16px]'>Next.js, React.js, HTML, CSS, Telwind</div>
                    </div>
                    <div className={`${toggleState === expMap.moxie ? styles.showDetails : styles.hideDetails} py-[30px]`}>
                        <div className='tracking-[1px] leading-[22px] text-[20px] font-bold'>Software Development Engineer (SDE)</div>
                        <div className='tracking-[1px] leading-[22px] text-[14px] pt-[20px] md:pt-[5px]'>August 2021 - April 2022</div>
                        <div className='pt-[10px]'>
                            <ul className='list-disc'>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Introduced workout history and progress pages to make attendee to track and share their workout history and progress on various social media platforms. This helped to increase the customer engagement by 20 %.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    We made enhancement in attendee profile to make it more attractive, added last workout history and weekly, Monthly and all time workouts progress.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Implemented the filters functionality, which helped attendees to find the most relevant Live stream, On-demand workouts and instructors.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Introduced the challenge details page and leaderboard feature, Attendees can complete with each others and review their progress. It helps attendees to be more consistent.
                                </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Redesign workouts page and instructor profile page UI to make it more user friendly.
                                </li>
                            </ul>
                        </div>
                        <div className='text-[18px]  tracking-[1px]  text-[#fff] font-bold pt-[10px]'>Technology stack used </div>
                        <div className='tracking-[1px] leading-[22px] text-[16px]'>Javascript, HTML, CSS, Bootstrap.</div>
                    </div>
                    <div className={`${toggleState === expMap.moxieInternship ? styles.showDetails : styles.hideDetails} py-[30px]`}>
                        <div className='tracking-[1px] leading-[22px] text-[20px] font-bold'>Software Development Engineer (SDE) - Intern</div>
                        <div className='tracking-[1px] leading-[22px] text-[14px] pt-[20px] md:pt-[5px]'>May 2021 - August 2021</div>
                        <div className='pt-[10px]'>
                            <ul className='list-disc'>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                Developed Moxie pass feature, which provides attendee to pay for workouts using the tickets. Increasing the monthly revenue by 20%.                               
                                </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    We made enhancement in attendee profile to make it more attractive, added last workout history and weekly, Monthly and all time workouts progress.
                               </li>
                                <li className='py-[10px] tracking-[1px] leading-[22px] text-[14px]'>
                                    Redesigned home page UI and implemented the carousel functionality on workout list to make it more engaging for the users.                               
                                </li>
                            </ul>
                        </div>
                        <div className='text-[18px]  tracking-[1px]  text-[#fff] font-bold pt-[10px]'>Technology stack used </div>
                        <div className='tracking-[1px] leading-[22px] text-[16px]'>Javascript, HTML, CSS, Bootstrap.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
