import React from 'react'

const zoneList = (props) => {
    return (
        <select className="form-control"
            onChange={props.onChangeSelectZone}
        >
            <option >All</option>
            <option >መተከል</option>
            <option >አሶሳ</option>
            <option >ካማሺ</option>
            
        </select>
    )
}

export default zoneList
