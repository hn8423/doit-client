import * as React from 'react';
import stylesheet from 'antd/dist/antd.min.css';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const ButtonTest = () => {
  console.log('a');
};

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
          #components-layout-demo-top-side-2 .logo {
            width: 120px;
            height: 31px;
            background: #333;
            border-radius: 6px;
            margin: 16px 28px 16px 0;
            float: left;
          }
        `}</style>

        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">
              <Link href="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={450} style={{ background: '#fff', height: '600px' }}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    타이머
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item href="/antd">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/history">History</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
              <Button onClick={ButtonTest} type="danger">
                danger
              </Button>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// import { Breadcrumb, Icon } from 'antd';

// ReactDOM.render(
//   <Breadcrumb>
//     <Breadcrumb.Item href="">
//       <Icon type="home" />
//     </Breadcrumb.Item>
//     <Breadcrumb.Item href="">
//       <Icon type="user" />
//       <span>Application List</span>
//     </Breadcrumb.Item>
//     <Breadcrumb.Item>Application</Breadcrumb.Item>
//   </Breadcrumb>,
//   mountNode,
// );