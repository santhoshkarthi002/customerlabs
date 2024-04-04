import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AppBar, Box, Typography } from "@mui/material";
export const Header = () => {
  return (
    <div>
      <AppBar sx={{ bgcolor: "#00b3b3", boxShadow: "none" }}>
        <Box display={"flex"} alignItems={"center"} sx={{ p: 1 }} gap={2}>
          <ArrowBackIosIcon fontSize="small" />
          <Typography variant="h6">Viwe Audience</Typography>
        </Box>
      </AppBar>
    </div>
  );
};
