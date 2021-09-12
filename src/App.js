import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      tasks: [] // id: unique, name, status
    }
  }
  onGenerateData = () =>{
    var tasks = [
      {
        id : ,
        name: 'Học lập trình',
        status: true
      },
      {
        id : ,
        name: 'Đi bơi',
        status: true
      },
      {
        id : ,
        name: 'Chơi game',
        status: false
      }
    ]
  }



  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc </h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
             {/* FORM */}
             <TaskForm/>
           </div>
          {/* TODO List */}
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span> Thêm Công Việc
            </button>
            <button 
                type="button" 
                className="btn btn-danger ml-5"
                onClick={this.onGenerateData}    >
              <span className="fa fa-plus mr-5"></span> Generate Data
            </button>
            {/* SEARCH AND SORT */}   
            <Control/>
            {/* show TODO list   */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               <TaskList/>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
