import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map((dataPoint)=>dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

	return (
		<div className="Chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
					key={dataPoint.id}
				/>
			))}
		</div>
	);
};

export default Chart;
