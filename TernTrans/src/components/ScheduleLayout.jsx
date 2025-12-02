import React, { useState } from "react";
import ScheduleDisplay from "./ScheduleDisplay";
import "./schedule.css";

export default function ScheduleLayout({ data, filterOptions }) {
  // eslint-disable-next-line no-unused-vars
  const [filterType, setFilterType] = useState(filterOptions?.types?.[0] || "");
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
        <div style={{ display: "flex", margin: "10px" }}>
            <button onClick={() => console.log("Відкриваємо фільтр типу - заглушка")}>
                {filterType || "Тип (маршрутка/зупинка)"}
            </button>

            <div style={{ flexGrow: 1 }} /> {/* заповнює весь вільний простір */}

            <select
                id="filterValue"
                name="filterValue"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
            >
                <option value="">Всі маршрутки</option>
            </select>
        </div>

        <div className="schedule_container">
            <ScheduleDisplay item={data} />
        </div>
    </>
  );
}