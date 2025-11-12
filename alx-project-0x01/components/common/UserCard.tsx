import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-3 mb-4">
        <div className="flex items-start">
          <span className="text-gray-600 font-semibold min-w-[80px]">Email:</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </div>
        
        <div className="flex items-start">
          <span className="text-gray-600 font-semibold min-w-[80px]">Phone:</span>
          <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
            {phone}
          </a>
        </div>
        
        <div className="flex items-start">
          <span className="text-gray-600 font-semibold min-w-[80px]">Website:</span>
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-gray-50 rounded-md p-3 mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Address</h3>
        <p className="text-sm text-gray-600">
          {address.suite}, {address.street}
        </p>
        <p className="text-sm text-gray-600">
          {address.city}, {address.zipcode}
        </p>
      </div>

      {/* Company Section */}
      <div className="bg-blue-50 rounded-md p-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Company</h3>
        <p className="text-sm font-bold text-gray-800">{company.name}</p>
        <p className="text-xs text-gray-600 italic mt-1">{company.catchPhrase}</p>
        <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;