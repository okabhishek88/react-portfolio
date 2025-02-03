import { useState } from "react";
import "./Navbar.css";
import { connect, useDispatch } from "react-redux";
import { changeActiveTab } from "../redux/action.js";
import PropTypes from "prop-types";

const Navbar = ({ activeTab }) => {
  const [listNav] = useState(["Home", "Skills", "Projects", "Education", "Treasury", "Contacts"]);

  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeActiveTab(value));
  };

  return (
    <header>
      <div className="logo">
        <a href="/home">
          <img
            src="/icons/name-logo.svg"
            style={{ width: "50px", height: "50px" }}
            alt="icon"
          />
        </a>
      </div>
      <nav>
        {listNav.map((value, key) => (
          <span
            key={key}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab,
  };
};

export default connect(mapStateToProps, { changeActiveTab })(Navbar);

Navbar.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
