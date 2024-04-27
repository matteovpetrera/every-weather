"use client";

import {
  fetchMain,
  fetchWeather,
  fetchData,
  fetchAirPollutionData,
} from "@/components/api/fetch-data";
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
  const [searchedCity, setSearchedCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState();
  const [data, setData] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  let retriveInfo = (e: any) => {
    console.log("fetching data");
    e.preventDefault();
    setSearchedCity(city);

    fetchData(city).then((response) => {
      setData(response);
      setTemperature(response.main.temp);
      setWeather(response.weather.map((info: any) => info.main));
      setLon(response.coord.lon);
      setLat(response.coord.lat);
    });

    setCity("");
  };

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      console.log("premuto enter");
      retriveInfo(event);
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
              <Button onClick={handleKeyPress} className="ml-2" type="submit">
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex-col w-1/3 mt-2 mr-1 ml-20">
            <div className="p-3">
              {/*TEMPERATURE*/}
              <TempCard
                temp={temperature}
                w={weather}
                city={searchedCity}
                data={data}
              />
            </div>
            <div className="p-3">
              {/* FORECAST */}
              <ForecastCard />
            </div>
          </div>
          <div className="flex-col w-2/3 mt-2 ml-1 mr-20">
            <div className="p-3">
              {/*DETAILS ABOUT WEATHER*/}
              <DetailsCard data={data} lat={lat} lon={lon} />
            </div>
            <div className="flex">
              <div className="w-1/2 p-3">
                {/*CITY MAP*/}
                <MapCard data={data} city={searchedCity} />
              </div>
              <div className="w-1/2 p-3">
                {/*SOME GRAPH*/}
                <GraphCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
