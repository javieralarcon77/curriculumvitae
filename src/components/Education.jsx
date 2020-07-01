import React from 'react';

const Education = props => (
    <div className="Education">
        <h2>Educación</h2>
        <div className="Education-container">
            {
                props.data.map( (edu , index ) => (
                    <div className="Eductacion-item" key={ `Edu-${index}` }>
                        <h3>
                            { edu.degree } - { edu.institution } | 
                            <span>{ edu.startDate } - { edu.endDate }</span>
                        </h3>
                        <p>{ edu.description }</p>
                    </div>        
                ))
            }
        </div>
    </div>
)

export default Education;