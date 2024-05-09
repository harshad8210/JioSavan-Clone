const SongBox = ({imgURL, title, followers, downloadURL, artist}) => {
    return(
        <>
        <div className="album-box text-center text-sm">
            <div className="image">
            <img className="rounded" alt="album-img" src={imgURL}></img>
            </div>
            <div className="album-content m-2">
                <p className="font-semibold truncate mb-2">{title}</p>
                <p className="truncate  mb-2">{artist}- {followers}</p>
                <audio controls className="m-auto">  
                    <source src={`${downloadURL}`} type="audio/mpeg"/>  
                        Your browser does not support the html audio tag.  
                </audio>
            </div>
        </div>
        </>
    );
};

export default SongBox;