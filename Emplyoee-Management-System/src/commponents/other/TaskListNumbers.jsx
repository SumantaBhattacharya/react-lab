import React from 'react';

export const TaskListNumbers = () => {
  // Object of box data
  const boxes = {
    box1: {
      count: 0,
      title: 'New Task',
      bgColor: 'bg-rose-700',
    },
    box2: {
      count: 0,
      title: 'In Progress',
      bgColor: 'bg-blue-700',
    },
    box3: {
      count: 0,
      title: 'Completed',
      bgColor: 'bg-emerald-700',
    },
    box4: {
      count: 0,
      title: 'Pending Review',
      bgColor: 'bg-yellow-700',
    },
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between overflow-x-hidden">
      {Object.values(boxes).map((box, index) => (
        <div
          key={index}
          className={`px-9 py-6 rounded-xl flex-1 min-w-[200px] ${box.bgColor}`}
        >
          <h2 className="text-2xl font-semibold">{box.count}</h2>
          <h2 className="text-xl font-medium">{box.title}</h2>
        </div>
      ))}
    </div>
  );
};

// import React from 'react';

// export const TaskListNumbers = () => {

//   return (
//     <div className="flex flex-wrap gap-5 justify-between overflow-x-hidden">
//       <div className="px-9 py-6 rounded-xl flex-1 min-w-[200px] bg-rose-700">
//         <h2 className="text-2xl font-semibold">0</h2>
//         <h2 className="text-xl font-medium">New Task</h2>
//       </div>
//       <div className="px-9 py-6 rounded-xl flex-1 min-w-[200px] bg-blue-700">
//         <h2 className="text-2xl font-semibold">0</h2>
//         <h2 className="text-xl font-medium">New Task</h2>
//       </div>
//       <div className="px-9 py-6 rounded-xl flex-1 min-w-[200px] bg-emerald-700">
//         <h2 className="text-2xl font-semibold">0</h2>
//         <h2 className="text-xl font-medium">New Task</h2>
//       </div>
//       <div className="px-9 py-6 rounded-xl flex-1 min-w-[200px] bg-yellow-700">
//         <h2 className="text-2xl font-semibold">0</h2>
//         <h2 className="text-xl font-medium">New Task</h2>
//       </div>
//     </div>
//   );
// };

// w-1/2 -> 50%