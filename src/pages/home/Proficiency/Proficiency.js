import React, { memo, useEffect } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import build from '../../../Animation/build.json';
import Title from '../../../components/Title/Title';
import { Fade } from 'react-reveal';
const progressInfo = [
    { skill: 'Frontend/ Design', percent: '80' },
    { skill: 'Backend', percent: '70' },
    { skill: 'Programing', percent: '70' },
];
function Proficiency() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#coding-image3'),
            animationData: build,
            loop: true,
            autoplay: true,
        });
    }, []);
    const renderProgressBar = () => {
        return progressInfo.map((progress, index) => (
            <div
                className='progress-info d-flex flex-column justify-content-center mb-3'
                key={index}
            >
                <div
                    className='progress-label align-self-start'
                    style={{ height: '25px' }}
                >
                    <h6>{progress.skill}</h6>
                </div>
                <div
                    className='progress-percentage align-self-end'
                    style={{ height: '20px' }}
                >
                    <span style={{ fontWeight: 600 }}>{progress.percent}%</span>
                </div>
                <div
                    className='progress'
                    style={{ height: '10px', borderRadius: '5px' }}
                >
                    <div
                        className='progress-bar progress-bar-striped progress-bar-animated'
                        role='progressbar'
                        style={{
                            width: `${progress.percent}%`,
                            backgroundColor: '#FB8C00',
                        }}
                        aria-valuenow={progress.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                </div>
            </div>
        ));
    };
    return (
        <Fade top duration={500} distance='40px'>
            <section className='proficiency ' id='proficiency'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <Title title='Proficiency' color='#fff' />
                        <div className='col-sm-12 col-md-6 proficiency--progress'>
                            <Fade top>{renderProgressBar()}</Fade>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <Fade top duration={500}>
                                <div id='coding-image3' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}

export default memo(Proficiency);
