import { useEffect, useState } from "react";
import AlbumBox from "../components/common/AlbumBox";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faRectangleList } from '@fortawesome/free-solid-svg-icons';



const SearchPage = () => {
  const { query } = useParams();
  const [searchPageData, setSearchPageData] = useState(null)

  useEffect(() => {
    axios.get(`https://saavn.me/search/all?query=${query}`).then((response) => {
        setSearchPageData(response.data);
    });
  }, [])

  if (searchPageData != null) {
  return (
    <>
      <section className="h-100">
      <div className="grid grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-8">

          <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faCompactDisc} className="pr-[5px]" />Songs</h1>
          <div className="grid grid-cols-5 gap-5 my-8">
          {
            searchPageData.data.songs.results.map((item, uniqueKey)=>{
              if(item.type==='song'){
                return (
                  <Link to={`/playsong/${item.id}`} key={uniqueKey}>
                    <AlbumBox imgURL={item.image[2].link} title={item.name} followers={item.year} />
                  </Link>
                  )}
                })
          }
          </div>

          <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faRectangleList} className="pr-[5px]" />Playlists</h1>
          <div className="grid grid-cols-4 gap-5 my-8">
          {
            searchPageData.data.playlists.results.map((item, uniqueKey)=>{
              if(item.type==='playlist'){
                return(
                  <Link to={`/playlist/${item.id}`} key={uniqueKey}>
                    <AlbumBox imgURL={item.image[2].link} title={item.title} followers={item.subtitle} />
                  </Link>
                )}
              })
          }
          </div>

          <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faCompactDisc} className="pr-[5px]" />Albums</h1>
          <div className="grid grid-cols-5 gap-5 my-8">
          {
            searchPageData.data.albums.results.map((item, uniqueKey)=>{
              if(item.type==='album'){
                return (
                  <>
                  <Link to={`/album/${item.id}`} key={uniqueKey}>
                    <AlbumBox imgURL={item.image[2].link} title={item.name} followers={item.year} />
                  </Link>
                  </>
                  )}
                })
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


export default SearchPage;
