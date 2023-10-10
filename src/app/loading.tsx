import Image from "next/image";

const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Image
        src='/images/loader.svg'
        width={120}
        height={120}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;



