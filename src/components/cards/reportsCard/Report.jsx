import React from 'react'
function Report(props) {
    
    return (
        <>
            {props.details.map((value, index) => (
                <div className='report-container' key={index}>
                    <div className="report-header">
                        <h1>{value.title}</h1>
                        <p className="date">{value.creation_date}</p>
                    </div>
                    <div className="tag-container">
                        <span className="tag"> {value.tag} </span>
                    </div>
                    <div className="report-card-deets">
                        <p className="file-size"> {value.file_size} </p>
                        <button>Download</button>
                    </div>
                </div>
            ))}
            ;
        </>
    )
}

export default Report