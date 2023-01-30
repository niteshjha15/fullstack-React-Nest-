import React, { useEffect, useState } from "react";
import { externalApi } from "../../axios/api";
import AsteriodOfTheDay from "../../components/asteriod/asteriodOfTheDay";
import Loader from "../../components/asteriod/loader";

function Asteriod() {
  const [asteriodData, setAsteriodData] = React.useState(null);
  const [loading, setLoading] = useState(true);

  const getAsteriodData = async () => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${
      import.meta.env.VITE_NASA_API_KEY
    }`;
    let headers = {
      "Content-Type": "application/json",
    };
    setLoading(true);
    let api = externalApi(url, headers);
    let res = await api.get(url);
    if (res?.status === 200) {
      setAsteriodData(res?.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAsteriodData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : asteriodData ? (
        <AsteriodOfTheDay asteriodData={asteriodData} />
      ) : null}
    </div>
  );
}

export default Asteriod;
