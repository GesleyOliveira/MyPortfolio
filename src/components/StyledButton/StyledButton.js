import { jsx as _jsx } from "react/jsx-runtime";
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
    return _jsx(ButtonStyled, { children: "texto" });
};
export default StyledButton;
