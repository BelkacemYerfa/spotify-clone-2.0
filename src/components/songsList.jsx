import { useDataLayervValue } from '../config/dataLayer';
import Play from '@material-ui/icons/PlayArrowRounded' ;

export const SongsList = ({spotify})=>{
 const [{playlist } ,dispatch ] = useDataLayervValue()
 return(
  <div className="list" >
    {playlist?.tracks?.items?.map(song => (
     <div className='song' key={song?.track?.album?.images[0]?.url} id={song?.track?.album?.images[0]?.url} 
      onClick={()=>{
       spotify.getMyCurrentPlaybackState().then(play =>{
        dispatch({
         type : 'SET_PLAY' , 
         play : play.is_playing
        })
        dispatch({
          type : 'SET_ITEM' , 
          item : play.item
        })
       })
       }}
     >
       <Play />
       <img className='songIcon' src={song?.track?.album?.images[0]?.url} alt='pic' />
       <div className='songInfo' >
         <div className='infoData' >
          <h3 className='songName' >
            {song?.track?.name}
          </h3>
          <p className='songArtitst' >
           {song?.track?.artists?.map(artist => (
            <p >
             {artist?.name},
            </p>
           ))}
          </p>
         </div>
       </div>
     </div>
    ))}
  </div>
 );
}