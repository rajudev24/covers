import { Row, Space, Spin } from "antd";
export default function Loading() {
  return (
    <Row justify="center" align="middle">
      <Space>
        <Spin tip="Loading" size="large"></Spin>
      </Space>
    </Row>
  );
}
