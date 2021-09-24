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
        datas:[]
    }

    componentDidMount(){
        axios({
            'method':'get',
            //'get','post','put','delete'
            'url':`http://127.0.0.1:8000/api/SearchInNews/`,

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
        const inputChanged=(e)=>{
            console.log(e.target.value);
            if(e.target.value===''){
                document.getElementById("main").classList.add("d-none");
            }
            else{
                document.getElementById("main").classList.remove("d-none");
                let url="http://127.0.0.1:8000/api/searchinproduct/";
                url = url + e.target.value;
                axios.get(url).then( res=>{
                    if (res){
                        this.setState({
                            datas:res.data,
                        })}
                        console.log(res.data)

                })
            }
        }
        
        const AddSale=(e)=>{
            const data= {"product":e,"sale":"Sale object (1)","quantity":"1"}
            let url="http://127.0.0.1:8000/api/sale-product/";
            url = url + e
            axios.post(url,data).then( res=>{
                if (res){
                    this.setState({
                        // products:res.data,
                    })}
                    console.log(res.data)
            }) 
        }
        const {datas}=this.state;
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
                            <div id="main" className="absoulte bg-light w-100 rounded d-none heightsearch">
                                <div className=" h-100 table-wrapper-scroll-y my-custom-scrollbar">
                                        <table class="table table-hover table-responsive-sm">
                                            <tbody  className="scrollable">
                                                {
                                                    datas?datas.map(item=>{
                                                        return <tr  onClick={()=>AddSale(item.name)}>
                                                                    <th scope="row">{item.id}</th>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.seens}</td>
                                                                    <td>{item.category}</td>
                                                                    <td>{item.email}</td>
                                                                </tr>
                                                        }):''
                                                }
                                                
                                            </tbody>
                                            </table>
                                 </div>
                                
                            </div>
                    
                        </div>
                        
                        </Col>
                </Row>
        </div>
  

      );
     
   } 
} export default Index