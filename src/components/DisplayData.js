import React from 'react';
const DisplayData = ({quoteData}) =>{
	return(
	<div>	
	<p id='text'><i className="fas fa-quote-left"></i> {quoteData.quote} <i className="fas fa-quote-right"></i> </p>
	<p id='author'>{quoteData.author}</p>
	</div>
	)
}
export default DisplayData;
