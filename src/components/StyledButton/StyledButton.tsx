import { styled } from "@mui/system"; // ✅

const ButtonStyled = styled("button")(() => ({
  backgroundColor: "transparent",
  color: "white",
  borderRadius: "4px",
  padding: "8px 16px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "darkred",
  },
  "&:active": {
    backgroundColor: "lightcoral",
  },
}));

const StyledButton = () => {
  return <ButtonStyled>texto</ButtonStyled>;
};

export default StyledButton;
