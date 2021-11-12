import React, { memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import lottie from 'lottie-web/build/player/lottie_light';
import school from '../../../Animation/back-to-school.json';

import Title from '../../../components/Title/Title';
import { Fade } from 'react-reveal';
const useStyles = makeStyles((theme) => ({
    timelineRoot: {
        padding: '10px 0',
        justifyContent: 'space-between',
    },
    paper: {
        padding: '6px 16px',
        minHeight: '100px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.primary.main,
    },
    timeline: {
        '&.MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
        },
    },
    iconButton: {
        padding: '4px',
    },
}));
const educationInfos = [
    {
        name: 'High School',
        time: '2011-2014',
        description: 'Duc Pho 1 High School',
        icon: 'emojione:school',
        bgcolor: '#283593',
    },
    {
        name: 'University',
        time: '2014-2018',
        description:
            'The Ho Chi Minh City University of Technology- Specialization: Mechanical Engineer ',
        icon: 'maki:college',
        bgcolor: '#311B92',
    },
    {
        name: 'Web Programmer',
        time: '04/2021-11/2021',
        description: 'Cybersoft Center',
        icon: 'whh:html',
        bgcolor: '#311B92',
    },
];
function Education() {
    const classes = useStyles();
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#school'),
            animationData: school,
            loop: true,
            autoplay: true,
        });
    }, []);
    const renderTimelineItem = () => {
        return educationInfos.map((info, index) => (
            <TimelineItem classes={{ root: classes.timeline }} key={index}>
                <TimelineSeparator>
                    <TimelineDot style={{ backgroundColor: info.bgcolor }}>
                        <IconButton
                            classes={{ root: classes.iconButton }}
                            style={{ color: '#fff' }}
                            size='large'
                        >
                            <span
                                class='iconify'
                                data-icon={info.icon}
                                data-inline='false'
                            />
                        </IconButton>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant='h6' style={{ fontWeight: 600 }}>
                            {info.name} {info.time}
                        </Typography>
                        <Typography>{info.description}</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        ));
    };

    return (
        <Fade left duration={500} distance='40px'>
            <section id='education' className='education mt-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <Title title='Education' color='#1179ef' />
                        <div className='col-sm-12 col-md-6'>
                            <Fade left cascade>
                                <Timeline
                                    align='left'
                                    classes={{ root: classes.timelineRoot }}
                                >
                                    {renderTimelineItem()}
                                </Timeline>
                            </Fade>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <Fade left>
                                <div id='school' style={{ height: '300px' }} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}

export default memo(Education);
