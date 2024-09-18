import aboutImg from "../assets/TCM.jpg"
import { ABOUT_TEXT } from "../constants"
import { ABOUT_TEXT1 } from "../constants"
import { ABOUT_TEXT2 } from "../constants"
import { ABOUT_TEXT3 } from "../constants"
import { ABOUT_TEXT4 } from "../constants"
import { ABOUT_TEXT5 } from "../constants"
import { motion } from "framer-motion"
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl  text-neutral-800">
                About
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">

                    <div className="flex items-center justify-center">
                        <img src={aboutImg} alt="about" className="rounded-2xl" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex flex-col indent-10 gap-2 my-2 maxw-xl text-lg  text-neutral-800 text-justify">
                        <span>{ABOUT_TEXT}</span>
                        <span>{ABOUT_TEXT1}</span>
                        <span>{ABOUT_TEXT2}</span>
                        <span>{ABOUT_TEXT3}</span>
                        <span>{ABOUT_TEXT4}</span>
                        <span>{ABOUT_TEXT5}</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )

}

export default About