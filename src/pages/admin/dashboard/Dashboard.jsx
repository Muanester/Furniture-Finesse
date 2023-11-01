import React, { useState } from "react";
import "./Dashboard.css";
import arrow_icon from "../../../components/assets/arrow_back.png";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { MdUpdate, MdOutlineDeleteOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { TbUsersGroup } from "react-icons/tb";
import { TbMessages } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";

import all_product from "../../../components/assets/all_product";

function Dashboard() {
  const update = () => {
    window.location.href = "/updateproduct";
  };

  const [tab, setTab] = useState("dashboard");

  return (
    <div className="dashboard">
      <Tabs className="container">
        {/* <!-- Left Section --> */}

        <TabList className="aside">
          <div className="top">
            <Link to={"/"}>
              <div className="logo">
                <img src={arrow_icon} alt="" />
                <h2>
                  Furniture<span className="danger">Finesse</span>
                </h2>
              </div>
            </Link>
            <div className="close" id="close-btn">
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className="sidebar">
            <Tab>
              <Link
                onClick={() => {
                  setTab("dashboard");
                }}
                className={tab === "dashboard" ? "active" : ""}
              >
                <BiSolidDashboard className="span" />
                <h3>Dashboard</h3>
              </Link>
            </Tab>

            <Tab>
              <Link
                onClick={() => {
                  setTab("products");
                }}
                className={tab === "products" ? "active" : ""}
              >
                <BsCardChecklist className="span" />
                <h3>Products</h3>
              </Link>
            </Tab>

            <Tab>
              <Link
                onClick={() => {
                  setTab("customers");
                }}
                className={tab === "customers" ? "active" : ""}
              >
                <TbUsersGroup className="span" />
                <h3>Customers</h3>
              </Link>
            </Tab>

            <Tab>
              <Link
                onClick={() => {
                  setTab("messages");
                }}
                className={tab === "messages" ? "active" : ""}
              >
                <TbMessages className="span" />
                <h3>Messages</h3>
                <span className="message-count">0</span>
              </Link>
            </Tab>

            <Link to={"/addproduct"} className="add_product-tab">
              <GrAdd className="span" />
              <h3>Add Product</h3>
            </Link>

            <div className="logout">
              <Link to={"/"}>
                <FiLogOut className="span" />
                <h3>Log-Out</h3>
              </Link>
            </div>
          </div>
        </TabList>

        <TabPanel>
          {/* <!-- Main Section --> */}
          <main>
            <h1>Dashboard</h1>
            <div className="date">
              <input type="date" />
            </div>
            {/* <!-- Insights --> */}
            <div className="insights">
              <div className="sales">
                <div className="span_icon">
                  <MdProductionQuantityLimits className="span" />
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Total Products</h3>
                    <h1>36 Products</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>81%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
              </div>

              <div className="expenses">
                <div className="span_icon">
                  <FaUsers className="span" />
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Subscribed Users</h3>
                    <h1>8 Users</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>62%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
              </div>

              <div className="income">
                <div className="span_icon">
                  <BiSolidMessageDetail className="span" />
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Messages</h3>
                    <h1>0 Available</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>44%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
              </div>
            </div>
            {/* <!-- Orders --> */}
            <div className="recent-orders">
              <h2>Recent Users</h2>

              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key="1">
                    <td>1.</td>
                    <td>Muanester</td>
                    <td>muanester@gmail.com</td>
                    <td>bMhWKc9aOxZCaqk0hRmEDSlaDlv2</td>
                  </tr>
                </tbody>
              </table>
              <a href="#">Show All</a>
            </div>
          </main>
        </TabPanel>

        <TabPanel>
          <main>
            <div className="products_data_table">
              <h1>Products Details</h1>

              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {all_product.map((e, index) => {
                  return (
                    <tbody>
                      <tr key={e.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={e.image} alt="" />
                        </td>
                        <td>{e.name}</td>
                        <td>KSH. {e.new_price}</td>
                        <td>{e.category}</td>
                        <td>10/10/2023</td>
                        <td>
                          <MdUpdate className="action-btns" onClick={update} />
                          <MdOutlineDeleteOutline className="action-btns" />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </main>
        </TabPanel>

        <TabPanel>
          <main>
            <div className="products_data_table">
              <h1>User Details</h1>

              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key="1">
                    <td>1.</td>
                    <td>Muanester</td>
                    <td>muanester@gmail.com</td>
                    <td>bMhWKc9aOxZCaqk0hRmEDSlaDlv2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </TabPanel>

        <TabPanel>
          <main>
            <h3>No Available Messages at the moment.</h3>
          </main>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Dashboard;
