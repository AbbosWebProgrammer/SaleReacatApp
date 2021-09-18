import React from 'react';
import {Row,Col,Input} from 'antd';  
import axios from 'axios'; 
// import { Link } from 'react-router-dom';
import './css/css/normalize.css';
import './css/css/bootstrap.min.css';
import './css/css/font-awesome.min.css';
import './css/css/main.css';


class Index extends React.Component{
    state={
        linkValue:null,
        data:[],
        products:[],
        datas:[]
    }

    componentDidMount(){
        axios({
            'method':'get',
            //'get','post','put','delete'
            'url':`https://jsonplaceholder.typicode.com/users`,

        }).then( res=>{
            if (res){
                this.setState({
                    datas:res.data,
                    
                })
                console.log(res.data)
            }
        })
    }

    render(){
        const {products,linkValue}=this.state;
        const inputChanged=(e)=>{
            console.log(e.target.value)
            this.setState({
                linkValue:e.target.value,
            })
            this.state.products=this.state.datas
            
            
        }
        
        const AddSale=(e)=>{
            console.log(e)
            console.log(typeof(e))

            this.setState({
                linkValue:e,
                
            })
            
           

            
          }
     return(        
        <div className="">  
             <Row className="d-flex align-items-center m-1">
                    <Col span={4}>Sotuv  N 77</Col>
                    <Col span={20}>
                        <div className="relative h-auto">
                            <Input className="rounded w-100" 
                                type="search"
                                id={'seachtext'}
                                // placeholder="Qidiruv"
                                aria-label="Search"
                                onChange={inputChanged}
                                />
                            <div className="absoulte bg-info w-100 rounded">
                                <h1>{linkValue}</h1>
                                <table class="table table-hover table-responsive-sm m-0">
                                    <tbody  className="scrollable">
                                        {
                                        products?products.map(item=>{
                                            return <tr onClick={()=>AddSale(item.id)}>
                                                        <th scope="row">{item.id}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.username}</td>
                                                        
                                                    </tr>
                                            }):''
                                        }   
                                    </tbody>
                                </table>
                                </div>
                    
                        </div>
                        
                        </Col>
                </Row>
        </div>
  

      );
     
   } 
} export default Index