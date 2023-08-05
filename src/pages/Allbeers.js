import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Allbeers = (props) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res) => {
      setBeers(res.data);
    });
  }, []);

  return (
    <div className="all-beers">
      <Navbar />
      <div className="beer-list pt-24 mx-5">
        { beers.map((beer) => {
           return <div key={beer._id} className="beer flex mb-5 border-2 border-blue-500 rounded-md p-5">
                <img className="w-14 h-40" src={beer.image_url} alt="beer-img" />
                <div className="text-left ml-5">
                <Link to={`/beers/${beer._id}`}><h1 className="text-xl text-blue-500 mt-5 mb-10">{beer.name} {"-->"}</h1></Link>
                    <p className="text-neutral-500">{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
            </div>
        }) }
      </div>
    </div>
  );
};

export default Allbeers;
