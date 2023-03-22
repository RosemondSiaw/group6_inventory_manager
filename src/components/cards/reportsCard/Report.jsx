import React from 'react';
import styled from 'styled-components';
import '../../../styles/colors/Colors.scss'

const DynamicBackground = styled.div`
background-color: ${props =>
        props.tag === 'Daily' ? '#90A17D'
            : props.tag === 'Yearly' ? '#B08BBB'
                : '#6096B4'
    };
`

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
                        <DynamicBackground className='tag' tag={value.tag} > {value.tag} </DynamicBackground>
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