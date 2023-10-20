import React from "react";
import "./Dashboard.css";
import arrow_icon from "../../../components/assets/arrow_back.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        {/* <!-- Left Section --> */}
        <aside>
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
            <a href="#" className="active">
              <span className="material-symbols-outlined">grid_view</span>
              <h3>Dashboard</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">person_outline</span>
              <h3>Customers</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">receipt_long</span>
              <h3>Orders</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">insights</span>
              <h3>Analytics</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">mail</span>
              <h3>Messages</h3>
              <span className="message-count">23</span>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">inventory</span>
              <h3>Products</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">report</span>
              <h3>Reports</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">settings</span>
              <h3>Settings</h3>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">add</span>
              <h3>Add Product</h3>
            </a>
            <a>
              <Link to={"/"}>
                <span className="material-symbols-outlined">logout</span>
                <h3>Log-Out</h3>
              </Link>
            </a>
          </div>
        </aside>

        {/* <!-- Main Section --> */}
        <main>
          <h1>Dashboard</h1>
          <div className="date">
            <input type="date" />
          </div>
          {/* <!-- Insights --> */}
          <div className="insights">
            <div className="sales">
              <span className="material-symbols-outlined">analytics</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Sales</h3>
                  <h1>KSH. 250,024</h1>
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
              <span className="material-symbols-outlined">bar_chart</span>
              <div className="middle">
                <div className="left">
                  <h3>Total Expenses</h3>
                  <h1>KSH. 140,160</h1>
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
              <span className="material-symbols-outlined">
                stacked_line_chart
              </span>
              <div className="middle">
                <div className="left">
                  <h3>Total Income</h3>
                  <h1>KSH. 110,860</h1>
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
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Number</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Foldable 6 Seater Pack</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td className="warning">Pending</td>
                  <td className="primary">Details</td>
                </tr>
              </tbody>
            </table>
            <a href="#">Show All</a>
          </div>
        </main>

        {/* <!-- Right Section --> */}
        {/* <div className="right">
          <!-- Profile -->
          <div className="top">
            <button id="menu-btn">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="theme-toggler">
              <span className="material-symbols-outlined active">
                light_mode
              </span>
              <span className="material-symbols-outlined">dark_mode</span>
            </div>
            <div className="profile">
              <div className="info">
                <p>
                  Hey, <b>Steve</b>
                </p>
                <small className="text-muted">Admin</small>
              </div>
              <div className="profile-photo">
                <img src="images/user2.jpg" alt="" />
              </div>
            </div>
          </div>
          <!-- Recent Updates -->
          <div className="recent-updates">
            <h2>Recent Updates</h2>
            <div className="updates">
              <div className="update">
                <div className="profile-photo">
                  <img src="images/user1.jpg" alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>Milly Tyson</b> received her order of Night Lion Tech GPS
                    Drone
                  </p>
                  <small className="text-muted">2 Minutes Ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="images/user5.jpg" alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>Hellen Mart</b> received her order of 6 Pack Toaster
                    Machine
                  </p>
                  <small className="text-muted">3 Minutes Ago</small>
                </div>
              </div>
              <div className="update">
                <div className="profile-photo">
                  <img src="images/user4.jpg" alt="" />
                </div>
                <div className="message">
                  <p>
                    <b>Mart Hellen</b> received her order of Double Cabin Fridge
                  </p>
                  <small className="text-muted">4 Minutes Ago</small>
                </div>
              </div>
            </div>
          </div>
          <!-- Sales Analytics -->
          <div className="sales-analytics">
            <h2>Sales Analytics</h2>
            <div className="item online">
              <div className="icon">
                <span className="material-symbols-outlined">shopping_cart</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>ONLINE ORDERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className="success">+39%</h5>
                <h3>3849</h3>
              </div>
            </div>
            <div className="item offline">
              <div className="icon">
                <span className="material-symbols-outlined">local_mall</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>OFFLINE ORDERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className="danger">-17%</h5>
                <h3>1100</h3>
              </div>
            </div>
            <div className="item customers">
              <div className="icon">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className="right">
                <div className="info">
                  <h3>NEW CUSTOMERS</h3>
                  <small className="text-muted">Last 24 Hours</small>
                </div>
                <h5 className="success">+25%</h5>
                <h3>849</h3>
              </div>
            </div>
            <div className="item add-product">
              <div>
                <span className="material-symbols-outlined">add</span>
                <h3>Add Product</h3>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
