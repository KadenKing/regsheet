import React, { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import Highlighter from 'react-highlight-words'


const EditableText = (props) => {
    const [editing, setEditing] = useState(false)

    const { regex, onChange, value } = props

    return (
        <div>
            { editing ?
            <TextArea onBlur={() => setEditing(false)} value={value} onChange={e => onChange(e.target.value)}/>
            :
            <div onClick={() => setEditing(true)}>
            <Highlighter
                highlightClassName="highlighted"
                searchWords={[regex ? regex : "^$"]}
            textToHighlight={value}  
            />
            </div>
        }
        </div>
    )
}

export default EditableText