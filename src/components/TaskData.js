import React from 'react';
import loader from '../containers/loader.gif';

const TaskData = (props) => {
  console.log(props.data)
  let part
  if (props.loading === false) {
    part = props && props.data.length > 0 ?
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>NoOfStarts</th>
              <th>NoOfForks</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map((item, i) => {
                return (
                  
                    <tr key={`test`+i}>
                      <td >{i+1}</td>
                      <td >{item.name}</td>
                      <td >{item.stargazers_count}</td>
                      <td >{item.forks_count}</td>
                    </tr>
                  
                )
              })
            }
          </tbody>
        </table>
      </div> : null;
  }
  else {
    part = <div><img src={loader} alt="LOADING"/></div>
  }

  return (
    <div>
      {part}
    </div>

  )
}
export default TaskData;
