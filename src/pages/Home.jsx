import { useEffect, useState } from "react";
import AlbumBox from "../components/common/AlbumBox";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faRectangleList } from '@fortawesome/free-solid-svg-icons';



const HomePage = () => {
  const [homePageData, sethomePageData] = useState(null)

  useEffect(() => {
    axios.get("https://saavn.me/modules?language=hindi,english").then((response) => {
      sethomePageData(response.data);
    });
  }, [])

  if (homePageData != null) {
  return (
    <>
      <section className="h-100">
      <div className="grid grid-cols-10">
        <div className="col-span-1"></div>
        <div className="col-span-8">
          <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faRectangleList} className="pr-[5px]" />Playlists</h1>
          <div className="grid grid-cols-4 gap-5 my-8">
          {
            homePageData.data.playlists.map((item, uniqueKey)=>
              <Link to={`/playlist/${item.id}`} key={uniqueKey}>
                <AlbumBox imgURL={item.image[2].link} title={item.title} followers={item.subtitle} />
              </Link>
              )
          }
          </div>

          <h1 className="mt-7 text-2xl"><FontAwesomeIcon icon={faCompactDisc} className="pr-[5px]" />Albums</h1>
          <div className="grid grid-cols-5 gap-5 my-8">
          {
            homePageData.data.albums.map((item, uniqueKey)=>{
              if(item.type==='album'){
                return (
                  <Link to={`/album/${item.id}`} key={uniqueKey}>
                    <AlbumBox imgURL={item.image[2].link} title={item.name} followers={item.year} />
                  </Link>
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


export default HomePage;
