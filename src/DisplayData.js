import React from 'react';

const DisplayData = ({quoteData,fontSize}) =>{
	// console.log(quoteData);
	return(
		quoteData.map((n,i)=>{
			return(
				<div 
				key={i}>	
				<p id='text'>{quoteData[i].quote} </p>
				<p id='author'>{quoteData[i].author}</p>
				</div>
			)
		})
	)
}

export default DisplayData;
