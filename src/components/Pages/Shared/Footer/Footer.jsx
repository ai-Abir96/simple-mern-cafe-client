import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="grid grid-cols-2 gap-0 text-white">
          <div className=" w-full mx-auto py-24 text-center bg-[#1F2937] ">
            <span className=" font-medium text-[32px]">
              Contact Us
            </span>
            <p className="font-medium text-[20px]">
              123 ABS Street, Uni 21, Bangladesh
              <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
          <div className="w-full text-center py-24 h-full bg-[#111827]">
            <span className="font-medium text-[32px]">Follow Us</span>
            <div className="grid grid-flow-col justify-center font-medium text-[35px] gap-4 ">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
        <div className="footer-center font-medium text-[20px] p-4 bg-[#151515] text-white">
          <p>
            Copyright © {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
