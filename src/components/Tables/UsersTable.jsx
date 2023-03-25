import React from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'
import './css/Tables.scss'

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function UsersTable() {
  const data = React.useMemo(

    () => [

      {
        col1: 'SYR64867-5322',
        col2: 'Carla',
        col3: 'Jamison',
        col4: 'Surgeon',
        col5: 'carla.jamison@randomemail.com',
        col6: '+2331112223333',
        col7: 'Standard',
      },

    ],

    []

  )

  const columns = React.useMemo(

    () => [

      {

        Header: 'Staff ID',

        accessor: 'col1', // accessor is the "key" in the data

      },

      {

        Header: 'First Name',

        accessor: 'col2',

      },

      {

        Header: 'Last Name',

        accessor: 'col3',

      },

      {

        Header: 'Job Title',

        accessor: 'col4',

      },

      {

        Header: 'Email',

        accessor: 'col5',

      },

      {

        Header: 'Telephone Number',

        accessor: 'col6',

      },

      {

        Header: 'Access Type',

        accessor: 'col7',

      },

    ],

    []

  )

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // selectedFlatRows,
    state: { pageIndex, pageSize, /* selectedRowIds*/ },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
  return (
    <>
      {/*
  <pre>
    <code>
      {JSON.stringify(
        {
          pageIndex,
          pageSize,
          pageCount,
          canNextPage,
          canPreviousPage,
        },
        null,
        2
      )}
    </code>
  </pre>
  */}
      {/* TODO
    ADD DATE, A-Z, etc SORTING TO THIS TABLE
    ADD CATEGORY FILTER
   */}

      <div className='users-table-container'>
        <table {...getTableProps()} className='users-table'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* 
    Pagination can be built however you'd like. 
    This is just a very basic UI implementation:
  */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {/*

    <pre>
      <code>
        {JSON.stringify(
          {
            selectedRowIds: selectedRowIds,
            'selectedFlatRows[].original': selectedFlatRows.map(
              d => d.original
            ),
          },
          null,
          2
        )}
      </code>
    </pre>
    
    */}
      </div>
    </>
  )
}

export default UsersTable