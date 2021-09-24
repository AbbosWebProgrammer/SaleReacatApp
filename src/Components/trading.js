import React from 'react';
import axios from 'axios'; 
import { Modal,Input, Row, Col} from 'antd';
// import {Row,Col,} from 'antd';  

// import { Link } from 'react-router-dom';
import './css/css/normalize.css';
import './css/css/bootstrap.min.css';
import './css/css/font-awesome.min.css';
import './css/css/main.css';



class Index extends React.Component{
    state={
        linkValue:null,
        products:[],
        IsModalVisible:false,
        IsDeletProductModalVisible:false,

    }
    

    componentDidMount(){
        axios({
            'method':'get',
            //'get','post','put','delete'
            'url':'http://127.0.0.1:8000/api/sale-product/',
        }).then( res=>{
            if (res){
                this.setState({
                    products:res.data,
                    
                })
            }
            console.log(res.data)

        })
    }

    
    render(){
        const {IsModalVisible,IsDeletProductModalVisible}=this.state;
        const DeleteProduct=(e)=>{
            let url="http://127.0.0.1:8000/api/sale-product/";
            url = url + e
            axios.delete(url).then( res=>{
                if (res){
                    this.setState({
                        products:res.data,
                    })}
                    console.log(res.data)
            }) }
        const AddQuantity=(e)=>{
            
            this.setState({
                IsModalVisible:true,
            })
            // const data= {"product":e.name}
            let url="http://127.0.0.1:8000/api/sale-product/";
            url = url + e
            axios.post(url).then( res=>{
                if (res){
                    this.setState({
                        products:res.data,
                    })}
                    console.log(res.data)
            }) }
        const handleOk = () => {
            this.setState({
                IsModalVisible:false,
                linkValue:null,
            })
            };
            
        const handleCancel = () => {
            this.setState({
                IsModalVisible:false,
                linkValue:null,
            })
            };
            const AddToInput=(e)=>{
                console.log(e)
                let value=document.getElementById("addinput").value
               if (value===null){
                   this.setState({  linkValue:e, })
               }
               else if(e==="del" && value!==null){
                // e=value.slice(0,value.lenght-1)
                // console.log(value.slice(0,value.lenght-1))
               
                console.log(value)
             
                this.setState({  linkValue:value.substr(0,value.length-1) })

               }
               else if(e==="clear" && value!==null){
                this.setState({  linkValue:null, })
               }
                else{
                    e= value+e
                    this.setState({  linkValue:e, })
                }
              }

        const {products,linkValue}=this.state;
        const DeletProducthandleOk = () => {
            this.setState({
                IsDeletProductModalVisible:false,
               
            })
            };
            
        const DeletProducthandleCancel = () => {
            this.setState({
                IsDeletProductModalVisible:false,
              
            })
            };
     return(
        <div className="m-1 bg-dengar" >
            <div className=" mt-1 xaridlar rounded ">
                    <div className="h-100 table-wrapper-scroll-y my-custom-scrollbar">
                        <table class="table table-hover  table-responsive-sm">
                            <tbody  className="scrollable">
                                {
                                    products?products.map(item=>{
                                        return <tr id={item.id}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.product}</td>
                                                    <td  onClick={()=>AddQuantity(item.id)} className="bg-info text-center">{item.quantity}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                    <td className="text-center"><i class="fa fa-times text-danger" aria-hidden="true"  onClick={()=>DeleteProduct(item.id)}></i></td>
                                                    {/* <td><Link to={'/usertodos/'+item.id}>See Todos</Link></td>
                                                    <td><Button type='primary' onClick={()=>SetLocalstorage(UserName,value)}>Batafsil</Button></td> */}
                                                </tr>
                                        }):''
                                }
                                 
                            </tbody>
                            </table>
                            <Modal title="Modal" visible={IsDeletProductModalVisible} onOk={DeletProducthandleOk} onCancel={DeletProducthandleCancel}>
                            </Modal>
                            <Modal title="Modal" visible={IsModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <label>Quantity</label>
                                <Input className="rounded" 
                                    type="text"
                                    id="addinput"
                                    value={linkValue}
                                    />
                                <Row gutter={[2,2]} className="mt-1 bg-info p-1">
                                
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(1)} className=" colnumber rounded  d-flex align-items-center justify-content-center">1</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(2)} className=" colnumber rounded  d-flex align-items-center justify-content-center">2</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(3)} className=" colnumber rounded  d-flex align-items-center justify-content-center">3</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(4)} className=" colnumber rounded  d-flex align-items-center justify-content-center">4</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(5)} className=" colnumber rounded  d-flex align-items-center justify-content-center">5</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(6)} className=" colnumber rounded  d-flex align-items-center justify-content-center">6</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(7)} className=" colnumber rounded  d-flex align-items-center justify-content-center">7</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(8)} className=" colnumber rounded  d-flex align-items-center justify-content-center">8</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(9)} className=" colnumber rounded  d-flex align-items-center justify-content-center">9</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput(0)} className=" colnumber rounded  d-flex align-items-center justify-content-center">0</div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput('clear')} className=" colnumber rounded  d-flex align-items-center justify-content-center"><i class="fa fa-times" aria-hidden="true"></i></div>
                                    </Col>
                                    <Col className="gutter-row" span={8}>
                                        <div onClick={()=>AddToInput('del')} className=" colnumber rounded  d-flex align-items-center justify-content-center"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>
                                    </Col>

                                    
                                </Row>
                            </Modal>
                            
                        </div>
                    <div>
                </div>
                  
            
                </div>
                
        </div>
      );
     
   } 
} export default Index