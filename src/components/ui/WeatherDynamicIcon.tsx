import { Cloudy, Droplets, Sun, Wind } from "lucide-react";

export default function WeatherDynamicIcon(arg: any) {
  const description = arg.descr[0];
  const size = arg.size;

  if (description == "Clouds") {
    return <Cloudy size={size}></Cloudy>;
  } else if (description == "Clear") {
    return <Sun size={size}></Sun>;
  } else if (description == "Rain") {
    return <Droplets size={size}></Droplets>;
  } else if (description == "Squall") {
    return <Wind size={size}></Wind>;
  }
}
