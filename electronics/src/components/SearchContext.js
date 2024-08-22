// ParentComponent.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Mobile from './Mobile';

function ParentComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileData, setMobileData] = useState([]); // Assume this is populated with data

  // Example data fetching or initialization
  React.useEffect(() => {
    // Fetch or initialize your mobileData here
    // setMobileData(fetchedData);
  }, []);

  return (
    <div>
      <SearchBar data={mobileData} setSearchTerm={setSearchTerm} />
      <Mobile mobile={mobileData} searchTerm={searchTerm} />
    </div>
  );
}

export default ParentComponent;
