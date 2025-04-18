import React, { useState } from 'react';

export const CreateTask = () => {
  const [isTitle, setTitle] = useState("");
  const [isDescription, setDescription] = useState("");
  const [isDate, setDate] = useState("");
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    
    e.preventDefault(); // Prevent page reload
    if (!isTitle || !isDescription || !isDate || !assignTo || !category) {
      alert('All fields are required!');
      return;
    }
    alert('Task Created Successfully!');
    // Clear the form after submission
    setTitle('');
    setDescription('');
    setDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div>
      {/* Main Form Section */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl underline font-bold text-black mb-5">Create New Task</h2>
        <form onSubmit={submitHandler} className="flex flex-wrap gap-5">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-[0.2vw]">
            {/* Task Title */}
            <div>
              <label
                htmlFor="taskTitle"
                className="block text-gray-800 font-medium mb-1"
              >
                Task Title
              </label>
              <input
                id="taskTitle"
                value={isTitle}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Make a UI design"
                className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            {/* Date */}
            <div>
              <label
                htmlFor="taskDate"
                className="block text-gray-800 font-medium mb-1"
              >
                Date
              </label>
              <input
                id="taskDate"
                value={isDate}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            {/* Assign To */}
            <div>
              <label
                htmlFor="assignTo"
                className="block text-gray-800 font-medium mb-1"
              >
                Assign To
              </label>
              <input
                id="assignTo"
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                placeholder="Enter employee name"
                className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-gray-800 font-medium mb-1"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="">Select Category</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="testing">Testing</option>
                <option value="research">Research</option>
              </select>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex-1">
            {/* Description */}
            <div>
              <label
                htmlFor="taskDescription"
                className="block text-gray-800 font-medium mb-1"
              >
                Description
              </label>
              <textarea
                id="taskDescription"
                value={isDescription}
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write task description here..."
                className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
              ></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full mt-5">
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded-md font-bold hover:bg-gray-600 transition duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
