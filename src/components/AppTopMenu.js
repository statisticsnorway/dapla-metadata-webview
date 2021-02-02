import React from 'react'
import { Divider, Input, Link, Header } from '@statisticsnorway/ssb-component-library'
import { ssb_logo_rgb } from '@statisticsnorway/dapla-js-utilities'

function AppTopMenu () {
  return (
    <Header>
      {/* Fill with content, as below */}
      <div className="global-links" style={{ float: 'right', marginBottom: '12px', marginTop: '10px' }}>
        <Link href=" ">top-item 3</Link>
        <Link href=" ">top-item 2</Link>
        <Link href=" ">top-item 1</Link>
      </div>
      <div className="top-row flex-row justify-space-between flex-wrap" style={{ width: '100%' }}>
        <img src={ssb_logo_rgb} alt="Logo" style={{ width: '285px' }} />
        <div className="searchfield" style={{ width: '285px', alignSelf: 'flex-end' }}>
          <Input ariaLabel="Input field Search" searchField placeholder="Search text" />
        </div>
      </div>
      <div className="header-content" style={{ marginBottom: '20px', marginTop: '14px' }}>
        <Divider />
      </div>
    </Header>
  )
}

export default AppTopMenu