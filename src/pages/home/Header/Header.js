import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
const useStyles = makeStyles((theme) => ({
    tab: {
        '&.Mui-selected': {
            opacity: 1,
        },
        '&:hover': {
            textDecoration: 'none',
            color: '#fff',
            opacity: 1,
        },
        color: '#fff',
        opacity: 0.7,
        padding: 0,
        minWidth: '120px',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: '14px',
    },
}));

function Header() {
    const classes = useStyles();
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);
    return (
        <section
            className={classNames('header', {
                'header--color': scrollPos > 30,
            })}
        >
            <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-dark'>
                    <h2 className='navbar-brand' href='#3'>
                        Ngoc Hoa
                    </h2>
                </nav>
            </div>
        </section>
    );
}
export default memo(Header);
