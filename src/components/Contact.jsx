import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import nsac from "../assets/nsac.png";
const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center font-bold text-neutral-900 text-4xl">Get in Touch</motion.h1>
            <div className="flex flex-col  justify-center items-center text-center tracking-tighter font-bold my-4 text-neutral-800 text-lg">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="">{CONTACT.address}
                </motion.p>

                <a className="hover:underline cursor-pointer hover:text-white" href="https://maps.app.goo.gl/JmU1cUxNzXj5PF7h7" target="_blank" ><motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2">
                    <FaLocationDot className="" />{CONTACT.location}
                </motion.p></a>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2">
                    <IoMdCall className="text-xl"/>
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2">
                    <IoMdCall className="text-xl"/>
                    {CONTACT.phoneNo2}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2">
                    <IoMdCall className="text-xl"/>
                    {CONTACT.phoneNo3}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2">
                    <IoMdCall className="text-xl"/>
                    {CONTACT.phoneNo4}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center gap-2">
                    <IoMdCall className="text-xl"/>
                    {CONTACT.phoneNo5}
                </motion.p>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }} className="m-8 flex items-center justify-center gap-8 text-5xl">
                    <a href="https://x.com/transcycleph" target="_blank" ><FaSquareXTwitter className="text-black" /></a>
                    <a href="https://www.instagram.com/transcycleph/" target="_blank" ><FaInstagramSquare className="text-[#FF69B4]" /></a>
                    <a href="https://www.facebook.com/TranscyclePH/" target="_blank" ><FaFacebookSquare className="text-blue-800" /></a>
                    <a href="https://www.youtube.com/@Transcycle_PH" target="_blank" ><FaYoutube className="text-red-600" /></a>
                </motion.div>
            </div>
            <div className="flex items-center justify-center gap-2">
                <img src={nsac} alt="" className="w-20"/>
                <span className="text-neutral-800 text-md font-bold">All Rights Reserved ©</span>
            </div>
        </div>
    );
};

export default Contact;