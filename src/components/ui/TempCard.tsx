import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Separator } from "./separator";
import WeatherDynamicIcon from "./WeatherDynamicIcon";
import dayjs from "dayjs";

export default function TempCard(props: any) {
  const temp = props.temp;
  const weather = props.w;

  if (Number.isInteger(Math.round(temp))) {
    const weatherDescription = props.data.weather[0].description;
    const city = props.data.name;
    const country = props.data.sys.country;
    let words = weatherDescription.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1) + " ";
    }
    return (
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>Now</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col">
          <div>
            <div className="h-50">
              <div className="flex gap-5 mr-10 ml-5">
                <div className="font-ultrabold text-6xl">
                  {/* TEMPERATURA */} {Math.round(temp)}°
                </div>
                <div className="flex flex-col justify-center">
                  {/* ICONA  */} <WeatherDynamicIcon descr={weather} />
                </div>
              </div>
              <div className="mr-10 ml-5 mt-3 font-light">{words}</div>
            </div>
            <Separator className="my-4" />
            <div className="ml-5 flex flex-col gap-2">
              <div className="flex gap-2 text-sm text-muted-foreground">
                <Calendar size={18} />
                <div>{dayjs().format("dddd DD, MM")}</div>
              </div>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <MapPin size={18} />
                <div>{city + ", " + country}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>Temperature</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-xl">
          Search for your city...
        </CardContent>
        <CardContent className="flex justify-center">
          <WeatherDynamicIcon descr={weather} />
        </CardContent>
      </Card>
    );
  }
}

{
  /*<CardContent className="flex pt-2 text-center justify-between mx-5 h-full">
          <div className="flex flex-col justify-center mb-8">
            <div className="text-xs font-light uppercase text-muted-foreground">
              {city}
            </div>
            <div className="text-7xl">{Math.round(temp)}°</div>
          </div>
          <div className="flex flex-col justify-center mb-8 p-4">
            <div className="pt-4">
              <WeatherDynamicIcon descr={weather} />
            </div>
          </div>
        </CardContent> */
}
