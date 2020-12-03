import { Tabs } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import Map from "./map";
import ViewList from "./ViewList";
import {
  Route,
  useHistory,
} from "react-router-dom";

const { TabPane } = Tabs;



const MyContent = () => {
  const history = useHistory();
  function handleTabChange(key) {
      if (key==="1"){history.push("/map")}
      else history.push("/ViewList") 
  }
  return (
    <Layout style={{ display: "flex", flex: "1", padding: "0 " }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div>
          <Tabs
            onChange={handleTabChange}
            type="card"
          >
            <TabPane tab="View map" key="1" >
              Something here
            </TabPane>
            <TabPane tab="View list" key="2" >
              and something here
            </TabPane>
          </Tabs>
        </div>

        <switch>
          <Route path="/map" component={Map} />
          <Route path="/ViewList" component={ViewList} />
        </switch>
      </Content>
    </Layout>
  );
};
export default MyContent
