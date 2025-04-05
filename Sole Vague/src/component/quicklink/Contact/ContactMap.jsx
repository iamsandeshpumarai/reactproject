import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const center = [27.7172, 85.3240]; // Kathmandu, Nepal

const ContactMap = () => {
  return (
    <MapContainer
      center={center}
      zoom={20}
      style={{
        height: "70vh",
        width: "97%",
        margin: "auto",
        marginBottom: "45px",
        minHeight: "300px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={defaultIcon}>
        <Popup>Our Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
