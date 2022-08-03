import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {

    const urlTwitter = "https://twitter.com/Phlemb2";
    const urlLinkedIn = "https://www.linkedin.com/in/%E2%80%98femi-badrudeen-5a2bba155/";
    const urlGithub = "https://github.com/phlemb93";

    return (
    <div className="footer">
         <p>find me on</p>

        <a href= {urlTwitter} target="_blank" className="icon twitter-icon">
           <FaTwitter />
        </a>
        <a href={ urlLinkedIn } target="_blank" className="icon linkedin-icon">
           <FaLinkedin />
         </a>
         <a href={ urlGithub } target="_blank" className="icon github-icon">
             <FaGithub />
         </a>  

    </div>
    )
}