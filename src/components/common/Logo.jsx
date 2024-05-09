import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
    return(
        <>
            <div className="logo flex justify-start align-middle gap-2 text-red-700">
                <i className="text-3xl"><FontAwesomeIcon icon={faMusic} /></i>
                <p className="text-xl mt-[5px]">JioSavan</p>
            </div>
        </>
    );
};

export default Logo;