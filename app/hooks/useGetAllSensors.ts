"use client";

import { useState } from "react";

const sensorsInit = [
  { id: 1, label: "sensor 1", left: 100, top: 200, height: 1 },
  { id: 2, label: "sensor 2", left: 600, top: 500, height: 3 },
  { id: 3, label: "sensor 3", left: 1800, top: 300, height: 0.51 },
  { id: 4, label: "sensor 4", left: 500, top: 1200, height: 6 },
];
interface UseGetAllSensorsReturn {
  sensors: Sensor[] | null;
}

export function useGetAllSensors(): UseGetAllSensorsReturn {
  const [sensors, setSensors] = useState<Sensor[] | null>(sensorsInit);
  return {
    sensors,
  };
}
