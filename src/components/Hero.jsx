import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/TCMMEMBERS.jpg";
import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = ({ className }) => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl text-neutral-800 font-bold tracking-tight lg:mt-16 lg:text-8xl">Transcycle Solano Branch
                        </motion.h1>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl text-lg py-6 font-semibold tracking-tighter  text-neutral-800 text-justify">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            // initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            className="rounded-2xl w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
