import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayervValue } from "../config/dataLayer";
import {SideBarOption} from './sideBarOption'

export const SideBar = ()=>{
  const [{playlists}] = useDataLayervValue()
   
  return(
   <div className="sideBar" >
     <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify Logo" className="logo" />
     <SideBarOption Icon={HomeIcon} title={'Home'} />
     <SideBarOption Icon={SearchIcon} title={'Search'} />
     <SideBarOption Icon={LibraryIcon} title={'Library'} />
     <p className="playlist" >
      <strong>
       Playlists
      </strong>
     </p>
     <hr className="hLine" />
     <br />
     <div className="Playlist" >
      {playlists?.items?.map(playlist =>(
        <SideBarOption title={playlist?.name} id={playlist?.id} key={playlist?.id} />
      ))}
     </div>
   </div>
  );
}