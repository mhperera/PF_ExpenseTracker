import React from 'react'

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if(props.maxValue>0){
        barFillHeight = Math.round( (props.value / props.maxValue ) * 100  ) + '%';
    }

    return (
        <div className='ChartBar'>
            <div className="ChartBar__inner">
                <div className="ChartBar__fill" style={ { 'height': barFillHeight } }></div>
            </div>
            <div className="ChartBar__label">{props.label}</div>
            <div className="ChartBar__label">{barFillHeight}</div>
        </div>
    )
}

export default ChartBar