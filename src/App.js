import Row from "./components/Row";
import Nav from "./components/Nav";
import Family from "./components/Family";
import "./App.css";
import MemberCount from "./components/MemberCount";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <Banner></Banner>
      <Row></Row>
      <MemberCount></MemberCount>
      <Family></Family>
    </div>
  );
}

export default App;
