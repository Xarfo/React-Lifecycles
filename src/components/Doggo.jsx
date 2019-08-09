import React from "react";
//import PropTypes from "prop-types";

const Doggo = props => {
  console.log(`This is located in child component ${props.doggo}`);

  return (
    <img src = {props.doggo} alt = 'dog'/>
    // <ul>
    //   {props.doggo.map(dog => (
    //     <li>
    //       <img src={dog} key={dog} alt={dog} />
    //     </li>
    //   ))}
    // </ul>
  );
};

// Doggo.propTypes = {
//   datas: PropTypes.arrayOf(PropTypes.string.isRequired)
// };

export default Doggo;
