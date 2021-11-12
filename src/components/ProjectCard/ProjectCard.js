import React, { memo } from 'react';
import ChipArray from '../Chip/ChipArray';

function ProjectCard({ cardData }) {
    return (
        <div className='card mb-3'>
            <div
                id={cardData.idCard}
                style={{
                    width: '100%',
                    height: 250,
                    backgroundColor: cardData.bgcolor,
                }}
            />
            <div
                className='card-body p-3 d-flex flex-column justify-content-between'
                style={{ minHeight: '330px' }}
            >
                <div className='card-info'>
                    <h5 className='card-title'>{cardData.title}</h5>
                    <p className='card-text'>{cardData.description}</p>
                </div>
                <ChipArray chipData={cardData.chipData} />
                <div>
                    {cardData.demo ? (
                        <a
                            href={cardData.demo}
                            target='_blank'
                            className='btn btn-primary mr-3'
                        >
                            Live Demo
                        </a>
                    ) : (
                        <a href='#' className='btn btn-primary mr-3 disabled'>
                            Live Demo
                        </a>
                    )}
                    <a
                        href={cardData.github}
                        target='_blank'
                        className='btn btn-primary'
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default memo(ProjectCard);
