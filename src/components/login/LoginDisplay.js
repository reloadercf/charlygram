import React, {Component} from 'react'
import"./login.css"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginDisplay =({})=>{
    return(
        <div className="login">
                <div className="form_login">
                    Iniciar Sesion
                <form action="">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>
                    
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />       
                    </FormItem>
                    <FormItem>
                        <Checkbox>Remember me</Checkbox> <br/>
                            <Button type="primary" htmlType="submit" className="login-form-button">Iniciar Sesion</Button> 
                    </FormItem>
                </form>
            </div>         
        </div>
      
    )
}

export default LoginDisplay;



