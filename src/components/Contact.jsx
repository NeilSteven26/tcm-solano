import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center font-bold text-neutral-900 text-4xl">Get in Touch</motion.h1>
            <div className="text-center tracking-tighter font-bold my-4 text-neutral-800">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }} c
                    className="">{CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="">{CONTACT.phoneNo2}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="">{CONTACT.phoneNo}
                </motion.p>

                <a href="#" className="border-b">
                    {CONTACT.email}</a>
                <div className="m-8 flex items-center justify-center gap-8 text-4xl">
                    <a href="https://x.com/transcycleph" target="_blank" ><FaSquareXTwitter className="text-black" /></a>
                    <a href="https://www.instagram.com/transcycleph/" target="_blank" ><FaInstagramSquare className="text-[#FF69B4]" /></a>
                    <a href="https://www.facebook.com/TranscyclePH/" target="_blank" ><FaFacebookSquare className="text-blue-800" /></a>
                    <a href="https://www.youtube.com/@Transcycle_PH" target="_blank" ><FaYoutube className="text-red-600" /></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;