//not used in render
import React from "react";

//CSS
import "./style.css";

function Sidebar() {
  const [showSidebar, hideSidebar] = React.useState(false);

  return (
    <section>
      {showSidebar && (
        <aside className="sidebar">
          <div className="sidebar-header">
            <button
              className="close-btn"
              onClick={() => hideSidebar(!showSidebar)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div id="box">
            <button className="icon" id="a">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <button className="icon" id="b">
              <i className="fa fa-tag" aria-hidden="true"></i>
            </button>
            <button className="icon" id="c">
              <i className="fa fa-sad-cry" aria-hidden="true"></i>
            </button>
            <button className="icon" id="d">
              <i className="fa fa-save" aria-hidden="true"></i>
            </button>
            <button className="icon" id="e">
              <i className="fa fa-rainbow" aria-hidden="true"></i>
            </button>
            <button className="icon" id="f">
              <i className="fa fa-wallet" aria-hidden="true"></i>
            </button>
            <button className="icon" id="g">
              <i className="fa fa-tape" aria-hidden="true"></i>
            </button>
            <button className="icon" id="h">
              <i className="fa fa-tablets" aria-hidden="true"></i>
            </button>
          </div>
        </aside>
      )}
    </section>
  );
}

export default Sidebar;
