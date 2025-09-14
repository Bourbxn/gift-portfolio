import { behance, github, linkedin, mail } from "../../assets";

function Footer() {
  const contacts = [
    {
      name: "linkedin",
      icon: linkedin,
    },
    {
      name: "behance",
      icon: behance,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "mail",
      icon: mail,
    },
  ];
  return (
    <div className="px-[108px] pt-[84px] pb-[108px] ">
      <div className="flex justify-between items-center border-t-secondary border-t-[3px]">
        <h3 className="text-h3 text-secondary font-bold pt-[48px]">
          Siriyakorn Achasewin
        </h3>
        <div className="flex gap-[24px] pt-[48px]">
          {contacts.map(({ name, icon }) => (
            <button key={name}>
              <img src={icon} alt={name} className="w-[40px] h-[40px]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
