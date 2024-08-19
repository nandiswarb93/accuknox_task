// import React, { useState } from "react";
// import Widget from "./Widget";
// import AddWidgetForm from "./AddWidgetForm";
// import data from "./data.json";

// const Dashboard = () => {
//   const [categories, setCategories] = useState(data.categories);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const addWidget = (categoryId, widget) => {
//     const updatedCategories = categories.map((category) => {
//       if (category.id === categoryId) {
//         return {
//           ...category,
//           widgets: [...category.widgets, widget],
//         };
//       }
//       return category;
//     });
//     setCategories(updatedCategories);
//   };

//   const removeWidget = (categoryId, widgetId) => {
//     const updatedCategories = categories.map((category) => {
//       if (category.id === categoryId) {
//         return {
//           ...category,
//           widgets: category.widgets.filter((widget) => widget.id !== widgetId),
//         };
//       }
//       return category;
//     });
//     setCategories(updatedCategories);
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {categories.map((category) => (
//         <div key={category.id}>
//           <h2>{category.name}</h2>
//           {category.widgets.map((widget) => (
//             <Widget
//               key={widget.id}
//               widget={widget}
//               onRemove={() => removeWidget(category.id, widget.id)}
//             />
//           ))}
//           <button onClick={() => setSelectedCategory(category.id)}>
//             + Add Widget
//           </button>
//           {selectedCategory === category.id && (
//             <AddWidgetForm
//               categoryId={category.id}
//               onAddWidget={addWidget}
//               onClose={() => setSelectedCategory(null)}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import data from "./data.json";
import "./Dashboard.css";

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, widget],
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                widget={widget}
                onRemove={() => removeWidget(category.id, widget.id)}
              />
            ))}
          </div>
          <button
            className="add-widget-btn"
            onClick={() => setSelectedCategory(category.id)}
          >
            + Add Widget
          </button>
          {selectedCategory === category.id && (
            <AddWidgetForm
              categoryId={category.id}
              onAddWidget={addWidget}
              onClose={() => setSelectedCategory(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
