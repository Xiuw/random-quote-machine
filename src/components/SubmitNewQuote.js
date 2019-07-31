import React, {Component} from 'react';
import '../App.css';
class SubmitNewQuote extends Component {
	constructor(props){
		super(props);
		this.state= {
			inputQuote:'',
			inputAuthor:'',
			message:'',
	  	}
	 } 	
	onHandleChange=(e)=>{
		const {name,value} = e.target
		this.setState({[name]:value,message:''});
	}
	onHandleSubmit = (e) => { //Handle submit new quote to the database
		if(this.state.inputQuote.length <=10 || this.state.inputAuthor.length <=1){
			alert("Please check your form again");
		}else{
		fetch('https://intense-reef-85189.herokuapp.com/submitQuote',{
			method:'post',
			headers:{'Content-Type':'Application/json'},
			body:JSON.stringify({
				quote:this.state.inputQuote,
				author:this.state.inputAuthor
			})
		}).then(response => response.json())
		.then(data=>{
			console.log(data);
			if(data[0]){
				console.log("yes");
				this.setState({
					route:'other',
					inputQuote:'',
					inputAuthor:'',
					message:'*Your quote has been sucessfully submitted.'
				})
			}}			
		);}
	}
 
	render(){
		const{inputQuote,inputAuthor,message} = this.state;
	return(
		<div className="formPage">
    	<div className='formCSS'>
    	<p className='nav'onClick={this.props.handleRoute}> Return to quote page</p>	
    	 	<div className ='input-section'>
		     	<textarea 
		     		className ='inputArea'
		     		name='inputQuote' 
		     		value ={inputQuote} 
		     		type='text' 
		     		placeholder="Write your quote here"
		     		rows='6' 
		     		onChange={this.onHandleChange}
		     	/>
	     	</div>
		     <div className ='input-section' >
		     	<input 
		     		className='inputArea' 
		     		type='text'
		     		placeholder="Author or source"
		     		name ='inputAuthor' 
		     		value={inputAuthor} 
		     		onChange={this.onHandleChange} 
	     		/>
	     	<p className="msg">{message}</p>		
	     	</div>
	     	<div>
	     	<button className='btn-quote'onClick={this.onHandleSubmit}>Submit</button>
			</div>
      	</div>
      	</div>

  )}
}
export default SubmitNewQuote;
