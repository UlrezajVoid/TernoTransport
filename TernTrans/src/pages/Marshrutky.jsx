import { busSchedule } from "../busSchedule";
import ScheduleDisplay from "../components/ScheduleDisplay";

export default function Marshrutky() {
  return (
    <>
      <h1>Маршрутки</h1>
      <ScheduleDisplay item={busSchedule} />
    </>
  );
}
