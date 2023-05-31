import "./Home.css"
import {Link} from 'react-router-dom'
import banner from './asset/banner.jpg'

const Home = () => {


    return (


        <section className="container-fluid"> 

         <img className="img-responsive w-100" src={banner} alt='banner' /> 

        </section>

    )
}

export default Home

