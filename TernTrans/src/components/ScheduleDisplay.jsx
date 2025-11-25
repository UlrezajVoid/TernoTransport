import "./schedule.css"
export default function ScheduleDisplay({ item }) {

    return (
        <>
            {item.map((bus) => (
                <div className="bus_container" key={bus.id}>
                    <div className="bus_name">Маршрут №{bus.number}</div>
                    <div className="bus_stops">
                        {bus.stops.map((stop, index) => (
                            <div className="stops_item" key={index}>{stop}</div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
