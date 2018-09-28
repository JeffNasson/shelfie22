import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';
import Form from '../Form/Form'

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
            inventory:[]
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:4000/api/inventory`)
             .then(res=>{
               this.setState({inventory:res.data})
             })
      }

    deleteItems(id){
        axios.delete(`/api/inventory/:${id}`)
             .then(inventory=>this.setState({inventory:inventory.data}))
    }

    newInven=()=>{
        axios.get(`http://localhost:4000/api/inventory`)
             .then(res=> this.setState({inventory:res.data}))
             
      }

    render(){
        let inventory = this.state.inventory.map((data,i)=>{
            return <Product name={data.name} price={data.price} image={data.image} key={i} />
          })
        return(
            <div className='dashboard'>
                <Product />
                <h1>Dashboard</h1>
            </div>
        )
    }
}