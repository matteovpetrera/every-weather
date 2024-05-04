import { Card, CardContent, CardHeader, CardTitle } from "./card";
import ForecastDayTempIcon from "./forecastDay";
import { Separator } from "./separator";

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}
type Main = WeatherData["main"];

export default function ForecastCard(props: any) {
  if (props.forecast != null) {
    const array = new Array<WeatherData>();
    props.forecast.map((a: any) => array.push(a));
    return (
      <Card className="h-full">
        <CardContent className="flex flex-col text-xl h-full gap-12 justify-center">
          <ForecastDayTempIcon
            temperature={array.at(5)?.main.temp}
            description={array.at(5)?.weather.map((a) => a.main)}
            dt={array.at(5)?.dt}
          />
          <ForecastDayTempIcon
            temperature={array.at(13)?.main.temp}
            description={array.at(13)?.weather.map((a) => a.main)}
            dt={array.at(13)?.dt}
          />
          <ForecastDayTempIcon
            temperature={array.at(21)?.main.temp}
            description={array.at(21)?.weather.map((a) => a.main)}
            dt={array.at(21)?.dt}
          />
          <ForecastDayTempIcon
            temperature={array.at(29)?.main.temp}
            description={array.at(29)?.weather.map((a) => a.main)}
            dt={array.at(29)?.dt}
          />
          <ForecastDayTempIcon
            temperature={array.at(37)?.main.temp}
            description={array.at(37)?.weather.map((a) => a.main)}
            dt={array.at(37)?.dt}
          />
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="h-full">
        <CardHeader className=" font-bold text-2xl">Forecast</CardHeader>
        <CardContent className="flex flex-col gap-6 text-xl"></CardContent>
      </Card>
    );
  }
}
