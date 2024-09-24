import tristantcm from "../assets/tristantcm.jpg";
import { motion } from "framer-motion";
const Sales = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 flex flex-col  items-center justify-center">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-5 md:my-10 lg:my-20 text-center text-2xl lg:text-4xl text-neutral-800 font-black">SALES
                
            </motion.h1>
            <motion.div className="relative"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.5 }}>
                <img className="w-full" src={tristantcm} alt="" />
                <div
                    className="absolute bottom-2 right-3 flex items-center">
                    <div className="flex flex-col items-center lg:gap-3 mb-0 md:mb-1 lg:mb-2 text-[.9rem] md:text-[1rem] lg:text-[3rem] text-neutral-950 font-bold  leading-none">
                        <span >ARJAY P. SERIDON</span>
                        <span>SALES EXECUTIVE</span>
                        <span>09061971811</span>
                    </div>
                </div>
            </motion.div>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-md lg:text-2xl text-neutral-800 indent-10 text-justify ">At TRANSCYCLE Solano, we offer a wide selection of both brand-new and repossessed motorcycles at highly affordable prices. Whether you're looking for the latest models or reliable pre-owned options, our team is committed to helping you find the perfect motorcycle that fits your budget and needs. With flexible financing options and quality customer service, TRANSCYCLE Solano ensures that owning your dream motorcycle is within reach for everyone.
            </motion.h1>


            {/* <div className="">
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: - 100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <img src={tristanmechanic} alt="" className="w-[20rem] h-[10rem]" />
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <span className="mb-2 font-bold flex flex-col text-neutral-900">
                            ERICK JOHN BANIAGA
                            <span className="text-sm">
                                BRANCH MECHANIC
                            </span>
                            <span className="text-sm">
                                CONTACT NUMBER: 09269212405
                            </span>
                        </span>
                    </motion.div>
                </div>
            </div> */}



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

export default Sales