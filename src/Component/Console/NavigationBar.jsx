import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {MdDashboard } from "react-icons/md"
import {RiFolderUserFill } from "react-icons/ri"
import {AiFillQuestionCircle } from "react-icons/ai"
import {FaSignature } from "react-icons/fa"
import {GrDocument } from "react-icons/gr"

const NavigationBar = () => {
  return (
    <Fragment>
        <div style={{width: 250, height: "calc(100vh - 50px)", position: "fixed", top: 50, left: 0, zIndex: 98, padding: 10}}>
            <ComponentNavigationItem link={"/app/console/dashboard"} icon={<MdDashboard />} text={"Dashboard"} /> 
            <ComponentNavigationItem link={"/app/console/contract-manager"} icon={<RiFolderUserFill />} text={"Quản lý hợp đồng"} /> 
            <ComponentNavigationItem link={"/app/console/signature-manager"} icon={<FaSignature />} text={"Quản lý chữ ký"} /> 
            <ComponentNavigationItem link={"/app/console/verify-manager"} icon={<GrDocument />} text={"Xác minh chữ ký"} /> 
            <ComponentNavigationItem link={"/app/console/user-manual"} icon={<AiFillQuestionCircle />} text={"Tài liệu hướng dẫn sử dụng"} /> 
        </div>
        <div style={{width: 250}}></div>
    </Fragment>
  )
}

const ComponentNavigationItem= ({link, icon, text})=> {
    return (
        <NavLink to={link}>
            {
                ({isActive})=> 
                <div className={isActive=== true ? "active-navigation-bar" : "in-active-navigation-bar"} style={{display: "flex", alignItems: "center", gap: 8, padding: 10}}>
                    <div className={"c-flex-center"}>{icon}</div>
                    <div style={{fontSize: 16}}>{text}</div>
                </div>
            }
        </NavLink>
    )
}

export default NavigationBar
