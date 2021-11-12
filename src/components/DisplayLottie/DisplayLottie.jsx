import React from 'react';
import Lottie from 'react-lottie';

export default function DisplayLottie({ animationPath, height, width }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <div>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    );
}
