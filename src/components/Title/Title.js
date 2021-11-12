import React from 'react';
import StarIcon from '@material-ui/icons/Star';
function Title({ title, color }) {
    const renderRightStar = () => {
        const array = Array.from(new Array(3));
        return array.map((index) => (
            <StarIcon
                style={{ fontSize: '30px', marginRight: '8px' }}
                key={index}
            />
        ));
    };
    const renderLeftStar = () => {
        const array = Array.from(new Array(3));
        return array.map((index) => (
            <StarIcon
                style={{ fontSize: '30px', marginLeft: '8px' }}
                key={index}
            />
        ));
    };
    return (
        <div
            className='col-12 text-center mb-5 d-flex justify-content-center align-items-center title'
            style={{ color: color }}
        >
            {renderRightStar()}
            <h1>{title}</h1>
            {renderLeftStar()}
        </div>
    );
}

export default Title;
