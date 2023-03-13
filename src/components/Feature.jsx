import { Row, Col } from "antd";
import "./Feature.css"

function Feature() {
    return (<>
        <Row>
            <Col className='col_feature' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                <img src="./Feature/logo512.png" alt="" />
            </Col>
            <Col className='col_feature' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                <img src="./Feature/item02.png" alt="" />
            </Col>
            <Col className='col_feature' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                <img src="./Feature/item03.png" alt="" /></Col>
            <Col className='col_feature' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                <img src="./Feature/item04.png" alt="" />
            </Col>
        </Row>
    </>);
}

export default Feature;