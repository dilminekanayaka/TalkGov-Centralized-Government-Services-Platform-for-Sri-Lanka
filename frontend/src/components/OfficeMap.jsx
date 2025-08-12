import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to handle map view updates when selectedOffice changes
const MapUpdater = ({ selectedOffice }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedOffice) {
      map.setView([selectedOffice.lat, selectedOffice.lng], 14);
    }
  }, [selectedOffice, map]);

  return null;
};

const OfficeMap = ({ offices, selectedOffice, setSelectedOffice }) => {
  // Default center position (New York City)
  const defaultPosition = [40.7128, -74.006];

  return (
    <div>
      <div style={{ height: "500px", width: "100%" }}>
        <MapContainer
          center={defaultPosition}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {offices.map((office) => (
            <Marker
              key={office.id}
              position={[office.lat, office.lng]}
              eventHandlers={{
                click: () => {
                  setSelectedOffice(office);
                },
              }}
            >
              <Popup>
                <div>
                  <h3 className="font-bold">{office.name}</h3>
                  <p className="text-sm">{office.type}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          <MapUpdater selectedOffice={selectedOffice} />
        </MapContainer>
      </div>

      <div className="mt-2 text-sm text-gray-500 text-center">
        Click on a marker to view office details
      </div>
    </div>
  );
};

export default OfficeMap;
