import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export const HomePage = () => {

    const [ songs, setSong ] = useState([]);
    const [ bosses, setBoss ] = useState([]);

    const navigate = useNavigate()

    //Song fetch
    useEffect(() => {
        fetch("http://localhost:8088/songs")
            .then((response) => response.json())
            .then((SongArray) => {
                setSong(SongArray);
            })
    }, []);
    //Boss fetch
    useEffect(() => {
        fetch("http://localhost:8088/bosses")
            .then((response) => response.json())
            .then((BossArray) => {
                setBoss(BossArray);
            })
    }, []);
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

        <div className="boss_container">

        <h1>ARE YOU WILLING TO CHALLENGE THE BOSSES?????</h1>
                <div className="boss_preview">
                    {bosses.map((boss) => (
                        <>
                        <div className="boss_title"> {boss.title}</div>
                        <div className="boss_image"> {boss.image}</div>

                        
                        </>
                    ))}
                </div>
        </div>
        </div>
        </>
    )

}