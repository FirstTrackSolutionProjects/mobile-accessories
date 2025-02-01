import React from "react";
import "./Categories.css";

const Categories = () => {
   const categories = [
        { id: 1, name: "Headphones", bgClass: "Headphones-bg" },
        { id: 2, name: "Earphones", bgClass: "Earphones-bg" },
        { id: 3, name: "Covers", bgClass: "Covers-bg" },
        { id: 4, name: "Power Banks", bgClass: "Powerbanks-bg" },
       { id: 5, name: "TemperGlass", bgClass: "TemperGlass-bg" },
        { id: 6, name: "Chargers", bgClass: "Chargers-bg" },
        { id: 7, name: "Memorychip", bgClass: "Memorychip-bg" },
        { id: 8, name: "Usbcord", bgClass: "Usbcord-bg" },
        { id: 9, name: "mobilelens", bgClass: "Mobilelens-bg" },
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
