import React from 'react'
import AdobeText from '../adobe-text/AdobeText'
import Adobe from '../adobe/Adobe'
import TopSearches from '../top-searches/TopSearches'

const Adobefull = () => {
  return (
    <div className='adobe-full text-left'>
      <Adobe col1={"col-lg-2"} col2={"col-lg-4"}/>
      <AdobeText/>
      <TopSearches className={"d-flex-justify-content-start"} visibility={"d-none"}/>
    </div>
  )
}

export default Adobefull
