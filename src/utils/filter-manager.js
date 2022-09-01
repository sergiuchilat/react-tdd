const validFilter = (filterKey, filterValue) => {
  return typeof filterKey === 'string' &&
    (typeof filterValue === "string" || typeof filterValue === 'number')
}

export const parseFiltersFromURL = (url) => {
  
  if(!url.length){
    return {};
  }
  const filterParts = url.substring(1)?.split('&');
  
  if(!filterParts){
    return {};
  }
  
  const filters = {};
  for (const filterPart of filterParts) {
    const [filterKey, filterValue] = filterPart.split('=');
    filters[filterKey] = filterValue;
  }
  
  return filters;
}

const createURL = (filters) => {
  let url = '';
  
  if(filters && Object.keys(filters).length){
    const urlFilters = [];
    for (const [filterKey, filterValue] of Object.entries(filters)) {
    
      if(validFilter(filterKey, filterValue)){
        urlFilters.push(`${filterKey}=${filterValue}`)
      }
    }
    
    if(urlFilters.length){
      url = url + '?' + urlFilters.join('&');
    }
  }
  
  return url;
}

export default createURL;