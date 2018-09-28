import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            input:'',
            inventory:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    postChange(item){
        axios.post(`/api/products`,item)
             .then(inventory=>this.setState({inventory:inventory.data}))
    }

    handleInputChange(val){
        this.setState({input:val})
        console.log(val);
    }

    handleClick(){
        this.setState({input:''})
    }

    render(){
        return(
        <div className='form'>
            <h1>Form</h1>
            <input value={this.state.input} onChange={(e)=>this.handleInputChange(e.target.value)} />
            <input value={this.state.input} onChange={(e)=>this.handleInputChange(e.target.value)} />
            <input value={this.state.input} onChange={(e)=>this.handleInputChange(e.target.value)} />
            <button onClick={(e)=>this.handleClick(e.target.value)}>Cancel</button>
            <button onClick={(e)=>this.postChange(e.target.value)}>Add To Inventory</button>
            
        </div>
        )
    }
}