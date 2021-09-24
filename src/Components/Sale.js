import React from 'react';
import { Modal, Row, Col} from 'antd';
import Searcher from './searche.js' 
import axios from 'axios'; 
import Siteheader from './sitheader.js' 
import Conculator from './conc.js' 
import Trading from './trading' 
// import { EnterOutlined} from '@ant-design/icons';
import './css/css/normalize.css';
import './css/css/bootstrap.min.css';
import './css/css/font-awesome.min.css';
import './css/css/main.css';

class Index extends React.Component{
    state={
        IsConculatorVisible:false,
        linkValue:null,
    }
    

    componentDidMount(){
        axios({
            'method':'get',
            //'get','post','put','delete'
            'url':'http://127.0.0.1:8000/api/news',
        }).then( res=>{
            if (res){
                this.setState({
                    news:res.data,
                    
                })
            }
        })
    }

    
    render(){
        const {IsConculatorVisible}=this.state;
        const style = { background: '#0092ff', padding: '21px 0' };
        const style1 = { background: '#0092ff', padding: '88px 0' };
        // const conculator=(e)={
        //     IsConculatorVisible:true,
        // }
        const AddToInput=(e)=>{
            console.log(e)
            console.log(typeof(e))

            this.setState({
                linkValue:e,
                
            }) 
          }
        const conculator=()=>{
            this.setState({
                IsConculatorVisible:true,
                
            }) 
        }
          
          
     return(
        <div className="bgsecon  pb-1">
            <Siteheader/>
          <Row>
              <Col span={18} className="h-100">
                    <Searcher/>
                    <Trading />
                    <Row  className="mx-1 bg-white rounded p-2">
                        <Col span={12} className="">Skidka: 0.00</Col>
                        <Col span={12} className="text-end">Summa: 12345.23</Col>
                    </Row>
              </Col>
              <Col span={6} className="h-100">
                <Row gutter={[2,2]} className="me-1 my-1">
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
                        <div  onClick={()=>AddToInput('00')} className=" colnumber rounded  d-flex align-items-center justify-content-center">00</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div onClick={()=>AddToInput('del')} className=" colnumber rounded  d-flex align-items-center justify-content-center">X</div>
                    </Col>
                </Row>
                <Row gutter={[3, 0]} className="mt-1 rounded sitebottom ">
                <Col span={12} className="gutter-row">
                    <Row gutter={[3, 3]} className="text-white">
                      
                        <Col className="gutter-row" span={24}>
                            <div style={style} onClick={()=>conculator()} className="rounded d-flex align-items-center justify-content-center">калькулятор</div>
                        </Col>
                        
                        <Col className="gutter-row" span={24}>
                            <div style={style} className="rounded d-flex align-items-center bg-danger justify-content-center">быстрые товары</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div style={style} className="rounded d-flex align-items-center bg-warning justify-content-center">Clear</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div style={style} className="rounded d-flex align-items-center bg-danger justify-content-center">быстрые товары</div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div style={style} className="rounded d-flex align-items-center bg-warning justify-content-center">Clear</div>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} className="gutter-row">
                    <Row gutter={[3, 3]} className="text-white">
                            <Col className="gutter-row" span={24}>
                                <div style={style} className="rounded d-flex align-items-center bg-warning justify-content-center">Clear</div>
                            </Col>
                            <Col className="gutter-row" span={24}>
                                <div style={style} className="rounded d-flex align-items-center bg-danger justify-content-center">быстрые товары</div>
                            </Col>
                            <Col className="gutter-row" span={24}>
                            <div style={style1} className="rounded bg-success text-white d-flex align-items-center justify-content-center">подытог</div>
                            </Col>
                        </Row>
                </Col>
            </Row>
              </Col>
          </Row>
            
            {/* Buttons */}
           
            <Modal title="Modal" visible={IsConculatorVisible} onOk={ConculatorhandleOk} onCancel={DeletProducthandleCancel}> 
                <Conculator/>        
            </Modal>


        </div>
      );
     
   } 
} export default Index