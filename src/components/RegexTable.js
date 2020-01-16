import React from 'react'

import {Table} from 'antd'

const cols = [
    {
      title: '1',
      dataIndex: '1',
      key: '1'
    },
    {
      title: '2',
      dataIndex: '2',
      key: '2'
    },
    {
      title: '3',
      dataIndex: '3',
      key: '3'
    },
  ]

const RegexTable = (props) => {
    const colsRegex = /\(.*\)/mg

    const {regex, data} = props

    // const nCols = regex ? regex.match(colsRegex).length : 0

    return (
        <div>
                {/* {nCols} */}
              <Table columns={cols}/>  
        </div>
    )
}

export default RegexTable