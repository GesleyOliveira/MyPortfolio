import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';
export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit"
}));
export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "end"
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));
export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-evenly",
    },
}));
export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };
    return (_jsx(Box, { sx: { flexGrow: 1 }, children: _jsxs(AppBar, { position: "absolute", children: [_jsxs(StyledMobileToolbar, { children: [_jsx(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleMenu, color: "inherit", children: _jsx(MenuIcon, {}) }), _jsxs(Menu, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right',
                            }, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose, children: [_jsx(MenuItem, { onClick: () => handleSmoothScroll("about"), children: _jsx(StyledNavLink, { children: "Sobre" }) }), _jsx(MenuItem, { onClick: () => handleSmoothScroll("skills"), children: _jsx(StyledNavLink, { children: "Habilidades em Desenvolvimento" }) }), _jsx(MenuItem, { onClick: () => handleSmoothScroll("projects"), children: _jsx(StyledNavLink, { children: "Projetos" }) })] })] }), _jsxs(StyledDesktopToolbar, { variant: "regular", children: [_jsx(MenuItem, { onClick: () => handleSmoothScroll("about"), children: _jsx(StyledNavLink, { children: "Sobre" }) }), _jsx(MenuItem, { onClick: () => handleSmoothScroll("skills"), children: _jsx(StyledNavLink, { children: "Habilidades" }) }), _jsx(MenuItem, { onClick: () => handleSmoothScroll("projects"), children: _jsx(StyledNavLink, { children: "Projetos" }) })] })] }) }));
}
