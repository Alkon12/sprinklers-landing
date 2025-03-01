"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";

// Definir el tipo para la zona de riesgo de incendio
export type FireRiskZone = {
  lat: number;
  lng: number;
  risk: "High" | "Medium" | "Low";
};

// Datos de ejemplo para el mapa de calor
const fireRiskZones: FireRiskZone[] = [
  { lat: 34.0522, lng: -118.2437, risk: "High" }, // Los Angeles
  { lat: 37.7749, lng: -122.4194, risk: "Medium" }, // San Francisco
  { lat: 40.7128, lng: -74.006, risk: "Low" }, // New York
];

// Cargar el mapa dinámicamente con ssr: false para evitar errores de window
const Map = dynamic(
  () => import("./MapComponent"), // Importar el componente de mapa
  { ssr: false }, // Esto es crucial para evitar errores de window
);

// Este componente ahora es independiente y no requiere props
export default function Heatmap() {
  // Estado para controlar si estamos en el cliente
  const [isMounted, setIsMounted] = useState(false);

  // Este efecto se ejecuta solo en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Definir el centro del mapa y el nivel de zoom
  const mapCenter: LatLngExpression = [37.7749, -119.4194];
  const mapZoom = 5;

  // Renderizar un placeholder hasta que estemos en el cliente
  return isMounted ? (
    <Map
      center={mapCenter}
      zoom={mapZoom}
      className="w-full h-64 rounded-lg shadow-lg"
      zones={fireRiskZones}
    />
  ) : (
    <div className="w-full h-64 rounded-lg shadow-lg bg-gray-200 flex items-center justify-center">
      <p>Cargando mapa...</p>
    </div>
  );
}
