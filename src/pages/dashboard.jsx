import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  SmileOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,UpOutlined
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Dropdown, Layout, Menu, Space, theme } from "antd";
import React, { useRef, useState } from "react";
import "../pages/dashboard.css";

import UserIcon from "../assests/images/profile-pic-01.jpg";
import ourUser_2 from "../assests/images/profile-pic-02.jpg";
import ourUser_3 from "../assests/images/profile-pic-03.jpg";
import ourUser_4 from "../assests/images/profile-pic-04.jpg";
import ourUser_5 from "../assests/images/profile-pic-05.jpg";
import ourUser_6 from "../assests/images/profile-pic-06.jpg";
import videoThumbnail from "../assests/images/video thumbnail.png";
import Linechart from "../components/Linechart";
import PieChart from "../components/Pieshcart";
import { useCallback } from 'react';

const { Header, Sider, Content } = Layout;

const headerStyle = {
  backgroundColor: "#ffffff"
};

const Dahboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [open, setopen] = useState(false);
  const [dotopen,setdot] = useState(true);

const [arrowDir,setarrowDir]=useState(false)



  const items = [
    {
      key: "1",
      label: <span>My profile</span>,
      icon: <UserOutlined />
    },
    {
      key: "2",
      label: <span>Billing</span>,
      icon: <Icon icon="icon-park-outline:bill" />
    },
    {
      key: "3",
      label: <span>Logout</span>,
      icon: <Icon icon="ic:round-logout" />
    }
  ];

  const items1 = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0"
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1"
    },
    {
      type: "divider"
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true
    }
  ];

  const Menulist = ["profile", "your app", "Settings", "Logout"];

  const onclick=()=>{
    setopen(!open)
    setdot(!dotopen)

  }

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Item 1</Menu.Item>
      <Menu.Item key="2">Item 2</Menu.Item>
      <Menu.Item key="3">Item 3</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  const dropdownmenu=(e)=>{
e.preventDefault();
setarrowDir(!arrowDir)

  }
  
  return (
    <Layout className="min-vh-100">
      <Sider
        width={200}
        collapsedWidth="0"
        trigger={null}
        collapsed={collapsed}
        className="sideNavColor "
      >
        <div className="logo" />
        <div className="p-3 ">
          <h5
            style={{
              color: "white",
              marginRight: "10px"
            }}
          >
            ACME
          </h5>
        </div>
        <Menu
          theme="#3C3B54"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: <p className="textColor">Home</p>,
              icon: (
                <Icon
                  icon="ri:home-line"
                  color="white"
                  width="25"
                  height="25"
                />
              )
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <p className="textColor">Dahboard</p>
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <p className="textColor">Inbox</p>
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: <p className="textColor">Products</p>
            },
            {
              key: "5",
              icon: (
                <Icon
                  icon="ant-design:setting-outlined"
                  color="white"
                  width="25"
                  height="25"
                />
              ),
              label: <p className="textColor">Admin</p>
            }
          ]}
        />
      </Sider>

      <Layout className="ivertercolor">
        <Header
          style={headerStyle}
          className="position-relative inverted-border-radius"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger position-absolute top-50 start-0 mx-2",
              onClick: () => setCollapsed(!collapsed)
            }
          )}
          <div className="row">
            <div className="col-6 mt-1 d-flex">
              <div>
                <SearchOutlined className="fs-6" />
              </div>
              <div className="mx-2 ">Search transactions,invoices or help</div>
            </div>
            <div className="col-6 mt-1 text-end ">
              <span>
                {/* <button
                  class="btn bt-primary btn-outline-none btn-sm  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                >
                  <Icon
                    icon="iconoir:bell-notification"
                    class="fs-5 me-3 dropdown-toggle"
                    id="dropdownMenuButton1"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                  />
                </button> */}
           


                <Icon
                  icon="iconoir:bell-notification"
                  // class="fs-5 me-3 dropdown-toggle"
                  onClick={onclick}
                />
{dotopen&&(
 <span class="dot "></span>
)

}
  

                {open &&
                (
                  <div className="card bg-white shadow-lg w-50 ">
                  <ul>
                    {Menulist.map((menu) => (
                      <li className="p-2  ">
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>)
                }



                {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src={ourUser_3}
                        alt="user"
                        className="rounded-circle ourUserLogo"
                      />
                    </div>
                    <div className="col-4">
                      <p className="m-0">Bavid Kames</p>
                      <p className="m-0">Assigned you on the call with Sara</p>
                    </div>
                    <div className="col-6 text-end mt-3">
                      <p>2 minites ago</p>
                    </div>
                  </div>
                 
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src={ourUser_2}
                        alt="user"
                        className="rounded-circle ourUserLogo"
                      />
                    </div>
                    <div className="col-4">
                      <p className="m-0">Alex</p>
                    </div>
                    <div className="col-6 text-end mt-3">
                      <p>2 minites ago</p>
                    </div>
                  </div>

                  
                  <div className="row mt-2">
                    <div className="col-2">
                      <img
                        src={ourUser_4}
                        alt="user"
                        className="rounded-circle ourUserLogo"
                      />
                    </div>
                    <div className="col-4">
                      <p className="m-0">Lavid kames</p>
                    </div>
                    <div className="col-6 text-end mt-3">
                      <p>2 minites ago</p>
                    </div>
                  </div>
                </ul> */}

                {/* <Dropdown
                 
                >
                  <a
                    className="dropDownMenu dropdown-toggle"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <Icon
                        icon="iconoir:bell-notification"
                        className="fs-5 me-3"
                      />
                    </Space>
                  </a>
                </Dropdown> */}
              </span>

              <span>

                
                 <Dropdown
                  menu={{
                    items
                  }}
                  trigger={["click"]}
                >
                  <a
                    className="dropDownMenu"
                    onClick={dropdownmenu}
                  >
                    <Space className="me-2">
                      Jhon Doe

                      {
                        arrowDir === true ? <>
                         <DownOutlined  />

                        </> :<>
                        <UpOutlined/>
                        </>
                      }
                     
                      
                    </Space>
                    <img src={UserIcon} alt="user" className=" navUserLogo" />
                  </a>
                </Dropdown> 
              </span>
            </div>
          </div>
        </Header>
        <Content>
          <div className="container">
            {/* headingPortion */}
            <div className="row mt-3">
              <div className="col-6">
                <h4>OverView</h4>
              </div>
              <div className="col-6 text-end">
                <button className="btn addFundBtn ">
                  AddFunds{" "}
                  <span className="mx-2 ">
                    <Icon
                      icon="material-symbols:add-circle-rounded"
                      className="fs-5 mb-1  addFundIcon"
                    />
                  </span>
                </button>
              </div>
            </div>

            <div className="row mt-3">
              {/* main col-8 */}
              <div className="col-8">
                {/* chart card Starts */}
                <div className="row">
                  {/* statistics card */}
                  <div className="col-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <p>Statistics</p>
                          </div>
                          <div className="col-6 text-end">
                            <p>Last 6 months</p>
                          </div>
                          <div className="col-12">
                            <Linechart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bar chart card */}
                  <div className=" col-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <p>Sales Distribution</p>
                          </div>
                          <div className="col-12">
                            <PieChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* chart card ends */}

                {/* table starts */}
                <div className="col-12 mt-3">
                  <div className="card">
                    <div className="card-body">
                      <h6>Referrer</h6>
                      <table class="table">
                        <thead className="border-0">
                          <tr className="tableHead">
                            <th scope="col">Location</th>
                            <th scope="col">Views</th>
                            <th scope="col">Sales</th>
                            <th scope="col">Conversion</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          <tr>
                            <td>google.com</td>
                            <td>3746</td>
                            <td>752</td>
                            <td>43%</td>
                            <td>$19,291</td>
                          </tr>
                          <tr>
                            <td>facebook.com</td>
                            <td>8126</td>
                            <td>728</td>
                            <td>32%</td>
                            <td>$17,638</td>
                          </tr>
                          <tr>
                            <td>twitter.com</td>
                            <td>8836</td>
                            <td>694</td>
                            <td>28%</td>
                            <td>$16,218</td>
                          </tr>
                          <tr>
                            <td>Direct,email,IM</td>
                            <td>1173</td>
                            <td>645</td>
                            <td>24%</td>
                            <td>$14,421</td>
                          </tr>
                          <tr>
                            <td>linkedin.com</td>
                            <td>2739</td>
                            <td>539</td>
                            <td>20%</td>
                            <td>$12,370</td>
                          </tr>
                          <tr>
                            <td>instagram.com</td>
                            <td>2739</td>
                            <td>539</td>
                            <td>20%</td>
                            <td>$12,370</td>
                          </tr>
                          <div className="mt-2">
                            <button className="btn btn-outline-none btn-sm showMoreBtn ">
                              Show More
                            </button>
                          </div>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* main col-4 */}
              <div className="col-4">
                {/* Ouruser list Crad */}
                {/* <div className="row">
                  <div className="col-12">
                    <div className="card ">
                      <div className="card-body">
                        <div className="row">
                          <div className="text-center position-relative">
                            <img
                              src={UserIcon}
                              alt="user"
                              className="rounded-circle userImgSize"
                            />
                            <div className="position-absolute top-100 start-50 translate-middle editIcon">
                              <Icon icon="mdi:edit-circle" className="fs-2" />
                            </div>
                          </div>

                          <div className="mt-1 text-center">
                            <p className="m-0 userNameText">Nick Herasimenka</p>
                            <p className="m-0 userStateText">United States</p>
                          </div>
                          <div className="text-center mt-2">
                            <Icon
                              icon="carbon:logo-twitter"
                              className="fs-4 me-3 pointerClick"
                            />
                            <Icon
                              icon="mdi:facebook"
                              className="fs-4 me-3 pointerClick"
                            />
                            <Icon
                              icon="ant-design:linkedin-filled"
                              className="fs-4 me-3 pointerClick"
                            />
                            <Icon
                              icon="ic:round-whatsapp"
                              className="fs-4 pointerClick"
                            />
                          </div>
                          <hr className="mt-3" />
                          <div className="col-6">
                            <p className="userNameText">Our Users</p>
                          </div>
                          <div className="col-6 text-end">
                            <Icon
                              icon="ph:dots-three-outline-vertical-fill"
                              className="pointerClick"
                            />
                          </div>
                        </div>

                      
                        <div className="row">
                          <div className="col-2">
                            <img
                              src={ourUser_3}
                              alt="user"
                              className="rounded-circle ourUserLogo"
                            />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Drew James</p>
                            <p className="m-0">Uinted States</p>
                          </div>
                          <div className="col-6 text-end mt-3">
                            <p>Mobile:8715674877</p>
                          </div>
                        </div>
                        
                        <div className="row mt-2">
                          <div className="col-2">
                            <img
                              src={ourUser_2}
                              alt="user"
                              className="rounded-circle ourUserLogo"
                            />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Bavid James</p>
                            <p className="m-0">Uinted States</p>
                          </div>
                          <div className="col-6 text-end mt-3">
                            <p>Mobile:8715674877</p>
                          </div>
                        </div>

                      
                        <div className="row mt-2">
                          <div className="col-2">
                            <img
                              src={ourUser_4}
                              alt="user"
                              className="rounded-circle ourUserLogo"
                            />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Lavid kames</p>
                            <p className="m-0">Uinted States</p>
                          </div>
                          <div className="col-6 text-end mt-3">
                            <p>Mobile:8715674877</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">Product Video</div>
                          <div className="col-6 text-end">
                            <Icon
                              icon="ph:dots-three-outline-vertical-fill"
                              className="pointerClick"
                            />
                          </div>
                          <div className="col-12 mt-2">
                            <div className="position-relative">
                              <img
                                src={videoThumbnail}
                                alt=""
                                className="img-fluid productVideo "
                              />
                              <div className="playbtnOuterBackGround position-absolute top-50 start-50 translate-middle">
                                <div className="playBtnBackGround shadow">
                                  <Icon
                                    icon="gg:play-button"
                                    className="playBtn"
                                    width={65}
                                    height={60}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dahboard;
