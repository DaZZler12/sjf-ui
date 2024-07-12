// PaginationComponent.tsx
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// interface
interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItems,
  itemsPerPage,
  paginate,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    paginate(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} onChange={handleChange} color="primary" />
    </Stack>
  );
};

export default PaginationComponent;
