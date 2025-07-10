import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Layout, Menu, Card, Progress, Avatar, Dropdown, Table, Tag, Typography, Input, Button, Space,} from "antd";
import {AppstoreOutlined, MessageOutlined, StarOutlined, BarChartOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined,EllipsisOutlined,} from "@ant-design/icons";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell,} from "recharts";

const { Header, Sider, Content } = Layout;

export function Dashboard() {

  const [collapsed, setCollapsed] = useState(false);
  const statsCardsData = [
    {
      title: "Total Tasks",
      value: "78",
      icon: "bi-card-checklist",
      color: "text-blue-400",
    },
    {
      title: "Completed",
      value: "52",
      icon: "bi-check2-circle",
      color: "text-green-400",
    },
    {
      title: "Active Projects",
      value: "12",
      icon: "bi-briefcase-fill",
      color: "text-orange-400",
    },
    {
      title: "Team Members",
      value: "8",
      icon: "bi-people-fill",
      color: "text-indigo-400",
    },
  ];
  const analyticsData = [
    { name: "Jan", created: 25, completed: 20 },
    { name: "Feb", created: 30, completed: 22 },
    { name: "Mar", created: 45, completed: 40 },
    { name: "Apr", created: 35, completed: 32 },
    { name: "May", created: 50, completed: 45 },
    { name: "Jun", created: 48, completed: 48 },
  ];
  const pieChartData = [
    { name: "To Do", value: 12 },
    { name: "In Progress", value: 14 },
    { name: "Done", value: 52 },
    { name: "Rejected", value: 4 },
  ];
  const PIE_CHART_COLORS = {
    "To Do": "#3B82F6",
    "In Progress": "#F97316",
    Done: "#22C55E",
    Rejected: "#EF4444",
  };
  const recentUsersData = [
    {
      key: "1",
      name: "John Brown",
      role: "Developer",
      status: "online",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      key: "2",
      name: "Jane Doe",
      role: "Designer",
      status: "offline",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      key: "3",
      name: "Peter Jones",
      role: "Manager",
      status: "online",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      key: "4",
      name: "Susan Lee",
      role: "QA Tester",
      status: "away",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
  ];
  const userTableColumns = [
    {
      title: <span className="text-gray-300">User</span>,
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar src={record.avatar} />
          <span className="ml-3 text-white">{text}</span>
        </div>
      ),
    },
    {
      title: <span className="text-gray-300">Role</span>,
      dataIndex: "role",
      key: "role",
      render: (text) => <span className="text-gray-400">{text}</span>,
    },
    {
      title: <span className="text-gray-300">Status</span>,
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color =
          status === "online"
            ? "green"
            : status === "away"
            ? "gold"
            : "volcano";
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];
  const tasksData = {
    todo: {
      title: "TO DO",
      accentColor: "#3B82F6",
      tasks: [
        {
          id: 1,
          title: "Website Redesign",
          description: "Revamp the main landing page.",
          progress: 0,
          team: [
            { avatar: "https://i.pravatar.cc/150?img=1" },
            { avatar: "https://i.pravatar.cc/150?img=2" },
          ],
          comments: 5,
          attachments: 2,
        },
      ],
    },
    inProgress: {
      title: "IN PROGRESS",
      accentColor: "#F97316",
      tasks: [
        {
          id: 3,
          title: "Mobile App UI",
          description: "Designing the profile screen.",
          progress: 65,
          team: [
            { avatar: "https://i.pravatar.cc/150?img=4" },
            { avatar: "https://i.pravatar.cc/150?img=5" },
            { avatar: "https://i.pravatar.cc/150?img=6" },
          ],
          comments: 12,
          attachments: 4,
        },
      ],
    },
    done: {
      title: "DONE",
      accentColor: "#22C55E",
      tasks: [
        {
          id: 4,
          title: "Database Migration",
          description: "Migrate user data.",
          progress: 100,
          team: [{ avatar: "https://i.pravatar.cc/150?img=7" }],
          comments: 2,
          attachments: 0,
        },
      ],
    },
  };
  const taskCardMenu = (
    <Menu
      items={[
        { key: "1", label: "View Details" },
        { key: "2", label: "Edit Task" },
        { key: "3", label: "Delete Task", danger: true },
      ]}
    />
  );

  const siderMenuItems = [
    { key: "1", icon: <AppstoreOutlined />, label: "Dashboard" },
    { key: "2", icon: <MessageOutlined />, label: "Chat" },
    { key: "3", icon: <StarOutlined />, label: "Favorites" },
    { key: "4", icon: <BarChartOutlined />, label: "Statistics" },
    { key: "5", icon: <SettingOutlined />, label: "Options" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "rgb(1, 26, 74)",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 2, 
        }}
      >
        <div className="flex flex-col items-center py-8">
          <Avatar
            size={collapsed ? 48 : 96}
            src="aditya-image.jpg"
            className="border-4 border-emerald-400 shadow-md transition-all duration-300"
          />
          {!collapsed && (
            <>
              <Typography.Title
                level={4}
                className="!mt-4 !font-extrabold !text-[rgb(39,207,245)] tracking-wide"
              >
                ADITYA SONI
              </Typography.Title>
              <Typography.Text className="!text-gray-400 text-sm">
                Admin
              </Typography.Text>
            </>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={siderMenuItems}
          style={{ background: "transparent", borderRight: 0 }}
        />
      </Sider>

      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? 80 : 200,
          transition: "margin-left 0.2s",
          background: "rgb(1, 17, 46)",
        }}
      >
        <Header
          style={{
            background: "rgb(1, 21, 59)",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
          className="shadow-md"
        >
          <div className="flex items-center">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className:
                  "trigger text-white text-lg hover:text-emerald-400 transition-colors",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Input.Search
              placeholder="Search here..."
              allowClear
              style={{ width: 288, marginLeft: 24 }}
              className="hidden md:block"
            />
          </div>

          <Typography.Title
            level={3}
            className="!font-extrabold !text-emerald-400 !m-0 drop-shadow-lg hidden lg:block"
          >
            USER DASHBOARD
          </Typography.Title>

          <Space>
            <Link to="/">
              <Button type="primary" danger>
                Sign Out
              </Button>
            </Link>
          </Space>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "rgb(1, 17, 46)",
          }}
        >
          <div className="space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {statsCardsData.map((stat, index) => (
                <Card
                  key={index}
                  className="!bg-[rgb(1,21,59)] !border-gray-700 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl ${stat.color}`}>
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">
                        {stat.title}
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card
                  title={
                    <span className="text-white font-semibold">
                      Tasks Completion Analytics
                    </span>
                  }
                  className="!bg-[rgb(1,21,59)] !border-gray-700 shadow-lg h-full"
                >
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart
                        data={analyticsData}
                        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="rgba(255, 255, 255, 0.1)"
                        />
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis stroke="#8884d8" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            border: "1px solid #333",
                          }}
                          labelStyle={{ color: "#fff" }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="completed"
                          stroke="#22C55E"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="created"
                          stroke="#3B82F6"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
              <div>
                <Card
                  title={
                    <span className="text-white font-semibold">
                      Task Distribution
                    </span>
                  }
                  className="!bg-[rgb(1,21,59)] !border-gray-700 shadow-lg h-full"
                >
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={PIE_CHART_COLORS[entry.name]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            border: "1px solid #333",
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </div>

            <Card
              title={
                <span className="text-white font-semibold">Recent Users</span>
              }
              className="!bg-[rgb(1,21,59)] !border-gray-700 shadow-lg"
            >
              <style>{`.ant-table,.ant-table-thead>tr>th,.ant-table-tbody>tr:hover>td{background:transparent!important}.ant-table-thead>tr>th{border-bottom:1px solid #4A5568!important;color:#A0AEC0!important}.ant-table-tbody>tr>td{border-bottom:1px solid #2D3748!important}.ant-pagination-item a,.ant-pagination-item-link,.ant-select-arrow{color:#A0AEC0!important}.ant-pagination-item-active a{background:#38B2AC!important;color:#fff!important;border-color:#38B2AC!important}`}</style>
              <Table
                columns={userTableColumns}
                dataSource={recentUsersData}
                pagination={{ pageSize: 4 }}
              />
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
              {Object.values(tasksData).map((column) => (
                <div
                  key={column.title}
                  className="bg-[rgb(1,26,74)] p-4 rounded-xl shadow-md flex flex-col"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg text-white">
                      {column.title}
                    </h2>
                    <span className="bg-gray-700 text-white text-sm font-bold px-2 py-1 rounded-full">
                      {column.tasks.length}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 overflow-y-auto">
                    {column.tasks.map((task) => (
                      <Card
                        key={task.id}
                        className="!bg-[rgb(1,21,59)] !border-gray-700 shadow-lg"
                        bodyStyle={{ padding: "1rem" }}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-white font-semibold text-base">
                            {task.title}
                          </h3>
                          <Dropdown overlay={taskCardMenu} trigger={["click"]}>
                            <a onClick={(e) => e.preventDefault()} href="!#">
                              <EllipsisOutlined className="text-gray-400 text-xl" />
                            </a>
                          </Dropdown>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          {task.description}
                        </p>
                        <div className="my-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 text-xs font-medium">
                              Progress
                            </span>
                            <span className="text-gray-300 text-xs font-medium">
                              {task.progress}%
                            </span>
                          </div>
                          <Progress
                            percent={task.progress}
                            showInfo={false}
                            strokeColor={column.accentColor}
                            trailColor="rgba(255, 255, 255, 0.1)"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <Avatar.Group maxCount={3} size="small">
                            {task.team.map((member, index) => (
                              <Avatar key={index} src={member.avatar} />
                            ))}
                          </Avatar.Group>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <i className="bi bi-chat-dots"></i>
                            <span>{task.comments}</span>
                            <i className="bi bi-paperclip ml-2"></i>
                            <span>{task.attachments}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <button className="mt-4 w-full text-white bg-transparent border-2 border-dashed border-gray-600 hover:bg-gray-700 hover:border-solid rounded-lg py-2 transition-colors">
                    + Add Task
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
