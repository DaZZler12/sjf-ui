// SjfList.tsx
import React, { useState } from "react";
import "./SjfList.scss"; // Adjust the import path as necessary
import SJFCard from "../../components/card/SJFCard";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import { getStatusIcons } from "../../utils/getStatusIcons";
import NoDataFoundComponent from "../../components/no_data_found/NoDataFoundComponent";
import { sjfRouteUrls } from "../../urls/sjfRoutingUrls";
import useSjfListData from "./useSjfListData";
import useSjfListAction from "./useSjfListAction";

interface ListProps {
  searchTerm?: string;
}

const SjfList: React.FC<ListProps> = ({ searchTerm }) => {
  const {
    setCurrentPage,
    totalCount,
    itemsPerPage,
    currentItems,
    navigate,
    loading,
  } = useSjfListData(searchTerm);
  const { handleDelete, isDeleting } = useSjfListAction();

  return (
    <div className="sjf-list">
      {currentItems && currentItems?.length > 0 ? (
        currentItems?.map((item: any, index: number) => (
          <SJFCard
            key={item?.id}
            iconUrl={getStatusIcons(item?.status)}
            status={item?.status}
            title={item?.name}
            onViewDetails={() => {
              navigate(sjfRouteUrls.sjf.v1.details(item?.id));
            }}
            onDelete={() => {
              handleDelete(item?.id);
            }}
            disabled={isDeleting(item?.id)}
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
