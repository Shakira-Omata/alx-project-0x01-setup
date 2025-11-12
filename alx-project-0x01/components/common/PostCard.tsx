import React from 'react';

interface PostCardProps {
  title?: string;
  content?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title = 'Post Title', content = 'Post content goes here...' }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default PostCard;