// import {Select} from 'antd'; 
// import { Link} from 'react-router-dom';
// import Img1 from './image/monitor.jpg';
import React from 'react';
import { Row,Col } from 'antd';
import 'antd/dist/antd.css'; 
import './css/css/bootstrap.min.css';
import './css/css/normalize.css';
import './css/css/font-awesome.min.css';
import './css/css/main.css';



// import {Modal,Card, Button, Row,Col,Badge,Carousel,BackTop} from 'antd';
// const {Option}=Select; 

class Siteheader extends React.Component{    
    render(){
     return(
      <React.Fragment>
        <div className="bg-info">
            
            <ul className="d-flex justify-content-between mb-0 align-items-center">
                <li className="text-uppercase font-weight-bold">Kassir</li>
                <li className="text-uppercase font-weight-bold">
                    <Row>
                        <Col>
                            <ul>
                                <li>Kassa 10301</li>
                                <li>defw89494</li>
                            </ul>
                        </Col>
                        <Col className="mx-2">
                            image
                            {/* <Img1/> */}
                        </Col>
                        <Col>
                            <ul className="me-4 p-0">
                                <li>10:41</li>
                                <li>2.10.2021</li>
                            </ul>
                        </Col>
                    </Row>

                </li>
            </ul>
            
    </div>
  
      </React.Fragment>
      );
     
   } 
} export default Siteheader
