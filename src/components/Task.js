import React, { Component } from 'react';
import TaskData from './TaskData';
import { connect } from 'react-redux';
import { changeAction } from '../actions/changeAction';
import url from './url.json';
var _ = require('lodash')

class Task extends Component {


  handleChange = (event) => {
    event.preventDefault();
    // if (event.target.value !== '') {
      this.props.actions(event.target.value);
    // } else {
    //   this.props.nothingSelected();
    // }
  }

  render() {
    return (
      <div>
        <div className="col-sm-5"></div>
        <div className="col-xs-3">
          <h1>Select Any Option</h1>
          <select className="form-control" type="text" onChange={this.handleChange} name="selected">
            
            {
               _.map(url, (value, key) => {
                return (
                  <option key={key} value={value}>{key}</option>
                )
              })}
          </select>
        </div>
        <TaskData data={this.props.repo} loading={this.props.apiloading} />

      </div>
    )
  }
}

const mapStateToProps = (state, nextProps) => {
  return {
    repo: state.repoSelected.repo_data,
    apiloading: state.repoSelected.loading
  }
}
const mapDispatchToProps = {
  actions: changeAction,
  //nothingSelected: notSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
