import { Box, MenuItem, Select } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { segmentList } from "../utils";

export const SegmentSelector = () => {
  const ctx = useFormContext();

  const getSegment = ctx.watch("schema");
  const segment = ctx.watch("segment_selector");

  const getFielterValue = segmentList
    .filter((list) => {
      return !getSegment.find((item: any) => {
        return list.value === item.segment;
      });
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Box sx={{ mt: 3 }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="segment_selector"
        fullWidth
        size="small"
        value={segment ?? ""}
        placeholder="Add schema to segment"
        inputProps={ctx.register("segment_selector")}
      >
        {getFielterValue.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};
