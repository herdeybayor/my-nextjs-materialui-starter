import Link from "@/components/Link";
import { ColorModeContext } from "@/context/ColorModeContext";
import { PhotoCamera } from "@mui/icons-material";
import { Paper, Button, IconButton, Typography, Switch } from "@mui/material";
import * as React from "react";

export default function Home() {
    const { mode, toggleColorMode } = React.useContext(ColorModeContext);
    return (
        <Paper sx={{ p: "2rem", m: "2rem" }}>
            <Switch checked={mode === "dark"} onChange={toggleColorMode} />
            <Typography align="center">Hello World</Typography>
            <Button sx={{ mr: "1rem" }} variant="contained" color="primary" component={Link} href="/about">
                Goto About
            </Button>

            <Button sx={{ mr: "1rem" }} color="primary" startIcon={<PhotoCamera />} variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
        </Paper>
    );
}
