/** @jsxImportSource @emotion/react */

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useContext } from 'react';
import { boxWrapperStyle, buttonStyle, boxInnerStyle } from './styles.js';

import { useTheme } from '@mui/material';
import { themeSwitcher } from '../../context/ThemeContext.jsx';

const Page = () => {
    const { palette } = useTheme();

    const ttoggleTheme = useContext(themeSwitcher)

    return (
        <>
            <Box css={boxWrapperStyle}>
                <Box css={boxInnerStyle} >
                    <Typography variant="h4" gutterBottom>
                        {palette.mode === "light" ? "Light Mode" : "Dark Mode"}
                    </Typography>
                    <Button onClick={ttoggleTheme} css={buttonStyle(palette.custom)} variant="contained">Toggle Theme</Button>
                </Box>
            </Box>
        </>
    )
}

export default Page;
