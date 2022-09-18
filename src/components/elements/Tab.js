import React from 'react'
import {  Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'

const Tab = ({tabname,tabName2,tabName3,tabName4}) => {
  return (
<div>
  <Nav tabs>
    <NavItem>
      <NavLink
        className="active"
        onClick={function noRefCheck(){}}
      >
        {tabname}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className=""
        onClick={function noRefCheck(){}}
      >
        {tabName2}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className=""
        onClick={function noRefCheck(){}}
      >
        {tabName3}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className=""
        onClick={function noRefCheck(){}}
      >
        {tabName4}
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab="1">
    <TabPane tabId="1">
      <Row>
        <Col sm="6">
          <h6 className='m-3'>
            Fist Document
          </h6>
          <p className='m-3'>Lorem ispum</p>
        </Col>
        <Col sm="6">
          <h6 className='m-3'>
            Fist Document
          </h6>
          <p className='m-3'>Lorem ispum1</p>
        </Col>
      </Row>
    </TabPane>
    <TabPane tabId="2">
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>
              Special Title Treatment
            </CardTitle>
            <CardText>
                Second Document
            </CardText>
          </Card>
        </Col>
      </Row>
    </TabPane>
  </TabContent>
</div>
  )
}

export default Tab
