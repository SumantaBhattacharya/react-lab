import React from 'react'
import { Header } from '../other/Header'
import { TaskListNumbers } from '../other/TaskListNumbers'
import { TaskList } from '../TaskList/TaskList'

export const EmployeeDashboard = () => {
  return (
    <div className='p-[2vw] bg-[#1C1C1C] h-screen w-full'>
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}
