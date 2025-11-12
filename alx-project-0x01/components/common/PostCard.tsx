import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{body}</p>
      <div className="text-sm text-gray-500">
        <p>User ID: {userId}</p>
        <p>Post ID: {id}</p>
      </div>
    </div>
  );
};

export default PostCard;