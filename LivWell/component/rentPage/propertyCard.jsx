import React from 'react';

function PropertyCard(props) {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
        <div className="relative">
          <img
            src={props.image}
            alt="Luxury Apartment"
            className="w-full h-72 object-cover "/>
          <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:text-primary transition">
            <i className="ri-heart-line"></i>
          </button>
          <div className="absolute bottom-0 left-0 bg-primary text-white text-xs font-medium px-3 py-1 rounded-tr-lg">
            Featured
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {props.price}
            </h3>
            <div className="flex items-center text-yellow-500">
              <i className="ri-star-fill text-xs"></i>
              <span className="text-xs font-medium ml-1">{props.rating}</span>
            </div>
          </div>

          <h4 className="text-gray-700 font-medium mb-2">{props.title}</h4>

          <p className="text-gray-500 text-sm mb-3 flex items-center">
            <i className="ri-map-pin-line mr-1"></i>
            {props.location}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-3">
            <div className="flex items-center">
              <i className="ri-hotel-bed-line mr-1"></i>
              <span>{props.beds} Beds</span>
            </div>
            <div className="flex items-center">
              <i className="ri-shower-line mr-1"></i>
              <span>{props.baths} Baths</span>
            </div>
            <div className="flex items-center">
              <i className="ri-ruler-line mr-1"></i>
              <span>{props.sqft} sqft</span>
            </div>
          </div>
        </div>

        <div className="flex px-4 pb-4 gap-2">
          <button className="w-full bg-primary/10 text-primary px-4 py-2 !rounded-button whitespace-nowrap hover:bg-primary/20 transition">
            View Details
          </button>
          <button className="bg-primary text-white px-4 py-2 !rounded-button whitespace-nowrap hover:bg-primary/90 transition">
            <i className="ri-chat-1-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;