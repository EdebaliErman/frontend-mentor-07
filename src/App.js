import Card from "./Components/Card/Card";
import { data } from "./Data/data";
function App() {
  return (
    <div className="App">
      <Card name={data.orange.name}
        paragraph={data.orange.info}
        svg={data.orange.svg}
        color={"bg-orange"}
        textColor={"text-orange"}
        rounded={"rounded-l-2xl sm:rounded-t-2xl sm:rounded-b-none"}
      />
      <Card name={data.greenaqua.name}
        paragraph={data.greenaqua.info}
        svg={data.greenaqua.svg}
         color={"bg-greenaqua"}
        textColor={"text-greenaqua"}

      />
      <Card name={data.green.name}
        paragraph={data.green.info}
        svg={data.green.svg}
         color={"bg-green"}
        textColor={"text-green"}
        rounded={"rounded-r-2xl sm:rounded-b-2xl sm:rounded-t-none"}

      />
    </div>
  );
}

export default App;
