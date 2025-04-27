import React from 'react';

const Section1 = () => {
  return (
    <div>
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=a%20modern%20living%20room%20with%20large%20windows%2C%20natural%20light%2C%20stylish%20furniture%2C%20minimalist%20design%2C%20plants%2C%20wooden%20floors%2C%20bright%20and%20airy%20space%2C%20with%20a%20view%20of%20city%20skyline%20in%20the%20background%2C%20perfect%20for%20a%20rental%20home%20advertisement%2C%20high-end%20real%20estate%20photography&width=1920&height=800&seq=1&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Home with LivWell
            </h1>
            <p className="text-xl text-white/90">
              Discover the ideal rental that matches your lifestyle, budget, and location preferences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
