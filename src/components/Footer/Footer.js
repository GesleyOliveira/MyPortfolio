import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (_jsx(_Fragment, { children: _jsx(Box, { pt: 2, pb: 2, children: _jsxs(Container, { maxWidth: "sm", children: [_jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-around", pb: 1, children: [_jsx(IconButton, { onClick: () => window.open("https://github.com/GesleyOliveira"), children: _jsx(GitHubIcon, {}) }), _jsx(IconButton, { onClick: () => window.open("https://www.linkedin.com/in/gesley-rosa-66308a269/"), children: _jsx(LinkedInIcon, {}) }), _jsx(IconButton, { href: "mailto:geeh.oliveira@hotmail.com", target: "_blank", children: _jsx(EmailIcon, {}) })] }), _jsx(Typography, { textAlign: "center", children: "\u00A9 2025 Gesley de Oliveira Rosa" })] }) }) }));
};
export default Footer;
