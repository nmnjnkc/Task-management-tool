import React from "react"
import "./SearchError.scss"


const SearchError = ({message, errorClass}) => {
    return (
        <div className={`searchError ${errorClass}`}>
            <p>
               {message}       
            </p>
        </div>
    )
}

export default SearchError