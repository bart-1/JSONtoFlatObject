import { useState } from "react";
import "./App.css";
import JSONConverter from "./JSONConverter";
import Table from "./Table";

function App() {
  const [convertedData, setConvertedData] = useState({});
  return (
    <>
      <JSONConverter jsonUrl="./test.json" returnedData={(data) => setConvertedData(data)} />
      <Table data={convertedData}/>
    </>
  );
}

export default App;
