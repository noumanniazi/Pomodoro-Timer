import React from 'react';

import './Settings.scss';

type props  = {
    data: string;
}
const Settings: React.FC<props> = (props) => {
    const { data } = props;

    return (
        <div className="about-us">
            {data}
        </div>
    );
}

export default Settings;