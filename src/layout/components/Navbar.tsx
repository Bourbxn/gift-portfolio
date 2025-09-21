import { useNavigate } from "react-router-dom";
import { avatar, arrowUpRight, hamburger } from "../../assets";
import { useState } from "react";
function Navbar() {
  let navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navList = [
    {
      title: "About",
      path: "about-me",
      isExternal: false,
    },
    {
      title: "Projects",
      path: "/projects",
      isExternal: false,
    },
    {
      title: "Resume",
      path: "https://drive.google.com/file/d/1ut_FUjTvFE3vYpydnwlJAlGIgTX4Bdr-/view?pli=1",
      isExternal: true,
      icon: arrowUpRight,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 md:top-[28px] w-screen z-50 bg-white md:bg-transparent md:py-0 py-[18px] md:shadow-none ${isNavOpen ? "" : "shadow-md"}`}
      >
        <div className="flex justify-between items-center px-[16px] md:px-[48px] font-bold  text-secondary text-normal ">
          <a
            className="md:bg-secondary/10 md:backdrop-blur-[40px] md:py-[12px] py-[0px] md:px-[24px] rounded-full flex gap-x-[11px] items-center cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={avatar}
              alt="avatar"
              className="md:w-[33px] md:h-[38px] w-[20px] h-[24px]"
            />
            <div className="md:text-normal text-normal-mb">Gift</div>
          </a>
          <div
            className="md:hidden block"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <img
              src={hamburger}
              alt="hamburger"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="md:flex hidden bg-secondary/10 backdrop-blur-[40px] py-[12px] px-[24px] rounded-full gap-x-[56px]">
            {navList.map(({ title, icon, path, isExternal }) => (
              <a
                className="flex gap-x-[4px] items-center cursor-pointer"
                key={title}
                onClick={() => {
                  if (isExternal) {
                    window.open(path, "_blank", "noopener,noreferrer");
                  } else {
                    navigate(path);
                  }
                }}
              >
                <div className="text-normal">{title}</div>
                {icon && (
                  <img
                    src={icon}
                    alt={title}
                    className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`fixed ${isNavOpen ? "top-[60px]" : "top-[-200px]"} transition-all ease-in  w-full left-0 bg-white shadow-md duration-300 z-10 rounded-b-[24px]`}
      >
        <ul className="pt-[12px] pb-[24px] text-center space-y-[16px]">
          {navList.map(({ title, icon, path, isExternal }) => (
            <a
              className="flex gap-x-[4px] items-center justify-center cursor-pointer"
              key={title}
              onClick={() => {
                if (isExternal) {
                  window.open(path, "_blank", "noopener,noreferrer");
                } else {
                  navigate(path);
                }
                setIsNavOpen(!isNavOpen);
              }}
            >
              <div className="text-normal font-bold text-secondary">
                {title}
              </div>
              {icon && (
                <img
                  src={icon}
                  alt={title}
                  className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                />
              )}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
