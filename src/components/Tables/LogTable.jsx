import React from 'react'
import { useTable } from 'react-table'
import './css/Tables.scss'

function LogTable() {
  const data = React.useMemo(

    () => [

      {

        col1: 'CTR3425',
        col2: 'Irvick yringes',
        col3: 'Sandrine Couper',
        col4: 'N/A',
        col5: 'N/A',
        col6: 'Delete',
        col7: '12',
        col8: 'Tuesday, March 28, 2023, 11:24 AM',
        col9: 'Clinique Des Roses',
        col10: 'N/A',

      },

    ],

    []

  )

  const columns = React.useMemo(

    () => [

      {

        Header: 'ID',

        accessor: 'col1', // accessor is the "key" in the data

      },

      {

        Header: 'Item name',

        accessor: 'col2',

      },

      {

        Header: 'User',

        accessor: 'col3',

      },

      {

        Header: 'Staff',

        accessor: 'col4',

      },

      {

        Header: 'Vendor',

        accessor: 'col5',

      },

      {

        Header: 'Action',

        accessor: 'col6',

      },

      {

        Header: 'Quantity',

        accessor: 'col7',

      },

      {

        Header: 'Timestamp',

        accessor: 'col8',

      },

      {

        Header: 'Location',

        accessor: 'col9',

      },

      {

        Header: 'Note',

        accessor: 'col10',

      },

    ],

    []

  )

  const {

    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,

  } = useTable({ columns, data })

  return (
    <div className="logs-table-container">
      <table className='log-table' {...getTableProps()} >

        <thead>

          {headerGroups.map(headerGroup => (

            <tr {...headerGroup.getHeaderGroupProps()}>

              {headerGroup.headers.map(column => (

                <th

                  {...column.getHeaderProps()}

                >

                  {column.render('Header')}

                </th>

              ))}

            </tr>

          ))}

        </thead>

        <tbody {...getTableBodyProps()}>

          {rows.map(row => {

            prepareRow(row)

            return (

              <tr {...row.getRowProps()}>

                {row.cells.map(cell => {

                  return (

                    <td

                      {...cell.getCellProps()}

                    >

                      {cell.render('Cell')}

                    </td>

                  )

                })}

              </tr>

            )

          })}

        </tbody>

      </table>
    </div>
  )
}

export default LogTable