import { MarshTrollShedule } from "../date/TrolleybussesMarshrutky.jsx";
import ScheduleLayout from "../components/ScheduleLayout.jsx";

export default function Trolleybusses() {
  return (
    <ScheduleLayout
      data={MarshTrollShedule.filter(item => item.type === "trolleybus")}
      filterConfig={{
        types: ["тролейбус", "зупинка"],
        defaultType: "тролейбус",
        showValueFilter: true,
        valuePlaceholder: "№ тролейбуса / назва зупинки"
      }}
    />
  );
}