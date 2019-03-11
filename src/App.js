import React, { Component } from 'react';
import {quotes} from './quote';
import { SocialIcon } from 'react-social-icons';

import './App.css';

class App extends Component {


	constructor(){
		super();
		this.state= {
		
			quote:'',
			author:'',
			random:Math.floor(Math.random() * quotes.length)}

	} 

	onHandleChange=(e)=>{
		const {name,value} = e.target
		console.log(value);
		this.setState({[name]:value});
	}
	onHandleSubmit = (e) => {
		fetch('http://localhost:3000/submitQuote',{
			method:'post',
			headers:{'Content-Type':'Application/json'},
			body:JSON.stringify({
				quote:this.state.quote,
				author:this.state.author
			})
		}).then(response=>response.json())
		.then(data=>console.log(data));

	}

 
	 handleClick=()=>{
	 	let random = Math.floor(Math.random() * quotes.length);

		 	do{
		 	 random = Math.floor(Math.random() * quotes.length)
		 	}while(random === this.state.random)
	 
	 	
 		this.setState({random});
	   
	 }

	render() {
		
	  	const{random} = this.state;

	    return (
	    <div className='App'> 
	     	<textarea className ='textArea' name='quote' value ={this.state.quote} type='text' rows='6' cols='60'onChange={this.onHandleChange}/>
	     	<input className='textArea' type='text' name ='author' value={this.state.author} onChange={this.onHandleChange} />
	     	<button className='submit'onClick={this.onHandleSubmit} >Submit</button>
	      
	      <div  id='quote-box'>
		   	<div className='quoteCSS'>
			   	<SocialIcon id='tweet-quote'bgColor="#EB783D" fgColor="fff" style={{ height: 30, width: 30 }} network="twitter" url='http://twitter.com/intent/tweet'/>
					<p id='text'>" {quotes[random].quote}"</p>
					<p id='author'>- {quotes[random].author}</p>
					<p><button id='new-quote'onClick={this.handleClick}>New Quote</button></p>
			 	</div>

		  </div>
		 </div> 
 	
	    );
	  }

}

export default App;
