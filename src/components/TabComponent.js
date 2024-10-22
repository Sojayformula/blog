import React, { useState } from "react";
//import project2 from "../project2.png";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Tab 1", image: "project2", content: "Content for Tab 1" },
    { title: "Tab 2", image: "project1", content: "Content for Tab 2" },
    { title: "Tab 3", image: "project3", content: "Content for Tab 3" },
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 text-white ${activeTab === index ? 'bg-blue-500' : 'bg-gray-500'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content mt-4">
        <img src={tabs[activeTab].image} alt={`Image for ${tabs[activeTab].title}`} className="w-32 h-32 mx-auto" />
        <p className="text-center mt-4">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default TabComponent;
