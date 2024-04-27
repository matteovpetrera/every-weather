import { Cloudy, Droplets, Sun, Wind } from "lucide-react";

export default function WeatherDynamicIcon(arg: any) {
  const description = arg.descr[0];

  if (description == "Clouds") {
    return <Cloudy size={60}></Cloudy>;
  } else if (description == "Clear") {
    return <Sun size={60}></Sun>;
  } else if (description == "Rain") {
    return <Droplets size={60}></Droplets>;
  } else if (description == "Squall") {
    return <Wind size={60}></Wind>;
  }
}
