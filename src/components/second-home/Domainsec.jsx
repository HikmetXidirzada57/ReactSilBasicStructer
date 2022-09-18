import React from 'react'
import { ContainerMini } from '../../Component'
import DomainLeft from '../domian-parts/DomainLeft'
import DomainRight from '../domian-parts/DomainRight'

const Domainsec = () => {
  return (
    <div className='domainsec'>
      <ContainerMini>
        <div className="row justify-content-between align-items-center">
          <DomainLeft/>
          <DomainRight/>
        </div>
      </ContainerMini>
    </div>
  )
}

export default Domainsec
