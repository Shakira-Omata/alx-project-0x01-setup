import React from 'react';

const Users: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Users</h1>
      <div className="space-y-4">
        <div className="border rounded-lg p-4 shadow">
          <h3 className="text-xl font-semibold">User 1</h3>
          <p className="text-gray-600">user1@example.com</p>
        </div>
        <div className="border rounded-lg p-4 shadow">
          <h3 className="text-xl font-semibold">User 2</h3>
          <p className="text-gray-600">user2@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Users;