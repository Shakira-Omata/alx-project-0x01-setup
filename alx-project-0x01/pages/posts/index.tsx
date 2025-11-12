import React from 'react';
import PostCard from '@/components/common/PostCard';

const Posts: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PostCard title="First Post" content="This is the first post" />
        <PostCard title="Second Post" content="This is the second post" />
        <PostCard title="Third Post" content="This is the third post" />
      </div>
    </div>
  );
};

export default Posts;