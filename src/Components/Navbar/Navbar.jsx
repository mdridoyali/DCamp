import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 md:w-10/12  mx-auto border-b-2">
      <nav className="flex justify-between items-center  ">
        <img className="w-24 md:w-36 rounded-full" src={`https://i.ibb.co/yy008fH/logo.jpg`}/>
        <ul className="flex gap-3 md:gap-5">
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl ">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
