import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,currency } = useContext(AppContext);
    const [newBudget,SetnewBudget]=useState(budget);
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input type='number' step='10'value={newBudget} onChange={(e)=>{SetnewBudget(e.target.value)
            if (newBudget>20000){
                alert('Budget Upper Limit is 20000 and Your value is '+ newBudget+'which is not Allowed.')

            }
            }}></input>
        </div>
    );
};
export default Budget;
