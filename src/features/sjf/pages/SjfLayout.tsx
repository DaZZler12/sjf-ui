import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import SjfList from "./List/SjfList";
import SjfJobForm from "../components/jobform/SjfJobForm";
import SearchBar from "../components/searchbar/SearchBar";

const SjfLayout = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={10}>
          <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleOpenForm}>
            Add Job
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SjfList />
      </Grid>
      <SjfJobForm open={openForm} handleClose={handleCloseForm} />
    </Grid>
  );
};

export default SjfLayout;
