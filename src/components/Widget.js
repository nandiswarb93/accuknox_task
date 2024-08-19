// import React from "react";

// const Widget = ({ widget, onRemove }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid blue",
//         padding: "10px",
//         margin: "5px",
//         height: "200px",
//         width: "200px",
//         display: "inline-block",
//       }}
//     >
//       <h3>{widget.name}</h3>
//       <p>{widget.text}</p>
//       <button onClick={onRemove}>Remove</button>
//     </div>
//   );
// };

// export default Widget;

import React from "react";
import "./Widget.css";

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button className="remove-widget-btn" onClick={onRemove}>
        ×
      </button>
    </div>
  );
};

export default Widget;
