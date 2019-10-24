import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { Form, Input, Button } from 'antd';

import './antform.css';


export class RegistrationForm extends React.Component {
    state = { confirmDirty: false, autoCompleteResult: [] };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (this.props.checkUrl === '/') {
                    this.props.onAddUser({ ...values });
                    this.props.onSubmitToServer({ ...values });
                    // this.resetForm();
                }

                if (this.props.checkUrl === '/signin') {
                    this.props.fromServer({ ...values });

                }

            }
        });
    };

    resetForm = () => {
        this.props.form.resetFields();
    }

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) { callback('Two passwords that you enter is inconsistent!'); }
        else { callback(); }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { checkUrl } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 }, sm: { span: 8 }
            },
            wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
        };


        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                {checkUrl === '/signin' ? <h3>Log In</h3> : ""}
                {checkUrl === '/' ?
                    <React.Fragment>
                        <h3>Sign up</h3>
                        <Form.Item>
                            {getFieldDecorator('fullName', {
                                rules: [{ required: true, message: 'Please input your full name!', whitespace: true }],
                            })(<Input placeholder="Full Name" />)}
                        </Form.Item>
                    </React.Fragment> : ''}
                <Form.Item >
                    {getFieldDecorator('email', {
                        rules: [
                            { type: 'email', message: 'The input is not valid E-mail!', },
                            { required: true, message: 'Please input your E-mail!', },
                        ],
                    })(<Input placeholder="Email Address" />)}
                </Form.Item>
                {checkUrl === '/' ?
                    <Form.Item>
                        {getFieldDecorator('jobTitle', {
                            rules: [{ required: true, message: 'Please input your job title!', whitespace: true }],
                        })(<Input placeholder="Job Title" />)}
                    </Form.Item> : ''}
                <Form.Item l>
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: 'Please input your password!', min: 6 },
                            { validator: this.validateToNextPassword, },
                        ],
                    })(<Input.Password placeholder="Password" />)}
                </Form.Item>
                {checkUrl === '/' ?
                    <React.Fragment>
                        <Form.Item >
                            {getFieldDecorator('confirm', {
                                rules: [
                                    { required: true, message: 'Please confirm your password!', min: 6 },
                                    // {min: 6,message: 'Please confirm your password!'},
                                    { validator: this.compareToFirstPassword, },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur}
                                placeholder="Repeat Password" />)}
                        </Form.Item>
                        <hr className="py-1" />
                        <p className="">Passwords must be at least 6 Characters long,</p>
                        <div className="py-1"><span>Already have an account? </span><Link className="pl-2" to="/signin">Log In</Link></div>
                        <div className="py-2 pt-4">
                            <Button type="primary" htmlType="submit" className="btn-block ">
                                Join Workspace
            </Button>
                        </div>
                    </React.Fragment> : ''}

                {/* for sign */}
                {checkUrl === '/signin' ?
                    <React.Fragment>
                        <p className="text-center">Forgot Passord?</p>
                        <div className="">
                            <Button type="primary" htmlType="submit" className="btn-block float-right col-md-5">
                                Log In
                </Button>
                        </div>
                    </React.Fragment> : ""}
            </Form>
        );
    }
}

RegistrationForm.propTypes = {
    checkUrl: PropTypes.string,
};

const MultiForm = Form.create()(RegistrationForm);
export default MultiForm
