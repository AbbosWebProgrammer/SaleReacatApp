import React from 'react';
import {Row,Col} from 'antd'; 
import Searcher from './searche.js' 
import axios from 'axios'; 
import Siteheader from './sitheader.js' 
import Trading from './trading' 
import { EnterOutlined} from '@ant-design/icons';
import './css/css/normalize.css';
import './css/css/bootstrap.min.css';
import './css/css/font-awesome.min.css';
import './css/css/main.css';

class Index extends React.Component{
    state={
        // vaule:null,
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
        // const {linkValue}=this.state;
        const style = { background: '#0092ff', padding: '22px 0' };
        const style1 = { background: '#0092ff', padding: '91px 0' };
        const AddToInput=(e)=>{
            console.log(e)
            console.log(typeof(e))

            this.setState({
                linkValue:e,
                
            })
            
           

            
          }
     return(
        <div className="bgsecon h-100 pb-1">
            <Siteheader/>
          <Row>
              <Col span={18}>
                <Searcher/>
                <Trading/>
              </Col>
              <Col span={6}>
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
                        <div  onClick={()=>AddToInput('.')} className=" colnumber rounded  d-flex align-items-center justify-content-center">.</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div onClick={()=>AddToInput(0)} className=" colnumber rounded  d-flex align-items-center justify-content-center">0</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div  onClick={()=>AddToInput('00')} className=" colnumber rounded  d-flex align-items-center justify-content-center">00</div>
                    </Col>
                    <Col className="gutter-row" span={16}>
                        <div onClick={()=>AddToInput('enter')} className=" colnumber rounded  d-flex align-items-center justify-content-center"><EnterOutlined /></div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div onClick={()=>AddToInput('del')} className=" colnumber rounded  d-flex align-items-center justify-content-center">X</div>
                    </Col>
                </Row>
              </Col>
          </Row>
            <Row  className="mx-1 bg-white rounded p-2 text">
                <Col span={12} className="">Skidka: 0.00</Col>
                <Col span={12} className="text-end">Summa: 12345.23</Col>
            </Row>
            {/* Buttons */}
            <Row gutter={[3, 0]} className="mx-1 mt-1 bg-white rounded p-2 sitebottom">
                <Col span={20} className="gutter-row">
                    <Row gutter={[3, 3]}>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>

                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <div style={style} className="rounded d-flex align-items-center justify-content-center">col-6</div>
                        </Col>

                    </Row>
                </Col>
                <Col span={4} className="gutter-row">
                <div style={style1} className="rounded bg-primary d-flex align-items-center justify-content-center">col-6</div>
                </Col>
            </Row>
        </div>
      );
     
   } 
} export default Index