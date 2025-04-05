import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Mencollection, WomenCollection, KidCollection, Training } from "../gendercategory/collection";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Shoesize from "./shoesize";
import Scroller from "../Home/Scroller";
import { useProductcontext } from "../Home/Context";
import { FaHeart, FaRegHeart } from "react-icons/fa";  // Import icons for favorite
import {Nikecollection,pumacollection,Adidascollection,Jordancollection, allshoes} from "../brands/brandcollection.js"

const ShowDetails = () => {
  const { id } = useParams();
  const shoeslist = [...Mencollection, ...WomenCollection, ...KidCollection, ...Training, ...Nikecollection, ...pumacollection,...Adidascollection,...Jordancollection,...allshoes];
  
  const [shoe, setShoe] = useState(null);
  const [shoeimage, setShoeImage] = useState("");
  const { Blocks } = useProductcontext();
  const { Arrivals } = useProductcontext();

  const [isFavorite, setIsFavorite] = useState(false);  // State to track if shoe is a favorite

  useEffect(() => {
    const foundShoe = shoeslist.find((item) => item.id === id);
    if (foundShoe) {
      setShoe(foundShoe);
      setShoeImage(foundShoe.image?.[0] || ""); // Set default image if available
    } else {
      setShoe(null);
    }
  }, [id]);

  // Handle case where shoe is not found
  if (!shoe) {
    return (
      <div>
        <Header />
        <div className="w-screen h-screen flex justify-center items-center text-2xl font-bold">
          Shoe not found!
        </div>
        <Footer />
      </div>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite state
  };

  return (
    <div>
      <Header />
      <div className="h-[2vh] w-screen text-2xl ml-[111px] top-0 bg-white"> Product Details Of {shoe.name}</div>
      
      <div className="shoedetails w-screen h-[245vh] mt-3">
        <div className="details w-[85%] h-screen mx-auto flex">
          {/* Image Scroll */}
          <div className="imgscrolls h-full flex flex-col items-center w-[24%]">
            {shoe.image?.map((img, index) => (
              <img
                className="w-[50%] h-[20%] cursor-pointer mt-3"
                key={index}
                onMouseEnter={() => setShoeImage(img)}
                src={img}
                alt="shoe"
              />
            ))}
          </div>

          {/* Product Image */}
          <div className="productimage w-[50%]">
            {shoeimage ? <img className="mt-5" src={shoeimage} alt="Selected Shoe" /> : <p>No Image Available</p>}
          </div>

          {/* Product Details */}
          <div className="productdetails mt-1 w-[26%]  h-screen p-4 flex flex-col">
            <div className="flex flex-col justify-center items-start">

            <h1 className=" mb-[-24px] text-2xl font-bold">{shoe.name}</h1>
            <h2 className=" text-lg mb-[-24px] text-gray-600">{shoe.gender}</h2>
            <h2 className=" text-lg  font-semibold">{shoe.Price}</h2>
            </div>

            <div className="shoesize flex flex-col">
              <Shoesize />
              <div className="fav w-full h-[10vh] mb-3 flex flex-col gap-2">
                {/* Favorite Button */}
                <div
                  className={`cursor-pointer p-2 ml-3.5 border h-[7vh] w-[16] rounded-lg flex justify-center items-center ${isFavorite ? 'bg-red-500 text-white' : 'bg-white text-black'} hover:${isFavorite ? 'bg-red-600' : 'bg-gray-200'}`}
                  onClick={toggleFavorite}
                >
                  {isFavorite ? <FaHeart style={{fontSize:"2rem"}} /> : <FaRegHeart style={{fontSize:"2rem"}}   />} <h1>{isFavorite ? <span>Added</span> : "Add to Favorites"}</h1>
                </div>
                {/* Add to Bag Button */}
                <div className="cursor-pointer ml-3.5 border p-2 border-black h-[8vh] w-[16] rounded-lg flex justify-center items-center bg-black text-white hover:bg-gray-700">
                  <h1>Add To Bag</h1>
                </div>
              </div>
              <div className="features ml-3">
                <h1 className="mt-9 underline">Features</h1>
                {shoe.features.split(",").map((feat, index) => {
                  return <li key={index}>{feat}</li>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Scroller Blocks={Blocks} title="In Demand" />
          <Scroller Blocks={Arrivals} title="Fresh Drop" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowDetails;
