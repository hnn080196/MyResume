import { Chip, Paper, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));
function ChipArray(props) {
    const classes = useStyles();
    const { chipData } = props;
    return (
        <Box component='ul' className={classes.root}>
            {chipData?.map((data, index) => {
                return (
                    <li key={index}>
                        <Chip
                            avatar={
                                <Avatar>
                                    <span
                                        class='iconify'
                                        data-icon={data.fontAwesomeClassname}
                                        data-inline='false'
                                    />
                                </Avatar>
                            }
                            label={data.skillName}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Box>
    );
}

export default memo(ChipArray);
