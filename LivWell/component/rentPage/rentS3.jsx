import React from 'react';

const RentS3 = () => {
  return (
    <div>
      {/* Property Details */}
      <section id="details" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Property Details</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            This stunning penthouse apartment offers breathtaking city views and luxurious living in the heart of downtown. 
            With floor-to-ceiling windows, premium finishes, and an open concept layout, this residence exemplifies modern 
            urban living at its finest.
          </p>
          <p className="text-gray-700 mb-4">
            The gourmet kitchen features high-end stainless steel appliances, quartz countertops, and custom cabinetry. 
            The spacious living area opens to a private terrace perfect for entertaining. The primary suite includes a 
            walk-in closet and an en-suite bathroom with dual vanities and a rainfall shower.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Property Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <i className="fas fa-check text-indigo-700 mr-2"></i>
                <span>Central Air Conditioning</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-indigo-700 mr-2"></i>
                <span>In-unit Washer & Dryer</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-indigo-700 mr-2"></i>
                <span>Hardwood Floors</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-indigo-700 mr-2"></i>
                <span>Smart Home Features</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-indigo-700 mr-2"></i>
                <span>Stainless Steel Appliances</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-indigo-700 mr-2"></i>
                <span>Walk-in Closets</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Building Amenities</h3>
            <p className="text-gray-700 mb-2">
              This luxury high-rise building offers 24/7 doorman service, a state-of-the-art fitness center, 
              rooftop pool, residents' lounge, and private parking facilities.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Neighborhood</h3>
            <p className="text-gray-700 mb-2">
              Located in the vibrant Central District, this property is steps away from premium shopping, dining, 
              and entertainment options. Public transportation is readily accessible, with multiple subway lines 
              within a 5-minute walk.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Pet Policy</h3>
            <p className="text-gray-700 mb-2">
              Pets are welcome. A pet deposit of $500 is required, with a limit of 2 pets per residence. 
              Some breed restrictions apply.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Lease Terms</h3>
            <p className="text-gray-700 mb-2">
              12-month minimum lease. Security deposit equal to one month's rent. First and last month's 
              rent due at signing. Background and credit check required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentS3;
