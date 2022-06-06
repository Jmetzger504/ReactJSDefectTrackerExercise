import React from 'react';
import PropTypes from 'prop-types';
import './DefectTracker.module.css';
import { useState } from 'react';

const DefectTracker = () => {

  const defects =[
    {'category': 'UI', 'description': "It don't work no mo!", 'priority': 2, 'status': "Open", 'changeStatus': "Close Defect"},
    {'category': "Functional", 'description': "It done did broke!", 'priority': 1, 'status': "Open", 'changeStatus': "Close Defect"},
    {'category': "Change Request", 'description': "Add function to remove users", 'priority': 3, 'status': "Closed", 'changeStatus': "No Action Pending"}
  ];

  return (
    <div className = "container">
        <h1>Defect Tracker</h1>
        <a href = '#'><p>Logout</p></a>
        <p><a href = '#'><span>Add Defect</span></a> <a href = '#'><span>View Defects</span></a></p>
        <div className = "filterDetails">
          <h2>Filter Details</h2>
          <br/>
          <label for = "priority"><b>Priority </b></label>
          <select name = "priority" id = "priority" class = "form-select">
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <br/><br/>
          <label for = "category"><b>Category </b></label>
          <select name = "category" id = "category" class = "form-select">
            <option>All</option>
            <option>UI</option>
            <option>Functional</option>
            <option>Change Request</option>
          </select>
        </div>
        <br/>
        <h2>Defect Details</h2>
        <p id = "searchResults">Search results: 3</p>
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
              return (<tr>
                        <td>{defect.category}</td>
                        <td>{defect.description}</td>
                        <td>{defect.priority}</td>
                        <td>{defect.status}</td>
                        <td>{defect.changeStatus}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }

DefectTracker.propTypes = {};

DefectTracker.defaultProps = {};

export default DefectTracker;
