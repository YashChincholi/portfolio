import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video src="/loading.webm" width={600} height={600} autoPlay loop muted />
    </div>
  );
};

export default Loading;
