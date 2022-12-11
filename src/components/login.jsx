
import { loginUrl } from "../config/spotify";

export const Login = ()=> {
 return (
   <div className="login">
     <img
       className="mainLogo"
       src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
       alt="Spotify logo"
     />
     <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
   </div>
 );
}
