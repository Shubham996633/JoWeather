import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Input from './components/Input';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './components/services/WeatherServices';
import { useEffect, useState } from 'react';


function App() {

  const [query, setQuery] = useState({ q: 'berlin' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(
        setWeather(data)
      )

    }
    fetchWeather()

  }, [query, units])
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Input />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title={"hourly forecast"} />
      <Forecast title={"daily forecast"} />
    </div>
  );
}

export default App;
