import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Zoom } from 'react-reveal';
import avatar from '../../../assets/img/avatar.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        width: theme.spacing(32),
        height: theme.spacing(32),
        margin: 'auto',
        padding: '10px',
        backgroundImage: ' linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)',
        borderRadius: '50%',
    },
    image: {
        width: '100%',
        height: '100%',
        background: `url(${avatar}) no-repeat top center/cover`,
        borderRadius: '50%',
        margin: 'auto',
    },
}));
function Contact() {
    const classes = useStyles();
    return (
        <section className='contact'>
            <div className='contact--background'>
                <svg
                    preserveAspectRatio='none'
                    viewBox='0 0 1200 120'
                    xmlns='http://www.w3.org/2000/svg'
                    className='contact--background__path'
                >
                    <path d='M1200 90L0 10V0h1200v120z' />
                </svg>
            </div>

            <div className='contact--content container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 text-white mb-sm-4'>
                        <Zoom left cascade>
                            <div className='contact--content__text'>
                                <h1>Reach out to me.</h1>
                                <p>Name : Nguyễn Ngọc Hòa</p>
                                <p>Phone : 035 763 9673</p>
                                <p>Email : ngochoa.bk14@gmail.com</p>
                            </div>
                        </Zoom>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className={classes.root}>
                            <div className={classes.image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
