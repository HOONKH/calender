import DataCard from "./components/DataCard";
import DateData from "./date.json";

const App = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex-col flex justify-center items-center">
      <h1 className="mb-12 text-gray-100 text-3xl font-bold font">2023.11</h1>
      <ul className="grid grid-cols-7 gap-3">
        <li className="w-32 h-32"></li>
        <li className="w-32 h-32"></li>
        {DateData.map((v, i) => {
          return <DataCard key={i} date={v.date} todos={v.todos} />;
        })}
      </ul>
    </div>
  );
};

export default App;
