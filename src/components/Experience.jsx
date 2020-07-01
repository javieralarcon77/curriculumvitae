import React from 'react';

const Experience = props => (
    <div className="Experience">
        <h2>Experiencia</h2>
        <div className="Experience-container">
        {
            props.data.map( (exp , index ) => (
                <div className="Experience-item" key={ `Exp-${index}` }>
                    <h3>
                        { exp.company } - { exp.jobTitle } | 
                        <span>{ exp.startDate } - { exp.endDate }</span>
                    </h3>
                    <p>{ exp.jobDescription }</p>
                </div>
            ))
        }
        </div>
    </div>
)

export default Experience;