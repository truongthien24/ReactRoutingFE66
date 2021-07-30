import React, { Component } from 'react'
import { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// export const AdminTemplate = (props) => {


//     return <Route exact path={props.path} render={(propsRoute)=> {
//         return <div>

//         </div>
//     }}/>

// }

export default class AdminTemplate extends Component {

    state = {
        collapsed: false,
    };
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        let Component = this.props.component;

        const { collapsed } = this.state;
        return (
            <Route exact path={this.props.path} render={(propsRoute)=> {
                return <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                  <div className="logo">
                      <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..."></img>
                  </div>
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                      <Menu.Item key="3">Create user</Menu.Item>
                      <Menu.Item key="4">Users</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Film">
                      <Menu.Item key="6">
                          <NavLink to="/admin/createFilm">Create film</NavLink>
                      </Menu.Item>
                      <Menu.Item key="8">Films</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                      Files
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Header className="site-layout-background" style={{ padding: 0 }} />
                  <Content style={{ margin: '0 16px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                      <Component {...propsRoute}/>
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
              </Layout>
            }}/>
        )
    }
}
