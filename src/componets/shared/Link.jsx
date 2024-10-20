import React from 'react';

const Link = ({href}) => {
    return (
        <a href={href.link}>{href.name}</a>
    );
};

export default Link;