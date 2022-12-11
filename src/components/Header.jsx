import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayervValue } from '../config/dataLayer';
import { SongsList } from './songsList';

export const Header = ({spotify})=>{
  const [{user , playlist} , dispatch] = useDataLayervValue()
 return (
  <header className="header" >
    <div className='head' >
     <form action="" className='format' >
      <SearchIcon />
      <input
      className='searchInput'
      placeholder='search music , podcast , playlist ...'
      type="text" />
     </form>
     <div className='avatar-holder' >
      <Avatar src={user?.images[0]?.url} alt='pic' />
      <h4>
       {user?.display_name}
      </h4>
     </div>
    </div>
    {
      playlist ? null : (<div className='profile' >
       <img className='profileImage' src={user?.images[0]?.url} alt="profile pic" />
       <div className='userProfileInfo' >
        <h3 className='section' >
          Profile
        </h3>
        <h1 className='userName'>
          {user?.display_name}
        </h1>
       </div>
      </div>)
    }
    <div className='playlistInfo' >
      <img className='PlaylistImage' src={playlist?.images[0]?.url} alt="" />
      <div className='infoPlay' >
       {
       playlist ? 
       (<h2 className='play' >
         PLAYLIST
        </h2>) 
        : null
        }
        <h1 className='playListTitle' >
         {playlist?.name}
        </h1>
        <p className='username' >
         {playlist?.owner?.display_name}
        </p>
      </div>
    </div>
    <SongsList spotify={spotify} />
  </header>
 );
}