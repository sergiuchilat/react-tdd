import FilterName from "./FilterName"
import {useState} from "react"
import createURL from "utils/filter-manager"
import FilterPrice from "./FilterPrice"
import PropTypes from "prop-types";

export default function Index({applyFilters, filterName, filterPriceFrom, filterPriceTo}){
  const [name, setName] = useState(filterName);
  const [priceFrom, setPriceFrom] = useState(filterPriceFrom);
  const [priceTo, setPriceTo] = useState(filterPriceTo);
  
  const handleChangeName = (value) => {
    setName(value);
    applyFilters(createURL({
      name,
      priceFrom,
      priceTo
    }));
  }
  
  const handleChangeAge = (priceFrom, priceTo) => {
    setPriceFrom(priceFrom);
    setPriceTo(priceTo);
    applyFilters(createURL({
      name,
      priceFrom,
      priceTo
    }));
  }

  return (
    <>
      <h1>Filters</h1>
      <div>
        <FilterName value={name} onChange={handleChangeName}/>
        <FilterPrice from={priceFrom} to={priceTo} onChange={handleChangeAge}/>
      </div>
    </>
  )
}

Index.propTypes = {
  applyFilters: PropTypes.func,
  filterName: PropTypes.string,
  filterPriceFrom: PropTypes.number,
  filterPriceTo: PropTypes.number
}