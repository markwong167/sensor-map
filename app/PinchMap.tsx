"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const PinchMap = () => {
  const sensors = [
    { id: 1, label: "sensor 1", left: 100, top: 200, height: 1 },
    { id: 2, label: "sensor 2", left: 600, top: 500, height: 3 },
    { id: 3, label: "sensor 3", left: 1800, top: 300, height: 0.51 },
    { id: 4, label: "sensor 4", left: 500, top: 1200, height: 6 },
  ];
  const imageHeight = 1647;
  const imageWidth = 2059;
  return (
    <TransformWrapper>
      <TransformComponent>
        <Image
          src='/floor_plan.png'
          alt='Floor Plan'
          width={2059}
          height={1647}
          priority
        />
        {sensors.map((sensor) => (
          <Button
            key={sensor.id}
            type='button'
            onClick={() => console.log("clicked", sensor.id)}
            className='absolute z-10 -translate-0.5'
            style={{
              left: `${(sensor.left / imageWidth) * 100}%`,
              top: `${(sensor.top / imageHeight) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {sensor.label}
          </Button>
        ))}
      </TransformComponent>
    </TransformWrapper>
  );
};
