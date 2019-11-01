import React from 'react';
// import antd from 'antd';

import './dashboard.css';
// const { Layout, Menu, Icon } = antd;
import { Layout, Menu, Icon, Table } from 'antd';
const { Header, Sider, Content } = Layout;



const columns = [
    {
        title: 'Event Time',
        dataIndex: 'eventTime',

        /* specify the condition of filtering result
        here is that finding the name started with `value` */
        // filterMultiple: false,
        defaultSortOrder: 'descend',
        sorter: (a, b) => {
            const monthDay = a.eventTime.split(",");
            const day = monthDay.slice(0, 1).join(" ");
            const pickTime = day.split(" ");
            const monthDaySecond = b.eventTime.split(",");
            const daySec = monthDaySecond.slice(0, 1).join(" ");
            const pickTimeSec = daySec.split(" ");
            return pickTime[1] - pickTimeSec[1];
        },
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Event Type',
        dataIndex: 'eventType',
        /* specify the condition of filtering result
        here is that finding the eventType started with `value` */
        sorter: (a, b) => a.eventType.length - b.eventType.length,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'User',
        dataIndex: 'user',
        render: (text, record) => (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4">
                        <img style={{ borderRadius: '50%' }} src="/images/dashboard/Avatar_3.3.svg"
                            alt="user" width="60" className="img-circle" />
                    </div>

                    <div className="col-md-8">
                        <div >
                            <span style={{}}>{record.user[0]}</span>
                        </div>
                        <span style={{ color: '#A6AEBC' }}>{record.user[1]}</span>
                    </div>
                </div>
            </React.Fragment>
        ),
    },
    {

        dataIndex: 'detail',
        // filterMultiple: false,
        // sorter: (a, b) => a.user.length - b.user.length,
        // sortDirections: ['descend', 'ascend'],
        render: (text, record) => (
            <span>
                <a href={`${record.user[0]}`}>{record.detail}</a>
            </span>

        ),
    },
];

const data = [
    { key: '1', eventTime: extractTime(), eventType: 'Delete file', status: 'Success', user: ['Segun Oni', 'Accounting'], detail: 'Details' },
    { key: '2', eventTime: extractTime(2), eventType: 'Rename file', status: 'Fail', user: ['Segun Oni', 'Accounting'], detail: 'Details' },
    { key: '3', eventTime: extractTime(3), eventType: 'Move file', status: 'Success', user: ['Segun Oni', 'Accounting'], detail: 'Details' },
    { key: '4', eventTime: extractTime(4), eventType: 'Invite user', status: 'Success', user: ['Segun Oni', 'Accounting'], detail: 'Details' },
    { key: '5', eventTime: extractTime(5), eventType: 'Delete entry', status: 'Success', user: ['Segun Oni', 'Accounting'], detail: 'Details' },

];

function onShowSizeChange(current, pageSize = 3) {
    console.log(current, pageSize);
}

function extractTime(day = 0) {
    const date = new Date();
    const transformDate = date.setDate(date.getDate() + day);
    const extractValue = new Date(transformDate).toDateString();
    const extractDate = extractValue.split(" ");
    const extractTime = new Date(transformDate).toLocaleTimeString();
    const time = extractTime.split(" ");
    const splitTime = time.slice(0, 1);
    const newTime = splitTime[0].split(":");
    return `${extractDate.slice(1, 3).join(" ")}, ${newTime.slice(0, -1).join(":")} ${time[1]}`;
}


function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

class Dashboard extends React.Component {
    state = { collapsed: false };

    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo   my-5" >
                        <div className="d-flex justify-content-center">
                            <div className="logoBackground text-center ">
                                <img className="my-2" src="/images/dashboard/photo.PNG" alt="logo_edms" />
                            </div>
                        </div>
                        <h5 className="text-center pt-3">Jaohn Samue</h5>
                        <p className="userPost text-center">Front Desk Officer</p>
                        <p className="text-center" id="userPostTitle ">Finance</p>
                    </div>
                    <Menu className="" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" className="my-3">
                            <span id="logoDim" ><img className="mb-2" src="/images/dashboard/home_icon.PNG" alt="homeIcon" /></span>
                            <span className="p-3">Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="2" className="my-3">
                            <span id="logoDim" ><img className="mb-2" src="/images/dashboard/user.PNG" alt="userIcon" /></span>
                            <span className="p-3">Audit Log</span>
                        </Menu.Item>
                        <Menu.Item key="3" className="my-3">

                            <span id="logoDim" ><img className="mb-2" src="/images/dashboard/gear.PNG" alt="settingIcon" /></span>
                            <span className="p-3">Settings</span>
                        </Menu.Item>

                        <Menu.Item key="4" className="mt-auto ">

                            <span id="logoDim" ><img className="mb-2" src="/images/dashboard/Left_arrow_round.PNG" alt="settingIcon" /></span>
                            <span className="p-3">Settings</span>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger" onClick={this.toggle}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        />
                    </Header>
                    <div className="row">
                        <div className="col-md-8">
                            <div>
                                <Content
                                    style={{
                                        margin: '24px 16px', padding: 24,
                                        background: '#fff', minHeight: 280,
                                    }}>
                                    <div className=" ">
                                        <div>
                                            <h3>RECENT LOGS</h3>
                                            <div className="superAdminLine superAdminLineColor col-md-1"></div>
                                            <Table columns={columns} pagination={{ onShowSizeChange: onShowSizeChange(1, 4) }} dataSource={data} onChange={onChange} scroll={{ x: 700 }}>

                                            </Table> </div>

                                    </div>
                                </Content>
                            </div>
                            <div className="m-3 bg-white">
                                {/* bottom graph and user summary div */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="superAdminIcon departmentBackground text-center ">
                                                            <img className="my-3" width="35" src="/images/dashboard/departments/Group (2).svg" alt="department_edms" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="superAdminIcon memberBackground text-center ">
                                                            <img className="my-3" width="30" src="/images/dashboard/members/Vector.svg" alt="department_edms" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="superAdminIcon departmentBackground text-center ">
                                                            <img className="my-3" width="35" src="/images/dashboard/departments/Group (2).svg" alt="department_edms" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="superAdminIcon memberBackground text-center ">
                                                            <img className="my-3" width="30" src="/images/dashboard/members/Vector.svg" alt="department_edms" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;


