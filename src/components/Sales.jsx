import tristanSE from "../assets/tristanSE.png";
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
            <motion.div className=""
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.5 }}>
                <img className="w-[20rem] md:w-[30rem] lg:w-[40rem]" src={tristanSE} alt="" />
                <div
                    className=" bottom-2 right-3 flex items-center justify-center">
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
                className="flex flex-col gap-5 my-10 font-bold text-sm md:text-xl lg:text-2xl text-neutral-800 indent-10 text-justify ">
                <span>
                    At TRANSCYCLE Solano, we offer a wide range of brand-new and repossessed motorcycles at affordable prices, giving you flexible options to suit your budget. Whether you prefer to pay in cash or choose an installment plan, we have financing options available to make owning your dream motorcycle easier and more convenient. Our commitment is to provide quality motorcycles along with exceptional customer service, ensuring a smooth and hassle-free buying experience.
                </span>
                <span>
                At TRANSCYCLE Solano, owning a brand-new or repossessed motorcycle is made simple and affordable through our flexible installment plans. With just one valid ID and proof of income, you can start the journey towards owning your dream motorcycle. Our easy process includes three simple steps: **INQUIRE**, **APPLY**, and **RELEASE**. First, inquire about the available models and financing options. Then, submit your application with minimal requirements. Once approved, your motorcycle will be ready for release, bringing you one step closer to the road. At TRANSCYCLE Solano, we make motorcycle ownership fast, easy, and accessible for everyone.
                </span>
            </motion.h1>
        </div>
    );
};

export default Sales