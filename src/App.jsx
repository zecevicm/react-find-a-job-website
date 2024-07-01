import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './NotFound';
import JobPage from './pages/JobPage';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';

const App = () => {
 
  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:5000/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return res.json();
  };


  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  };


  const updateJob = async (updatedJob) => {
    const res = await fetch(`http://localhost:5000/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob),
    });
    return res.json();
  };

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
        <Route path='/jobs' element={<JobsPage deleteJob={deleteJob} />} />
        <Route path='/edit-job/:id' element={<EditJob updateJobSubmit={updateJob} />} /> {/* Update EditJob route with updateJobSubmit prop */}
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
