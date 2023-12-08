import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Prompt from "../../popups/WelcomePop.js";
import Popup from 'react-popup';


export const HomePage = () => {

    const [ songs, setSong ] = useState([]);
    const [ bosses, setBoss ] = useState([]);
    const [ expanded, setExpanded ] = useState([]);

    const navigate = useNavigate()

    //Song fetch
    useEffect(() => {
        fetch("http://localhost:8088/songs")
            .then((response) => response.json())
            .then((SongArray) => {
                setSong(SongArray);
            })
    }, []);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    

    const wizardSpeech = () => {
        Popup.plugins().prompt('', 'Ah, greetings, brave traveler! I sense a flicker of magic in your presence, or perhaps it is just the overwhelming stench of your mortal life. What brings you to this ancient realm today?', function (value) {
            // Handle any actions you need when the popup is closed
        });
    }
   
    return (
        <>
            <div className="song_container">
                <div>The Wizard's Top Wizillion's beats and boops</div>
                <button onClick={wizardSpeech}>Open Welcome Popup</button>
                <button onClick={toggleExpanded}>
                    {expanded ? "Hide Song List" : "Show Song List"}
                </button>
                {expanded && (
                    <div className="song_list">
                        {songs.map((song) => (
                            <div key={song.id}>
                                <p className="song_title">{song.title}</p>
                                <p className="song_artist">{song.artist}</p>
                                <p className="song_link">{song.link}</p>
                                <p className="song_image">{song.image}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
    
            <div className="boss_container">
                <h1>ARE YOU WILLING TO CHALLENGE THE BOSSES?????</h1>
                <div className="boss_preview">
                    <img src="https://static.tvtropes.org/pmwiki/pub/images/1527763051_preview_default_giant_dad.png" alt="Solaire" />
                </div>
            </div>
        </>
    );
    

}