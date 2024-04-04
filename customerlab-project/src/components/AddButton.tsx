import { Button } from "@mui/material";

export const AddButton = ({
  name,
  variant,
  size,
  onClick,
}: {
  name?: string;
  variant?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{ textTransform: "none" }}
      variant={variant || "contained"}
      size={size || "medium"}
    >
      {name || "Add"}
    </Button>
  );
};
