import React from 'react'

const RegionList = (props) => {
    return (
        <select className="form-control"
            value={props.value}
            onChange={props.onChangeRegion}
        >
            <option >ትግራይ</option>
            <option >አፋር</option>
            <option >አማራ</option>
            <option >ኦሮሚያ</option>
            <option >ሶማለያ</option>
            <option >ቤኒሻንጉል ጉሙዝ</option>
            <option >ደቡብ ህዝቦች</option>
            <option >ጋምቤላ</option>
            <option >ሀረሪ</option>
            <option >አዲስ አበባ</option>
            <option >ድሬ ዳዋ</option>
        </select>
    )
}

export default RegionList
