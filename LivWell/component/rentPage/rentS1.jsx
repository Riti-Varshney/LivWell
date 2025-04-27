import React from 'react';
import RentS2 from './rentS2';
import RentS3 from './rentS3';
import RentS4 from './rentS4';
import RentS5actionBar from './rentS5actionBar';
const RentS1 = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-6">
        {/* Photo Gallery Section */}
        <section id="photos" className="mb-12">
          <div className="grid grid-cols-4 grid-rows-2 gap-2">
            {/* Main Image */}
            <div className="col-span-2 row-span-2 relative">
              <img
                src = "https://onekindesign.com/wp-content/uploads/2016/05/Bedroom-With-Ocean-Views-01-1-Kindesign.jpg"
                alt ="Beach Living"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <i className="fas fa-expand text-indigo-700"></i>
              </button>
            </div>

            {/* Other Small Images */}
            <div className="relative">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/580633049.jpg?k=4e97bb2d665a1724de3c3ee48caa9e858da60f855981ad918b9c441ef9bc829e&o=&hp=1"
                alt="Living Room"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="relative">
              <img
                src="https://www.costas-casas.com/db/huizen/2444/thumbnails/5eec9bee21caa.jpg.thumb3.jpg"
                alt="Kitchen"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/84/fe/74/84fe74537af9937b378f363080f6bc24.jpg"
                alt="Bedroom"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="relative">
              <img
                src="https://www.homeforguest.com/en/rentals/fotos/2/165633679633014a989d0bed6dc5b3fb938d34f2f8/1662380830350f4a079ccb283d93d64b6566323ebb.jpg"
                alt="Bathroom"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
<RentS2/>
<RentS3/>
<RentS4/>
<RentS5actionBar/>
      </main>
    </div>
  );
}

export default RentS1;
