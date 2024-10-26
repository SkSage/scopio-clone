import React from "react";
import PropTypes from "prop-types";

const categories = [
  "Plasma cell lukemia",
  "marginal zonw lymphoma",
  "Myelodysplactic syndrome",
  "bone marrow aspirate",
  "autoimmue hemolytic anemia",
  "normal peripheral blood smear",
  "sickle cell anemia",
  "parasitic inclusions- malaria",
  "essential thrombocythemia",
  "sezary syndrome",
  "acute promyelocytic",
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidebar">
      <h2>welcome to scopio scan gallery.</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedCategory(category);
              }
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes for validation
Sidebar.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Sidebar;
