import React, { Component } from "react";

import { AiFillEdit } from 'react-icons/ai';

class Experience extends Component {
  render() {
    return (
        <div className="experience">
          <h2>Experience</h2>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Position"></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="Company"></input></div>
          <div className="input-row"><AiFillEdit/><input type="text" placeholder="City"></input></div>
          <div className="input-row"><label htmlFor="exp-from">From: </label><input type="text" id="exp-from" placeholder="Date"></input></div>
          <div className="input-row"><label htmlFor="exp-to">To: </label><input type="text" id="exp-to" placeholder="Date"></input></div>
            <button className="del-btn">Delete</button>
            <button>Add</button>
        </div>
    )
  }
}

export default Experience;