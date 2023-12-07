import { useNavigate } from "react-router-dom"

export const HomePage = () => {

    const [ songs, SetSong ] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8088/songs")
            .then((response) => response.json())
            .then((SongArray) => {
                setSong(SongArray);
            })
    })
    return (
        <>
        <div className="song_container">


        <div> My objectively correct top 100 songs of ALL TIME, there is no argument here</div>
        
        <div className="song_list" >
            {songs.map((song) => (
                <>
                <p className="song_title"> {song.title}</p>
                <p className="song_artist"> {song.artist}</p>
                <p className="song_link"> {song.link}</p>
                <p className="song_image"> {song.image}</p>
                </>
            ))}
        </div>

        </div>
        </>
    )

}