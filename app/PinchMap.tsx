"use client";
import Image from "next/image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const PinchMap = () => {
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
      </TransformComponent>
    </TransformWrapper>
  );
};
