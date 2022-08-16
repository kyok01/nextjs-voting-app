import { memo } from "react";

const FoodVote = ({ emoji, isPrepared, count, setCount }) => {
  return (
    <div className="flex flex-wrap justify-center text-xl md:text-2xl">
      <p className="m-4 w-20 md:w-32">{emoji}</p>
      <p className="m-4 w-20 md:w-32">{count} 票</p>
      {isPrepared ? (
        <p className="m-4 w-20 md:w-32">準備完了</p>
      ) : (
        <div
          className="m-4 w-20 md:w-32"
          onClick={() => {
            setCount((prevValue) => prevValue + 1);
          }}
        >
          投票
        </div>
      )}
    </div>
  );
};

export const MemoFoodVote = memo(FoodVote);
