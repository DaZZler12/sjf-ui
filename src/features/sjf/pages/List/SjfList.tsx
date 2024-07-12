// SjfList.tsx
import React, { useState } from "react";
import "./SjfList.scss"; // Adjust the import path as necessary
import SJFCard from "../../components/card/SJFCard";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import { getStatusIcons } from "../../utils/getStatusIcons";

const SjfList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 100; // Assuming 10 items for simplicity, adjust as needed

  // Dummy data for rendering cards
  const cardsData = new Array(totalItems).fill(null).map((_, index) => ({
    id: index,
    status:
      index % 3 === 0 ? "pending" : index % 3 === 1 ? "running" : "completed",
    name: `Job ${index + 1}`,
    // Add other properties as needed
  }));

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardsData?.slice(indexOfFirstItem, indexOfLastItem);

  console.log("Current items:", currentItems);
  console.log("indexOfFirstItem:", indexOfFirstItem);
  console.log("indexOfLastItem:", indexOfLastItem);

  return (
    <div className="sjf-list">
      {currentItems.map((item, index) => (
        <SJFCard
          key={item.id}
          iconUrl={getStatusIcons(item?.status)}
          title={item?.name}
          onViewDetails={() => {
            console.log("View details for item with id:", item.id);
          }}
        />
      ))}
      <PaginationComponent
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default SjfList;
