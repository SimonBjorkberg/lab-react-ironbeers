import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  return (
    <div className="homepage mx-auto w-[420px]">
      <div className="all-beers flex flex-col justify-center text-left">
        <img src={beers} alt="beer img" className="shadow-md" />
        <Link to={'/beers'}><h1 className="my-2 ml-2 text-2xl font-bold text-blue-500">All Beers {"-->"}</h1></Link>
        <p className="mx-2 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          officia ut aut nostrum illo, distinctio quo libero dicta quibusdam
          iste, suscipit optio molestiae ab soluta. Voluptatibus ipsum molestias
          maxime libero?
        </p>
      </div>
      <div className="all-beers flex flex-col justify-center text-left">
        <img src={randomBeer} alt="beer img" className="shadow-md" />
        <Link to={'/random-beer'}><h1 className="my-2 ml-2 text-2xl font-bold text-blue-500">Random Beer {"-->"}</h1></Link>
        <p className="mx-2 mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ad repudiandae omnis mollitia nulla quisquam eos, rerum corrupti
          similique sapiente voluptates velit autem, quia soluta vitae dolores
          molestiae. Ad, nulla!
        </p>
      </div>
      <div className="all-beers flex flex-col justify-center text-left">
        <img src={newBeer} alt="beer img" className="shadow-md" />
        <Link to={'/new-beer'}><h1 className="my-2 ml-2 text-2xl font-bold text-blue-500">Create new Beer {"-->"}</h1></Link>
        <p className="mx-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero a
          aperiam, ab quaerat nobis nihil porro illum maxime voluptates
          blanditiis reiciendis fugiat at dolorem eum mollitia quos nulla iure
          cupiditate?
        </p>
      </div>
    </div>
  );
};

export default Homepage;
