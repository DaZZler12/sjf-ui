import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import SjfList from "./List/SjfList";
import SjfJobForm from "../components/jobform/SjfJobForm";
import SearchBar from "../components/searchbar/SearchBar";
import { useGetSJFListQuery } from "../../apis/sjfApis";

const SjfLayout = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const sjfListResponse = useGetSJFListQuery(
    {
      _start: 0,
      _end: 10,
      sort: "_id",
      order: "DESC",
    },
    {
      pollingInterval: 0,
    }
  );
  console.log("sjfListResponse", sjfListResponse);

  return (
    <Box padding={3}>
      <Grid
        container
        spacing={2}
        display={"flex"}
        flexDirection={"column"}
        justifyItems={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          container
          spacing={5}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          maxWidth={"50%"}
        >
          <Grid item xs={10}>
            <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleOpenForm}>
              {"Add Job"}
            </Button>
          </Grid>
        </Grid>
        <Box padding={5}>
          <Grid item xs={12}>
            <SjfList response={sjfListResponse} />
          </Grid>
        </Box>
        <SjfJobForm open={openForm} handleClose={handleCloseForm} />
      </Grid>
    </Box>
  );
};

export default SjfLayout;
