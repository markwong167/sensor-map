import { Button } from "./ui/button";

type SensorButtonType = {
  sensor: Sensor;
  left: string;
  top: string;
  status: "online" | "offline" | "unknown";
  onSensorClicked: (sensorId: Sensor) => void;
};

const SensorButton = ({
  sensor,
  left,
  top,
  status,
  onSensorClicked,
}: SensorButtonType) => {
  const statusLabelMap: Record<SensorButtonType["status"], string> = {
    online: "Online",
    offline: "Offline",
    unknown: "Unknown",
  };

  const statusClassMap: Record<SensorButtonType["status"], string> = {
    online:
      "text-emerald-700 bg-emerald-100 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-500/20 dark:border-emerald-500/30",
    offline:
      "text-rose-700 bg-rose-100 border-rose-200 dark:text-rose-300 dark:bg-rose-500/20 dark:border-rose-500/30",
    unknown:
      "text-amber-700 bg-amber-100 border-amber-200 dark:text-amber-300 dark:bg-amber-500/20 dark:border-amber-500/30",
  };

  const dotClassMap: Record<SensorButtonType["status"], string> = {
    online: "bg-emerald-500",
    offline: "bg-rose-500",
    unknown: "bg-amber-500",
  };

  return (
    <Button
      key={sensor.id}
      type='button'
      onClick={() => onSensorClicked(sensor)}
      className='absolute z-10 flex h-16 w-16 flex-col items-center justify-center rounded-lg border border-zinc-300 bg-white/95 p-0 text-[11px] font-semibold leading-tight text-zinc-800 hover:scale-105 hover:bg-white 
       hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-100 dark:hover:bg-zinc-900'
      style={{
        left: left,
        top: top,
      }}
    >
      <span className='max-w-[52px] text-center'>{sensor.label}</span>
      <span
        className={`mt-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium leading-none ${statusClassMap[status]}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dotClassMap[status]}`} />
        {statusLabelMap[status]}
      </span>
    </Button>
  );
};

export default SensorButton;
