import SkipNext from "@material-ui/icons/SkipNext";
import ShuffleIcon from '@material-ui/icons/ShuffleRounded'
import RepeatIcon from '@material-ui/icons/Repeat';
import SkipPrevious  from "@material-ui/icons/SkipPrevious";
import PlayeIcon from '@material-ui/icons/PlayCircleOutlineRounded' ; 
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeDown';
import { useDataLayervValue } from '../config/dataLayer';
import {Slider} from '@material-ui/core';
import {useEffect} from 'react'

export const WPlayer = ({spotify})=>{
  const [{ play , item  } ,dispatch ] = useDataLayervValue() ; 

  
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAY",
        playing: r.is_playing,
      });
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, []);
  const skipPrevoius = ()=>{
    spotify.skipToPrevious();
          spotify.getMyCurrentPlayingTrack().then(play =>{
            dispatch({
             type : 'SET_PLAY' , 
             play : play.is_playing
            })
            dispatch({
              type : 'SET_ITEM' , 
              item : play.item
            })
            console.log(play)
           })
  }
  const PlayCurrent = ()=>{
    if(play){
      spotify.pause() ; 
      dispatch({
        type : 'SET_PLAY' , 
        play : false , 
      })
    }else{
      spotify.play() ; 
      dispatch({
        type : 'SET_PLAY' , 
        play : true , 
      })
    }
  }

  const skipNext = ()=>{
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then(play =>{
      dispatch({
       type : 'SET_PLAY' , 
       play : play.is_playing
      })
      dispatch({
        type : 'SET_ITEM' , 
        item : play.item
      })
      console.log(play)
     })
  }

  return(
   <div className="webPlayer" >
     <div className="SongsData" >
        <img className="iconMusic" src={item?.album?.images[0]?.url} alt="pic" />
        <div className="songDataholder" >
          <p className="songName" >
            {item?.name}
          </p>
          <p className="author" >
            {item?.artists?.map((artist) => artist.name).join(", ")}
          </p>
        </div>
     </div>
     <div className="mainPlayer" >
       <ShuffleIcon className="pointer changer " />
       <SkipPrevious className="pointer" 
        onClick={skipPrevoius}
       />
       <PlayeIcon fontSize="large" className="pointer animated " 
       onClick={PlayCurrent} />
       <SkipNext className="pointer"
        onClick= {skipNext}
       />
       <RepeatIcon className="pointer changer" />
     </div>
     <div className="sound" >
        <VolumeUpOutlinedIcon className="pointer" />
        <Slider aria-label="Volume" className="slider" />
     </div>
   </div>
 ) ; 
}