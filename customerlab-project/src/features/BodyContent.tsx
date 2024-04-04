import { Box, Drawer } from "@mui/material";
import { AddButton } from "../components";
import React from "react";
import { AddSegmentForm } from "./segment-contents";

export const BodyContent = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Box sx={{ mt: 10 }}>
        <AddButton
          onClick={toggleDrawer(true)}
          variant="outlined"
          name="Save Segment"
        />
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
          <AddSegmentForm />
        </Drawer>
      </Box>
    </div>
  );
};
