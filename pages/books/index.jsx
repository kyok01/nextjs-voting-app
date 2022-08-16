import { useState } from 'react'
import axios from 'axios'
import { KeywordForm } from '../../components/KeywordForm'

const BOOKS_API = 'https://www.googleapis.com/books/v1/volumes'

export default function Books() {
  const [keyword, setKeyword] = useState('')
  const [books, setBooks] = useState([])

  const searchBooks = (inputedKeyword) => {
    axios
      .get(`${BOOKS_API}?q=${inputedKeyword}`)
      .then((res) => {
        const {
          data: { items: result },
        } = res
        setBooks(result)
      })
      .catch(() => {
        alert('検索失敗…')
      })
  }

  const updateKeyword = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <div>
      <KeywordForm
        keyword={keyword}
        handleChange={updateKeyword}
        handleClick={searchBooks}
      />
      {/* 検索結果 */}
      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.volumeInfo.title}</li>
        })}
      </ul>
    </div>
  )
}