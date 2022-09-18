import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { FormGroup, Input } from "reactstrap";
import { Link } from 'react-router-dom';
const InputSearch = ({background,colorS,iconColor}) => {
  return (
    <div className=" myInput d-flex flex-wrap justify-content-center align-items-center">
    <div className="col-lg-2">
      <FormGroup>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
          className={`select-input ${background} ${colorS}`}
        >
          <option>Resources</option>
          <option>test</option>
          <option>test</option>
        </Input>
      </FormGroup>
    </div>
    <div className="col-lg-8">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search something..."
          className={`my-input form-control ${background}`}
        />
        <Link to="/search" className="search-icon">
          <SearchIcon sx={{color:`${iconColor}`}} />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default InputSearch
