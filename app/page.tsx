import { PinchMap } from "./PinchMap";

export default function Home() {
  return (
    <div className='flex flex-row h-dvh items-center bg-zinc-50 font-sans dark:bg-black'>
      <div className='flex grow items-center justify-center'>
        <div className='max-w-1/2'>
          <PinchMap />
        </div>
      </div>
    </div>
  );
}
