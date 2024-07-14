// SjfList.tsx
import React, { useState } from "react";
import "./SjfList.scss"; // Adjust the import path as necessary
import SJFCard from "../../components/card/SJFCard";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import { getStatusIcons } from "../../utils/getStatusIcons";
import NoDataFoundComponent from "../../components/no_data_found/NoDataFoundComponent";

interface ListProps {
  response: any;
}

const SjfList: React.FC<ListProps> = ({ response }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;
  // const totalItems = 50; // Assuming 10 items for simplicity, adjust as needed

  // // Dummy data for rendering cards
  // const cardsData = new Array(totalItems).fill(null).map((_, index) => ({
  //   id: index,
  //   status:
  //     index % 3 === 0 ? "pending" : index % 3 === 1 ? "running" : "completed",
  //   name: `Job ${index + 1}`,
  //   // Add other properties as needed
  // }));

  // // Calculate the current items to display based on pagination
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = cardsData?.slice(indexOfFirstItem, indexOfLastItem);

  // console.log("Current items:", currentItems);
  // console.log("indexOfFirstItem:", indexOfFirstItem);
  // console.log("indexOfLastItem:", indexOfLastItem);

  // ------------------- Production level code -------------------

  // now in response I have data as key and totalCount as key inside data key i..e data?.data is an [] and data?.totalCount
  // now make the aboce logic of pagination using the response.. give me the produciton level code..

  const [currentPage, setCurrentPage] = useState(1);
  const data = response?.data?.data;
  const totalCount = response?.data?.totalCount || 0;
  const itemsPerPage = 5;

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    (data && data?.slice(indexOfFirstItem, indexOfLastItem)) || [];
  console.log("Current items:", currentItems);

  return (
    <div className="sjf-list">
      {currentItems && currentItems?.length > 0 ? (
        currentItems.map((item: any, index: number) => (
          <SJFCard
            key={item?.id}
            iconUrl={getStatusIcons(item?.status)}
            title={item?.name}
            onViewDetails={() => {
              console.log("View details for item with id:", item.id);
            }}
          />
        ))
      ) : (
        <NoDataFoundComponent />
      )}
      <PaginationComponent
        totalItems={totalCount}
        itemsPerPage={itemsPerPage}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default SjfList;
