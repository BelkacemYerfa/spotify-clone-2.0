export const initialState = {
 user : null , 
 playlists : [] , 
 item : null,
 play : false , 
 image : null , 
 playlist : null , 
 //token for development process
 token : null, 
}

export const reducer = (state , action)=>{
  console.log(action) ;
  switch(action.type){
   case 'SET_USER' : return {
    ...state , 
    user : action.user 
   }
   case 'SET_TOKEN' : return {
    ...state , 
    token : action.token 
   }
   case 'SET_PLAYL' : return {
    ...state , 
    playlist : action.playlist 
   }
   case 'SET_PLAYLIST' : return {
    ...state , 
    playlists : action.playlists
   }
   case 'SET_ITEM' : return {
    ...state , 
    item : action.item 
   }
   case 'SET_IMAGE': return {
    ...state , 
    image : action.item
   }
   case 'SET_PLAY' : return {
    ...state , 
    play : action.PLAY 
   }
   default : return state 
  }
}