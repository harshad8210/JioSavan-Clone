import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import SongBox from "../components/common/SongBox";


const PlaySongPage = () => {
    const { id } = useParams();
    const [playSongPageData, setPlaySongPageData] = useState(null)
    
    useEffect(() => {
        axios.get(`https://saavn.me/songs?id=${id}`).then((response) => {
            setPlaySongPageData(response.data);
        });
    }, [id])
    if (playSongPageData != null) {
        // const headingText = albumPageData.data.name.replace(/&quot;/g, '\"')
        const headingText = playSongPageData.data[0].album.name
        const songData = playSongPageData.data[0]

    return (
        <>
        <section className="h-screen">
        <div className="grid grid-cols-5">
            <div className="col-span-2"></div>
            <div className="col-span-1">
            <h1 className="mt-7 text-2xl text-center mb-5"><FontAwesomeIcon icon={faHeadset} className="pr-[5px]" />{headingText}</h1>
            {
                <SongBox imgURL={songData.image[2].link} title={songData.name} followers={songData.year} downloadURL={songData.downloadUrl[4].link} artist={songData.primaryArtists}/>
            }
            </div>
            <div className="col-span-2"></div>
        </div>
        </section>
        </>
    );
    }
};


export default PlaySongPage;
