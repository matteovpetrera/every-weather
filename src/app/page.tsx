"use client";

import { fetchMain, fetchWeather } from "@/components/api/fetch-data";
import DetailsCard from "@/components/ui/DetailsCard";
import ForecastCard from "@/components/ui/ForecastCard";
import GraphCard from "@/components/ui/GraphCard";
import MapCard from "@/components/ui/MapCard";
import TempCard from "@/components/ui/TempCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [mapCity, setMapCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState();
  const [loading, setLoading] = useState(false);
  console.log(city);

  let fetchData = (e: any) => {
    console.log("fetching data");
    e.preventDefault();
    setLoading(true);
    setMapCity(city);
    fetchMain(city).then((response) => {
      setTemperature(response.temp);
    });
    fetchWeather(city).then((response) => {
      setWeather(response.map((info: any) => info.main));
    });
    setCity("");
    setLoading(false);
  };

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      console.log("premuto enter");
      fetchData(event);
    }
  };

  return (
    <main>
      <div className="h-screen">
        <div>
          <div className="p-4 justify-center">
            {/*SEARCH BAR*/}
            <div className="flex ml-20 mr-20">
              <Input
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyPress}
                value={city}
                id="search-bar"
                type="text"
                placeholder="City Name"
              />
              <Button onClick={fetchData} className="ml-2" type="submit">
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="flex mt-2 h-1/3 ml-4 mr-4">
          <div className="w-1/3 p-3">
            {/*TEMPERATURE*/}
            <TempCard temp={temperature} w={weather} city={mapCity} />
          </div>
          <div className="w-2/3 p-3">
            {/*WEEK FORECAST*/}
            <ForecastCard />
          </div>
        </div>
        <div className="flex mt-2 h-1/2 ml-4 mr-4">
          <div className="w-1/3 p-3">
            {/*DETAILS ABOUT WEATHER*/}
            <DetailsCard />
          </div>
          <div className="w-1/3 p-3">
            {/*CITY MAP*/}
            <MapCard city={mapCity} />
          </div>
          <div className="w-1/3 p-3">
            {/*SOME GRAPH*/}
            <GraphCard />
          </div>
        </div>
      </div>
    </main>
  );
}
