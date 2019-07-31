import React, { Component } from 'react';
import DisplayData from './components/DisplayData';
import { SocialIcon } from 'react-social-icons';
import SubmitNewQuote from './components/SubmitNewQuote';
import './App.css';

class App extends Component{

	constructor(){
		super();
		this.state= {
			random:[],
			route:'main',
			fadeIn:false,	
		}	
	} 
	componentDidMount(){ //get a quote from the database (random quote will be handle on the server side of the database)
		fetch('https://intense-reef-85189.herokuapp.com/getQuote')
		.then(response=>response.json())
		.then(data=> {
			this.setState({random:data})
		})
	}

	onHandleGenerate = () =>{//handle generate new quote button to get a new random quote
 		fetch('https://intense-reef-85189.herokuapp.com/getQuote')
		.then(response=>response.json())
		.then(data=> { 
			console.log(data.id);
			if(data.id === this.state.random.id){
				this.onHandleGenerate(); //function will be call again if server generate the same quote as the previous
			}else{
				this.setState({random:data,fadeIn:true})	
			}	
		})
	 }
	onHandleRoute=(e)=>{ //handle route change 
		if(this.state.route === 'main'){
			this.setState({route:'form'});
		}else {
			this.setState({route:'main'});
		}
	}	 
	render() {
	  	const{random ,route,fadeIn} = this.state;
	    return (
	    <div className='App'> 
	    	{
	    	route === 'main' ? //condition statement which page to render(main page or form page)
	    	<div>
		    	<div id='quote-box'>
		    	<p className='nav' onClick={this.onHandleRoute}>Submit a new quote</p>
			   		<div className='quoteCSS'>
			   			<div 
			   			className={fadeIn?'effect_fade':''}
				   		onAnimationEnd={() => this.setState({ fadeIn: false })}>
					   		<SocialIcon 
					   			id='tweet-quote'
					   			bgColor="#38A1F3" 
					   			fgColor="fff" 
					   			style={{ height: 30, width: 30, }} 
					   			network="twitter" 
					   			url='http://twitter.com/intent/tweet'

					   			/>   		
							<DisplayData quoteData ={random}/>
						</div>
				 	</div>
				 	 
				 	<div> 
				 	<p id='new-quote' 
					 	className = 'btn-quote' 
					 	onClick={this.onHandleGenerate}>Generate new Quote
				 	</p>
				 	</div>
			  	</div>	
		  	</div>
		  	:
		  	<SubmitNewQuote handleRoute={this.onHandleRoute}/>   
	    	} 
		 </div> 
	    );
	  }
}
export default App;
