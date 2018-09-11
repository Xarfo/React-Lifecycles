import React from "react";
import PropTypes from "prop-types";

const Doggos = props => {
  console.log(props);

  return (
    <ul>
      {props.doggos.map(dog => (
        <li>
          <img src={dog} key={dog} />
        </li>
      ))}
    </ul>
  );
};

Doggos.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default Doggos;
