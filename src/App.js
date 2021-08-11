import avatar from "./avatar.jpg";
import "./App.css";
import "./style.css";
let fName = "Myriam";
let lName = "Charfeddine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ border: "solid 1px black", maxWidth: "100vw" }}
          className="container"
        >
          <h1 className="title">
            {fName} {lName}
          </h1>

          <img src={avatar} className="red" />

          <img src="pic.jpg" className="red" />
        </div>

        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
