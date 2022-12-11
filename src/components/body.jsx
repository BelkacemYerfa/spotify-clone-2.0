import { Header } from '../components/Header'

export const Body = ({spotify})=>{
 return(
  <section className="body" >
    <Header spotify={spotify} />
  </section>
 );
}