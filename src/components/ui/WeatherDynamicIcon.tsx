import { Cloud, Droplets, Sun, Wind } from "lucide-react";

export default function WeatherDynamicIcon(arg: any) {
  const description = arg.descr[0];

  if (description == "Clouds") {
    return <Cloud size={50}></Cloud>;
  } else if (description == "Clear") {
    return <Sun size={50}></Sun>;
  } else if (description == "Rain") {
    return <Droplets size={50}></Droplets>;
  } else if (description == "Squall") {
    return <Wind size={50}></Wind>;
  }
}
