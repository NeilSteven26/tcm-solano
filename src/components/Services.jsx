import servicebanner from "../assets/servicebanner.png";
import tristanmechanic from "../assets/tristanmechanic.png";
import { motion } from "framer-motion";
const Services = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 flex flex-col  items-center justify-center">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-black text-neutral-800">SERVICES
            </motion.h1>
            <div className="relative">
                <img className="w-full relative" src={servicebanner} alt="" />
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 300 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-5 right-5 flex items-center">
                    <img src={tristanmechanic} alt="" className="w-[18rem] h-[10rem]" />
                    <span
                        className="mb-2 text-xl text-white font-bold text-center">
                        ERICK JOHN BANIAGA
                        <div className="text-sm">
                            BRANCH MECHANIC
                        </div>
                        <div className="text-sm">
                            CONTACT NUMBER: 09269212405
                        </div>
                    </span>
                </motion.div>
            </div>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-4xl text-neutral-800 indent-10 text-justify">At TRANSCYCLE Solano, we offer a comprehensive range of services to ensure your vehicle is in peak condition. Our Branch Mechanic  specializes in tune-ups, carburetor and fuel injection systems, as well as top, major, and side overhauling. We also provide services for oil seals, brake systems, steering systems, and cables. Whether it’s the drive chain, V-belt, front and rear wheels, or electrical wiring, we’ve got you covered. Additionally, we offer a variety of other services to meet your specific needs, ensuring optimal performance and safety for your vehicle.
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

export default Services