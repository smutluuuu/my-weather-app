export interface WeatherReport {
    location: {
      name: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: number;
    };
  }