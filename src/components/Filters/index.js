import FilterName from "./FilterName"
import {useState} from "react"
import createURL from "utils/filter-manager"
import FilterPrice from "./FilterPrice"

export default function Index({applyFilters, filterName, filterPriceFrom, filterPriceTo}){
  const [name, setName] = useState(filterName);
  const [priceFrom, setPriceFrom] = useState(filterPriceFrom);
  const [priceTo, setPriceTo] = useState(filterPriceTo);
  
  const prepareFilters = () => {
    return {
      name,
      priceFrom,
      priceTo
    }
  }
  
  const handleChangeName = (value) => {
    setName(value);
    applyFilters(createURL(prepareFilters()));
  }
  
  const handleChangeAge = (priceFrom, priceTo) => {
    setPriceFrom(priceFrom);
    setPriceTo(priceTo);
    applyFilters(createURL(prepareFilters()));
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