import React from 'react'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../../Main.scss";
const Arrow = () => {
  return (
    <div className='d-flex flex-wrap aligin-items-center'>
      <div className="arrow one">
        <span className='count'><LooksOneIcon className='arrow-right' sx={{fontSize:"35px"}}/></span>
        <span className='text'>Type to search</span>
      </div>
      <ArrowRightAltIcon sx={{marginTop:"5px"}}/>
      <div className="arrow two">
        <span className='count'><LooksTwoIcon className='arrow-right' sx={{fontSize:"35px"}}/></span>
        <span className='text'>Find domains</span>
      </div>
      <ArrowRightAltIcon sx={{marginTop:"5px"}}/>
      <div className="arrow three">
        <span className='count'><Looks3Icon className='arrow-right' sx={{fontSize:"35px"}}/></span>
        <span className='text'>Filter them</span>
      </div>
    </div>

  )
}

export default Arrow
