import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Product from './component/Product/Product';
import axios from 'axios';
import routes from './routes.js'
import {HashRouter} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventory:[],
    }
    // console.log(this.state.inventory)
  }

  // componentDidMount(){
  //   axios.get(`http://localhost:4000/api/inventory`)
  //        .then(res=>{
  //          this.setState({inventory:res.data})
  //        })
  // }

  // newInven=()=>{
  //   axios.get(`http://localhost:4000/api/inventory`)
  //        .then(res=> this.setState({inventory:res.data}))
         
  // }

  render() {
    // let inventory = this.state.inventory.map((data,i)=>{
    //   return <Product name={data.name} price={data.price} image={data.image} key={i} />
    // })
    return (
      <div className="App">
      <HashRouter>
        {routes}
      </HashRouter>
        {/* <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form add={this.newInven} />
        {inventory} */}
      </div>
    );
  }
}

export default App;
