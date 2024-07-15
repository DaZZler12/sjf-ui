// this is a customHook to manage the data of the list component
// useCallBack and useMemo used to avoid the re-rendering of the component

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSJFListQuery } from "../../../apis/sjfApis";
interface PaginationData {
  _start: number;
  _end: number;
  sort?: string;
  order?: string;
  search?: string;
}

const useSjfListData = (searchTerm?: string) => {
  const navigate = useNavigate();

  // ----- Data for Pagination -----
  const [paginationData, setPaginationData] = useState<PaginationData>({
    _start: 0,
    _end: 5,
    sort: "_id",
    order: "DESC",
  });
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [listData, setListData] = useState<any>([]); // it will store all the data for the list from the response
  const [currentItems, setCurrentItems] = useState<any>([]); // it will store the current items to display based on pagination
  const [totalCount, setTotalCount] = useState<number>(0);
  const [indexOfLastItem, setIndexOfLastItem] = useState<number>(5);
  const [indexOfFirstItem, setIndexOfFirstItem] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // ------------------- ** -------------------

  useMemo(() => {
    // will be calculated based on the currentPage
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    setPaginationData({
      ...paginationData,
      _start: indexOfFirstItem,
      _end: indexOfLastItem,
    });
    setIndexOfLastItem(indexOfLastItem);
    setIndexOfFirstItem(indexOfFirstItem);
  }, [currentPage]);

  // list API call
  const listResponse = useGetSJFListQuery(paginationData, {
    pollingInterval: 5000, // poll every 5 seconds
    refetchOnMountOrArgChange: true,
    
  });
  useEffect(() => {
    if (listResponse?.isSuccess) {
      setListData(listResponse?.data?.data || []);
      setTotalCount(listResponse?.data?.totalCount || 0);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else if (listResponse?.isError) {
      console.error("Error fetching list data:", listResponse?.error);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else if (listResponse?.isLoading || listResponse?.isFetching) {
      setLoading(true); // loading state while fetching the data
    }
  }, [listResponse]);

  // Calculate the current items to display based on pagination
  useMemo(() => {
    // set the currentItems based on the paginationData
    listData && setCurrentItems(listData);
  }, [listData, indexOfFirstItem, indexOfLastItem]);

  // need to alter the pagiantionData based on the searchTerm
  useMemo(() => {
    setPaginationData((prev) => {
      if (searchTerm) {
        return {
          ...prev,
          search: searchTerm,
        };
      } else {
        const { search, ...rest } = prev;
        return rest;
      }
    });
  }, [searchTerm]);

  return useMemo(
    () => ({
      paginationData,
      setPaginationData,
      currentPage,
      setCurrentPage,
      listData,
      totalCount,
      itemsPerPage,
      indexOfLastItem,
      indexOfFirstItem,
      currentItems,
      navigate,
      loading,
    }),
    [
      paginationData,
      setPaginationData,
      currentPage,
      setCurrentPage,
      listData,
      totalCount,
      itemsPerPage,
      indexOfLastItem,
      indexOfFirstItem,
      currentItems,
      navigate,
      loading,
    ]
  );
};

export default useSjfListData;
