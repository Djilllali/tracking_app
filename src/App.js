import './App.css';
import Sider from 'antd/lib/layout/Sider'
import SubMenu from 'antd/lib/menu/SubMenu'
import "antd/dist/antd.css";
import { Layout, Menu, Input, message} from 'antd';
import { UserOutlined, NotificationOutlined, LaptopOutlined} from '@ant-design/icons';


const { Header, Footer } = Layout;

const App =()=>{
  const onSearch = value => console.log(value);
  const { Search } = Input;
  
  return(
  <Layout>
    <Header className="header" style={{padding:10}}>
    <div className="logo" />
    <Search  placeholder="input search text" onSearch={onSearch} enterButton style={{ width: 200, margin: '16px 24px 16px 0', float: "right"}} />
      <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout  style={{flexDirection:"row"}} >
      <Sider width={200} className="site-layout-background">
        <Menu theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Partners">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Relay points">
            <Menu.Item key="5">Ajouter</Menu.Item>
            <Menu.Item key="6">Editer</Menu.Item>
            <Menu.Item key="7">Supprimer</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Parcels">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="Manage">
            <Menu.Item key="13">option </Menu.Item>
            <Menu.Item key="14">option</Menu.Item>
            <Menu.Item key="15">option</Menu.Item>
            <Menu.Item key="16">option</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <MyContent />
      
    </Layout>
      <Footer style={{ textAlign: 'center',  margin: '16px 24px 16px 0'}}>
        About the company
        TechsioCc is a new Brand for the online sale of all types of 
        digital codes and mainly Gaming codes. Appeared in June 2020, TechsioCc
        operates in the Algerian market mainly, Maghreb or even Arab under the 
        supervision of an Algerian company located in Cheraga, Algiers, Algeria.
      </Footer>
  </Layout>
  )
}
export default App