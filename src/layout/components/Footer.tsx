import { behance, github, linkedin, mail } from "../../assets";

function Footer() {
  const contacts = [
    {
      name: "linkedin",
      icon: linkedin,
      url: "https://www.linkedin.com/in/siriyakorn-achasewin-258322291/",
    },
    {
      name: "behance",
      icon: behance,
      url: "https://www.behance.net/0109c737",
    },
    {
      name: "github",
      icon: github,
      url: "https://github.com/ggiftsyk",
    },
    {
      name: "mail",
      icon: mail,
      url: "mailto:siriyakorn.achasewin@gmail.com",
    },
  ];
  return (
    <div className="md:px-[108px] px-[16px] md:pt-[84px] pt-0 md:pb-[108px] pb-[24px]">
      <div className="flex justify-between items-center border-t-secondary border-t-[3px]">
        <h3 className="md:text-h3 text-extra-small text-secondary font-bold md:pt-[48px] pt-[8px]">
          Siriyakorn Achasewin
        </h3>
        <div className="flex md:gap-[24px] gap-[16px] md:pt-[48px] pt-[8px]">
          {contacts.map(({ name, icon, url }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={icon}
                alt={name}
                className="md:w-[40px] md:h-[40px] w-[24px] h-[24px]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
