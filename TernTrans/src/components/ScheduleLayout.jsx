import React, { useState, useMemo } from "react";
import ScheduleDisplay from "./ScheduleDisplay";

export default function ScheduleLayout({ data, filterConfig }) {
  const { types = [], defaultType = "", valuePlaceholder = "" } = filterConfig || {};
  const [filterType, setFilterType] = useState(defaultType);
  const [filterValue, setFilterValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Підказки: частковий збіг
  const suggestions = useMemo(() => {
    if (!filterValue) return [];
    const valueLower = filterValue.toLowerCase();

    if (filterType.toLowerCase() === "маршрутка" || filterType.toLowerCase() === "тролейбус") {
      return data
        .map(item => item.number.toString())
        .filter(num => num.includes(filterValue)); // частковий збіг номера
    } else if (filterType.toLowerCase() === "зупинка") {
      const stopsSet = new Set();
      data.forEach(item => {
        item.stops.forEach(stop => {
          if (stop.toLowerCase().includes(valueLower)) stopsSet.add(stop); // частковий збіг зупинки
        });
      });
      return Array.from(stopsSet);
    }
    return [];
  }, [data, filterValue, filterType]);

  // Фільтрація даних: точна відповідність
  const filteredData = data.filter(item => {
    if (!filterValue) return true;
    const valueLower = filterValue.toLowerCase();

    if (filterType.toLowerCase() === "маршрутка" || filterType.toLowerCase() === "тролейбус") {
      return item.number.toString() === filterValue; // точний номер
    } else if (filterType.toLowerCase() === "зупинка") {
      return item.stops.some(stop => stop.toLowerCase() === valueLower); // точна зупинка
    }
    return true;
  });

  return (
    <>
      <div style={{ display: "flex", margin: "10px", gap: "10px", position: "relative" }}>
        {/* Кнопка для зміни типу фільтру */}
        <button onClick={() => {
            const currentIndex = types.indexOf(filterType);
            const nextType = types[(currentIndex + 1) % types.length];
            setFilterType(nextType);
            setFilterValue(""); 
            setShowSuggestions(false);
        }}>
          {filterType || "Тип (маршрутка/зупинка)"}
        </button>

        <div style={{ flexGrow: 1 }} />

        {/* Поле вводу */}
        <input
          type="text"
          placeholder={valuePlaceholder}
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          onFocus={() => setShowSuggestions(true)}
        />

        {/* Список підказок */}
        {showSuggestions && suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((s, idx) => (
              <li
                key={idx}
                onMouseDown={() => {
                  setFilterValue(s);
                  setShowSuggestions(false);
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="schedule_container">
        <ScheduleDisplay item={filteredData} />
      </div>
    </>
  );
}
