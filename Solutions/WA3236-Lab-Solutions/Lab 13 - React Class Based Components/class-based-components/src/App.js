import './App.css';
import React, { useState } from 'react';

class Header extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
      return <h3 style={divStyle} >{this.props.title}</h3>
  }
}

class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = initialState;   
  }


handleListItemClick = (event, index) => {
  const book = this.state.books[index];
  console.log("You chose: " + book.isbn + ", " + book.title + ", " + book.price);
  this.setState({...this.state, 'selectedIndex':index });
}

  render(){
    return (
      <div className={'boxed'}>
        <Header title={this.state.title} />
        <Body {...this.state}
          // handleChange={this.handleChange}
          // handleButtonClick={this.handleButtonClick}
          handleListItemClick={this.handleListItemClick}
        />
        <Footer text={this.state.footerText} />
      </div>
    );
  }
}  

class BookList extends React.Component {
  constructor(props) { super(props) }
  render() {
    return (<ul>
      {this.props.books.map(
        (book, index) => {
          return (
            <li
              onClick={(e) => this.props.handleListItemClick(e, index)}
              className={index === this.props.selectedIndex ? "selected" : ""}
              key={index}
            >{book.title}</li>)
        }
      )}
    </ul>
    );
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props)    
  }

  render() {
    let selBook = this.props.books[this.props.selectedIndex]
    return (<div style={divStyle2} >
      <h4>Author:{this.props.author.name}</h4>
      <BookList {...this.props} />
      <div>Selected:<br />{(selBook) ?
        selBook.title + 
        ', ' + selBook.isbn + 
        ', ' + selBook.price
        : "none"}</div>
    </div>);
  }
}

class Footer extends React.Component{
  constructor(props){
      super(props)
  }

  render(){
      return ( <div>
           <h4 style={divStyle} >{this.props.text}</h4>
          </div> );
  }
}
const divStyle = {
  backgroundColor: 'lightgrey',
  margin: '0px',
  padding: '5px',
  textAlign: 'center',
};

const divStyle2 = {
  width: '188px',
  border: '1px solid black',
  margin: '0px',
  padding: '5px'
};

let initialState = {
  title: "My React App",
  footerText: "footer text",
  color: "blue",
  message: "",
  selectedIndex: -1,
  author: {
    name: "John Doe",
    phone: "800-555-1212",
    email: "jdoe@gmail.com"
  }
  , books: [
    { isbn: '123', title: 'The Time Machine', price: 5.95 },
    { isbn: '123', title: 'War of the Worlds', price: 6.95 },
    { isbn: '123', title: 'The Invisible Man', price: 4.95 }
  ]
}

// function App() {
//   // let state = initialState
//   const [state, setState] = useState(initialState);
//   let handleChange = (event) => {
//     state[event.currentTarget.name] = event.currentTarget.value;
//     setState({ ...state });
//   }
//   let handleButtonClick = (event) => {
//     state.message = "You like the color " + state.color + "!";
//     setState({ ...state });
//   }
//   function handleListItemClick(event, index) {
//     state.selectedIndex = index;
//     const book = state.books[index];
//     setState({ ...state });
//     console.log("You chose: " + book.isbn + ", " +
//       book.title + ", " + book.price);
//   }

//   return (
//     <div className={'boxed'}>
//       <Header title={state.title} />
//       <Body {...state}
//         handleChange={handleChange}
//         handleButtonClick={handleButtonClick}
//         handleListItemClick={handleListItemClick}
//       />
//       <Footer text={state.footerText} />
//     </div>
//   );
// }

// function BookList(props) {
//   return (<ul>
//     {props.books.map(
//       (book, index) => {
//         return (
//           <li 
//             onClick={(e) => props.handleListItemClick(e, index)}
//             className={index === props.selectedIndex ? "selected" : ""}
//             key={index}
//           >{book.title}</li>)
//       }
//     )}
//   </ul>
//   );
// }

// function Header(props) { 
//   return <h3 style={divStyle}>{props.title}</h3>;
// }

// function Footer(props) {
//   return (<div><h4 style={divStyle}>{props.text}</h4></div>);
// }

// function Body(props) {
//   const selBook = props.books[props.selectedIndex];
//   return (<div style={divStyle2} >
//     <h4>Author:{props.author.name}</h4>
//     <BookList {...props} /> 
//     <div>Selected:<br/>{(selBook)?
//         selBook.title + ', ' + selBook.isbn + ', ' + selBook.price
//         :"none"}</div>
//   </div>);
// }

export default App;
