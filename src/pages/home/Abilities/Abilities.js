import React, { memo, useEffect } from 'react';
import { Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import lottie from 'lottie-web/build/player/lottie_light';
import coding from '../../../Animation/dev.json';
import Title from '../../../components/Title/Title';
import { Fade } from 'react-reveal';
const softwareSkills = [
    {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
    },
    {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
    },
    {
        skillName: 'ReactJs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
        skillName: 'NPM',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    {
        skillName: 'Git',
        fontAwesomeClassname: 'bi:git',
    },
    {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
    },
    {
        skillName: 'Sequelize',
        fontAwesomeClassname: 'logos:sequelize',
    },
    {
        skillName: 'Socket.io',
        fontAwesomeClassname: 'cib:socket-io',
    },
];
const useStyles = makeStyles({
    iconRoot: {
        fontSize: '30px',
        padding: '20px',
        backgroundColor: '#fff',
        margin: '0 10px 50px',
        boxShadow:
            '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    },
});
function Abilities() {
    const classes = useStyles();

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#coding-image2'),
            animationData: coding,
            loop: true,
            autoplay: true,
        });
    }, []);
    const renderIcon = () => {
        return softwareSkills.map((skill, index) => (
            <Tooltip
                title={skill.skillName}
                key={index}
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 300 }}
                arrow
                placement='top'
            >
                <IconButton
                    aria-label={skill.skillName}
                    classes={{ root: classes.iconRoot }}
                >
                    <span
                        class='iconify'
                        data-icon={skill.fontAwesomeClassname}
                        data-inline='false'
                    />
                </IconButton>
            </Tooltip>
        ));
    };
    return (
        <Fade bottom duration={1000} distance='40px'>
            <section className='ability' id='ability'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <Title title='What I Do' color='#1179ef' />
                        <div className='col-sm-12 col-md-6 mb-sm-3'>
                            <div
                                id='coding-image2'
                                className='ability--image'
                            />
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <Fade left cascade duration={1000}>
                                <div className='d-flex justify-content-center flex-wrap '>
                                    {renderIcon()}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}

export default memo(Abilities);
