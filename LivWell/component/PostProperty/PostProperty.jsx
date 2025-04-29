import React from 'react';
import { useForm } from 'react-hook-form';

function PostProperty() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 space-y-8">
        <h1 className="text-4xl font-semibold text-indigo-600 text-center mb-8">Post Your Property</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Property Details Section */}
          <div className="bg-indigo-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Title</label>
                <input
                  type="text"
                  {...register('title', { required: 'Title is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Price</label>
                <input
                  type="text"
                  {...register('price', { required: 'Price is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  {...register('rating', { required: 'Rating is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Location</label>
                <input
                  type="text"
                  {...register('location', { required: 'Location is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Image URL</label>
                <input
                  type="text"
                  {...register('image', { required: 'Image URL is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">More Images (comma-separated URLs)</label>
                <textarea
                  {...register('moreImages', { required: 'At least one image URL is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.moreImages && <p className="text-red-500 text-sm">{errors.moreImages.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Area (sqft)</label>
                <input
                  type="text"
                  {...register('area', { required: 'Area is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-indigo-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Description</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Overview</label>
                <textarea
                  {...register('overview', { required: 'Overview is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.overview && <p className="text-red-500 text-sm">{errors.overview.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Property Specifications (comma-separated)</label>
                <textarea
                  {...register('propertySpecifications', { required: 'Specifications are required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.propertySpecifications && <p className="text-red-500 text-sm">{errors.propertySpecifications.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Building Amenities</label>
                <textarea
                  {...register('buildingAmenities', { required: 'Building amenities are required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.buildingAmenities && <p className="text-red-500 text-sm">{errors.buildingAmenities.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Neighborhood</label>
                <textarea
                  {...register('neighborhood', { required: 'Neighborhood details are required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.neighborhood && <p className="text-red-500 text-sm">{errors.neighborhood.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Pet Policy</label>
                <textarea
                  {...register('petPolicy', { required: 'Pet policy is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.petPolicy && <p className="text-red-500 text-sm">{errors.petPolicy.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Lease Terms</label>
                <textarea
                  {...register('leaseTerms', { required: 'Lease terms are required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.leaseTerms && <p className="text-red-500 text-sm">{errors.leaseTerms.message}</p>}
              </div>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-indigo-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Email</label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-lg text-indigo-700 mb-2">Contact</label>
                <input
                  type="text"
                  {...register('contact', { required: 'Contact is required' })}
                  className="w-full border border-indigo-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Submit Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostProperty;
