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
    <div className="px-[108px] pt-[48px] pb-[108px] flex justify-between items-center">
      <h3 className="text-h3 text-secondary font-bold">Siriyakorn Achasewin</h3>
      <div className="flex gap-[24px]">
        {contacts.map(({ name, icon }) => (
          <button key={name}>
            <img src={icon} alt={name} className="w-[48px] h-[48px]" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Footer;
