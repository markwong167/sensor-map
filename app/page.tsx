import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <div className='w-1/2'>
        <Image
          src='/floor_plan.png'
          alt='Floor Plan'
          width={2059}
          height={1647}
          priority
        />
      </div>
    </div>
  );
}
