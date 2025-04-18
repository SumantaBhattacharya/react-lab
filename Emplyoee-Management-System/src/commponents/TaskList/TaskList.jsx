import React from 'react';
import '../../App.css'; // Import the App.css file relative to TaskList.jsx

export const TaskList = () => {
  // Array of task data
  const tasks = [
    {
      id: 1,
      priority: 'High',
      date: '20 Feb 2024',
      title: 'Watch an Anime Episode',
      description:
        "Where Caesar stabbed Monet's heart, thinking it was Smoker's, while Monet was about to activate a self-destruct button.",
      bgColor: 'bg-amber-700',
    },
    {
      id: 2,
      priority: 'High',
      date: '22 Feb 2024',
      title: 'Learn About Cookies',
      description:
        'Cookies are small pieces of text that are used to store information in web browsers.',
      bgColor: 'bg-red-700',
    },
    {
      id: 3,
      priority: 'Medium',
      date: '25 Feb 2024',
      title: 'Master HTTP Methods',
      description:
        'HTTP methods like GET, POST, PUT, and DELETE enable communication between clients and servers.',
      bgColor: 'bg-lime-700',
    },
    {
      id: 4,
      priority: 'Critical',
      date: '29 Feb 2024',
      title: 'Introduction to APIs',
      description:
        'APIs (Application Programming Interfaces) allow applications to interact and exchange data efficiently.',
      bgColor: 'bg-neutral-700',
    },
    {
      id: 5,
      priority: 'High',
      date: '22 Feb 2024',
      title: 'Learn About Sessions',
      description:
        'Sessions store temporary data on the server to identify users during their visits to a website.',
      bgColor: 'bg-purple-700',
    },
  ];

  return (
    <div
      id='tasklist'
      className='h-[55%] overflow-x-auto outline-none w-full py-5 mt-10 flex flex-row items-center justify-start gap-5 flex-nowrap'
    >
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex-shrink-0 h-full w-72 rounded-xl p-5 ${task.bgColor}`}
        >
          <div className='flex justify-between items-center'>
            <h3 className='bg-slate-700 px-3 py-1 font-bold rounded-md'>
              {task.priority}
            </h3>
            <h4 className='font-bold'>{task.date}</h4>
          </div>
          <h2 className='font-bold mt-5 text-xl underline mb-2'>{task.title}</h2>
          <p className='text-sm font-bold'>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

// import React from 'react'
// import '../../App.css'; // Import the App.css file relative to TaskList.jsx
// export const TaskList = () => {
//     return (
//         <div id='tasklist' className='h-[55%] overflow-x-auto outline-none w-full py-5 mt-10 flex flex-row items-center justify-start gap-5 flex-nowrap'>
//             <div className='flex-shrink-0 h-full w-72 rounded-xl p-5 bg-amber-700'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-slate-700 px-3 py-1 font-bold rounded-md'>High</h3>
//                     <h4 className='font-bold'>20 feb 2024</h4>
//                 </div>
//                 <h2 className='font-bold mt-5 text-xl underline mb-2'>Watch a Anime episode</h2>
//                 <p className='text-sm font-bold'>Where Caesar stabbed Monet's heart, thinking it was Smoker's, while Monet was about to activate a self-destruct button.</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-72 rounded-xl p-5 bg-red-700'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-slate-700 px-3 py-1 font-bold rounded-md'>High</h3>
//                     <h4 className='font-bold'>22 feb 2024</h4>
//                 </div>
//                 <h2 className='font-bold mt-5 text-xl underline mb-2'>learn about cookies</h2>
//                 <p className='text-sm font-bold'>Cookies are small pieces of text that are used to store information in web browsers.</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-72 rounded-xl p-5 bg-lime-700'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-slate-700 px-3 py-1 font-bold rounded-md'>Mideum</h3>
//                     <h4 className='font-bold'>25 feb 2024</h4>
//                 </div>
//                 <h2 className='font-bold mt-5 text-xl underline mb-2'>Master HTTP Methods</h2>
//                 <p className='text-sm font-bold'>HTTP methods like GET, POST, PUT, and DELETE enable communication between clients and servers.</p>
//             </div>
            
//             <div className='flex-shrink-0 h-full w-72 rounded-xl p-5 bg-neutral-700'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-slate-700 px-3 py-1 font-bold rounded-md'>Critical</h3>
//                     <h4 className='font-bold'>29 feb 2024</h4>
//                 </div>
//                 <h2 className='font-bold mt-5 text-xl underline mb-2'>Introduction to APIs</h2>
//                 <p className='text-sm font-bold'>APIs (Application Programming Interfaces) allow applications to interact and exchange data efficiently.</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-72 rounded-xl p-5 bg-purple-700'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-slate-700 px-3 py-1 font-bold rounded-md'>High</h3>
//                     <h4 className='font-bold'>22 feb 2024</h4>
//                 </div>
//                 <h2 className='font-bold mt-5 text-xl underline mb-2'>Learn About Sessions</h2>
//                 <p className='text-sm font-bold'> Sessions store temporary data on the server to identify users during their visits to a website.</p>
//             </div>
            


//         </div>
//     )
// }
