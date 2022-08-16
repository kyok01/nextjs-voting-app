import Image from 'next/image'
import { useState } from 'react'
import { FoodVote } from '../components/FoodVote';

export default function Home() {
  const [countC, setCountC] = useState(0);
  return (
    <div className='container mx-auto text-center'>
      <h2 className=''>投票アプリ</h2>
      {/* 投票機能 */}
      <FoodVote count={countC} setCount={setCountC}/>
    </div>
  )
}
