import React, { Component } from 'react';
import DisplayData from './DisplayData';
import { SocialIcon } from 'react-social-icons';

import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state= {
			data:[],
			inputQuote:'',
			inputAuthor:'',
			random:Math.floor(Math.random() * 10),
			route:'main',
			message:''
		}	
	} 
	componentDidMount(){ //fetch data from the database
		fetch('http://localhost:3000/getQuote')
		.then(response=>response.json())
		.then(data=> {
			this.setState({data})
		})
	}

	handleClick = () =>{	//handle random, get new random number if random is same as previous one
	 	let random =  Math.floor(Math.random() * this.state.data.length);
		 	do{
		 	 random =  Math.floor(Math.random() * this.state.data.length);
		 	}while(random === this.state.random)
 		this.setState({random});  
	 }


	onHandleChange=(e)=>{
		const {name,value} = e.target
		this.setState({[name]:value, message:''});
	}

	onHandleSubmit = (e) => { //Handle submit new quote to the database
		fetch('http://localhost:3000/submitQuote',{
			method:'post',
			headers:{'Content-Type':'Application/json'},
			body:JSON.stringify({
				quote:this.state.inputQuote,
				author:this.state.inputAuthor
			})
		}).then(response => response.json())
		.then(data=>console.log(data));
		this.setState({
			route:'other',
			inputQuote:'',
			inputAuthor:'',
			message:'**Your quote has been Submitted, you can choose to return or submit a new quote'
		})
	}
	onHandleRoute=(e)=>{
		const {route} = this.state;
		if(route === 'main' || route ==='other'){
			this.setState({route:'submit'});
		}
		else if(route ==='submit'){
			this.setState({route:'main'});
		}else {
			this.setState({route:'other'});
		}
	}

	 
	render() {
	  	const{random , inputQuote, inputAuthor,route,message} = this.state;
	  	const filteredQuote = this.state.data.filter((n,i )=> i===random ? n : null);

	    return (
	    <div className='App'> 
	    	{
	    	route === 'main' ? //condition statement
	    	<div>
		    	<div id='quote-box'>
		    		<p className='nav' onClick={this.onHandleRoute}>Submit New Quote</p>
			   		<div className='quoteCSS'>
				   		<SocialIcon 
				   			id='tweet-quote'
				   			bgColor="#38A1F3" 
				   			fgColor="fff" 
				   			style={{ height: 30, width: 30 }} 
				   			network="twitter" 
				   			url='http://twitter.com/intent/tweet'/>
						<DisplayData quoteData ={filteredQuote}/>
				 	</div>
				 	<p><button id='new-quote' className = 'btn-quote'onClick={this.handleClick}>New Quote</button></p>
			  	</div>
		  	</div>
		  	:
		  	<div>
		      	
		    	<div className='formCSS'>
		    	<p className='nav'onClick={this.onHandleRoute}> Return to Main</p>
		    	<p>{message}</p>	
		    	 	<p>*Submit your quote information below....</p>
		    	 	
		    	 	<div className ='input-section'>
			    		<label>Quote:</label>
				     	<textarea 
				     		className ='inputArea'
				     		name='inputQuote' 
				     		value ={inputQuote} 
				     		type='text' 
				     		rows='6' cols='60'
				     		onChange={this.onHandleChange}
				     	/>
			     	</div>
				     <div className ='input-section' >
				     	<label>Author or Source:</label>
				     	<input 
				     		className='inputArea' 
				     		type='text' 
				     		name ='inputAuthor' 
				     		value={inputAuthor} 
				     		onChange={this.onHandleChange} 
			     		/>
			     	</div>
			     	<div>
			     	<button className='btn-quote'onClick={this.onHandleSubmit}>Submit</button>
					</div>
		      	</div>
		     
		     </div>

		     
	    	} 
		 </div> 
	    );
	  }

}

export default App;
