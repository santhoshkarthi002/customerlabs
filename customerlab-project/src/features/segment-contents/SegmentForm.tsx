import CircleIcon from "@mui/icons-material/Circle";
import { Box, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { AddSegmentList } from "./AddSegmentList";

export const SegmentForm = () => {
  const ctx = useFormContext();

  return (
    <div style={{ padding: "10px 20px", overflow: "auto", maxHeight: "78vh" }}>
      <Box>
        <InputLabel>Enter the Name of the Segment</InputLabel>
        <TextField
          sx={{ mt: 2 }}
          size="small"
          fullWidth
          placeholder="Name of the segment"
          required
          name="segment_name"
          id="outlined-required"
          inputProps={ctx.register("segment_name")}
        />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>
          To save your segment, you need to add the schemas to build the query
        </Typography>
        <Stack
          sx={{ mt: 2 }}
          spacing={1}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Box gap={1} display={"flex"} sx={{ alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 15 }} color="success" />
            <Typography> User Traits</Typography>
          </Box>
          <Box gap={1} display={"flex"} sx={{ alignItems: "center" }}>
            <CircleIcon sx={{ fontSize: 15 }} color="error" />
            <Typography> Group Traits</Typography>
          </Box>
        </Stack>
        <AddSegmentList />
      </Box>
    </div>
  );
};
