"use client";
import ReactMapboxGl, { Layer } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export type MapProps = {
  latitude: number;
  longitude: number;
} 

export const Map = ({ latitude, longitude }: MapProps) => {

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYm91YmFjYXItYmEiLCJhIjoiY201bjNwYWFiMDg0ZzJpczhmcmk5ZW9mdSJ9.Gvj_iZTro5FE4nwNdxKiKw",
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-min">
      <Map
        style="mapbox://styles/mapbox/streets-v9" // Map style
        center={[longitude, latitude]} // Longitude first, then latitude
        zoom={[12]} // Optional zoom level
        containerStyle={{
          height: "100vh", // Full screen height
          width: "100vw", // Full screen width
        }}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15", "icon-size": 1.5 }}
        >
        </Layer>
      </Map>
    </div>
  );
};
