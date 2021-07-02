import { Button, DatePicker, Form, Input, Radio, Select, Upload,  } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react'
import '../styles/MyResume.scss'
import {Link} from 'react-router-dom'

const MyResumeC = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const onFinish = (values) => {
        console.log(values);
      };

    const prefixSelector =(
        <Form.Item name="prefix" noStyle className=''>
            +998
        </Form.Item>
    )

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

    const [value, setValue] = React.useState(1);
    const onChangeRadio = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };

    const [value2, setValue2] = React.useState(1);
    const onChangeRadio2 = e => {
          console.log('radio checked', e.target.value);
          setValue2(e.target.value);
        };
    const [value3, setValue3] = React.useState(1);
    const onChangeRadio3 = e => {
          console.log('radio checked', e.target.value);
          setValue3(e.target.value);
        };
    return (
        <div>
            <div className="MyResume">
                <div className="MyResume-header">
                    <h1>Mening resume</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 offset-lg-2 offset-md-2">
                            <div className="MyResume-content">
                            <Form 
                                className=""
                                labelCol={{
                                    span: 24,
                                    }}
                                wrapperCol={{
                                    span: 24,
                                  }}
                                layout="horizontal"
                                  initialValues={{
                                    size: componentSize,
                                      }}
                                  onValuesChange={onFormLayoutChange}
                                  size={componentSize}
                                  name="nest-messages" onFinish={onFinish}
                                >
                                <div className="shaxsiy">
                                    <div className="row">
                                        <div className="col-3 ant-col-xs-24">
                                            <h2>
                                                Shaxsiy
                                            </h2>
                                        </div>
                                        <div className="col-9 ant-col-xs-24">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Ismingiz"
                                                        name={['user', 'firstName']}
                                                        >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        className='phoneNumberr'
                                                        name="phone"
                                                        label="Phone Number"
                                                        rules={[
                                                        {
                                                            required: true,
                                                            message: 'Iltimos telefon raqamingizni kiriting!',
                                                        },
                                                        ]}
                                                    >
                                                        <Input
                                                        addonBefore={prefixSelector }
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        />
                                                    </Form.Item>
                                                    <Form.Item 
                                                        label="Manzil"
                                                        name={['user', 'address']}
                                                        >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item label="Tavallud kuningiz">
                                                        <DatePicker />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Familiyangiz"
                                                        name={['user', 'lastName']}
                                                        >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="email"
                                                        label="E-mail"
                                                        rules={[
                                                        {
                                                            type: 'email',
                                                            message: 'E-mail xato kiritildi!',
                                                        },
                                                        {
                                                            required: true,
                                                            message: 'Iltimos E-mail manzilingizni kiriting!',
                                                        },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name="upload"
                                                        label=""
                                                        valuePropName="fileList"
                                                        getValueFromEvent={normFile}
                                                        
                                                    >
                                                        <Upload name="userImage" action="/upload.do" listType="picture">
                                                        <Button className='img-upload'>
                                                            <img src="/images/" alt="" />
                                                        </Button>
                                                        </Upload>
                                                    </Form.Item>
                                                </div>
                                                <div className="col-12" style={{marginTop:'20px'}}>
                                                <Radio.Group onChange={onChangeRadio} value={value}>
                                                    <Radio className='radio-text' value={1}>Ayol (qizbola)</Radio>
                                                    <Radio className='radio-text' value={2}>Erkak (O'g'ilbola)</Radio>
                                                </Radio.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border div"></div>
                                <div className="talim">
                                    <div className="row">
                                    <div className="col-3 ant-col-xs-24">
                                            <h2>
                                                Ta'lim
                                            </h2>
                                        </div>
                                        <div className="col-9 ant-col-xs-24">
                                            <div className="row">
                                                <div className="col-12" style={{marginBottom:'25px'}}>
                                                    <Radio.Group onChange={onChangeRadio2} value={value2}>
                                                        <Radio className='radio-text' value={1}>Maktabda o'qiyman</Radio>
                                                        <Radio className='radio-text' value={2}>Maktabni bitirdim</Radio>
                                                    </Radio.Group>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Viloyat"
                                                        name={['user', 'viloyat']}
                                                        >
                                                        <Select placeholder="Viloyatni tanlang">
                                                            <Option value="Toshkent">Toshkent</Option>
                                                            <Option value="Namangan">Namangan</Option>
                                                            <Option value="Farg'ona">Farg'ona</Option>
                                                            <Option value="Andijon">Andijon</Option>
                                                            <Option value="Sirdaryo">Sirdaryo</Option>
                                                            <Option value="Jizzax">Jizzax</Option>
                                                            <Option value="Qashqadaryo">Qashqadaryo</Option>
                                                            <Option value="Surxandaryo">Surxandaryo</Option>
                                                            <Option value="Buxoro">Buxoro</Option>
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Tuman"
                                                        name={['user', 'tuman']}
                                                        >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <Form.Item 
                                                                label="Maktab #"
                                                                name={['user', 'school']}
                                                                >
                                                                <Select placeholder="234-maktab">
                                                                    <Option value="234">234-maktab</Option>
                                                                    <Option value="182">182-maktab</Option>
                                                                    <Option value="1">1-maktab</Option>
                                                                    
                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                        <div className="col-4">
                                                            <Form.Item 
                                                                    label="Sinf"
                                                                    name={['user', 'class']}
                                                                    >
                                                                    <Select placeholder="Sinfni tanlang">
                                                                        <Option value="Toshkent">234-maktab</Option>
                                                                        <Option value="Namangan">182-maktab</Option>
                                                                        <Option value="Farg'ona">1-maktab</Option>
                                                                        
                                                                    </Select>
                                                            </Form.Item>
                                                        </div>
                                                        <div className="col-4">
                                                            <Form.Item 
                                                                    label="Harf A,B ..."
                                                                    name={['user', 'class']}
                                                                    >
                                                                    <Select placeholder="Sinfni tanlang">
                                                                        <Option value="Toshkent">234-maktab</Option>
                                                                        <Option value="Namangan">182-maktab</Option>
                                                                        <Option value="Farg'ona">1-maktab</Option>
                                                                        
                                                                    </Select>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="border div"></div>
                                <div className="talim">
                                    <div className="row">
                                    <div className="col-3 ant-col-xs-24">
                                            <h2>
                                                Til bilish
                                            </h2>
                                        </div>
                                        <div className="col-9 ant-col-xs-24">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <Form.Item 
                                                                label="Ona tilingiz"
                                                                name={['user', 'lang1']}
                                                                >
                                                                <Select placeholder="Uzbek">
                                                                    <Option value="234">Uzbek</Option>
                                                                    <Option value="182">English</Option>
                                                                    <Option value="1">Rus</Option>
                                                                    
                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                        <div className="col-4">
                                                            <Form.Item 
                                                                label="Ingliz tili"
                                                                name={['user', 'lang2']}
                                                                >
                                                                <Select placeholder="Bilaman">
                                                                    <Option value="234">Bilaman</Option>
                                                                    <Option value="182">Bilmayman</Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                        <div className="col-4">
                                                            <Form.Item 
                                                                label="Boshqa til"
                                                                name={['user', 'lang3']}
                                                                >
                                                                <Select placeholder="Uzbek">
                                                                    <Option value="234">Uzbek</Option>
                                                                    <Option value="182">English</Option>
                                                                    <Option value="1">Rus</Option>
                                                                    
                                                                </Select>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="border div"></div>
                                <div className="talim">
                                    <div className="row">
                                    <div className="col-3 ant-col-xs-24">
                                            <h2>
                                                Ish tajriba
                                            </h2>
                                        </div>
                                        <div className="col-9 ant-col-xs-24">
                                            <div className="row">
                                                <div className="col-12" style={{marginBottom:'25px'}}>
                                                    <Radio.Group onChange={onChangeRadio2} value={value2}>
                                                        <Radio className='radio-text' value={1}>Ishlaganman</Radio>
                                                        <Radio className='radio-text' value={2}>Yo'q Ishlamaganman</Radio>
                                                    </Radio.Group>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Ishxona nomi"
                                                        name={['user', 'workPlace']}
                                                        >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Qaysi lavozim"
                                                        name={['user', 'lavozim']}
                                                        >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="ant-col-xs-11 col-sm-6 col-md-6 col-4">
                                                            <Form.Item 
                                                                label="Qachon"
                                                                name={['user', 'workData']}
                                                                >
                                                                <DatePicker></DatePicker>
                                                            </Form.Item>
                                                        </div>
                                                        <div className="ant-col-xs-8 col-sm-5 col-md-5 col-3">
                                                            <Form.Item 
                                                                    label="Qancha vaqt"
                                                                    name={['user', 'class']}
                                                                    >
                                                                    <Select placeholder="3 oy">
                                                                        <Option value="Toshkent">1 oy</Option>
                                                                        <Option value="Namangan">6-oy</Option>
                                                                        <Option value="Farg'ona">1 yil</Option>
                                                                        
                                                                    </Select>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12'>
                                                    <div className='row'>
                                                        <Form.Item name={['user', 'aboutWork']} label="Ish haqida yozing">
                                                            <Input.TextArea />
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="border div"></div>
                                <div className="talim">
                                    <div className="row">
                                    <div className="col-3 ant-col-xs-24">
                                            <h2>
                                                Kariera
                                            </h2>
                                        </div>
                                        <div className="col-9 ant-col-xs-24">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Kim bo'lib ishlaysiz"
                                                        name={['user', 'job']}
                                                        >
                                                        <Input placeholder='Biznesmen'/>
                                                    </Form.Item>
                                                </div>
                                                <div className="col-6">
                                                    <Form.Item 
                                                        label="Sohani tanlang"
                                                        name={['user', 'soha']}
                                                        >
                                                        <Select placeholder="Biznes va boshqaruv">
                                                            <Option value="Toshkent">Toshkent</Option>
                                                            <Option value="Namangan">Namangan</Option>
                                                            
                                                        </Select>
                                                    </Form.Item>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="border div" style={{display: 'none'}}></div>
                                <div className="talim" style={{display: 'none'}}>
                                    <div className="row">
                                    <div className="col-3 ant-col-xs-24">
                                            <h2>
                                               Shablon
                                            </h2>
                                        </div>
                                        <div className="col-9 ant-col-xs-24">
                                            <div className="row">
                                                <div className="col-12">
                                                    
                                                    <Radio.Group onChange={onChangeRadio3} value={value3}>
                                                       <div className="row">
                                                           <div className="col-3">
                                                                <div className='shablon-div'>
                                                                <Radio className='radio-text shablon-radio' value={1}></Radio>
                                                                <img src="/images/MyResume/shablon.png" alt="rasm" />
                                                                </div>
                                                           </div>
                                                           <div className="col-3">
                                                                <div className='shablon-div'>
                                                                <Radio className='radio-text shablon-radio' value={1}></Radio>
                                                                <img src="/images/MyResume/shablon.png" alt="rasm" />
                                                                </div>
                                                           </div>
                                                           <div className="col-3">
                                                                <div className='shablon-div'>
                                                                <Radio className='radio-text shablon-radio' value={1}></Radio>
                                                                <img src="/images/MyResume/shablon.png" alt="rasm" />
                                                                </div>
                                                           </div>
                                                           <div className="col-3">
                                                                <div className='shablon-div'>
                                                                <Radio className='radio-text shablon-radio' value={1}></Radio>
                                                                <img src="/images/MyResume/shablon.png" alt="rasm" />
                                                                </div>
                                                           </div>
                                                       </div>
                                                        
                                                    </Radio.Group>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Button className='MyResume-btn MyResume-btn-left'>Oldindan ko’rish</Button>

                                    <Link to='/tabrezum'>
                                        <Button className='MyResume-btn'>Rezume yaratish</Button>
                                    </Link>

                                </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyResumeC
