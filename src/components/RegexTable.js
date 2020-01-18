import React, { useState, useEffect } from 'react'

import {Table, Modal, Input} from 'antd'

// const cols = [
//     {
//       title: '1',
//       dataIndex: '1',
//       key: '1'
//     },
//     {
//       title: '2',
//       dataIndex: '2',
//       key: '2'
//     },
//     {
//       title: '3',
//       dataIndex: '3',
//       key: '3'
//     },
//   ]

const RegexTable = (props) => {
    const [colBeingEdited, setColBeingEdited] = useState(null)


    const colsRegex = /\([^\(^\)]*\)/g

    const {regex, results} = props

    const match = regex ? regex.match(colsRegex) : null
    const length = match ? match.length : 0
    const cols = [...Array(length).keys()].map(n => (
      {
        title: `col ${n}`, 
        dataIndex: `${n}`, 
        key: n,
        onHeaderCell: (col) => {
          return {
            onClick: () => {console.log(col); setColBeingEdited(col)}
          }
        }
    }))

    const rows = results
    .map((row, i) => {
      const info = cols.reduce((agg, cur, j) => {
        return {
          ...agg,
          [cur.dataIndex]: row[j+1]
        }
      }, {})

      return {
        key: i, 
        ...info,
      }   
    })


    return (
        <div>
              {JSON.stringify(rows)}
              <Table columns={cols} dataSource={rows}/>  
              <Modal
              title="change column name"
              visible={colBeingEdited}
              onOk={() => setColBeingEdited(null)}
              onCancel={() => setColBeingEdited(null)}
              >
                <Input defaultValue={colBeingEdited ? colBeingEdited.title : ""}/>
              </Modal>
        </div>
    )
}

export default RegexTable