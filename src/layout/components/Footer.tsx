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
    <div className="md:px-[108px] px-[16px] md:pt-[84px] pt-0 md:pb-[108px] pb-[24px]">
      <div className="flex justify-between items-center border-t-secondary border-t-[3px]">
        <h3 className="md:text-h3 text-extra-small text-secondary font-bold md:pt-[48px] pt-[8px]">
          Siriyakorn Achasewin
        </h3>
        <div className="flex md:gap-[24px] gap-[16px] md:pt-[48px] pt-[8px]">
          {contacts.map(({ name, icon }) => (
            <button key={name}>
              <img
                src={icon}
                alt={name}
                className="md:w-[40px] md:h-[40px] w-[24px] h-[24px]"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
