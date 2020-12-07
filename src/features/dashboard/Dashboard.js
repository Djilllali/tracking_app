import React from "react";
import { profileUrl } from "../../constants";
import Map from "../../components/map";
import ViewList from "../../components/ViewList";
import EditableTable from "../../components/EditPopup";
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";
import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
  Menu,
  Spin,
  Avatar,
  Alert,
  Row,
  Col,
  Typography,
  Popover,
  Tabs,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  NotificationOutlined,
  LaptopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { setPathname, fetchUserProfile } from "./dashboardSlice";

//import Users from "../users/Users";
import { motion } from "framer-motion";
const { TabPane } = Tabs;
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
let keys = {
  "/dashboard/map": "1",
  "/dashboard/ViewList": "2",
  "/dashboard/files": "9",
};

let Dashboard = ({}) => {
  let history = useHistory();
  let [state, setState] = React.useState({
    collapsed: false,
  });

  const dispatch = useDispatch();

  const pathname = useSelector((state) => state.dashboard.pathname);
  const isFetchingProfile = useSelector(
    (state) => state.dashboard.isFetchingProfile
  );
  const fetchProfileResult = useSelector(
    (state) => state.dashboard.fetchProfileResult
  );
  const fetchProfileError = useSelector(
    (state) => state.dashboard.fetchProfileError
  );

  const { collapsed } = state;
  const { useEffect } = React;
  const onCollapse = (collapsed) => {
    setState({ ...state, collapsed });
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(setPathname(history.location.pathname));
    return history.listen((location) => {
      dispatch(setPathname(location.pathname));
    });
  }, []);

  const handlePageChange = (e) => {
    //console.log(e.key);
    switch (e.key) {
      case "1":
        history.push("/dashboard/map");
        break;
      case "2":
        history.push("/dashboard/Viewlist");
        break;
      case "9":
        history.push("/dashboard/files");
        break;
    }
  };
  console.log(
    "NEW RENDER ! pathname = " + pathname + " key = " + keys[pathname]
  );

  const AvatarLoader = () => {
    return (
      <Spin spinning={true}>
        <Avatar size={40} icon={<UserOutlined />} />
      </Spin>
    );
  };

  const AvatarProfile = ({}) => {
    const content = fetchProfileResult ? (
      <div>
        <Text>
          <b>Username: </b> {fetchProfileResult?.username}
        </Text>
        <br />
        <Text>
          <b>Email: </b> {fetchProfileResult?.email}
        </Text>
        <br />
        <Text>
          <b>Type: </b> {fetchProfileResult?.type}
        </Text>
        <br />
        <Text>
          <b>Wallet: </b>
          {Number(fetchProfileResult?.wallet?.points).toFixed(2) +
            " pts" +
            "  / " +
            Number(fetchProfileResult?.wallet?.dollar).toFixed(2) +
            " $" +
            "  / " +
            Number(fetchProfileResult?.wallet?.jd).toFixed(2) +
            " jd"}
        </Text>
      </div>
    ) : (
      <Text>Error</Text>
    );
    return (
      <Popover content={content} title="My Profile" trigger="click">
        <Avatar
          size={40}
          icon={<UserOutlined />}
          style={{ cursor: "pointer" }}
        />
      </Popover>
    );
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          style={{
            height: "64px",
            margin: "16px",
            background: "rgba(255, 255, 255, 1)",
          }}
        >
          {!collapsed ? (
            <img
              src={process.env.PUBLIC_URL + "/Untitled-412.png"}
              style={{ width: "90%", height: 80, marginLeft: 8 }}
            />
          ) : null}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onSelect={handlePageChange}
          selectedKeys={[keys[pathname]]}
        >
          <SubMenu key="sub1" title="Manage">
            <Menu.Item key="3" icon={<TeamOutlined />}>
              Users
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="View Options">
            <Menu.Item key="1">View Map</Menu.Item>
            <Menu.Item key="2">View List</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<LaptopOutlined />} title="Relay points">
            <Menu.Item key="5">Ajouter</Menu.Item>
            <Menu.Item key="6">Editer</Menu.Item>
            <Menu.Item key="7">Supprimer</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="Parcels">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<NotificationOutlined />} title="Manage">
            <Menu.Item key="13">option </Menu.Item>
            <Menu.Item key="14">option</Menu.Item>
            <Menu.Item key="15">option</Menu.Item>
            <Menu.Item key="16">option</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ overflowY: "scroll", maxHeight: "100vh" }}
      >
        <Header className="site-layout-background" style={{ padding: 0 }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
 
        </Header>
        <Row >
            <Col xs={18}>
              <Text>{"pathname = " + pathname}</Text>
            </Col>
            <Col xs={6}>
              <Row justify="center">
                <Col>
                  {isFetchingProfile ? <AvatarLoader /> : <AvatarProfile />}
                </Col>
              </Row>
            </Col>
          </Row>

        <Row justify="center">
          <Col xs={24} md={12} lg={6}>
            <Spin spinning={isFetchingProfile}>
              <Alert
                style={{ margin: 32 }}
                message="Profile"
                description={
                  fetchProfileResult !== null
                    ? JSON.stringify(fetchProfileResult)
                    : null
                }
                type="info"
              />
            </Spin>
          </Col>
        </Row>
        <Switch>
          <Route path="/dashboard/map" component={Map} />
          <Route path="/dashboard/ViewList" component={ViewList} />
          <Route path="/dashboard/EditPopup" component={EditableTable} />
        </Switch>
        <Footer style={{ textAlign: 'center',  margin: '16px 24px 16px 0'}}>
        TechsioCc is a new Brand for the online sale of all types of 
        digital codes and mainly Gaming codes.
      </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
