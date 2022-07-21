# JSON to flat object converter

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

This app get JSON (async fetch from local file or API) and converts it to simple, flat, key => value object and put it into state. It iterate inside JSON when it is possible and if it finds a pair key => value, where value is an object or array, iterate deeper and gets all non iterable values, add them key name, created from all keys away in path. 
JSON file is refresh each time in seted interval  (default 10s). Animation of icon signalize refreshing.
For presentation all converted JSON is puted into table.

## Installation

Download [zip](https://github.com/bart-1/JSONtoFlatObject/archive/refs/heads/master.zip)

```bash
cd JSONtoFlatObject-master
npm install
```

## Usage

```javascript
function App() {
  const [convertedData, setConvertedData] = useState({});
  return (
    <>
      <JSONConverter jsonUrl="./test.json" returnedData={(data) => setConvertedData(data)} />
      <Table data={convertedData}/>
    </>
  );
}
```
JSONConverter attribute jsonUrl="..." is place for path to JSON file or API url

## Contributing
Please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
