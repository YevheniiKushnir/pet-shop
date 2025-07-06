import Title from "../../ui/Title/Title";
import iconInstagram from "../../assets/ic-instagram.svg";
import iconWhatsapp from "../../assets/ic-whatsapp.svg";
import IconLink from "../../ui/IconLink/IconLink";

const Footer = () => {
  return (
    <footer className="mb-10 md:mb-20">
      <Title className="mb-[var(--m-bottom-title-xs)] md:mb-[var(--m-bottom-title-md)]">
        Contact
      </Title>
      <div className="grid md:gap-8 gap-4 grid-cols-1 md:grid-cols-[60%_1fr] w-full">
        <div className="bg-secondary-grey p-8 flex rounded-xl flex-col gap-4">
          <span className="text-main-grey md:text-xl">Phone</span>
          <a
            href="tel:+49 30 915-88492"
            className="lg:text-[40px] text-xl font-semibold"
          >
            +49 30 915-88492
          </a>
        </div>
        <div className="bg-secondary-grey p-8 flex rounded-xl flex-col gap-4">
          <span className="text-main-grey md:text-xl">Socials</span>
          <div className="flex gap-4">
            <IconLink
              to="https://www.instagram.com/"
              icon={iconInstagram}
              size={44}
              alt={"Instagram"}
              external={true}
              className={
                "hover:opacity-80 hover:scale-110 active:opacity-80 active:scale-110 w-8 md:w-11"
              }
            />
            <IconLink
              to="https://www.whatsapp.com/"
              icon={iconWhatsapp}
              size={44}
              alt={"Whatsapp"}
              external={true}
              className={
                "hover:opacity-80 hover:scale-110 active:opacity-80 active:scale-110 w-8 md:w-11"
              }
            />
          </div>
        </div>
        <div className="bg-secondary-grey p-8 flex rounded-xl flex-col gap-4">
          <span className="text-main-grey md:text-xl">Address</span>
          <a
            href="https://www.google.com/maps/place/Wallstra%C3%9Fe+9-13,+10179+Berlin/@52.5111439,13.4044786,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e27db4748a5:0x1d538c01013c2c7!8m2!3d52.5111439!4d13.4044786!16s%2Fg%2F11xgjs4yc5?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            className="lg:text-[40px] text-xl font-semibold"
            target="_blank"
          >
            Wallstraẞe 9-13, 10179 Berlin, Deutschland
          </a>
        </div>
        <div className="bg-secondary-grey p-8 flex rounded-xl flex-col gap-4">
          <span className="text-main-grey md:text-xl">Working Hours</span>
          <span className="lg:text-[40px] text-xl font-semibold">
            24 hours a day
          </span>
        </div>

        <div className="w-full md:h-[350px] rounded-xl overflow-hidden shadow-lg col-span-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.231805581288!2d13.404478599999997!3d52.5111439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27db4748a5%3A0x1d538c01013c2c7!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sru!2sde!4v1751489819639!5m2!1sru!2sde"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-xl overflow-hidden shadow-lg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
