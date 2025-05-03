import Image from 'next/image';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image
        src="/loading.gif"
        alt="Loading..."
        width={600}
        height={600}
        priority
        unoptimized
      />
    </div>
  );
};

export default Loading;
