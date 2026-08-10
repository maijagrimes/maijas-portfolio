import { useState } from 'react'
import Dropdown from './Dropdown'

import './style.css'
import './education.css'

const photos = [
    { src: '/images/diploma.jpeg', alt: 'Photo of myself at graduation'},
    { src: '/images/cu.jpeg', alt: 'Photo of campus' },
    { src: '/images/momandi.jpeg', alt: 'Photo of my mom and I at graduation' },
]

const rotations = [-3, 4, -1]

export default function Education() {

    // order[0] is the photo currently on top
    const [order, setOrder] = useState(photos.map((_, i) => i))

    function sendToBack(index) {
        setOrder((prev) => {
            const clicked = prev[index]
            const rest = prev.filter((i) => i !== clicked)
            return [...rest, clicked]
        })
    }

    function bringToFront(index) {
        setOrder((prev) => {
            const clicked = prev[index]
            const rest = prev.filter((i) => i !== clicked)
            return [clicked, ...rest]
        })
    }

    const courses = [ 
        {   color: 'rgb(216, 149, 184)', 
            name: 'Software Development', 
            note: 'Students learn front-end design and construction using HTML & CSS, back-end database design and construction, and full-stack integration.', 
            code: 'CSCI 3308',
            relevant: true
        },
        {   
            color: 'rgb(133, 156, 213)', 
            name: 'Operating Systems', 
            note: 'Analyzes the software that extends hardware to provide a computing environment, including the role of linkers, file systems, resource sharing, security and networking.', 
            code: 'CSCI 3753', 
            relevant: true
        },
        {   color: 'rgb(209, 193, 34)', 
            name: 'Linux System Admin.', 
            note: 'Includes hardware and software installation, storage management, configuration of user accounts and system services, development of automation and monitoring tools, and the provisioning of common network services.', 
            code: 'CSCI 4113',
            relevant: false
        },
        {   color: 'rgb(255, 114, 106)', 
            name: 'Intro to A.I.', 
            note: 'Surveys artificial intelligence techniques of search, knowledge representation and reasoning, probabilistic inference, machine learning, and natural language.', 
            code: 'CSCI 3202',
            relevant: false
        },
        { 
            color: 'rgb(245, 142, 74)', 
            name: 'Princip. of Prog. Languages', 
            note: 'Studies principles governing the design and analysis of programming languages and their underlying execution models.', 
            code: 'CSCI 3155',
            relevant: false
        },
        {   
            color: 'rgb(223, 192, 237)', 
            name: 'Algorithms', 
            note: 'Covers the fundamentals of algorithms and various algorithmic strategies, including time and space complexity, sorting algorithms, recurrence relations, divide and conquer algorithms, greedy algorithms, dynamic programming, linear programming, graph algorithms, problems in P and NP, and approximation algorithms.', 
            code: 'CSCI 3104',
            relevant: false 
        },
        {   
            color: 'rgb(168, 203, 117)', 
            name: 'Intro to Data Science', 
            note: 'Covers algorithms of cleaning and munging data, probability theory and common distributions, statistical simulation, drawing inferences from data, and basic statistical modeling.', 
            code: 'CSCI 3022',
            relevant: false 
        },
        { 
            color: 'rgb(143, 176, 233)', 
            name: 'Computer Systems', 
            note: 'Covers how programs are represented and executed by modern computers, including low-level machine representations of programs and data, an understanding of how computer components and the memory hierarchy influence performance.', 
            code: 'CSCI 2400',
            relevant: false 
        },
        { 
            color: 'rgb(137, 227, 211)', 
            name: 'Database Systems', 
            note: 'Introduces the fundamental concepts of database requirements analysis, database design, and database implementation with emphasis on the relational model and the SQL programming language.', 
            code: 'CSCI 3287', 
            relevant: true
        },
        { 
            color: 'rgb(241, 237, 157)', 
            name: 'Fundamentals of HCI', 
            note: 'Introduces the practice and research of human-computer interaction, including its history, theories, the techniques of user-centered design, and the development of interactive technologies.', 
            code: 'CSCI 3002',
            relevant: false 
        },
        { 
            color: 'rgb(238, 134, 189)', 
            name: 'Discrete Structures', 
            note: 'Topics include set theory, Boolean algebra, functions and relations, graphs, propositional and predicate calculus, proofs, mathematical induction, recurrence relations, combinatorics, discrete probability.', 
            code: 'CSCI 2824',
            relevant: false 
        },
        { 
            color: 'rgb(122, 191, 164)', 
            name: 'Data Structures', 
            note: 'Studies data abstractions (e.g., stacks, queues, lists, trees, graphs, heaps, hash tables, priority queues) and their representation techniques (e.g., linking, arrays).', 
            code: 'CSCI 2270',
            relevant: false 
        },
    ]

    const relevantCourses = courses.filter(course => course.relevant)
    

    function CourseList() {
        const [showAll, setShowAll] = useState(false)      
        const coursesToShow = showAll ? courses : relevantCourses  
        
        return (
            <div className='college-stat'>
                <h3>Relevant Courses</h3>
                <ul>
                    {coursesToShow.map((c) => (
                        <li key={c.code} className="course-row">
                            <span className="code" style={{ backgroundColor: c.color }}>
                                {c.code}
                            </span>
                            <Dropdown label={c.name}>{c.note}</Dropdown>
                        </li>
                    ))}
                </ul>
                <button className='course-toggle' onClick={() => setShowAll(p => !p)}>
                    {showAll ? 'See less' : 'See more'}
                </button>
            </div>
        )
    }

    return (
        <>
            <section className='education' id='education'>
                <h1>Education</h1>
                <div className='college'>
                    <div className='college-left'>                        
                        <h2>University of Colorado <span>Boulder</span></h2>
                        <div className='polaroid-stack'>
                            {order.map((photoIndex, stackPosition) => (
                                <img
                                    key={photoIndex}
                                    className='polaroid'
                                    src={photos[photoIndex].src}
                                    alt={photos[photoIndex].alt}
                                    onClick={() =>
                                        stackPosition === 0
                                            ? sendToBack(stackPosition)
                                            : bringToFront(stackPosition)
                                    }
                                    style={{
                                        zIndex: order.length - stackPosition,
                                        transform: `translate(${stackPosition * 10}px, ${stackPosition * 10}px) rotate(${rotations[photoIndex % rotations.length]}deg)`,
                                        cursor: 'pointer',
                                    }}
                                />
                            ))}
                        </div>
                    </div>                    
                    <div className='college-right'>
                        <div className='college-stat'>
                            <h3>Bachelor's Degree <span className='cs'> Computer Science</span></h3>
                            <h3>Minor <span className='comm'> Communication</span></h3>    
                            <p>Aug. 2022 - Aug. 2026</p>                        
                        </div>
                        <CourseList/>
                    </div>
                </div>
                <div className='hs'>
                    <div className='hs-left'>

                    </div>
                    <div className='hs-right'>

                    </div>
                </div>
            </section>
        </>
    );
}