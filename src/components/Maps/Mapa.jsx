import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

// Centar mape
const center = {
    lat: 44.198865,
    lng: 17.912715,
};

// Lokacije
const locations = [
    { lat: 44.202649, lng: 17.913296 }, // Arena
    { lat: 44.196044, lng: 17.912177}, // Mokušnice
];

const Mapa = () => {
    return (
        <div className="Mapa">
            <LoadScript googleMapsApiKey="AIzaSyAQYUjWnmqBKJInXo8lSE2pH6AuP0ZjPnk">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
                    {locations.map((location, index) => (
                        <Marker key={index} position={location} />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Mapa;
