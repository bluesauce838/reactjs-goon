import axios from "axios";

import { useState, useEffect } from "react";

function Axi() {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: "d54vE8fu6bjJ_JgkBqugaZOt4bwFHGkmiKDGHunnXxc",
        query: "cars",
        per_page: 10,
      },
    }).then((response) => {
      console.log(response.data.results);
      setData(response.data.results);
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
      </form>

      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.urls.thumb} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Axi;