import React from 'react';
import axios from 'axios'; 
// import { Link } from 'react-router-dom';
import {UpOutlined,DownOutlined  } from '@ant-design/icons';
import './css/css/normalize.css';
import './css/css/bootstrap.min.css';
import './css/css/font-awesome.min.css';
import './css/css/main.css';



class Index extends React.Component{
    state={
        linkValue:null,
        products:[]
    }
    

    componentDidMount(){
        axios({
            'method':'get',
            //'get','post','put','delete'
            'url':'https://jsonplaceholder.typicode.com/users',
        }).then( res=>{
            if (res){
                this.setState({
                    products:res.data,
                    
                })
            }
        })
    }

    
    render(){
        const {products}=this.state;
     return(
        <div>
                <div className="m-1 xaridlar rounded ">
                    <div className="h-82 table-wrapper-scroll-y my-custom-scrollbar">
                        <table class="table table-hover table-responsive-sm">
                            <tbody  className="scrollable">
                                {
                                    products?products.map(item=>{
                                        return <tr>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.name}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td>X</td>
                                                    {/* <td><Link to={'/usertodos/'+item.id}>See Todos</Link></td>
                                                    <td><Button type='primary' onClick={()=>SetLocalstorage(UserName,value)}>Batafsil</Button></td> */}
                                                </tr>
                                        }):''
                                }
                                 
                            </tbody>
                            </table>
                        </div>
                    <div>
                        <hr className=""/>
                        <UpOutlined  className="ms-2 p-2 bg-info" />
                        <DownOutlined className="ms-2 p-2  bg-info" />

                    </div>
                  
            
                </div>
                
        </div>
      );
     
   } 
} export default Index