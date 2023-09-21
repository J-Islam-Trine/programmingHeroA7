// import react
import React from "react";


//declare funtion
const Card = ({name, imageLink, description, price, credit}) => {
    return(
        <div className="card w-96 bg-white">
  <figure className="px-4 pt-4">
    <img className="w-96 h-56 rounded-2xl" src={imageLink} />
  </figure>
  <div className="mt-4 mx-4 text-left">
    <h2 className="card-title text-xl font-semibold">{name}</h2>
    <p className=" text-sm font-normal leading-5 font-Inter">{description}</p>
    <div className="flex justify-between mt-4 items-center">
      <div className="flex items-center gap-1">
      <img width="32" height="32" src="https://img.icons8.com/windows/32/average-2.png" alt="average-2"/>
      <p className=" text-lg font-medium">Price: {price}</p>
      </div>
      <div  className="flex items-center gap-1">
      <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/open-book--v1.png" alt="open-book--v1"/>
      <p className=" text-lg font-medium">Credit: {credit}HR</p>
      </div>
      
    </div>
    <div className="card-actions mt-6">
      <button className="btn btn-primary bg-newBlue border-0 w-full text-white font-semibold text-lg">Buy Now</button>
    </div>
  </div>
</div>
    )
}

export default Card