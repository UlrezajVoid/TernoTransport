import { MarshTrollShedule } from "../date/TrolleybussesMarshrutky.jsx";
import ScheduleLayout from "../components/ScheduleLayout.jsx";

export default function Marshrutky() {
  return (
    <ScheduleLayout
      data={MarshTrollShedule.filter(item => item.type === "marshrutka")}
      filterConfig={{
        types: ["маршрутка", "зупинка"],
        defaultType: "маршрутка",
        showValueFilter: true,
        valuePlaceholder: "№ маршрутки / назва зупинки"
      }}
    />
  );
}