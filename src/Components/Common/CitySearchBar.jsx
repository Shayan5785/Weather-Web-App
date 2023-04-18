import React from 'react'
import SearchBox from './SearchBox'
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons'

function CitySearchBar({
    city, 
    searching, 
    handleSearch, 
    onSearch, }) {

  return (
    <div style={{
        position: 'relative',
        left:'15px',
        display:"flex", 
        alignItems:'center',
        }}>
        {
          searching ? (
            <SearchBox onSearch={onSearch} />
        ) : <h1 style={{marginRight:"10px"}}>{city}</h1>
        }
        
        {
          searching ? (
            <CloseCircleOutlined onClick={handleSearch}/>
        ) : <SearchOutlined onClick={handleSearch} />
        }
        
    </div>
  )
}

export default CitySearchBar