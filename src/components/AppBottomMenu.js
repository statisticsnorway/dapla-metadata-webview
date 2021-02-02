import React from 'react'
import { Link, Footer, Button } from '@statisticsnorway/ssb-component-library'
import { ssb_logo_rgb } from '@statisticsnorway/dapla-js-utilities'

function AppBottomMenu () {
  return (
    <Footer>
      <div className="top-row flex-row justify-space-between flex-wrap">
        <img src={ssb_logo_rgb} alt="Logo" style={{ width: '285px' }} />
        <Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}> Til Toppen
        </Button>
      </div>

      <div className="footer-content">
        Fyll med innhold
      </div>

      <div className="bottom-row flex-row justify-space-between flex-wrap">
        <div className="global-links">
          <Link href="https://www.ssb.no/" isExternal negative>Statistisk sentralbyrå © 2020</Link>
          <Link href="https://www.ssb.no/a-aa" isExternal negative>A-Å</Link>
          <Link href="https://www.ssb.no/nettstedskart" isExternal negative>Nettstedskart</Link>
        </div>
        <div className="social-links">
        </div>
      </div>
    </Footer>
  )
}

export default AppBottomMenu