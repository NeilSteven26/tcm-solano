import { KAWASAKIMC } from "../constants/index4";
import { motion } from "framer-motion";
const KawasakiMotors = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-black text-neutral-800 ">KAWASAKI
            </motion.h1>
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 justify-center gap-6">
                {KAWASAKIMC.map((KawasakiMotors, index) => (
                    <div key={index} className="w-40 lg:w-60 mb-3 lg:mb-8">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ delay: index * 0.2, duration: 1 }}
                            className="">
                            <div className="w-40 h-40">
                                <img
                                    src={KawasakiMotors.mcImage}
                                    alt={KawasakiMotors.mcName}
                                    className="mb-6 rounded object-scale-down w-40 h-40"
                                />
                            </div>

                            <span className="mb-2 text-md lg:text-lg font-bold text-neutral-800 block whitespace-break-spaces w-40">{KawasakiMotors.mcName}</span>
                            <div className="flex flex-col text-neutral-800 text-[.8rem] md:text-[1rem] lg:text-[1.2rem]">
                                <span>CASH - {KawasakiMotors.cash}</span>
                                <span>DOWNPAYMENT - {KawasakiMotors.Downpayment}</span>
                                <span>M.A for 3 Years - {KawasakiMotors.threeYears}</span>
                                <span>M.A for 2 Years - {KawasakiMotors.twoYears}</span>
                                <span>M.A for 1 Year - {KawasakiMotors.oneYear}</span>
                                <span>Rebate in all terms- {KawasakiMotors.rebates}</span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div >

    );

};

export default KawasakiMotors