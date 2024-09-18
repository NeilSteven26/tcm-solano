import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import logo from "../assets/TCMLOGO.png";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="mx-2 w-auto h-20 rounded-2xl" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
            <a href="https://x.com/transcycleph" target="_blank" ><FaSquareXTwitter className="text-black" /></a>
            <a href="https://www.instagram.com/transcycleph/" target="_blank" ><FaInstagramSquare className="text-rose-300" /></a>
            <a href="https://www.facebook.com/TranscyclePH/" target="_blank" ><FaFacebookSquare className="text-blue-600" /></a>
            <a href="https://www.youtube.com/@Transcycle_PH" target="_blank" ><FaYoutube className="text-red-600" /></a>
        </div>
    </nav>;
};
export default Navbar;