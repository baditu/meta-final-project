import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold md:text-2xl pb-4">Social Media</h1>
      <section className="flex felx-row space-x-10">
        <FaSquareXTwitter size={32} />
        <FaSquareFacebook size={32} />
        <FaSquareInstagram size={32} />
      </section>
    </div>
  );
};

export default FooterSocialMedia;
