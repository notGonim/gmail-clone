import React from 'react'
import './sidebar.scss'

export const SidebarOptions = ({ Icon, title, number, selected }) => {
    return (
        <div className={`sidebar_option ${selected && "sidebar_option__active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}
