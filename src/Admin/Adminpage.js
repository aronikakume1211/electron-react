import React, { Component } from 'react';
import SidebarRoute from './AdminRoute/sidebarRoute'
class AdminPage extends Component {
  render() {
    return (
      <div>
        <div>
          <SidebarRoute />
        </div>
      </div>
    );
  }
}

export default AdminPage;
