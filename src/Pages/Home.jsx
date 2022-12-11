import { Body } from "../components/body";
import { SideBar } from "../components/sideBar";
import { WPlayer } from "../components/webPlayer";

export const Home = ({spotify})=>{

 return(
  <div className="Home" >
    <div className="container" >
       <SideBar spotify={spotify} />
       <Body spotify={spotify} />
    </div>
    <WPlayer spotify={spotify} />
  </div>
 );
}