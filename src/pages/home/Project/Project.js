import React, { memo, useEffect } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import movie from '../../../Animation/movie-theatre.json';
import landing from '../../../Animation/landing-page.json';
import backend from '../../../Animation/database.json';
import chatapp from '../../../Animation/chat.json';
import { Fade } from 'react-reveal';

import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import Title from '../../../components/Title/Title';
const movieData = [
    {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
        skillName: 'NPM',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
        skillName: 'ReactJs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
    },

    {
        skillName: 'Git',
        fontAwesomeClassname: 'bi:git',
    },
    {
        skillName: 'MaterialUI',
        fontAwesomeClassname: 'logos:material-ui',
    },
];
const landingPage = [
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
        skillName: 'Bootstrap',
        fontAwesomeClassname: 'logos:bootstrap',
    },
];
const backendData = [
    {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
    },
    {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
    },
    {
        skillName: 'Sequelize',
        fontAwesomeClassname: 'logos:sequelize',
    },
    {
        skillName: 'MySQL',
        fontAwesomeClassname: 'vscode-icons:file-type-mysql',
    },
];
const chatappData = [
    {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
    },
    {
        skillName: 'Socket.io',
        fontAwesomeClassname: 'cib:socket-io',
    },
];
const cardData = [
    {
        idCard: 'movie',
        title: 'Booking Movie Ticket',
        chipData: movieData,
        description: `Features include: Home Page, Booking, Sign In, Sign Up
        , Dashboard Page to manage User, Movie, Cinema System, Theatre, Showtime `,
        bgcolor: '#3490dc',
        demo: 'https://booking-movie-project-ten.vercel.app/',
        github: 'https://github.com/hnn080196/booking-movie-project',
    },
    {
        idCard: 'landing',
        title: 'Landing Page',
        chipData: landingPage,
        description: `include :Dark mode and responsive suitable for many screen types.`,
        bgcolor: '#B2EBF2',
        demo: 'https://hnn080196.github.io/BCS_Nhom_de5/',
        github: 'https://github.com/hnn080196/BCS_Nhom_de5',
    },
    {
        idCard: 'backend',
        title: 'Booking Movie API',
        chipData: backendData,
        description: `CRUD User, Movie, Cinema, Theater, Seat, Showtime, Ticket `,
        bgcolor: '#B39DDB',
        github: 'https://github.com/hnn080196/nodejs-booking-movie-API',
    },
    {
        idCard: 'chatapp',
        title: 'Chat App',
        chipData: chatappData,
        description: `Realtime Chat App`,
        bgcolor: '#F8BBD0',
        github: 'https://github.com/hnn080196/Chatapp-basic',
    },
];
function Project() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#movie'),
            animationData: movie,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.querySelector('#landing'),
            animationData: landing,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.querySelector('#backend'),
            animationData: backend,
            loop: true,
            autoplay: true,
        });
        lottie.loadAnimation({
            container: document.querySelector('#chatapp'),
            animationData: chatapp,
            loop: true,
            autoplay: true,
        });
    }, []);
    const renderCard = () => {
        return cardData.map((data, index) => (
            <div className='col-sm-12 col-md-6'>
                <ProjectCard cardData={data} key={index} />
            </div>
        ));
    };
    return (
        <Fade top duration={1000} distance='40px'>
            <section id='project' className='project mt-5'>
                <div className='container'>
                    <div className='row'>
                        <Title title='Project' color='#1179ef' />
                        {renderCard()}
                    </div>
                </div>
            </section>
        </Fade>
    );
}

export default memo(Project);
