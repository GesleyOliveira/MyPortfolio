import { styled } from "@mui/system";
import React from "react";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}


const ButtonBase = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  gap: "10px",
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
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
