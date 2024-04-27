import axios from "axios";

async function fetchMain(city: string): Promise<any> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  try {
    const response = await axios.get(url);
    const main = response.data.main;
    return main;
  } catch (error) {
    console.error("errore di tipo", error);
    throw error;
  }
}

async function fetchWeather(city: string): Promise<any> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  try {
    const response = await axios.get(url);
    const weather = response.data.weather;
    return weather;
  } catch (error) {
    console.error("errore di tipo", error);
    throw error;
  }
}

export { fetchMain, fetchWeather };
