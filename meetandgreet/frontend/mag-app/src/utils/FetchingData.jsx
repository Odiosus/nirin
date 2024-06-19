import React, { useEffect, useState } from "react";

export default function FetchingData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/airport/")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div>
      <input type="text" list="airports" placeholder="Select airport" />
      <datalist id="airports">
        {data.map((item) => (
          <option key={item.iata} value={item.airport_name} />
        ))}
      </datalist>
    </div>
  );
}
