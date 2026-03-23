import React from "react";

export const CategoryButtons = ({activeCategory, setActiveCategory}) => {
        
    const filterButton = [
        { id: 1, label: "All Projects", category: "all"},
        { id: 2, label: "UX / Interaction Design", category: "design"},
        { id: 3, label: "Development", category: "code"},
    ];

    return (
        <div className="category-buttons">
            {filterButton.map((button) => (
                <button
                    key={button.id}
                    className={activeCategory === button.category ? "active" : ""}
                    onClick={() => setActiveCategory(button.category)}
                >
                    {button.label}
                </button>
            ))}
        </div>
    );
};

export default CategoryButtons;
