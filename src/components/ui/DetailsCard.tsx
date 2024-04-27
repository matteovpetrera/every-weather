import {
  Wind,
  Eye,
  ThermometerSun,
  Waves,
  Sun,
  Moon,
  WindIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import dayjs from "dayjs";
import { fetchAirPollutionData } from "../api/fetch-data";
import { useState } from "react";
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default function DetailsCard(props: any) {
  if (props.data.main != null) {
    const data = props.data;
    const perceived = data.main.feels_like;
    const humidity = data.main.humidity;
    const visibility = Math.round(data.visibility / 1000) + " km";
    const wind = data.wind.speed;
    const sunrise = dayjs.unix(data.sys.sunrise).format("HH:mm");
    const sunset = dayjs.unix(data.sys.sunset).format("HH:mm");
    const lat = props.lat;
    const lon = props.lon;
    const [pm2_5, setPm2_5] = useState(0);
    const [so2, setSo2] = useState(0);
    const [no2, setNo2] = useState(0);
    const [o3, setO3] = useState(0);

    fetchAirPollutionData(lat, lon).then((response) => {
      setPm2_5(response.list.map((l: any) => l.components.pm2_5));
      setSo2(response.list.map((l: any) => l.components.so2));
      setNo2(response.list.map((l: any) => l.components.no2));
      setO3(response.list.map((l: any) => l.components.o3));
    });

    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 h-3/4">
          <div className="flex gap-3">
            <Card className="w-1/2">
              <CardHeader>
                <CardTitle className="flex text-sm font-light gap-1 text-muted-foreground">
                  Air Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="">
                  <div className="flex gap-2">
                    <div>
                      <WindIcon size={40} />
                    </div>
                    <div className="flex w-full justify-evenly">
                      <div className="flex flex-col">
                        <div className="text-xs font-light text-muted-foreground">
                          PM2.5
                        </div>
                        <div className="text-2xl font-medium">
                          {Math.round(pm2_5 * 10) / 10}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xs font-light text-muted-foreground">
                          SO2
                        </div>
                        <div className="text-2xl font-medium">
                          {Math.round(so2)}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xs font-light text-muted-foreground">
                          NO2
                        </div>
                        <div className="text-2xl font-medium">
                          {Math.round(no2)}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xs font-light text-muted-foreground">
                          O3
                        </div>
                        <div className="text-2xl font-medium">
                          {Math.round(o3)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-1/2">
              <CardHeader>
                <CardTitle className="flex text-sm font-light gap-1 text-muted-foreground">
                  Sunrise & Sunset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <Sun size={40} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs font-light text-muted-foreground">
                        Sunrise
                      </div>
                      <div className="text-2xl font-medium">
                        {sunrise + " "} AM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <Moon size={40} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs font-light text-muted-foreground">
                        Sunset
                      </div>
                      <div className="text-2xl font-medium">
                        {sunset + " "} AM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-3">
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex text-sm font-light gap-1 text-muted-foreground">
                  <div>
                    <Eye size={20}></Eye>
                  </div>
                  Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{visibility}</div>
              </CardContent>
            </Card>
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex gap-1 text-sm font-light text-muted-foreground">
                  <div>
                    <Wind size={20}></Wind>
                  </div>
                  Wind
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{Math.round(wind)} km/h</div>
              </CardContent>
            </Card>
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex gap-1 text-sm font-light text-muted-foreground">
                  <div>
                    <Waves size={20}></Waves>
                  </div>
                  Humidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{humidity}%</div>
              </CardContent>
            </Card>
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex gap-1 text-sm font-light text-muted-foreground">
                  <div>
                    <ThermometerSun size={20}></ThermometerSun>
                  </div>
                  Feels Like
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{Math.round(perceived)}°</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 h-3/4">
          <div className="flex gap-3">
            <Card className="w-1/2">
              <CardHeader>
                <CardTitle className="flex text-sm font-light gap-1 text-muted-foreground">
                  Air Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl"></div>
              </CardContent>
            </Card>
            <Card className="w-1/2">
              <CardHeader>
                <CardTitle className="flex text-sm font-light gap-1 text-muted-foreground">
                  Sunrise & Sunset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div></div>
                    <div className="flex flex-col">
                      <div className="text-xs font-light text-muted-foreground"></div>
                      <div className="text-2xl font-medium"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div></div>
                    <div className="flex flex-col">
                      <div className="text-xs font-light text-muted-foreground"></div>
                      <div className="text-2xl font-medium"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-3">
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex text-sm font-light gap-1 text-muted-foreground">
                  <div>
                    <Eye size={20}></Eye>
                  </div>
                  Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl"></div>
              </CardContent>
            </Card>
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex gap-1 text-sm font-light text-muted-foreground">
                  <div>
                    <Wind size={20}></Wind>
                  </div>
                  Wind
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl"></div>
              </CardContent>
            </Card>
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex gap-1 text-sm font-light text-muted-foreground">
                  <div>
                    <Waves size={20}></Waves>
                  </div>
                  Humidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl"></div>
              </CardContent>
            </Card>
            <Card className="w-1/4">
              <CardHeader>
                <CardTitle className="flex gap-1 text-sm font-light text-muted-foreground">
                  <div>
                    <ThermometerSun size={20}></ThermometerSun>
                  </div>
                  Feels Like
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl"></div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    );
  }
}
