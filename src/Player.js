import React from "react";
import "./Player.css"
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
function Player({spotify}){
    return (
        <div className="player">
            <div className= "player-body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer
                image="https://i.scdn.co/image/ab67616d0000b273b8c0135a218de2d10a8435f5"
                title="Memories"
                singer="Maroon 5"
            />
        </div>
    )
};

export default Player;