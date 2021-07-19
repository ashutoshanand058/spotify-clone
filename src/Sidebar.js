import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useDataLayerValue} from "./DataLayer";
function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Library"/>
            <SidebarOption Icon={AddIcon} title="Create Playlist"/>
            <SidebarOption Icon={FavoriteIcon} title="Liked Songs"/>
            <hr />
            <strong>PLAYLISTS</strong>
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name}/>
            ))}
    </div>);
}

export default Sidebar
