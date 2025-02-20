"use client";
import Map, { Marker} from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export type MapProps = {
  latitude: number;
  longitude: number;
} 

export const Maps = ({ latitude, longitude }: MapProps) => {

  const accessToken = "pk.eyJ1IjoiYm91YmFjYXItYmEiLCJhIjoiY201bjNwYWFiMDg0ZzJpczhmcmk5ZW9mdSJ9.Gvj_iZTro5FE4nwNdxKiKw";

  return (
    <div className="flex flex-col items-center justify-center w-full h-min">
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 3.5,
        }}
        style={{ width: "100vw", height: "100vw" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={longitude} latitude={latitude} color="red" />
      </Map>
    </div>
  );
};
