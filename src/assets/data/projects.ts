export default () => {
  return [
    {
      title: 'Weather Boy',
      description: `Weather Boy is a Discord bot written in Node.js. At its core, Weather Boy is meant to be an easy way for Discord users to request simple, up-to-date information about the weather conditions in their area.\nWeather Boy uses MapBox's geocoding API for reverse geocoding (latitude and longitude from place name) and DarkSky's API for weather data.\nFuture plans include:
      - Hourly forecast Icons to make the reponses a bit more user-friendly
      - Alerts (like severe storms, blizzards, etc)
      - Migrate to OpenWeatherMap API since DarkSky API will shut down eventually
      - Upgrade API plans to paid plans if bot were to reach wide adoption (if call limits become an issue)`,
    },
  ];
};
