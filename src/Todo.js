import React, { Component } from 'react';
import './Todo.css';

var todoDatas;

class Todo extends Component {

  render() {
    if(this.props.data.state === 0){
      return(
        <div className="Todos">
          inputの中身を入力してください。
        </div>
      )
    }else if(this.props.data.state === 1){
      todoDatas = this.props.data.items.items.map(item => {
        return(
          <div className="Todos">
            {item.name}
            {item.id}
          </div>
        )
      });
      return (
        <div>
          {todoDatas}
        </div>
      );
    }else if(this.props.data.state === 2){
      return(
        <div className="Todos">
          検索中です
        </div>
      )
    }
  }
}

export default Todo;
