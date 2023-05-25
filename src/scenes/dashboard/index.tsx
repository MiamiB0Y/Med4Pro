import { Box, useMediaQuery } from "@mui/material";
import DashboardBox from "@/components/DashboardBox";
import Row1 from "./Row1";
import Row2 from "./Row2";

type Props = {};

const gridTemplateLargeScreens = `
  "a a c"
  "a a c"
  "a a c"
  "b b d"
  "b b d"
  "b b d"
  "b b d"
  "b b d"
  "b b e"
`
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
`

const Dashboard = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1200px)")
  return ( <Box width="100%" height="100%" display="grid" gap="1.5rem" 
  sx={
    isAboveMediumScreens ? {
    gridTemplateColumns: "repeat(3, minmax(420px, 1fr))",
    gridTemplateRows: "repeat(8, minmax(60px, 1fr))",
    gridTemplateAreas: gridTemplateLargeScreens,
    } : {
    gridAutoColumns: "1fr",
    gridAutoRows: "80px",
    gridTemplateAreas: gridTemplateSmallScreens,
    }
  }
>
    <Row1 />
    <Row2 />
    </Box>
)};

export default Dashboard;