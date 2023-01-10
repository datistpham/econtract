import React, { Fragment } from 'react'
import Logo from './Logo'
import RightSide from './RightSide'

const Header = () => {
  return (
    <Fragment>
        <div className={"c-flex-center"} style={{width: "100%", height: 50, position: "fixed", top: 0, left: 0, zIndex: 99, background: "#567df4", padding: 10, justifyContent: "space-between"}}>
            <Logo />
            <RightSide />
        </div>
        <div style={{width: "100%", height: 50, }}></div>
    </Fragment>
  )
}

export default Header