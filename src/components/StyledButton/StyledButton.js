import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@mui/system";
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
const StyledButton = ({ children, onClick }) => {
    return (_jsx(ButtonBase, { onClick: onClick, children: children }));
};
export default StyledButton;
