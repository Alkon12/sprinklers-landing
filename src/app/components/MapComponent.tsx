"use client";

import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { FireRiskZone } from "./Heatmap"; // Importar el tipo desde Heatmap

// Definir el tipo para las props del componente
type MapComponentProps = {
  center: LatLngExpression;
  zoom: number;
  className?: string;
  zones: FireRiskZone[];
};

export default function MapComponent({
  center,
  zoom,
  className,
  zones,
}: MapComponentProps) {
  return (
    <MapContainer center={center} zoom={zoom} className={className}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {zones.map((zone, index) => (
        <Circle
          key={index}
          center={[zone.lat, zone.lng]}
          pathOptions={{
            fillColor:
              zone.risk === "High"
                ? "red"
                : zone.risk === "Medium"
                  ? "orange"
                  : "yellow",
            fillOpacity: 0.5,
            stroke: false,
          }}
          radius={
            zone.risk === "High"
              ? 50000
              : zone.risk === "Medium"
                ? 30000
                : 15000
          }
        />
      ))}
    </MapContainer>
  );
}
