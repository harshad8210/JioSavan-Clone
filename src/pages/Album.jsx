import { useEffect, useState } from "react";
import AlbumBox from "../components/common/AlbumBox";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';


const AlbumPage = () => {
    const { id } = useParams();
    const [albumPageData, setAlbumPageData] = useState(null)
    
    useEffect(() => {
        axios.get(`https://saavn.me/albums?id=${id}`).then((response) => {
            setAlbumPageData(response.data);
        });
    }, [id])
    if (albumPageData != null) {
        const headingText = albumPageData.data.name.replace(/&quot;/g, '')

    return (
        <>
        <section className="h-screen">
        <div className="grid grid-cols-10">
            <div className="col-span-1"></div>
            <div className="col-span-8">
            <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faCompactDisc} className="pr-[5px]" />{headingText}</h1>

            <div className="grid grid-cols-5 gap-5 my-8">
            {
                albumPageData.data.songs.map((item, uniqueKey)=>
                        <Link to={`/playsong/${item.id}`} key={uniqueKey}>
                            <AlbumBox imgURL={item.image[2].link} title={item.name} followers={item.year} />
                        </Link>
                )
            }
            </div>
            </div>
            <div className="col-span-1"></div>
        </div>
        </section>
        </>
    );
    }
};


export default AlbumPage;
