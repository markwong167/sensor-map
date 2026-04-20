"use client";
import Image from "next/image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useGetAllSensors } from "./hooks/useGetAllSensors";
import SensorButton from "@/components/SensorButton";
import { useSensorContext } from "./SensorContext";

export const PinchMap = () => {
  const { sensors } = useGetAllSensors();
  const { setCurrSensor } = useSensorContext();
  const imageHeight = 1647;
  const imageWidth = 2059;
  const handleClickedSensor = (sensor: Sensor) => {
    setCurrSensor(sensor);
  };
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
        {sensors?.map((sensor: Sensor) => (
          <SensorButton
            key={sensor.id}
            sensor={sensor}
            left={`${(sensor.left / imageWidth) * 100}%`}
            top={`${(sensor.top / imageHeight) * 100}%`}
            status='online'
            onSensorClicked={handleClickedSensor}
          />
        ))}
      </TransformComponent>
    </TransformWrapper>
  );
};
