import React from 'react'
import { Link } from 'react-router-dom'

const TopSearches = ({className,visibility,titleName}) => {
  return (
    <div className="top-searches">
    <div className="results">
      <div className={`${className}`}>
        <span className={`${visibility}`}>Top searches :</span>
        <ul className="list-unstyled d-flex flex-wrap">
          <li>
            <Link to="#">development</Link>
          </li>
          <li>
            <Link to="#">agile</Link>
          </li>
          <li>
            <Link to="#">design</Link>
          </li>
          <li>
            <Link to="#">startup</Link>
          </li>
          <li>
            <Link to="#">delivery</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default TopSearches
