import { motion } from "framer-motion";
import { VISION_TEXT } from "../constants";
import { MISSION_TEXT } from "../constants";
const Visionmission = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 lg:my-20 text-center text-2xl lg:text-4xl text-neutral-800">SIY CHA GROUP OF COMPANIES
            </motion.h1>
            <div className="">
                {VISION_TEXT.map((Visionmission, index) => (
                    <div className="mb-5 flex flex-wrap lg:justify-center" key={index}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: - 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-lg lg:text-xl font-bold text-neutral-800">{Visionmission.label}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            {/* <h6 className="mb-2 font-semibold">
                                {Visionmission.role} - {" "}
                            </h6> */}
                            <p className="mb-4 text-neutral-800 text-md lg:text-lg"> {Visionmission.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="">
                {MISSION_TEXT.map((Visionmission, index) => (
                    <div className="mb-3 flex flex-wrap lg:justify-center" key={index}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: - 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-lg lg:text-xl  font-bold text-neutral-800">{Visionmission.label}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-lg text-neutral-800">
                                {Visionmission.role}  {" "}
                            </h6>
                            <p className="mb-4 text-neutral-800 text-md lg:text-lg"> {Visionmission.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Visionmission