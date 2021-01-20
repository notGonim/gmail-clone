import React from 'react'
import './Section.scss'
export const Section = ({ Icon, title, color, selected }) => {
    return (
        <div className={`section ${selected && 'section_selected'} `}
            style={{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`
            }}>
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}
