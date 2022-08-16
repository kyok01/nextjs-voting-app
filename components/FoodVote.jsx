export const FoodVote = ({count, setCount}) => {
  return (
    <div className="flex">
      <p className="flex-auto">🍛</p>
      <p className="flex-none">{count} 票</p>
      <div
        className="flex-auto"
        onClick={() => {
          setCount((prevValue) => prevValue + 1);
        }}
      >
        投票
      </div>
    </div>
  );
};
