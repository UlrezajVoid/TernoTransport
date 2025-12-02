import "./schedule.css";

export default function ScheduleDisplay({ item = [] }) {
  return (
    <>
      {item.map((bus) => {
        const stops = bus.stops;
        const rows = [];

        // будуємо рядки по 3 зупинки + стрілки
        for (let i = 0; i < stops.length; i += 3) {
          const group = stops.slice(i, i + 3);
          const row = [];

          group.forEach((stop, j) => {
            const globalIndex = i + j;
            const isFirst = globalIndex === 0;
            const isLast = globalIndex === stops.length - 1;

            // колонка зупинки
            row.push(
              <div
                key={`stop-${globalIndex}`}
                className={`stops_item ${isFirst ? "first_stop" : isLast ? "last_stop" : ""}`}
              >
                {stop}
              </div>
            );

            // колонка стрілки (не після останньої глобальної зупинки)
            row.push(
              <div key={`arrow-${globalIndex}`} className="arrow_column">
                {!isLast ? "→" : ""}
              </div>
            );
          });

          rows.push(...row);
        }

        return (
          <div className="bus_container" key={bus.id}>
            <div className="bus_name">№{bus.number}</div>
            <div className="bus_stops">{rows}</div>
          </div>
        );
      })}
    </>
  );
}