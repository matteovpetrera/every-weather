import { Card, CardContent, CardHeader, CardTitle } from "./card";
import WeatherDynamicIcon from "./WeatherDynamicIcon";

export default function TempCard(props: any) {
  const temp = props.temp;
  const weather = props.w;
  const city = props.city;

  if (Number.isInteger(Math.round(temp))) {
    return (
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>Temperature</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col pt-2 text-center items-center">
          <div className="text-xs uppercase font-bold text-muted-foreground">
            {city}
          </div>
          <div className="ml-7 text-7xl">{Math.round(temp)}°</div>
          <div className="pt-4">
            <WeatherDynamicIcon className="" descr={weather} />
            <h3 className="text-muted-foreground">{weather[0]}</h3>
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
