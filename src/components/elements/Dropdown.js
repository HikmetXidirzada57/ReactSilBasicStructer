import React from 'react'
import  {UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
const Element = () => {
  return (
    <>
  <UncontrolledDropdown>
  <DropdownToggle
    caret
    color="white"
  >
    main
  </DropdownToggle>
  <DropdownMenu white>
    <DropdownItem language>
    </DropdownItem>
    <DropdownItem>
   
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>
    </>
  )
}

export default Element

 