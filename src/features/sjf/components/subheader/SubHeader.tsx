import React, { memo } from "react";
import { IconButton, Box, Grid } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

interface SubHeaderProps {
  onBack?: () => void;
  rightSideData?: React.ReactNode[];
}

const SubHeader: React.FC<SubHeaderProps> = React.memo(
  ({ onBack, rightSideData }) => {
    const handleBack = onBack || (() => window.history.back());

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={2} sm={1}>
            <IconButton onClick={handleBack} aria-label="back">
              <ArrowBackIosNewRounded />
            </IconButton>
          </Grid>
          <Grid item xs={10} sm={11} container justifyContent="flex-end">
            {rightSideData &&
              rightSideData.map((node, index) => (
                <React.Fragment key={index}>{node}</React.Fragment>
              ))}
          </Grid>
        </Grid>
      </Box>
    );
  }
);

export default memo(SubHeader);
