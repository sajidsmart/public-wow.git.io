import styles from '@/styles/Home.module.css';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";
import Title from 'components/title';

interface IImageProps {
    src: string;
    alt: string;
    className: string;
    imgClassName?: string;
}

export default function Image(props: IImageProps) {
    const { src, alt, className, imgClassName } = props;

    return (
        <Box className={className}>
            <img
                src={src}
                className={imgClassName}
                alt={alt}
            />
        </Box>
    )
}