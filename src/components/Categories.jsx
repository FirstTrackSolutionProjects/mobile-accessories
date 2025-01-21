import React from "react";
import "./Categories.css";

const Categories = () => {
   const categories = [
        { id: 1, name: "Headphones", bgClass: "Headphones-bg" },
        { id: 2, name: "Earbuds", bgClass: "Earbuds-bg" },
        { id: 3, name: "Accessories", bgClass: "accessories-bg" },
        { id: 4, name: "Power Banks", bgClass: "powerbanks-bg" },
        { id: 5, name: "BackCovers", bgClass: "BackCovers-bg" },
        { id: 6, name: "TemperGlass", bgClass: "TemperGlass-bg" },
    ];

    return (
        <div className="categories-section">
            {categories.map((category) => (
                <div key={category.id} className={`category-item ${category.bgClass}`}>
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Categories;
