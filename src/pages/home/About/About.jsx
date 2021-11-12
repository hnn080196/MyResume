import React, { useEffect, memo } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import web from '../../../Animation/web.json';
import { Button, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
function About() {
    const classes = useStyles();
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#coding-image'),
            animationData: web,
            loop: true,
            autoplay: true,
        });
    }, []);
    return (
        <section className='greeting' id='greeting'>
            <div className='greeting--background'>
                <svg
                    preserveAspectRatio='none'
                    viewBox='0 0 1200 120'
                    xmlns='http://www.w3.org/2000/svg'
                    className='greeting--background__svg'
                >
                    <path d='M1200 120L0 16.48V0h1200v120z' />
                </svg>
            </div>
            <div className='greeting--content container'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <div className='greeting--content__text'>
                            <h3>Hello, I'm Hoa</h3>
                            <p>
                                A fresher Full Stack Web Developer having an
                                experience of building Web application with
                                Javascript/ Reactjs/ Nodejs and some other
                                libraries and frameworks.{' '}
                            </p>
                        </div>
                        <div className='greeting--social'>
                            <div className={classes.root}>
                                <IconButton
                                    aria-label='twitter'
                                    style={{
                                        color: '#1d9bf0',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton
                                    aria-label='facebook'
                                    style={{
                                        color: '#01579B',
                                        backgroundColor: '#fff',
                                    }}
                                    component='a'
                                    href='https://www.facebook.com/profile.php?id=100009215581445'
                                    target='_blank'
                                >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton
                                    style={{
                                        color: '#E91E63',
                                        backgroundColor: '#fff',
                                    }}
                                    aria-label='instagram'
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton
                                    style={{
                                        color: '#000',
                                        backgroundColor: '#fff',
                                    }}
                                    aria-label='github'
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    aria-label='linkedin'
                                    style={{
                                        color: '#01579B',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </div>
                            <div
                                style={{ marginTop: '5px', marginLeft: '5px' }}
                            >
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    startIcon={<CloudDownloadIcon />}
                                >
                                    See My Resume.
                                </Button>
                            </div>
                        </div>
                        <div className='greeting--content__contact'></div>
                    </div>
                    <div className='col-sm-12 col-lg-6 text-center'>
                        <div id='coding-image' className='greeting--image' />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default memo(About);
