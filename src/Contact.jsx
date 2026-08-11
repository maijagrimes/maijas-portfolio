import './style.css'
import './contact.css'
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <h1>Contact Me</h1>
            <div className='contact-left'>
                <h2>Send me an Email!</h2>
                <ContactForm/>
            </div>
            <div className='contact-right'>
                <div className='contact-logos'>
                    <a href="https://www.linkedin.com/in/maijagrimes/" target="_blank">
                        <img className='contact-logo' src="/logos/InBug-Black.png" alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/maijagrimes" target="_blank">
                        <img className='contact-logo' src="/logos/GitHub_Invertocat_Black.png" alt="GitHub Logo" />
                    </a>
                    <a href="https://www.instagram.com/maijagrimes/" target="_blank">
                        <img className='contact-logo' src="/logos/Instagram_Glyph_Black.png" alt="Instagram Logo" />
                    </a>
                </div>
                <h2>Or find me online!</h2>
            </div>
        </section>
    );
}