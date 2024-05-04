"use client";

import { fetchData, fetchForecastData } from "@/components/api/fetch-data";
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
  const [list, setList] = useState();

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

    fetchForecastData(city).then((response) => {
      setList(response.list);
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
          <div className="flex flex-col w-1/3 mt-2 mr-1 ml-20">
            <div className="p-3">
              {/*TEMPERATURE*/}
              <TempCard
                temp={temperature}
                w={weather}
                city={searchedCity}
                data={data}
              />
            </div>
            {/* FORECAST */}
            <div className="p-3">
              <h2 className="text-xl font-extrabold ml-3">
                Next 5 Days Forecast
              </h2>
            </div>
            <div className="p-3 h-full">
              <ForecastCard forecast={list} />
            </div>
          </div>
          <div className="flex flex-col w-2/3 mt-2 ml-1 mr-20">
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
