import React from 'react'
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    title: "",
    year: "",
    director: "",
    img_url: "",
    role: "",
    
    
  }

  handleChangeTitle = event => {
    console.log(this.state.title);
    this.setState({ title: event.target.value });
  }
  handleChangeYear = event => {
    console.log(this.state.year);
    this.setState({ year: event.target.value });
  }
  handleChangeDirector = event => {
    console.log(this.state.director);
    this.setState({ director: event.target.value });
  }
  handleChangeImg= event => {
    console.log(this.state.img_url);
    this.setState({ img_url: event.target.value });
  }
  handleChangeRole= event => {
    console.log(this.state.role);
    this.setState({ role: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();



    axios
    .post(`http://localhost:2400/BillMurrayMovies`, {       
    title: this.state.title,
    year: this.state.year,
    director: this.state.director,
    img_url: this.state.img_url,
    role: this.state.role
  })
    .then(res => {
    console.log(res);
    console.log(res.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="squares">
        <form onSubmit={this.handleSubmit}>
        <p>Add a Bill Murray movie here!</p>
          <label>
            Title:
            <input type="text" name="name" onChange={this.handleChangeTitle} />
          </label>
          <br></br>
          <label>
            Year:
            <input type="text" name="name" onChange={this.handleChangeYear} />
          </label>
          <br></br>
          <label>
            Director:
            <input type="text" name="name" onChange={this.handleChangeDirector} />
          </label>
          <br></br>
          <label>
            Img link:
            <input type="text" name="name" onChange={this.handleChangeImg} />
          </label>
          <br></br>
          <label>
            Rol:
            <input type="text" name="name" onChange={this.handleChangeRole} />
          </label>
          <br></br>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}