import corevalues from "../assets/corevalues.png";
import { motion } from "framer-motion";

const CoreValues = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 flex flex-col  items-center justify-center">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 lg:my-20 text-center text-2xl lg:text-4xl text-neutral-800">Our 8 Core Values
            </motion.h1>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}>
                <img className="w-auto mb-5" src={corevalues} alt="" />
            </motion.h1>




            {/* <div className="">
                {EXPERIENCES.map((Experience, index) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: - 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{Experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {Experience.role} - {" "}
                                <span className="text-sm text-purple-100 ">
                                    {Experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400"> {Experience.description}</p>
                            {Experience.technologies.map((tech, index) => (
                                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" key={index}>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div> */}

        </div>
    );
};

export default CoreValues