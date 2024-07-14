import React from "react";
import SJFCard from "../features/sjf/components/card/SJFCard";
import SubHeader from "../features/sjf/components/subheader/SubHeader";
import DetailsCardSkeleton from "../features/sjf/components/card/DetailsCardSkeleton";

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
      {/* <SJFCard
        iconUrl="https://via.placeholder.com/150"
        title="Card Title"
        onViewDetails={() => {
          console.log("View Details Clicked");
        }}
      /> */}
      <SubHeader
        // onBack={() => {
        //   console.log("Back Clicked");
        // }}
        rightSideData={[
          <div key="1">Right Side Data 1</div>,
          <div key="2">Right Side Data 2</div>,
        ]}
      />
    </div>
  );
};

export default ComponentBuilder;
