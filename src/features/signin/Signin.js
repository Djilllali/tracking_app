import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Spin,
  Alert,
} from "antd";
import { motion } from "framer-motion";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./signin.css";
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchSignin, setSigninError, initSignin } from "./signinSlice";
import React from "react";
import { Redirect } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Signin = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    remember: false,
  });

  const dispatch = useDispatch();

  const fetchSigninError = useSelector(
    (state) => state.signin.fetchSigninError
  );
  const isFetchingSignin = useSelector(
    (state) => state.signin.isFetchingSignin
  );
  const redirectToDashboard = useSelector(
    (state) => state.signin.redirectToDashboard
  );

  if (redirectToDashboard) return <Redirect to="/dashboard/users" />;

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (fetchSigninError !== null) dispatch(setSigninError(null));

    if (e.keyCode === 13) dispatch(fetchSignin(state));
  };
  const handleSigninClick = (e) => {
    dispatch(fetchSignin(state));
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col xs={12} style={{ padding: "0px 128px 128px 128px" }}>
        <Title style={{ marginBottom: 32 }}>Login</Title>
        <Form name="normal_login" className="login-form">
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onKeyDown={handleKeyDown}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              onKeyDown={handleKeyDown}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          {fetchSigninError ? (
            <Form.Item>
              <Alert
                type="error"
                message="Incorrect Email Or Password"
                banner
              />
            </Form.Item>
          ) : null}

          <Form.Item>
            {isFetchingSignin ? (
              <Spin indicator={antIcon}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </Spin>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "100%" }}
                onClick={handleSigninClick}
              >
                Log in
              </Button>
            )}
          </Form.Item>
        </Form>
      </Col>
      <Col xs={12} style={{ height: "100vh", background: "#1d007d" }}>
        {/* <Row
          style={{
            width: "100%",
            height: "100vh",
          }}
          justify="center"
        >
          <Col
            xs={18}
            style={{
              height: "250px",
              margin: 64,
              background: "rgb(93 2 232 / 66%)",
              borderRadius: 5,
              padding: 32,
            }}
            align="center"
          >
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Title
                style={{ color: "white", fontSize: "4em", textAlign: "center" }}
              >
                Techsio
              </Title>
            </motion.div>
          </Col>
        </Row> */}
      </Col>
    </Row>
  );
};

export default Signin;
