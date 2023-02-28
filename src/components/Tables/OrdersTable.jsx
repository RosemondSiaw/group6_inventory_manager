import React from 'react'
import { useTable, usePagination } from 'react-table'
import './css/Tables.scss'

function OrdersTable() {
    const data = React.useMemo(

        () => [
    
          {
    
            col1: 'ORD38632',
            col2: '28/02/2023',
            col3: 'In progress',
            col4: 'Walmeck Prenium 10oz syringe',
            col5: '20',
            col6: 'Jeannette Dogbe', 
            col7: '28/02/2023 at 3:05 PM'   
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
    
            Header: 'Date',
    
            accessor: 'col2',
    
          },
    
          {
    
            Header: 'Status',
    
            accessor: 'col3',
    
          },
    
          {
    
            Header: 'Item',
    
            accessor: 'col4',
    
          },
    
          {
    
            Header: 'Units',
    
            accessor: 'col5',
    
          },
    
          {
    
            Header: 'Ordered by',
    
            accessor: 'col6',
    
          },
    
          {
    
            Header: 'Received',
    
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
        // ADD DATE, A-Z, etc SORTING TO THIS TABLE
       */}
            <div className='orders-table-container'>
                <table {...getTableProps()} className='orders-table'>
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

export default OrdersTable