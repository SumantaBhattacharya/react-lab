import React from 'react';
import { Header } from '../other/Header';
import { CreateTask } from '../other/createTask';
import AllTask from '../other/AllTask';

const AdminDashboard = () => {
  return (
    <div className="p-[2vw] h-screen w-full text-white">
      {/* Header Component */}
      <Header />
      {/* Create Task Component */}
      <CreateTask />
      {/* All Task Component */}
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
