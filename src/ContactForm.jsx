import { useState } from 'react';

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "38d4737c-89e3-428c-814d-6263fe458dc3");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <form onSubmit={onSubmit}>
        <p>Your Name:</p>
        <input type="text" name="name" required/>
        <p>Your Email Address:</p>
        <input type="email" name="email" required/>
        <p>Your Message:</p>
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
        <p>{result}</p>
        </form>
    );
}