import React, { Component } from 'react';
import SidebarRoute from './AdminRoute/sidebarRoute'
class AdminPage extends Component {
  render() {
    return (
      <div>

        <div
          style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            padding: "5px"
          }}
        >
          <SidebarRoute />
          </div>


      </div>
    );
  }
}

export default AdminPage;
