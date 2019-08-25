import React, { useState } from 'react';
import styled from 'styled-components';



const Forms = ({ setIsModalOpen }) => {
    const [prevMonthData, setPrevMonthData] = useState();
    const [currentMonthData, setCurrentMonthData] = useState();


   const  handleFormSubmit = e => {
    e.preventDefault();

   }
 

    return(
        <form>
            <div>
                <label>Previous Month</label>
                <input type="text" name="previousMonth"></input>
            </div>
            <div>
            <label>Current Month</label>
                <input type="text" name="currentMonth"></input>
            </div>
            <input type="submit" onClick={(e)=> {handleFormSubmit(e); setIsModalOpen(false)}}></input>
        </form>
          

    )

}

export default Forms; 