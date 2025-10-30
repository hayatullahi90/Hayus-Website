import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[9.05785, 7.49508]} // Abuja, Nigeria (example)
        zoom={13}
        className="h-full w-full"
      >
        {/* OpenStreetMap tiles */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Marker with popup */}
        <Marker position={[9.05785, 7.49508]} icon={customIcon}>
          <Popup>📍 Abuja, Nigeria</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;