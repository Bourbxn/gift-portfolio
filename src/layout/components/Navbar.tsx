import { useNavigate } from "react-router-dom";
import { avatar, arrowUpRight } from "../../assets";
function Navbar() {
  let navigate = useNavigate();
  const navList = [
    {
      title: "About",
      path: "",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Resume",
      path: "",
      icon: arrowUpRight,
    },
  ];

  return (
    <nav className="fixed top-[28px] w-screen z-10">
      <div className="flex justify-between items-center px-[48px] font-bold  text-secondary text-normal">
        <a
          className="bg-secondary/10 backdrop-blur-[40px] py-[12px] px-[24px] rounded-full flex gap-x-[11px] items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={avatar} alt="avatar" className="w-[33px] h-[38px]" />
          <div className="text-normal">Gift</div>
        </a>
        <div className="bg-secondary/10 backdrop-blur-[40px] py-[12px] px-[24px] rounded-full flex gap-x-[56px]">
          {navList.map(({ title, icon, path }) => (
            <a
              className="flex gap-x-[4px] items-center cursor-pointer"
              key={title}
              onClick={() => {
                navigate(path);
              }}
            >
              <div className="text-normal">{title}</div>
              {icon && (
                <img src={icon} alt={title} className="w-[24px] h-[24px]" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
