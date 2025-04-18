import React from 'react';

const AllTask = () => {
  // Sample data for tasks with unique IDs
  const tasks = [
    { id: 1, name: 'Sumanta', title: 'Make a UI Design', status: 'In Progress', bgColor: 'bg-red-200' },
    { id: 2, name: 'Sumanta', title: 'Watch an Anime Episode', status: 'Completed', bgColor: 'bg-red-300' },
    { id: 3, name: 'Sumanta', title: 'Learn About Cookies', status: 'Pending', bgColor: 'bg-red-400' },
    { id: 4, name: 'Sumanta', title: 'Master HTTP Methods', status: 'In Review', bgColor: 'bg-red-500' },
    { id: 5, name: 'Sumanta', title: 'Introduction to APIs', status: 'Approved', bgColor: 'bg-red-600' },
    { id: 6, name: 'Sumanta', title: 'Learn About Sessions', status: 'Rejected', bgColor: 'bg-red-700' },
    
  ];

  const handleClick = (taskId) => {
    console.log(`Task ID: ${taskId}`); // Debugging: Log the unique task ID
    // Add custom logic for handling the task link click here
  };

  return (
    <div className="p-[2vw] mt-16 overflow-auto rounded-md">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`${task.bgColor} -m-1 relative py-2 px-4 flex justify-between items-center rounded font-semibold`}
        >
          <h2>{task.name}</h2>
          <a
            href={`#task-${task.id}`} // Generate unique link using task ID
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleClick(task.id); // Pass the unique task ID to the handler
            }}
            className="hover:underline hover:decoration-blue-500"
          >
            {task.title}
          </a>
          <h5>{task.status}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;


    // <div className='p-[2vw] mt-5 rounded-md'>
    //     <div className=' bg-red-200 mb-1 py-2 px-4 flex justify-between items-center rounded font-semibold'>
    //     <h2>Sumanta</h2>
    //     <h3>Make a UI Design</h3>
    //     <h5>Status</h5>
    //     </div>
    //     <div className=' bg-red-300 mb-1 py-2 px-4 flex justify-between items-center rounded font-semibold'>
    //     <h2>Sumanta</h2>
    //     <h3>Make a UI Design</h3>
    //     <h5>Status</h5>
    //     </div>
    //     <div className=' bg-red-400 mb-1 py-2 px-4 flex justify-between items-center rounded font-semibold'>
    //     <h2>Sumanta</h2>
    //     <h3>Make a UI Design</h3>
    //     <h5>Status</h5>
    //     </div>
    //     <div className=' bg-red-500 mb-1 py-2 px-4 flex justify-between items-center rounded font-semibold'>
    //     <h2>Sumanta</h2>
    //     <h3>Make a UI Design</h3>
    //     <h5>Status</h5>
    //     </div>
    //     <div className=' bg-red-600 mb-1 py-2 px-4 flex justify-between items-center rounded font-semibold'>
    //     <h2>Sumanta</h2>
    //     <h3>Make a UI Design</h3>
    //     <h5>Status</h5>
    //     </div>
    //     <div className=' bg-red-700 mb-1 py-2 px-4 flex justify-between items-center rounded font-semibold'>
    //     <h2>Sumanta</h2>
    //     <h3>Make a UI Design</h3>
    //     <h5>Status</h5>
    //     </div>
    // </div>/
    
    