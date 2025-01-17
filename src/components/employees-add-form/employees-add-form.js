import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
    
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
}

  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Додати нового співробітника</h3>
        <form 
          onSubmit = {this.onSubmit}
          className="add-form d-flex">
          <input
            value={name}
            name="name"
            onChange={this.onValueChange}
            type="text"
            className="form-control new-post-label"
            placeholder="Як його звати?"
          />
          <input
            value={salary}
            name="salary"
            onChange={this.onValueChange}
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button 
              type="submit" 
              className="btn btn-outline-light">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
