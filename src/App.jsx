import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function App() {
  let [data, setData] = useState("");
  let [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=53a27e8c8f08b2143f10cad39322050e`;

  let fetchAPI = async () => {
    let response = await fetch(url);
    let data = await response.json();
    if (response.status == 404) {
      alert("Location is not found!!!");

      console.clear();

      setLocation("");
    } else if (location === "") {
      alert("Enter Location!!!");
      console.clear();
    } else {
      setData(data);
    }

    setLocation("");
  };

  if (!data) {
    return (
      <div className="CONTAINER CONTAINER_BEFORE">
        <div className=" search w-full sm:w-[80%] m-auto relative text-center p-4">
          <input
            className="w-full py-[.7rem] px-4 text-xl rounded-2xl border border-[rgba(255,255,255,0.6)] outline-none bg-[#0000004d] placeholder:text-gray-200"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter location to search..."
          />
          <div
            onClick={fetchAPI}
            className="bg-[#00000060] duration-100 cursor-pointer hover:bg-[#00000040] p-4 px-6 text-xl rounded-2xl top-4 rounded-tl-none rounded-bl-none m-auto right-4 absolute"
          >
            <FaSearch />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CONTAINER CONTAINER_BEFORE">
        <div className="z-10 search w-full sm:w-[80%] m-auto relative text-center p-4">
          <input
            className="w-full py-[.7rem] px-4 text-lg sm:text-xl rounded-2xl border border-[rgba(255,255,255,0.6)] outline-none bg-[#0000004d] placeholder:text-gray-200"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter location to search..."
          />
          <div
            onClick={fetchAPI}
            className="bg-[#00000060] duration-100 cursor-pointer hover:bg-[#00000040] p-4 sm:px-6 px-4 text-lg sm:text-xl rounded-2xl top-4 rounded-tl-none rounded-bl-none m-auto right-4 absolute"
          >
            <FaSearch />
          </div>
        </div>
        <div className="px-4 max-w-2xl min-h-[80vh] sm:min-h-[60vh] m-auto py-0 relative flex flex-col justify-between items-center">
          <div className="w-full my-[1rem] mx-auto flex flex-col gap-4 items-center h-[50vh]">
            <div className="p-6 location flex flex-col gap-8 m-auto text-center">
              <div className="name">
                <p className="text-3xl sm:text-5xl">{data.name}</p>
              </div>
              <div className="temp">
                <p className="text-6xl sm:text-8xl">
                  {data.main.temp.toFixed()}°F
                </p>
              </div>
              <div className="description">
                <p className="text-3xl sm:text-4xl">{data.weather[0].main}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-evenly text-center w-full my-4 mx-auto p-4 rounded-xl bg-[#00000030]">
            <div className="feels">
              <p className="text-md sm:text-2xl font-bold">
                {data.main.feels_like.toFixed()}°F
              </p>
              <p className="text-sm sm:text-2xl">Feels Like</p>
            </div>
            <div className="humidity">
              <p className="text-md sm:text-2xl font-bold">
                {data.main.humidity}%
              </p>
              <p className="text-sm sm:text-2xl">Humidity</p>
            </div>
            <div className="wind">
              <p className="text-md sm:text-2xl font-bold">
                {data.wind.speed.toFixed()} MPH
              </p>
              <p className="text-sm sm:text-2xl">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
