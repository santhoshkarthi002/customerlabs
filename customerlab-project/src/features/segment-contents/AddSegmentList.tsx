import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Link, MenuItem, Select, Stack } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";
import { segmentList } from "../utils";
import { SegmentSelector } from "./SegmentSelector";
import { useEffect, useState } from "react";

const SelectComponent = ({ index, item }: { index: number; item?: any }) => {
  const ctx = useFormContext();
  const getSegment = ctx.watch("schema");
  const segmentVlue = ctx.watch(`schema.${index}.segment`);
  const [state, setState] = useState(segmentVlue);

  useEffect(() => {
    if (segmentVlue) {
      setState(segmentVlue);
    }
  }, [segmentVlue]);

  const getFielterValue = () => {
    const segment = segmentList.filter((list) => {
      return !getSegment.find((item: any) => {
        return list.value === item.segment;
      });
    });
    let array = segment;

    const getValue = segmentList.find((item) => item.value === state) as any;
    array.push(getValue);

    return array.sort((a, b) => a.label.localeCompare(b.label));
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name={`schema.${index}.segment`}
      fullWidth
      size="small"
      inputProps={ctx.register(`schema.${index}.segment`)}
      value={segmentVlue}
    >
      {getFielterValue().map((item) => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export const AddSegmentList = () => {
  const ctx = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: ctx.control,
    name: "schema",
  });

  const selectedScheme = ctx.watch("segment_selector") || "";

  return (
    <Box sx={{ mt: 3 }}>
      {fields.map((item, index) => {
        const isEven = (num: number) => num % 2 === 0;
        return (
          <Box display={"flex"} gap={1} sx={{ mt: 1 }}>
            <Stack
              sx={{ mt: 2 }}
              spacing={1}
              direction={"row"}
              justifyContent={"flex-end"}
            >
              {isEven(index) ? (
                <Box sx={{ alignItems: "center" }}>
                  <CircleIcon sx={{ fontSize: 15 }} color="success" />
                </Box>
              ) : (
                <Box sx={{ alignItems: "center" }}>
                  <CircleIcon sx={{ fontSize: 15 }} color="error" />
                </Box>
              )}
            </Stack>
            <SelectComponent index={index} item={item} />
            <IconButton
              onClick={() => {
                remove(index);
                ctx.setValue("segment_selector", "");
              }}
            >
              <RemoveIcon />
            </IconButton>
          </Box>
        );
      })}

      <SegmentSelector />
      <Box
        display={"flex"}
        sx={{ mt: 2 }}
        onClick={() => {
          if (selectedScheme) {
            append({ segment: selectedScheme });
            ctx.setValue("segment_selector", undefined);
          }
        }}
      >
        <Link
          display={"flex"}
          gap={1}
          sx={{
            cursor: "pointer",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <AddIcon fontSize="small" />
          Add new schema
        </Link>
      </Box>
    </Box>
  );
};
