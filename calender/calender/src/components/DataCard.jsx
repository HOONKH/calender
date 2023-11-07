const DataCard = ({ date, todos }) => {
  return (
    <li className="bg-gray-50 w-32 h-32 rounded-lg shadow-2xl flex flex-col">
      <div
        className={`bg-green-200 ${date % 7 === 4 && "bg-blue-100"} ${
          date % 7 === 5 && "bg-red-200"
        } p-2 rounded-t-md`}
      >
        {date}
      </div>
      <div className="bg-gray-200 grow ">
        {todos.map((v, i) => {
          return <div key={i}>{v}</div>;
        })}
      </div>
    </li>
  );
};

export default DataCard;
