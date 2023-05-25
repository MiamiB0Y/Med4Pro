import { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from '@/components/FlexBetween';
import Logo from '@/components/logo-med.png';

type Props = {};

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color="#000000">
            {/* Левая сторона */}
            <FlexBetween gap="0.75rem">
                <div className="container"><img src={Logo}/></div>
                <Typography variant="h4" fontSize="17px" color="#000000">
                    Med4Pro
                </Typography>
            </FlexBetween>

            {/* Правая сторона*/}
            <FlexBetween gap="2rem">
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to="/" onClick={() => setSelected("dashboard")} style={{ color: selected === "dashboard" ? "inherit" : palette.grey[700], textDecoration: "inherit",}}>
            Дашборд
          </Link>
        </Box>                
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to="/predictions" onClick={() => setSelected("predictions")} style={{ color: selected === "predictions" ? "inherit" : palette.grey[700], textDecoration: "inherit",}}>
            Что-то ещё?
          </Link>
        </Box>
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;