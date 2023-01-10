import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignatureManager from '../../SignatureManager/SignatureManager'
import ContractManager from '../ContractManager/ContractManager'
import Dashboard from '../Dashboard/Dashboard'
import UserManual from '../UserManual/UserManual'
import VerifySignature from '../VerifySignature/VerifySignature'
import NavigationBar from './NavigationBar'

const Console = () => {
  return (
    <div className={"c-flex-center"} style={{width: "100%", height: "calc(100vh - 50px)"}}>
        <NavigationBar />
        <div style={{width: "calc(100% - 250px)", height: "100%", background: "#f2f0f5"}}>
          <Routes>
              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path={"/contract-manager"} element={<ContractManager />} />
              <Route path={"/signature-manager"} element={<SignatureManager />} />
              <Route path={"/verify-manager"} element={<VerifySignature />} />
              <Route path={"/user-manual"} element={<UserManual />} />
          </Routes>
        </div>
    </div>
  )
}

export default Console
