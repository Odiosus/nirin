import React, { useEffect } from "react";

export default function Chat() {
  const TOKEN = "6d8a970a70a78d358884d56db78ce22e";
  const SITE = "36206a0011e961d05245f7b01a7766e8";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://tocha.online/api/site/${SITE} -H 'X-AUTH-TOKEN: ${TOKEN}'`)
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return <div></div>;
}
