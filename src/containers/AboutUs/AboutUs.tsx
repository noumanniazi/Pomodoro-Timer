import React from 'react';

import './AboutUs.scss';

type props  = {
    data: string;
}
const AboutUs: React.FC<props> = (props) => {
    const { data } = props;

    return (
        <div className="about-us">
            {data}
        </div>
    );
}

export default AboutUs;