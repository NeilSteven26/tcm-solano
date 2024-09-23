import honda from "../assets/honda.png";
import yamaha from "../assets/yamaha.png";
import suzuki from "../assets/suzuki.png";
import kawasaki from "../assets/kawasaki.png";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});
const MCBrand = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 lg:my-20 text-center text-2xl lg:text-4xl text-neutral-800">DEALER OF MULTIBRAND MOTORCYCLES
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl w-32 h-32 flex items-center justify-center border-4 border-white p-4">
                        <img className="w-24" src={honda} alt="" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl  w-32 h-32 flex items-center justify-center border-4 border-white p-4">
                      <img className="w-24" src={yamaha} alt="" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl w-32 h-32 flex items-center justify-center border-4 border-white p-4">
                     <img className="w-24" src={suzuki} alt="" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl w-32 h-32 flex items-center justify-center border-4 border-white p-4">
                   <img className="w-24" src={kawasaki} alt="" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default MCBrand;