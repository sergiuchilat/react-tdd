import PropTypes from 'prop-types';

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
          name={'filter-name'}
          type="text"
          value={value}
          onChange={(event) => {handleChange(event)}}
        />
      </div>
    </div>
  )
}

FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}