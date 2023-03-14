import { Row, Col } from "antd";
import "./StoreNumber.css"

function StoreNumber() {
    return (
        <div className="row_store">
            <Row >
                <Col className='col_number' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                    <div className="number_child">
                        <div className="img_box">
                        <img src="./StoreNumber/Vector1.png" alt="" />
                        </div>
                        <p>125,663</p>
                        <span>Happy Customer</span>
                    </div>

                </Col>
                <Col className='col_number' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                    <div className="number_child">
                    <div className="img_box">
                    <img src="./StoreNumber/open-book2.png" alt="" />
                    </div>
                       <p>50,672+</p>
                       <span>Book Collections</span>
                    </div>
                </Col>
                <Col className='col_number' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                    <div className="number_child">
                        <div className="img_box">
                        <img src="./StoreNumber/store3.png" alt="" />
                        </div>
                       <p>1562</p>
                       <span>Our Stores</span>
                    </div>
                </Col>
                <Col className='col_number' xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
                    <div className="number_child">
                        <div className="img_box">
                        <img src="./StoreNumber/quill4.png" alt="" />
                        </div>
                        <p>457</p>
                        <span>Famous Writters</span>
                    </div>
                </Col>
            </Row>
        </div>);
}

export default StoreNumber;