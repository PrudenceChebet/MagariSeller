import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    make: '',
    model: '',
    year: '',
    maxPrice: '',
    location: '',
  });

  const handleSearch = () => {
    const filteredParams = Object.fromEntries(
      Object.entries(searchData).filter(([_, v]) => v !== '')
    );
    navigate({
      pathname: '/cars',
      search: `?${createSearchParams(filteredParams)}`,
    });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20">
      <div className="absolute inset-0 bg-black opacity-20" />
      <div className="relative container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Dream Car
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover thousands of quality vehicles from trusted dealers and private sellers
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* Make */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchData.make}
                onChange={(e) => setSearchData({ ...searchData, make: e.target.value })}
              >
                <option value="">Any Make</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes-Benz</option>
                <option value="Audi">Audi</option>
              </select>
            </div>

            {/* Model */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <input
                type="text"
                placeholder="Any Model"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchData.model}
                onChange={(e) => setSearchData({ ...searchData, model: e.target.value })}
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchData.year}
                onChange={(e) => setSearchData({ ...searchData, year: e.target.value })}
              >
                <option value="">Any Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchData.maxPrice}
                onChange={(e) => setSearchData({ ...searchData, maxPrice: e.target.value })}
              >
                <option value="">Any Price</option>
                <option value="25000">KES 25,000</option>
                <option value="50000">KES 50,000</option>
                <option value="75000">KES 75,000</option>
                <option value="100000">KES 100,000+</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Search className="h-5 w-5" />
            <span>Search Cars</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center text-white">
          {[
            { label: 'Cars Available', count: '10,000+' },
            { label: 'Trusted Dealers', count: '500+' },
            { label: 'Happy Customers', count: '50,000+' },
            { label: 'Customer Support', count: '24/7' },
          ].map((stat, i) => (
            <div key={i} className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.count}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;