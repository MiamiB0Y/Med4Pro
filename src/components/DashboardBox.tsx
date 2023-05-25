import { Box } from "@mui/material"
import { styled } from "@mui/system"

const DashboardBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.light,
    borderRadius: "1rem",

}))

export default DashboardBox