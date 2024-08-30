import "./Navbar.css";
import vscodeicon from "/assets/vscode_icon.svg";
export default function Navbar() {
  return (
    <>
      <nav>
        <img className="icon" src={vscodeicon} alt="vs code icon" />


        <div className="items">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
        
        
        <p className="center">Shitanshukumar607 - Visual Studio Code</p>
        <div className="circles">
          <span className="circle circle1"> </span>
          <span className="circle circle2"> </span>
          <span className="circle circle3"> </span>
        </div>
      </nav>
    </>
  );
}
