import { useEffect, useState } from "react";
import { SiElectron } from "react-icons/si";
import { IconContext } from "react-icons";
import "./JSONConverter.css";

const isIterable = (value: any) => {
  if (value== null || typeof value=== "string" || typeof value=== "number")
    return false;
  else if (Array.isArray(value) || typeof value=== "object") return true;
};

interface JSONConverterProps {
  jsonUrl: string;
  refreshRatio?: number;
  returnedData: (data: object) => void;
}

function JSONConverter({
  jsonUrl,
  refreshRatio = 10000,
  returnedData,
}: JSONConverterProps) {
  const [data, setData] = useState({});
  const [readyToSend, setReadyToSend] = useState(false);

  const iterateIt = (dataPcs: any, masterKey = "") => {
    Object.entries(dataPcs).map(([key, value]) => {
      if (!isIterable(value))
        setData((prevState: Object) => ({
          ...prevState,
          [`${masterKey ? `${masterKey + "_"}` : ""}${key}`]: value,
        }));
      else iterateIt(value, `${masterKey ? `${masterKey + "_"}` : ""}${key}`);
    });
  };

  const apiFetch = async (url: string) => {
    const response = await fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setData({});
    iterateIt(response);
    setReadyToSend(true);
  };

  useEffect(() => {
    apiFetch(jsonUrl);
    const mainTimer = setInterval(() => apiFetch(jsonUrl), refreshRatio);
    return () => {
      clearInterval(mainTimer);
    };
  }, []);

  useEffect(() => {
    if (readyToSend) returnedData(data);
    const mainTimer = setTimeout(() => setReadyToSend(false), 4000);
    return () => {
      clearInterval(mainTimer);
    };

    
  }, [readyToSend]);

  // );
  return (
    <>
      <IconContext.Provider
        value={{
         
          className: `icon ${readyToSend ? "icon-rotate" : "icon-stop"}`,
        }}>
        <SiElectron />
      </IconContext.Provider>
    </>
  );
}

export default JSONConverter;
