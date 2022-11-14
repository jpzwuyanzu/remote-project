import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Input,
  Pagination,
  Modal,
  Form,
  notification,
} from "antd";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchUrl, setSearchUrl] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dataSource = [
    {
      key: "1",
      downLaodUrl: "https://www.baidu.com",
      bob: 100,
      boyu: 100,
      halan: 100,
      customer: 100,
      today: 100,
      total: 1000,
    },
    {
      key: "2",
      downLaodUrl: "https://www.youtube.com",
      bob: 100,
      boyu: 100,
      halan: 100,
      customer: 100,
      today: 100,
      total: 1000,
    },
  ];

  const columns: any = [
    {
      title: "序号",
      key: "name",
      render: (text: any, record: any, index: any) => {
        return <>{index + 1}</>;
      },
      align: "center",
    },
    {
      title: "落地页网址",
      dataIndex: "downLaodUrl",
      key: "downLaodUrl",
      align: "center",
    },
    {
      title: "BOB",
      dataIndex: "bob",
      key: "bob",
      align: "center",
    },
    {
      title: "BoYu",
      dataIndex: "boyu",
      key: "boyu",
      align: "center",
    },
    {
      title: "哈兰直播",
      dataIndex: "halan",
      key: "halan",
      align: "center",
    },
    {
      title: "在线客服",
      dataIndex: "customer",
      key: "customer",
      align: "center",
    },
    {
      title: "今日点击",
      dataIndex: "today",
      key: "today",
      align: "center",
    },
    {
      title: "昨日点击",
      dataIndex: "today",
      key: "today",
      align: "center",
    },
    {
      title: "本周点击",
      dataIndex: "today",
      key: "today",
      align: "center",
    },
    {
      title: "上周点击",
      dataIndex: "today",
      key: "today",
      align: "center",
    },
    {
      title: "总计",
      dataIndex: "total",
      key: "total",
      align: "center",
    },
    {
      title: "操作",
      key: "operate",
      align: "center",
      render: (record: any, text: any, index: any) => {
        return (
          <>
            <Space>
              <Button type="primary" onClick={() => showModal(2)}>
                编辑
              </Button>
              <Button
                danger
                type="primary"
                onClick={() => deleteSingleData(record)}
              >
                删除
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  const showModal = (type: number) => {
    setIsEdit(type === 1 ? true : false);
    setIsModalOpen(true);
  };
  const deleteSingleData = (item: any) => {
    console.log("删除数据", item);
    notification.open({
      message: "成功提示",
      type: "success",
      description: "删除成功",
    });
  };

  const handleOk = () => {
    console.log(searchUrl);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlerPageChange = (pageNum: number) => {
    console.log(pageNum);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "90%" }}>
        <div style={{ marginBottom: "25px" }}>
          <Space>
            <Input placeholder="请输入落地页网址" style={{ width: "220px" }} />
            <Button type="primary" icon={<SearchOutlined />}>
              查询
            </Button>
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              onClick={() => showModal(1)}
            >
              新增
            </Button>
          </Space>
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />;
      </div>
      <div style={{ height: "10%", textAlign: "right" }}>
        <Pagination
          defaultCurrent={1}
          total={200}
          showQuickJumper
          onChange={handlerPageChange}
        />
      </div>
      <Modal
        title={!isEdit ? "编辑落地页URl" : "新增落地页URl"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="落地页网址"
            name="downloadUrl"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(e) => {
                console.log(e.target.value);
                setSearchUrl(e.target.value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Home;
