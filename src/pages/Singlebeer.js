import Navbar from "../components/Navbar";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Singlebeer = (props) => {
    const [ beer, setBeer ] = useState({})
    const { beerId } = useParams()
    
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((res) => {
            console.log(res.data)
            setBeer(res.data)
        })
    }, [beerId])

    return ( <div>
        <Navbar />
        <div className="single-beer pt-10 mx-5">
           <img src={beer.image_url} alt="" className="w-[100px] mt-20 mx-auto" /> 
           <div className="text-left">
            <h1 className="text-3xl my-5">{beer.name} <span className="float-right text-neutral-500">{beer.attenuation_level}</span></h1>
            <p className="mb-5 text-neutral-500">{beer.tagline}<span className="float-right text-black font-bold">{beer.first_brewed}</span></p>
            <p>{beer.description}</p>
            <p className="mt-5 text-neutral-500">{beer.contributed_by}</p>
           </div>
           <Link to={'/beers'} className="text-blue-500 text-xl float-left mt-5 pb-5">{"<-- "}Back to Beers</Link>
        </div>
    </div> );
}
 
export default Singlebeer;