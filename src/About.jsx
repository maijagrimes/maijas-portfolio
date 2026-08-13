import { useState } from 'react'

import './style.css'
import './about.css'

const photos = [
    { src: '/images/japanme.jpeg', alt: 'A photo of myself in Japan'},
    { src: '/images/jinx.jpeg', alt: 'A photo of my cat and I' },
]

const rotations = [-3, 2]

export default function About() {

    const [showAll, setShowAll] = useState(false)  
    const [order, setOrder] = useState(photos.map((_, i) => i))

    const aboutLong = (
        <div className='about-right'>
            <p>Hello world!</p>
            <p>My name is Maija -- pronounced "MY-ah," like Maya or Maia -- and it's spelled differently because it's Finnish! 🇫🇮</p>
            <p>I'm a recent computer science graduate with a love for all things creative, both online and offline. I spent most of my childhood convinced I'd grow up to be an artist, and I kinda feel like one when I spend a lot of time in a CSS file.</p>
            <p>I first touched a line of code as a sophomore in high school taking a Web Page Development class. I learned a tiny bit of HTML and CSS and had way too much fun making genuinely awful websites (you can still visit my first one <a href="https://maijas-first-website.neocities.org/" target='blank_'>here</a>).</p>
            <p>I liked it so much that I signed up for a college-level CS course and the teacher said I was one of the best students they'd had in the class (I swear!). Next thing I know, I've finished a bachelor's degree in computer science.</p>
            <p>Now I'm here and I still love coding and web development as much as when I first started, but with a whole lot more tools in my tool kit. Keep scrolling to check out some of my creations!</p>
        </div>
    )

    const aboutShort = (
        <>
        </>
    )

    const aboutContent = showAll ? aboutShort : aboutLong

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

    return (
        <>
            <section className='about' id='about'>
                <div className='about-top'>
                    <div className='about-left'>
                        <div className='about-photo-block'>
                            <div className='about-polaroid-stack'>
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
                        <h1>About Me</h1>
                    </div>
                    <div>
                        {aboutContent}
                    </div>
                </div>
            </section>
        </>
    );
}