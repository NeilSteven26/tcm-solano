import { mcParts } from "../constants/index5parts";
import { motion } from "framer-motion";
const Spareparts = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 lg:my-20 text-center text-2xl lg:text-4xl text-neutral-800 font-black">PARTS & ACCESSORIES
            </motion.h1>
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-center gap-6">
                {mcParts.map((Spareparts, index) => (
                    <div key={index} className="w-40 lg:w-64 mb-8">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ delay: index * 0.2, duration: 0.3 }}
                            className="">
                            <div className="w-40 h-40">
                                <img
                                    src={Spareparts.partsImage}
                                    alt={Spareparts.partsName}
                                    className="rounded object-scale-down w-48 h-48"
                                />
                            </div>
                            <div className="mt-8 flex flex-col text-neutral-800 items-center justify-center w-40">
                                <span className="mb-2 text-md lg:text-lg font-bold text-neutral-800 text-center">{Spareparts.partsName}</span>
                                <span>{Spareparts.description}</span>
                                <span className="">{Spareparts.price}</span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div >

    );

};

export default Spareparts