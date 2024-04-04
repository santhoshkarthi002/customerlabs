import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SegmentForm } from ".";
import { segmentList } from "../utils";
import axios from "axios";

interface IFormInput {
  segment_name: string;
  schema: { [key: string]: any }[];
}

export const AddSegmentForm = () => {
  const formCtx = useForm<IFormInput>({
    defaultValues: {
      segment_name: "",
      schema: [],
    },
    mode: "onChange",
    delayError: 500,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const segment = segmentList
      .filter((item) => data.schema.find((list) => item.value === list.segment))
      .map((list) => ({ [list.value]: list.label }));

    const segmentData = {
      segment_name: data.segment_name,
      schema: segment,
    };

    const options = {
      method: "post",
      mode: "cors",
      baseURL: "https://webhook.site/c63697c2-b636-40cc-ba51-7a003a8e29c6",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify(segmentData),
    };

    try {
      await axios.request(options);
      alert("Webhook sent successfully!");
    } catch (error) {
      console.error("Error sending webhook:", error);
    }
  };

  return (
    <FormProvider {...formCtx}>
      <form onSubmit={formCtx.handleSubmit(onSubmit)}>
        <div>
          <Box sx={{ width: 400 }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ bgcolor: "#00b3b3", boxShadow: "none", p: 1 }}
              gap={2}
            >
              <ArrowBackIosIcon sx={{ color: "white" }} fontSize="small" />
              <Typography sx={{ color: "white" }} variant="h6">
                Viwe Audience
              </Typography>
            </Box>
            <Box sx={{ minHeight: "60vh" }}>
              <SegmentForm />
            </Box>
            <Box
              display={"flex"}
              gap={1}
              sx={{
                p: 2,
                width: 400,
                bgcolor: "#c2c2a3",
                bottom: 0,
                position: "fixed",
              }}
            >
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                color="success"
                type="submit"
              >
                Save the segment
              </Button>
              <Button
                sx={{ textTransform: "none" }}
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </div>
      </form>
    </FormProvider>
  );
};
