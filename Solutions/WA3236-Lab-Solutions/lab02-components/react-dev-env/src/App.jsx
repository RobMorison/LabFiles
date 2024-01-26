
import './App.css'

function App() {
  return (
    <div className={'boxed'} >
      <Header />
      <Body author={author} />
      {/* <FragTest /> */}
      <Footer text={footerText} />
    </div>
  );
}

const divStyle = {
  backgroundColor: 'lightgrey',
  margin: '0px',
  padding: '5px', 
  textAlign: 'center',
};

const title = "My React App"
var footerText = "footer text"
var author = {
  name: "John Doe",
  phone: "800-555-1212",
  email: "jdoe@gmail.com"
}

function Header(){
  return <h3 style={divStyle}>{title}</h3>;
}

function Body(props){
  return <div><p>Author: {props.author.name}</p>
  <p>some random text</p></div>;
}

function Footer(props){
  return <div><h4 style={divStyle}>{props.text}</h4></div>;
}

function FragTest(props){
  return <ul><ColorList /></ul>
}

function ColorList(props){
  return <><li>Red</li>
  <li>Yellow</li>
  <li>Blue</li></>
}

export default App
