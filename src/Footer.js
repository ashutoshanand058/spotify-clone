import React from 'react'
import './Footer.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { Slider } from '@material-ui/core';
function Footer({ image, title, singer }) {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src={image} alt="" />
                <div>
                    <h4>{title}</h4>
                    <div>{singer}</div>
                </div>
                <FavoriteIcon />
            </div>
            <div className="footer__mid">
                <div className="mid__top">
                    <ShuffleIcon className="mid__topElements"/>
                    <SkipPreviousIcon className="mid__topElements" />
                    <PlayCircleFilledIcon className="mid__topElements" fontSize="large"/>
                    <SkipNextIcon className="mid__topElements" />
                    <LoopIcon className="mid__topElements" />
                </div>
                <div className="mid__bottom">
                   <Slider style={{color:"green"}} className="mid__bottomSlider"/> 
                </div>
            </div>
            <div className="footer__right">
                <PlaylistPlayIcon className="footer__rightElements" />
                <DevicesIcon className="footer__rightElements"  />
                <VolumeUpIcon className="footer__rightElements"  />
                <Slider style={{color:"green"}} className="slider footer__rightElements" />
            </div>
        </div>
    )
}

export default Footer
