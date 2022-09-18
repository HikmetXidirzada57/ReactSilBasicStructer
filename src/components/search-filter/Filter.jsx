import React from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import SearchIcon from '@mui/icons-material/Search';
import { FilterTitle } from "../../Component";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Filter = (props) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
      <div className="filter-side">
        <aside className="main-name">
            <div className="d-flex justify-content-between">
            <FilterTitle>{props.name}</FilterTitle>
            <KeyboardArrowUpIcon sx={{color:" rgb(174, 169, 169)"}}/>
            </div>
          <div className="search-only">
            <input
              className="form-control"
              type="text"
              placeholder="Search sector"
            />
          <span className="icon">
            <SearchIcon sx={{color:" rgb(174, 169, 169)"}}/>
          </span>
          </div>
          <ul className="list-unstyled">
            <li>
              <Checkbox onChange={onChange}>Adminstrative</Checkbox>
            </li>
            <li>
              <Checkbox checked onChange={onChange}>
                Arts & Design
              </Checkbox>
            </li>
            <li>
              <Checkbox onChange={onChange}>Business</Checkbox>
            </li>
            <li>
              <Checkbox onChange={onChange}>Consulting</Checkbox>
            </li>
            <li>
              <Checkbox onChange={onChange}>CistomerService & Support</Checkbox>
            </li>
          </ul>
        </aside>
      </div>
  );
};

export default Filter;
