import React from 'react';
import Typography from "@mui/material/Typography";

interface ITitleProps {
    title: string;
    className: string;
}

const commonStyles = 'font-RoslindaleText text-white font-bold uppercase leading-9 text-[32px]';


function index(props: ITitleProps) {
    const { title, className } = props;
    return (
        <Typography className={`${commonStyles} ${className}`}>
            {title}
        </Typography>
    )
}

export default index