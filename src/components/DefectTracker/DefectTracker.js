import React, { useEffect,useState } from 'react';
import './DefectTracker.module.css';
import axios from 'axios';
import { store } from '../../stores/store';

const DefectTracker = () => {

  const state = store.getState();

  const [defects,setDefects] = useState([

  ])

  const [priority, setPriority] = useState('All');
  const [category, setCategory] = useState('All');

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  useEffect(() =>{
    axios.get('http://localhost:4000/defects')
    .then(result => 
      setDefects(result.data))
    .catch(error => console.log(error));
  },[])


  return (
    <div className = "container">
        <h1>Defect Tracker</h1>
        <a href = '/'><p>Logout</p></a>
        <p><a href = '#'>Add Defect</a></p>
        <div className = "filterDetails">
          <h2>Filter Details</h2>
          <br/>
          <label htmlFor = "priority"><b>Priority </b></label>
          <select onChange = {handlePriorityChange} name = "priority" id = "priority" className = "form-select">
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <br/><br/>
          <label htmlFor = "category"><b>Category </b></label>
          <select onChange = {handleCategoryChange} name = "category" id = "category" className = "form-select">
            <option>All</option>
            <option>UI</option>
            <option>Functional</option>
            <option>Change Request</option>
          </select>
        </div>
        <br/>
        <h2>Defect Details</h2>
        <p id = "searchResults">Search Results: {defects.length}</p>
        <table className = "defectTable table table-striped table-bordered">
          <thead>
            <tr>
              <th scope = "col">Defect Category</th>
              <th scope = "col" id = "description">Description</th>
              <th scope = "col">Priority</th>
              <th scope = "col">Status</th>
              <th scope = "col">Change Status</th>
            </tr>
          </thead>
          <tbody>
            {defects.map(defect => {
              if(category === 'All' && priority === 'All')
                return (
                  <tr>
                    <td>{defect.category}</td>
                    <td>{defect.description}</td>
                    <td>{defect.priority}</td>
                    <td>{defect.status}</td>
                    <td>{defect.changeStatus}</td>
                  </tr>
                )
                else if(category === 'All' && priority == defect.priority)
                return (
                  <tr>
                    <td>{defect.category}</td>
                    <td>{defect.description}</td>
                    <td>{defect.priority}</td>
                    <td>{defect.status}</td>
                    <td>{defect.changeStatus}</td>
                  </tr>
                )
                else if(priority === 'All' && category === defect.category)
                return (
                  <tr>
                    <td>{defect.category}</td>
                    <td>{defect.description}</td>
                    <td>{defect.priority}</td>
                    <td>{defect.status}</td>
                    <td>{defect.changeStatus}</td>
                  </tr>
                )
                else if(priority == defect.priority && category === defect.category)
                return (
                  <tr>
                    <td>{defect.category}</td>
                    <td>{defect.description}</td>
                    <td>{defect.priority}</td>
                    <td>{defect.status}</td>
                    <td>{defect.changeStatus}</td>
                  </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    );
  }

DefectTracker.propTypes = {};

DefectTracker.defaultProps = {};

export default DefectTracker;
