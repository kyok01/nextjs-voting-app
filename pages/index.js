import Image from 'next/image'
import { useState } from 'react'
import { MemoFoodVote } from '../components/FoodVote';

export default function Home() {
  const [countC, setCountC] = useState(0);
  const [countS, setCountS] = useState(0);
  const [countH, setCountH] = useState(0);
  const foods = [{emoji:"🍛", isPrepared: false, count:countC, setCount:setCountC},{emoji:"🍣", isPrepared: false,count:countS, setCount:setCountS},{emoji:"🍔", isPrepared: true,count:countH, setCount:setCountH}];
  return (
    <div className='container mx-auto text-center'>
      <h2 className='text-1xl'>投票アプリ</h2>
      <p className='text-2xl m-4'>全ての投票数：{countC+countS+countH}票</p>
      {/* 投票機能 */}
      {foods.map((food) => (<MemoFoodVote {...food} key={food.emoji}/>))}
    </div>
  )
}
