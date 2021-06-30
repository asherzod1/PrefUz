import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import {Form, Input, InputNumber, Button} from 'antd';
import {Select} from 'antd';

function ResumeTabCreatForm(props) {
    const {Option, OptGroup} = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const [activeTab, setActiveTab] = useState('1');
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    /* eslint-disable no-template-curly-in-string */

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div>
            <div className="container">

                <div className="exet">
                    <div className="tab-H-page">
                        <div className="row">
                            <div className="col-md-12 col-lg-3 col-12 col-sm-12 ">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: activeTab === '1'})}
                                            onClick={() => {
                                                toggle('1');
                                            }}
                                        >
                                            Mening profilim
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: activeTab === '2'})}
                                            onClick={() => {
                                                toggle('2');
                                            }}
                                        >
                                            Test natijalari
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: activeTab === '3'})}
                                            onClick={() => {
                                                toggle('3');
                                            }}
                                        >
                                            Treninglar
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: activeTab === '4'})}
                                            onClick={() => {
                                                toggle('4');
                                            }}
                                        >
                                            Mening rezume
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        >
                                            Chiqish
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                            <div className="col-md-12 col-lg-9 col-12 col-sm-12">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <div className="tab-H-sec">
                                            <div className="tab-H-title">
                                                Shaxsiy malummotlarim
                                            </div>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <Form {...layout} name="nest-messages" onFinish={onFinish}
                                                          validateMessages={validateMessages}>
                                                        <div className="row">
                                                            <div className="col-md-12 col-12 col-sm-12 ">
                                                                <div className="name">
                                                                    Ismingiz
                                                                </div>
                                                                <Form.Item
                                                                    name={['user', 'name']}
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input/>
                                                                </Form.Item>

                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12 ">
                                                                <div className="name">
                                                                    Familyangizni kiriting
                                                                </div>
                                                                <Form.Item
                                                                    name={['user', 'name']}
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input/>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <div className="name">
                                                                    Viloyat
                                                                </div>
                                                                <div className="tab-select">
                                                                    <Select defaultValue="Buxoro" style={{width: 220,}}
                                                                            onChange={handleChange}>
                                                                        <Option value="Buxoro">Buxoro</Option>
                                                                        <Option value="Andijon">Andijon</Option>
                                                                        <Option value="Namangan">Namangan</Option>
                                                                        <Option value="Farg'ona">Farg'ona</Option>
                                                                        <Option value="Toshkent">Toshkent</Option>
                                                                        <Option value="Sirdaryo">Sirdaryo</Option>
                                                                        <Option value="Jizzax">Jizzax</Option>
                                                                        <Option value="Samarqand">Samarqand</Option>
                                                                        <Option value="Navoiy">Navoiy</Option>
                                                                        <Option value="Qashqadaryo">Qashqadaryo</Option>
                                                                        <Option value="Surxondaryo">Surxondaryo</Option>
                                                                        <Option value="Xorazm">Xorazm</Option>
                                                                        <Option
                                                                            value="Qoraqalpoqiston">Qoraqolpoqiston</Option>
                                                                    </Select>
                                                                </div>


                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <div className="name">
                                                                    Tuman
                                                                </div>
                                                                <Form.Item
                                                                    name={['user', 'name']}
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input/>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <div className="name">
                                                                    Maktab
                                                                </div>
                                                                <div className="tab-select">
                                                                    <Select defaultValue="20-maktab" style={{width: 160,}}
                                                                            onChange={handleChange}>
                                                                        <Option value="Buxoro">Buxoro</Option>
                                                                        <Option value="Andijon">Andijon</Option>
                                                                        <Option value="Namangan">Namangan</Option>
                                                                        <Option value="Farg'ona">Farg'ona</Option>
                                                                        <Option value="Toshkent">Toshkent</Option>
                                                                        <Option value="Sirdaryo">Sirdaryo</Option>
                                                                        <Option value="Jizzax">Jizzax</Option>
                                                                        <Option value="Samarqand">Samarqand</Option>
                                                                        <Option value="Navoiy">Navoiy</Option>
                                                                        <Option value="Qashqadaryo">Qashqadaryo</Option>
                                                                        <Option value="Surxondaryo">Surxondaryo</Option>
                                                                        <Option value="Xorazm">Xorazm</Option>
                                                                        <Option
                                                                            value="Qoraqalpoqiston">Qoraqolpoqiston</Option>
                                                                    </Select>
                                                                </div>


                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <div className="name">
                                                                    Sinf
                                                                </div>
                                                                <div className="tab-select">
                                                                    <Select defaultValue="20-maktab" style={{width: 160,}}
                                                                            onChange={handleChange}>
                                                                        <Option value="Buxoro">Buxoro</Option>
                                                                        <Option value="Andijon">Andijon</Option>
                                                                        <Option value="Namangan">Namangan</Option>
                                                                        <Option value="Farg'ona">Farg'ona</Option>
                                                                        <Option value="Toshkent">Toshkent</Option>
                                                                        <Option value="Sirdaryo">Sirdaryo</Option>
                                                                        <Option value="Jizzax">Jizzax</Option>
                                                                        <Option value="Samarqand">Samarqand</Option>
                                                                        <Option value="Navoiy">Navoiy</Option>
                                                                        <Option value="Qashqadaryo">Qashqadaryo</Option>
                                                                        <Option value="Surxondaryo">Surxondaryo</Option>
                                                                        <Option value="Xorazm">Xorazm</Option>
                                                                        <Option
                                                                            value="Qoraqalpoqiston">Qoraqolpoqiston</Option>
                                                                    </Select>
                                                                </div>


                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <div className="name">
                                                                    Aa
                                                                </div>
                                                                <div className="tab-select">
                                                                    <Select style={{width: 160,}}
                                                                            onChange={handleChange}>
                                                                        <Option value="Buxoro">Buxoro</Option>
                                                                        <Option value="Andijon">Andijon</Option>
                                                                        <Option value="Namangan">Namangan</Option>
                                                                        <Option value="Farg'ona">Farg'ona</Option>
                                                                        <Option value="Toshkent">Toshkent</Option>
                                                                        <Option value="Sirdaryo">Sirdaryo</Option>
                                                                        <Option value="Jizzax">Jizzax</Option>
                                                                        <Option value="Samarqand">Samarqand</Option>
                                                                        <Option value="Navoiy">Navoiy</Option>
                                                                        <Option value="Qashqadaryo">Qashqadaryo</Option>
                                                                        <Option value="Surxondaryo">Surxondaryo</Option>
                                                                        <Option value="Xorazm">Xorazm</Option>
                                                                        <Option
                                                                            value="Qoraqalpoqiston">Qoraqolpoqiston</Option>
                                                                    </Select>
                                                                </div>


                                                            </div>
                                                            <div className="col-md-10 col-12 col-sm-12">
                                                                <div className="name">
                                                                    Email
                                                                </div>
                                                                <Form.Item
                                                                    name={['user', 'name']}
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input/>
                                                                </Form.Item>

                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                                                    <Button type="danger"  htmlType="submit">
                                                                        Saqlash
                                                                    </Button>
                                                                </Form.Item>
                                                            </div>
                                                            <div className="col-md-12 col-12 col-sm-12">
                                                                <div className="tab-password">
                                                                    <div className="tab-H-title">
                                                                        Parolni yangilash
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-4 col-12 col-sm-12">
                                                                            <div className="name">
                                                                                Eski parol
                                                                            </div>
                                                                            <Form.Item
                                                                                name={['user', 'name']}
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input/>
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div className="col-md-4 col-12 col-sm-12">
                                                                            <div className="name">
                                                                                Yangi parol
                                                                            </div>
                                                                            <Form.Item
                                                                                name={['user', 'name']}
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input/>
                                                                            </Form.Item>
                                                                        </div>
                                                                        <div className="col-md-2">
                                                                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                                                                <Button type="danger"  htmlType="submit">
                                                                                    Saqlash
                                                                                </Button>
                                                                            </Form.Item>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<Form.Item*/}
                                                        {/*    name={['user', 'name']}*/}
                                                        {/*    label="address"*/}
                                                        {/*    rules={[*/}
                                                        {/*        {*/}
                                                        {/*            required: true,*/}
                                                        {/*        },*/}
                                                        {/*    ]}*/}
                                                        {/*>*/}
                                                        {/*    <Input />*/}
                                                        {/*</Form.Item>*/}
                                                        {/*<Form.Item*/}
                                                        {/*    name={['user', 'email']}*/}
                                                        {/*    label="Email"*/}
                                                        {/*    rules={[*/}
                                                        {/*        {*/}
                                                        {/*            type: 'email',*/}
                                                        {/*        },*/}
                                                        {/*    ]}*/}
                                                        {/*>*/}
                                                        {/*    <Input />*/}
                                                        {/*</Form.Item>*/}
                                                        {/*<Form.Item*/}
                                                        {/*    name={['user', 'age']}*/}
                                                        {/*    label="Age"*/}
                                                        {/*    rules={[*/}
                                                        {/*        {*/}
                                                        {/*            type: 'number',*/}
                                                        {/*            min: 0,*/}
                                                        {/*            max: 99,*/}
                                                        {/*        },*/}
                                                        {/*    ]}*/}
                                                        {/*>*/}
                                                        {/*    <InputNumber />*/}
                                                        {/*</Form.Item>*/}
                                                        {/*<Form.Item name={['user', 'website']} label="Website">*/}
                                                        {/*    <Input />*/}
                                                        {/*</Form.Item>*/}
                                                        {/*<Form.Item name={['user', 'introduction']} label="Introduction">*/}
                                                        {/*    <Input.TextArea />*/}
                                                        {/*</Form.Item>*/}
                                                        {/*<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>*/}
                                                        {/*    <Button type="primary" htmlType="submit">*/}
                                                        {/*        Submit*/}
                                                        {/*    </Button>*/}
                                                        {/*</Form.Item>*/}
                                                    </Form>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="user">
                                                        <img src="/image/UserP.png" alt=""/>
                                                    </div>
                                                    <div className="user-foto">
                                                        <img src="/image/camera.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="6">
                                                <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional
                                                        content.</CardText>
                                                    <Button>Go somewhere</Button>
                                                </Card>
                                            </Col>
                                            <Col sm="6">
                                                <Card body>
                                                    <CardTitle>Special Title Treatment</CardTitle>
                                                    <CardText>With supporting text below as a natural lead-in to additional
                                                        content.</CardText>
                                                    <Button>Go somewhere</Button>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>

                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    );
}

export default ResumeTabCreatForm;