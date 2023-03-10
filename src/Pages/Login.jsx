import { Form, Input, Checkbox, Button } from "antd"
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import "./Login_register.css"
function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className="conteiner_register_login">
            <div className="left_register_login_box">
                <div className="go_finance1" id="go_finnace1">
                    <p className="finance">Go Finance</p>
                    <span className="most_popular">The most popular pear lending of SEA</span><br />
                    <button id="read_more"> Read more </button>
                </div>
                <img className="img_group2" src="./register_login_image/Group 2.png" alt="" />
            </div>
            <div className="right_register_login_box">
                <Form
                    name="normal"
                    className="form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <p>Hello</p>
                    <span>Wellcom Back</span><br/><br/>   
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                            { type: "email"}
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link to="" className="form-forgot" href="">
                            Forgot password
                        </Link>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button">
                            Log in
                        </Button>
                            Or <Link to="/register">Sign Up now!</Link>
                    </Form.Item>
                </Form>
               { <div className="go_finance2" id="go_finnace2">
                    <p className="finance">Go Finance</p>
                    <span className="most_popular">The most popular pear lending of SEA</span><br />
                    <button id="read_more"> Read more </button>
                </div>}
            </div>
            
        </div>

    );
}

export default Login;