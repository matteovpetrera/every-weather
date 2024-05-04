import WeatherDynamicIcon from "./WeatherDynamicIcon";
import dayjs from "dayjs";
var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default function ForecastDayTempIcon(props: any) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-5 mr-10">
          <div className="font-ultrabold text-2xl">
            {/* TEMPERATURA */} {Math.round(props.temperature)}°
          </div>
          <div className="flex flex-col justify-center">
            {/* ICONA  */}{" "}
            <WeatherDynamicIcon descr={props.description} size={30} />
          </div>
        </div>
        <div className="text-xs font-light text-muted-foreground">
          {dayjs.unix(props.dt).format("dddd DD")}
        </div>
      </div>
    </div>
  );
}
