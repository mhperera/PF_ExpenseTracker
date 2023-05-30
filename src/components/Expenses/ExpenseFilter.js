import React from 'react';

const ExpenseFilter = (props) => {

    const handleDropdownChange = (e) => {
        props.onFilterYear(e.target.value);
    }

    return (
        <div className='ExpenseFilter'>
            <div className='ExpenseFilter__control'>
                <label>Filter by year</label>
                <select onChange={handleDropdownChange} value={props.selectedYear}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;