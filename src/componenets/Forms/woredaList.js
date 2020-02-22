import React from 'react'

const woredaList = (props) => {
    return (
        <select className="form-control"
            onChange={props.onChangeSelectWoreda}
        >
            <option >All</option>
            <option >ቡለን</option>
            <option >አሶሳ</option>
            <option >ወምበራ</option>
            <option >ድባጤ</option>
            <option >ዳንጉር</option>
            <option >ባምባሲ</option>
            <option >ቶንጎ</option>
            <option >ሜንጌ</option>
            <option >ቦሎጅንጋፎይ</option>
            <option >ፓዌ</option>
            <option >ማኦ ኮሞ</option>
            <option >ካማሺ</option>
            <option >ቡለን</option>
            <option >አሶሳ</option>
            <option >ወምበራ</option>
            <option >ድባጤ</option>
        </select>
    )
}

export default woredaList
