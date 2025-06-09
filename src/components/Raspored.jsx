import React, { useEffect, useState, useContext } from "react";
import "./Raspored.css";
import { AuthContext } from "../AuthContext";

const days = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"];
const timeBlocks = [
    "07:00 – 09:00",
    "09:00 – 11:00",
    "11:00 – 13:00",
    "13:00 – 15:00",
    "15:00 – 17:00",
    "17:00 – 19:00",
    "19:00 – 21:00",
    "21:00 – 23:00"
];

const Raspored = () => {
    const { user } = useContext(AuthContext); // ✅ preuzimamo iz konteksta
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/schedule")
            .then((res) => res.json())
            .then((data) => setSchedule(data));
    }, []);

    const handleChange = (id, newValue) => {
        const updated = schedule.map((cell) =>
            cell.id === id ? { ...cell, content: newValue } : cell
        );
        setSchedule(updated);

        fetch(`http://localhost:5000/schedule/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: newValue })
        });
    };

    const getCell = (day, time) => {
        return schedule.find((entry) => entry.day === day && entry.time === time);
    };

    return (
        <div className="raspored-container">
            <h2 className="raspored-title">Sedmični Raspored Treninga</h2>
            <div className="raspored-table">
                <table>
                    <thead>
                        <tr>
                            <th>Vrijeme</th>
                            {days.map((day) => (
                                <th key={day}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeBlocks.map((time) => (
                            <tr key={time}>
                                <td className="time-col">{time}</td>
                                {days.map((day) => {
                                    const cell = getCell(day, time);
                                    return (
                                        <td key={`${day}-${time}`}>
                                            {cell ? (
                                                user?.role === "admin" ? (
                                                    <textarea
                                                        value={cell.content}
                                                        onChange={(e) =>
                                                            handleChange(cell.id, e.target.value)
                                                        }
                                                        rows={cell.content.split("\n").length || 1}
                                                    />
                                                ) : (
                                                    <div className="readonly-cell">{cell.content}</div>
                                                )
                                            ) : (
                                                <div style={{ color: "red", fontStyle: "italic" }}>N/A</div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Raspored;
