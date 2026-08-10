import './style.css'
import './contents.css'
import { useEffect } from 'react';

/* Code for sticky table of contents from:
https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/ */

export default function Contents() {

useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.dataset.ratio = entry.intersectionRatio;
        });

        let maxRatio = 0;
        let activeId = null;
        sections.forEach((section) => {
            const ratio = parseFloat(section.dataset.ratio) || 0;
            if (ratio > maxRatio) {
                maxRatio = ratio;
                activeId = section.id;
            }
        });

        document.querySelectorAll('.section-nav li').forEach((li) => li.classList.remove('active'));
        if (activeId) {
            const link = document.querySelector(`.section-nav a[href="#${activeId}"]`);
            if (link) link.parentElement.classList.add('active');
        }
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }); // 0, 0.05, 0.1 ... 1

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
}, []);

    return (
        <>
            <nav className="section-nav">
                <ol>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#credits">Credits</a></li>
                </ol>
            </nav>
        </>
    );
}