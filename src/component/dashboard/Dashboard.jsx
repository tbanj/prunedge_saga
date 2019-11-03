import React from 'react';
// import antd from 'antd';
import { Layout, Menu, Icon, Table } from 'antd';
import UserIcon from '../template/userIcon/UserIcon';
import './dashboard.css';
import StorageProgress from '../template/storageProgress/StorageProgress';

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
                            <Icon component={() => (<img className="mb-2" src="/images/dashboard/sidebar/home_icon.svg" alt="homeIcon" />)} />
                            <span className="">Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="2" className="my-3">
                            <Icon component={() => (<img className="mb-2" src="/images/dashboard/sidebar/User.svg" alt="userIcon" />)} />
                            <span className="">Audit Log</span>
                        </Menu.Item>
                        <Menu.Item key="3" className="my-3">
                            <Icon component={() => (<img className="mb-2" src="/images/dashboard/sidebar/settings_icon.svg" alt="settingIcon" />)} />
                            <span className="">Settings</span>
                        </Menu.Item>
                        <Menu.Item key="4" className=" sidebarLogout">
                            <Icon component={() => (<img className="mb-2" src="/images/dashboard/sidebar/Left arrow round.svg" alt="leftArrowIcon" />)} />
                            <span className="">Log Out</span>
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
                            <div className="m-3 ">
                                <UserIcon />

                            </div>
                        </div>
                        <div className="col-md-4 p-4 pr-3" >
                            <div className="bg-white p-5 mr-3" style={{ height: '100%' }}>
                                <StorageProgress />
                            </div>
                        </div>
                    </div>

                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;


