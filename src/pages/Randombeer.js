import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";

const Randombeer = (props) => {
    const [ beer, setBeer ] = useState({})

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((res) => {
            setBeer(res.data)
        })
    }, [])

    return ( <div>
        <Navbar />
        <div className="single-beer pt-10 mx-5">
           <img src={beer.image_url} alt="" className="w-[100px] mt-20 mx-auto" /> 
           <div className="text-left">
            <h1 className="text-3xl my-5">{beer.name} <span className="float-right text-neutral-500">{beer.attenuation_level}</span></h1>
            <p className="mb-5 text-neutral-500">{beer.tagline}<span className="float-right text-black font-bold">{beer.first_brewed}</span></p>
            <p>{beer.description}</p>
            <p className="my-5 text-neutral-500">{beer.contributed_by}</p>
           </div>
        </div>
    </div> );
}
 
export default Randombeer;