import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import SjfList from "./List/SjfList";
import SjfJobForm from "../components/jobform/SjfJobForm";
import SearchBar from "../components/searchbar/SearchBar";
import "./SjfLayout.scss";

const SjfLayout = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="sjflayout">
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
            className="searchbar"
          >
            <Grid item xs={10}>
              <SearchBar
                onSearch={(searchTerm) => {
                  setSearchTerm(searchTerm);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handleOpenForm}>
                {"Add Job"}
              </Button>
            </Grid>
          </Grid>
          <Box padding={5}>
            <Grid item xs={12}>
              <SjfList searchTerm={searchTerm} />
            </Grid>
          </Box>
          <SjfJobForm open={openForm} handleClose={handleCloseForm} />
        </Grid>
      </Box>
    </div>
  );
};

export default SjfLayout;
