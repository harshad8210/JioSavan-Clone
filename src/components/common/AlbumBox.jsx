const AlbumBox = ({imgURL, title, followers}) => {
    return(
        <>
        <div className="album-box text-center text-sm hover:shadow-lg hover:border-2 hover:border-red-700 hover:rounded">
            <div className="image">
            <img className="rounded" alt="album-img" src={imgURL}></img>
            </div>
            <div className="album-content m-2">
                <p className="font-semibold truncate">{title}</p>
                <p className="truncate">{followers}</p>
            </div>
        </div>
        </>
    );
};

export default AlbumBox;