import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Logo from "./common/Logo";


const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="grid grid-cols-10">
          <div className="col-span-1"></div>
          <div className="col-span-8 flex justify-between">
            <header className="py-[10px]"><Logo/></header>
            <div className="search content-center mt-4 text-white">
              <span>© Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by Harshad</span>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </>
  );
};
export default Footer;
