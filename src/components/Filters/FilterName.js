export default function FilterName({value, onChange}){
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value)
  }
  return (
    <div>
      <div>
        Name
        <input
          name={'filter-age-ro'}
          type="text"
          value={value}
          onChange={(event) => {handleChange(event)}}
        />
      </div>
    </div>
  )
}