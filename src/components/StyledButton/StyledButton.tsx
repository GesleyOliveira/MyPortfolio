import { styled } from "@mui/system";
import React from "react";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}


const ButtonBase = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonBase onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

export default StyledButton;
