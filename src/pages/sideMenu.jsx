import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
 
  UpOutlined,
  UserOutlined,
  
} from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Dropdown, Layout, Menu, Space, theme } from "antd";
import React, { useState } from "react";
import "../pages/sideMenu.css";

import UserIcon from "../assests/images/profile-pic-01.jpg";
import ourUser_2 from "../assests/images/profile-pic-02.jpg";
import ourUser_3 from "../assests/images/profile-pic-03.jpg";
import ourUser_4 from "../assests/images/profile-pic-04.jpg";
import ourUser_5 from "../assests/images/profile-pic-05.jpg";
import ourUser_6 from "../assests/images/profile-pic-06.jpg";
import videoThumbnail from "../assests/images/video thumbnail.png";
import Linechart from "../components/Linechart";
import PieChart from "../components/Pieshcart";
import Link from "antd/es/typography/Link";

const { Header, Sider, Content } = Layout;

const headerStyle = {
  backgroundColor: "#ffffff",
};

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setopen] = useState(false);
  const [dotopen, setdot] = useState(true);
  const [arrowDir, setarrowDir] = useState(false);

  const menuList = [
    <div className="row text-center">   
      <div className="col-2 gx-0">
        <img
          src={ourUser_2}
          className="rounded-circle"
          alt=""
          width={40}
          height={40}
        />
      </div>
      <div className="col-7  gx-0 userName">Bavid Kames </div>
      <div className="col-3 gx-0">2 min ago</div>
      <div className="col-2 gx-0">
        <img
          src={ourUser_6}
          className="rounded-circle"
          alt=""
          width={40}
          height={40}
        />
      </div>
      <div className="col-7 gx-0 userName">Alex Marry
      
       </div>
      <div className="col-3 gx-0">5 min ago</div>
      <div className="col-2 gx-0">
        <img
          src={ourUser_5}
          className="rounded-circle"
          alt=""
          width={40}
          height={40}
        />
      </div>
      <div className="col-7 gx-0 userName">Eva Maria  </div>
      <div className="col-3 gx-0">10 min ago</div>
      <hr />
      <Link className="notificationShowMore">Show More</Link>
    </div>,
  ];



  const iconIndication = () => {
    setopen(!open);
    setdot(!dotopen);
  };

  const dropdownmenu = (e) => {
    e.preventDefault();
    setarrowDir(!arrowDir);
  };

  const items = [
    {
      key: "1",
      label: <span>My profile</span>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <span>Billing</span>,
      icon: <Icon icon="icon-park-outline:bill" />,
    },
    {
      key: "3",
      label: <span>Logout</span>,
      icon: <Icon icon="ic:round-logout" />,
    },
  ];

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
        <div className="p-3">
          <h5
          className="logo-font" 
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
              icon: <Icon icon="ri:home-line" color="white" />,
            },
            {
              key: "2",
              icon: <Icon icon="bi:file-bar-graph" color="white" />,
              label: <p className="textColor">Dahboard</p>,
            },
            {
              key: "3",
              icon: <Icon icon="ion:mail-outline" color="white" />,
              label: <p className="textColor">Inbox</p>,
            },
            {
              key: "4",
              icon: <Icon icon="gg:notes" color="white" />,
              label: <p className="textColor">Products</p>,
            },
            {
              key: "5",
              icon: <Icon icon="ion:settings-outline" color="white" />,
              label: <p className="textColor">Admin</p>,
            },
          ]}
        />
      </Sider>

      <Layout className="w-100">
        <Header
          style={headerStyle}
          className="position-relative inverted-border-radius"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger position-absolute top-50 start-0 mx-2",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="row">
            <div className="col-12 col-xl-6 mt-1 d-flex text-end">
              <div className="saerchIcon">
                <SearchOutlined className="fs-6" />
              </div>
              <div className="mx-2  searchBar">
                Search transactions,invoices or help
              </div>
            </div>
            <div className="col-4 text-end mt-1 gx-4 notifyIconSapce">
              <Icon
                icon="clarity:notification-line"
                className="fs-6 "
                onClick={iconIndication}
              />
              {dotopen && (
                <span className="dot position-absolute mt-4 me-5 "></span>
              )}

              {open && (
                <div className="card  notifyCard">
                  <div className="card-body">
                    {menuList.map((menu) => (
                      <div>{menu}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-2 mt-1 text-end gx-5 userNameFix">
              <span>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a className="dropDownMenu" onClick={dropdownmenu}>
                    <Space className="me-2 ">
                      Jhon Doe
                      {arrowDir === true ? (
                        <>
                          <UpOutlined />
                        </>
                      ) : (
                        <>
                          <DownOutlined />
                        </>
                      )}
                    </Space>
                    <img src={UserIcon} alt="user" className=" navUserLogo " />
                  </a>
                </Dropdown>
              </span>
            </div>
          </div>
        </Header>
        <Content>
          <div className="container">
            {/* headingPortion */}
            <div className="row mt-3 ">
              <div className="col-6">
                <p className="heading">OverView</p>
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
              <div className="col-12 col-md-8 ">
                {/* chart card Starts */}
                <div className="row ">
                  {/* statistics card */}
                  <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <p className="statistic-font">Statistics</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="statistic-font">Last 6 months<DownOutlined className="cursor-pointer mx-1" /></p>
                          </div>
                          <div className="col-12">
                            <Linechart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bar chart card */}
                  <div className=" col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12">
                            <p className="statistic-font">Sales Distribution</p>
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
                      <div className="table-responsive">
                        <p className="referrerFont">Referrer</p>
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
                              <td >google.com</td>
                              <td >3746</td>
                              <td >752</td>
                              <td >43%</td>
                              <td >$19,291</td>
                            </tr>
                            <tr >
                              <td >facebook.com</td>
                              <td >8126</td>
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
              </div>

              {/* main col-4 */}
              <div className="col-12 col-md-4 mt-3 mt-sm-3 mt-md-3 mt-lg-3 mt-xl-0 mt-xxl-0 ">
                {/* Ouruser list Crad */}
                <div className="row">
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

                        {/* ourUser 3 */}
                        <div className="row ">
                          <div className="col-2 col-sm-2 col-md-12 col-xl-2 col-xxl-2">
                            <img
                              src={ourUser_3}
                              alt="user"
                              className="rounded-circle ourUserLogo"
                            />
                          </div>
                          <div className="col-4 col-sm-4 col-md-12 col-xl-4 col-xxl-4">
                            <p className="m-0 userName">Drew James</p>
                            <p className="m-0 userState">Uinted States</p>
                          </div>
                          <div className="col-6 col-sm-6 col-md-12 col-xl-6 col-xxl-6 text-md-start text-xl-end mt-3 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-3   ">
                            <p className="userState">Mobile:8715674877</p>
                          </div>
                        </div>
                        {/* ourUser 2 */}
                        <div className="row mt-2">
                          <div className="col-2 col-sm-2 col-md-12 col-xl-2 col-xxl-2">
                            <img
                              src={ourUser_2}
                              alt="user"
                              className="rounded-circle ourUserLogo"
                            />
                          </div>
                          <div className="col-4 col-sm-4 col-md-12 col-xl-4 col-xxl-4">
                            <p className="m-0 userName">Bavid James</p>
                            <p className="m-0 userState">Uinted States</p>
                          </div>
                          <div className="text-md-start text-xl-end mt-3 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-3   col-6 col-sm-6 col-md-12 col-xl-6 col-xxl-6">
                            <p className="userState">Mobile:8715674877</p>
                          </div>
                        </div>

                        {/* ourUser 4 */}
                        <div className="row mt-2">
                          <div className="col-2 col-sm-2 col-md-12 col-xl-2 col-xxl-2">
                            <img
                              src={ourUser_4}
                              alt="user"
                              className="rounded-circle ourUserLogo"
                            />
                          </div>
                          <div className="col-4 col-sm-4 col-md-12 col-xl-4 col-xxl-4">
                            <p className="m-0 userName">Lavid kames</p>
                            <p className="m-0 userState">Uinted States</p>
                          </div>
                          <div className="text-md-start text-xl-end  mt-3 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-3   col-6 col-sm-6 col-md-12 col-xl-6 col-xxl-6">
                            <p className="userState">Mobile:8715674877</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6 products">Product Video</div>
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
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideMenu;