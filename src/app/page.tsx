/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { InfoCard } from "@/components/InfoCard";
import {  Maps } from "@/components/Maps";
import { Card, CardContent } from "@/components/ui/card";
import { getIpData } from "./api/ip-data";
import { useEffect, useState } from "react";
import { GeoIp } from "@/types/geoIp";
import { SearchBar } from "@/components/SearchBar";


const InitalGeoIpData = {
 ip: "",
  city: "",
  region: "",
  country: "",
  loc: "",
  org: "",
  timezone: "",
};

export default function Home() {
  const getIp = getIpData();
  const [ipData, setIpData] = useState<GeoIp>(InitalGeoIpData);
  const [latitude, longitude] = ipData.loc.split(",").map(Number);
const fetchData = async () => {
  const ipData = await getIp;
  return setIpData(ipData);
};
  
  const searchedData = async (ip: string) => {
    const ipData = await getIpData(ip);
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
          <SearchBar onSearch={searchedData} />
        </header>
      </div>
      <Card className="max-w-sm sm:max-w-2xl mx-auto bg-white shadow-lg relative z-10 -mt-10 p-3 content-center">
        <CardContent className="flex flex-col sm:flex-row md:divide-x">
          <InfoCard name="IP Address" description={ipData.ip} />
          <InfoCard
            name="Location"
            description={`${ipData.city}. ${ipData.region}. ${ipData.country}`}
          />
          <InfoCard name="Timezone" description={`UTC ${ipData.timezone}`} />
          <InfoCard name="ISP" description={ipData.org} />
        </CardContent>
      </Card>
      <div className="absolute top-48">
        <Maps
          longitude={longitude ? longitude : 14.6937}
          latitude={latitude ? latitude : -17.4441}
        />
      </div>
    </div>
  );
}
