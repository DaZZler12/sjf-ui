import React from "react";
import SJFCard from "../features/sjf/components/card/SJFCard";

const ComponentBuilder = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SJFCard
        iconUrl="https://via.placeholder.com/150"
        title="Card Title"
        onViewDetails={() => {
          console.log("View Details Clicked");
        }}
      />
    </div>
  );
};

export default ComponentBuilder;
