import React from "react"
import "./SearchError.scss"


const SearchError = ({message}) => {
    return (
        <div className="searchError">
            <p>
               {message}       
            </p>
        </div>
    )
}

export default SearchError