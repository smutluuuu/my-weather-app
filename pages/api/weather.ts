import { NextApiRequest, NextApiResponse } from "next";

import { WeatherReport } from "@/model/WeatherReport";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.location as string;
  if (req.method == "GET") {
    try {
      const weatherData = await fetchWeather(query);
      res.status(200).json(weatherData);
    } catch (error) {
    return  res.status(500).json({ error: "Error fetching weather data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

async function fetchWeather(query: string): Promise<WeatherReport> {
  const apikey = "09f7a4a1d1334d2989484437240807" as String;

  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey} &q=${query}`);
  const data = await response.json();

  const formattedData: WeatherReport = {
    location: {
      name: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
    },
    current: {
      temp_c: data.current.temp_c,
    },
  };

  return formattedData;
}
