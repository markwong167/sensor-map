"use client";

import { useSensorContext } from "./SensorContext";
export const InfoPanel = () => {
  const { currSensor } = useSensorContext();

  return (
    <div className='flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
      <div className='border-b border-zinc-200 bg-zinc-50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/60'>
        <h1 className='text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100'>
          Sensor Details
        </h1>
        <p className='mt-1 text-sm text-zinc-500 dark:text-zinc-400'>
          Select a sensor on the map to inspect its current data.
        </p>
      </div>

      <div className='flex-1 px-6 py-5'>
        {currSensor ? (
          <div className='space-y-4'>
            <div className='rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60'>
              <p className='text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
                Name
              </p>
              <h2 className='mt-1 text-lg font-medium text-zinc-900 dark:text-zinc-100'>
                {currSensor.label}
              </h2>
            </div>
            <div className='rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900'>
              <p className='text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
                Height
              </p>
              <p className='mt-1 text-base font-medium text-zinc-900 dark:text-zinc-100'>
                {currSensor.height} m
              </p>
            </div>
          </div>
        ) : (
          <div className='flex h-full items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center dark:border-zinc-700 dark:bg-zinc-950/40'>
            <p className='text-sm text-zinc-500 dark:text-zinc-400'>
              No sensor selected yet. Click a marker on the map to view details
              here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
