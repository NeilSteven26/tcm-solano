import logo from "../assets/TCMLOGO.png";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="mx-2 w-auto h-16 lg:h-20" />
        </div>

    </nav>;
};
export default Navbar;