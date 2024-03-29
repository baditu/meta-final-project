import FooterNavigation from "./FooterNavigation";
import FooterContact from "./FooterContact";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <article className="bg-background-color-2 flex flex-col md:flex-row w-full p-4 justify-center md:justify-evenly">
      <img className="hidden md:block" src="/images/LittleLemon.JPG" alt="footer-logo" />
      <FooterNavigation />
      <FooterContact />
      <FooterSocialMedia />
    </article>
  );
};

export default Footer;
