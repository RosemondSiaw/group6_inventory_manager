import React, { useState, useEffect } from 'react'
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

function AllItemsTable() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('/api/items'); // Replace with your API endpoint
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  const columns = React.useMemo(

    () => [

      {

        Header: 'ID',

        accessor: '_id', // accessor is the "key" in the data

      },

      {

        Header: 'Barcode',

        accessor: 'barcode',

      },

      {

        Header: 'Name',

        accessor: 'name',

      },

      {

        Header: 'Vendor',

        accessor: 'vendor',

      },
      {

        Header: 'Manufacturer',

        accessor: 'manufacturer',

      },

      {

        Header: 'Description',

        accessor: 'description',

      },

      {

        Header: 'Category',

        accessor: 'category',

      },

      {

        Header: 'Cost per item',

        accessor: 'costPerItem',

      },

      {

        Header: 'Stock quantity',

        accessor: 'stockQuantity',

      },

      {

        Header: 'Inventory value',

        accessor: 'inventoryValue',

      },

      {

        Header: 'Reorder level',

        accessor: 'reorderLevel',

      },

      {

        Header: 'Days per reorder',

        accessor: 'daysPerReorder',

      },

      {

        Header: 'Item reorder quantity',

        accessor: 'reorderQuantity',

      },

      {

        Header: 'Weight',

        accessor: 'weight',

        Cell: row => (
          <span>
            {row.value.weightNum} {row.value.unit}
          </span>
        ),

      },
 
      {

        Header: 'Item volume',

        accessor: 'volume',

        Cell: row => (
          <span>
            {row.value.volumeNum} {row.value.metric}
          </span>
        ),

      },

      {

        Header: 'Item Dimensions',

        accessor: 'dimensions',

        Cell: row => (
          <span>
            {row.value.length} x {row.value.width} x {row.value.height} {row.value.unit}
          </span>
        ),

      },
  

      {

        Header: 'Location',

        accessor: 'location',

      },

      {

        Header: 'Status',

        accessor: 'status',

      },

      {

        Header: 'Last update',

        accessor: 'updatedAt',

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

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

      <div className='all-items-table-container'>
        <table {...getTableProps()} className='all-items-table'>
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

export default AllItemsTable