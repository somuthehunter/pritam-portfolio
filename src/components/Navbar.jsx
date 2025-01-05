import logo from "../assets/pritam-logo.png"
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { color, motion } from "framer-motion";

const NavBar = () => {

    

    return (
        <nav className=" mb-15 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="h-10 w-auto" style={{height:"120px",}}/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <motion.a 
                    href="https://www.linkedin.com/in/pritam-dutta-27bb12268/ "
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover="hover"
                >
                    <FaLinkedin size={40} />
                </motion.a>
                 <motion.a 
                    href="https://github.com/somuthehunter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover="hover"
                >
                    <FaGithub size={40} />
                </motion.a>
                 <motion.a 
                    href="https://www.facebook.com/profile.php?id=100027328621647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover="hover"
                >
                    <FaFacebook size={40} />
                </motion.a>
                <motion.a 
                    href="https://www.instagram.com/pritam_dutta53/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover="hover"
                >
                    <FaInstagram size={40} />
                </motion.a>
            </div>
        </nav>
    );
};

export default NavBar;
