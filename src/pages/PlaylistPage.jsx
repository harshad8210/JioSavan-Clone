import { useEffect, useState } from "react";
import AlbumBox from "../components/common/AlbumBox";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';


const PlaylistPage = () => {
    const { id } = useParams();
    const [playlistPageData, setPlaylistPageData] = useState(null)
    
    useEffect(() => {
        axios.get(`https://saavn.me/playlists?id=${id}`).then((response) => {
            setPlaylistPageData(response.data);
        });
    }, [id])
    if (playlistPageData != null) {
        // const headingText = albumPageData.data.name.replace(/&quot;/g, '\"')
        const headingText = playlistPageData.data.name

    return (
        <>
        <section className="h-100">
        <div className="grid grid-cols-10">
            <div className="col-span-1"></div>
            <div className="col-span-8">
            <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faCompactDisc} className="pr-[5px]" />{headingText}</h1>

            <div className="grid grid-cols-5 gap-5 my-8">
            {
                playlistPageData.data.songs.map((item, uniqueKey)=>
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


export default PlaylistPage;
