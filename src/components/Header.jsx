import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast, faCompactDisc, faRectangleList, faHouseChimneyWindow, faHeadset, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from "./common/Logo";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";


const Header = () => {
  const searchRef = useRef(null)
  const [query, setQuery] = useState(null)
  const formSubmit = (e) => {
    e.preventDefault();
    const data = searchRef.current.value
    setQuery(data)
  }
  return (
    <>
      <section className="bg-black">
        <div className="grid grid-cols-10">
          <div className="col-span-1"></div>
          <div className="col-span-8 flex justify-between">
            <header className="py-[10px]"><Logo/></header>
            <div className="search content-center mt-4">
              <input ref={searchRef} onChange = {(e)=>formSubmit(e)} placeholder="Search Here..." className="border-l-2 border-red-700 px-3 bg-black text-white focus:outline-none"></input>
              <Link to={`/search/${query}`} className="text-red-700 text-lg"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
            </div>
            <ul className="flex flex-wrap justify-start content-center gap-8 text-white text-2xl">
              <li>
                <Link to="/"><button><FontAwesomeIcon icon={faHouseChimneyWindow} /></button></Link>
              </li>
              <li>
                <Link to="/"><button><FontAwesomeIcon icon={faHeadset} /></button></Link>
              </li>
              <li>
                <Link to="/"><button><FontAwesomeIcon icon={faPodcast} /></button></Link>
              </li>
              <li>
                <Link to="/"><button><FontAwesomeIcon icon={faRectangleList} /></button></Link>
              </li>
              <li>
                <Link to="/"><button><FontAwesomeIcon icon={faCompactDisc} /></button></Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </>
  );
};
export default Header;
