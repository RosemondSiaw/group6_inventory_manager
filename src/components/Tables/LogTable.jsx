import React from 'react'
import { useTable } from 'react-table'
import './css/Tables.scss'

function LogTable() {
  const data = React.useMemo(

    () => [

      {

        col1: 'CTR3425',
        col2: 'Gloves',
        col3: '23',
        col4: 'Yes',
        col5: 'N/A',
        col6: 'Apex Medical Co.',
        col7: 'Jordan Eko',

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

        Header: 'Units',

        accessor: 'col3',

      },

      {

        Header: 'In',

        accessor: 'col4',

      },

      {

        Header: 'Out',

        accessor: 'col5',

      },

      {

        Header: 'Manufacturer',

        accessor: 'col6',

      },

      {

        Header: 'Ordered by',

        accessor: 'col7',

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
    <div className="table-container">
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