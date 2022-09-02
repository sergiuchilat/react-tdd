import {useState} from "react"
import PropTypes from "prop-types";

export default function FilterPrice({from, to, onChange}){
  const [priceFrom, setPriceFrom] = useState(from);
  const [priceTo, setPriceTo] = useState(to);
  
  const handleChange = (event) => {
    const value = event.target.value || '';
    if(event.target.name === 'filter-price-from'){
      setPriceFrom(value)
    } else if(event.target.name === 'filter-price-to'){
      setPriceTo(value)
    }
    onChange(priceFrom, priceTo)
  }
  return (
    <div>
      <div className={'priceRange'}>
        Price from
        <input
          name={'filter-price-from'}
          type="number"
          value={priceFrom}
          onChange={handleChange}
        />
        to
        <input
          name={'filter-price-to'}
          type="number"
          value={priceTo}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

FilterPrice.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  onChange: PropTypes.func
}