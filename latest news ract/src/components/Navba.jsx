import React from "react";

function Navbar({ setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge text-bg-secondary">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer", fontWeight: "600" }}
                onClick={() => setCategory("technology")}
              >
                technology
              </div>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer", fontWeight: "600"  }}
              onClick={() => setCategory("sports")}
            >
              <div className="nav-link"> sports </div>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer", fontWeight: "600"  }}
              onClick={() => setCategory("science")}
            >
              <div className="nav-link">science</div>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer", fontWeight: "600"  }}
              onClick={() => setCategory("health")}
            >
              <div className="nav-link"> health </div>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer", fontWeight: "600"  }}
              onClick={() => setCategory("general")}
            >
              <div className="nav-link">general</div>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer", fontWeight: "600"  }}
              onClick={() => setCategory("entertainment")}
            >
              <div className="nav-link">entertainment </div>
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer", fontWeight: "600"    }}
              onClick={() => setCategory("business")}
            >
              <div className="nav-link">business</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
