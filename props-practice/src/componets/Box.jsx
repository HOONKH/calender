const Box = ({ bgColor, title, isRounded }) => {
  return (
    <div
      className={`${bgColor} text-white flex justify-center items-center w-32 h-32 ${
        isRounded && "rounded-full"
      }`}
    >
      {title}
    </div>
  );
};

export default Box;
