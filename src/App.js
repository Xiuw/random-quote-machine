import React, { Component } from 'react';
import {quotes} from './quote';
import { SocialIcon } from 'react-social-icons';

import './App.css';

class App extends Component {


	constructor(){
		super();
		this.state= {
			random:Math.floor(Math.random() * quotes.length)}

	} 

	getRandom =()=>{
		

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
	      <div className='App' id='quote-box'>

		   	<div className='quoteCSS'>
			   	<SocialIcon id='tweet-quote'bgColor="#EB783D" fgColor="fff" style={{ height: 30, width: 30 }} network="twitter" url='http://twitter.com/intent/tweet'/>
					<p id='text'>" {quotes[random].quote}"</p>
					<p id='author'>- {quotes[random].author}</p>
					<p><button id='new-quote'onClick={this.handleClick}>New Quote</button></p>
			 	</div>

		  </div>
 	
	    );
	  }

}

export default App;
