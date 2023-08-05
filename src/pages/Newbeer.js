import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Newbeer = (props) => {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attentuation_level, setAttentuation_level] = useState(1)
    const [contributed_by, setContributed_by] = useState('')

    const body = { name, tagline, description, first_brewed, brewers_tips, attentuation_level, contributed_by }

    function onSubmit(e) {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then((res) => {
            console.log(res)
        })
    }

  return (
    <div>
      <Navbar />
      <div className="pt-32 w-[420px] mx-auto">
      <h1 className="my-5 text-3xl">Create a new Beer!</h1>
        <form onSubmit={(e) => onSubmit(e)} className="flex flex-col">
            <label htmlFor="name" className="text-left mx-6 mt-5">Name</label>
            <input className="border mt-2 border-black mx-5 rounded-md p-1" type="text" name="name" onChange={(e) => setName(e.target.value)} />

            <label htmlFor="tagline" className="text-left mx-6 mt-5">Tagline</label>
            <input className="border mt-2 border-black mx-5 rounded-md p-1" type="text" name="tagline" onChange={(e) => setTagline(e.target.value)} />

            <label htmlFor="description" className="text-left mx-6 mt-5">Description</label>
            <textarea className="border mt-2 border-black mx-5 rounded-md p-1 h-32" type="text" name="description" onChange={(e) => setDescription(e.target.value)} />

            <label htmlFor="first_brewed" className="text-left mx-6 mt-5">First Brewed</label>
            <input className="border mt-2 border-black mx-5 rounded-md p-1" type="text" name="first_brewed" onChange={(e) => setFirst_brewed(e.target.value)} />

            <label htmlFor="brewers_tips" className="text-left mx-6 mt-5">Brewer Tips</label>
            <input className="border mt-2 border-black mx-5 rounded-md p-1" type="text" name="brewers_tips" onChange={(e) => setBrewers_tips(e.target.value)} />

            <label htmlFor="attenuation_level" className="text-left mx-6 mt-5">attentuation_level Level</label>
            <input className="border mt-2 border-black mx-5 rounded-md p-1" type="number" name="attenuation_level" onChange={(e) => setAttentuation_level(e.target.value)} />

            <label htmlFor="contributed_by" className="text-left mx-6 mt-5">Contributed By</label>
            <input className="border mt-2 border-black mx-5 rounded-md p-1 mb-5" type="text" name="contributed_by" onChange={(e) => setContributed_by(e.target.value)} />

            <button className="text-xl py-5 px-6 bg-blue-500 text-white">Create new Beer</button>

        </form>
      </div>
    </div>
  );
};

export default Newbeer;
