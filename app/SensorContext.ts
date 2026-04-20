"use client";

import { createContext, createElement, useContext, useMemo, useState } from "react";

type SensorContextValue = {
  currSensor: Sensor | null;
  setCurrSensor: (sensor: Sensor | null) => void;
};

const SensorContext = createContext<SensorContextValue | undefined>(undefined);

export function SensorProvider({ children }: { children: React.ReactNode }) {
  const [currSensor, setCurrSensor] = useState<Sensor | null>(null);

  const value = useMemo(
    () => ({
      currSensor,
      setCurrSensor,
    }),
    [currSensor],
  );

  return createElement(SensorContext.Provider, { value }, children);
}

export function useSensorContext(): SensorContextValue {
  const context = useContext(SensorContext);

  if (!context) {
    throw new Error("useSensorContext must be used within a SensorProvider");
  }

  return context;
}
