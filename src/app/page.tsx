/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { InfoCard } from "@/components/InfoCard";
import { Map } from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { getIpData } from "./api/ip-data";
import { useEffect, useState } from "react";
import { GeoIp } from "@/types/geoIp";
import { SearchBar } from "@/components/SearchBar";


const InitalGeoIpData = {
  ip: "",
  location: {
    country: "",
    region: "",
    city: "",
    lat: 0,
    lng: 0,
    postalCode: "",
    timezone: "",
    geonameId: 0,
  },
  as: {
    asn: 0,
    name: "",
    route: "",
    domain: "",
    type: "",
  },
  isp: "",
};

export default function Home() {
  const getIp = getIpData();
  const [ipData, setIpData] = useState<GeoIp>(InitalGeoIpData);
const fetchData = async () => {
  const ipData = await getIp;
  return setIpData(ipData);
};

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative">
      <div className="w-full pt-10 bg-bannerImg bg-cover text-white h-48 relative">
        <header className="flex flex-col max-w-sm mx-auto">
          <h1 className="text-2xl font-bold text-center">IP Address Tracker</h1>
          <SearchBar />
        </header>
      </div>
      <Card className="max-w-sm sm:max-w-2xl mx-auto bg-white shadow-lg relative z-10 -mt-10 p-3 content-center">
        <CardContent className="flex flex-col sm:flex-row md:divide-x">
          <InfoCard name="IP Address" description={ipData.ip} />
          <InfoCard
            name="Location"
            description={`${ipData.location.city}. ${ipData.location.region}. ${ipData.location.country}`}
          />
          <InfoCard
            name="Timezone"
            description={`UTC ${ipData.location.timezone}`}
          />
          <InfoCard name="ISP" description={ipData.isp} />
        </CardContent>
      </Card>
      <div className="absolute top-48">
        <Map longitude={ipData.location.lng} latitude={ipData.location.lat} />
      </div>
    </div>
  );
}
