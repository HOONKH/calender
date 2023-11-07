import Box from "./componets/Box";

const boxArray = [
  {
    bgColor: "bg-red-500",
    title: "BoxA",
    isRounded: false,
  },
  {
    bgColor: "bg-green-500",
    title: "BoxB",
    isRounded: true,
  },
  {
    bgColor: "bg-amber-500",
    title: "BoxC",
    isRounded: false,
  },
  {
    bgColor: "bg-blue-500",
    title: "BoxD",
    isRounded: true,
  },
];

const App = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex justify-center items-center gap-12">
      {boxArray.map((v, i) => {
        return (
          <Box
            key={i}
            bgColor={v.bgColor}
            title={v.title}
            isRounded={v.isRounded}
          />
        );
      })}
    </div>
  );
};

export default App;

// 자바 스크립트 문법쓸때 {}
