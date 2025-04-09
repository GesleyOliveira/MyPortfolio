import { styled } from "@mui/system";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: React.ReactNode;
}

const ButtonStyled = styled("button")(({ theme }) => ({
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
    color: theme.palette.primary.main,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
};

export default StyledButton;


