export function KeywordForm({ keyword, handleChange }) {
    //   const [keyword, setKeyword] = useState('')
    return (
      <div>
        <input type='text' onChange={handleChange} />
        <div
          onClick={() => {
            alert(keyword)
          }}
        >
          ボタン
        </div>
      </div>
    )
  }