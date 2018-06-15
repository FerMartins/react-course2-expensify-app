import {Link} from 'react-router-dom';
import React from 'react';

const NotFoundComponent = () => (
    <div>
        404 - <Link to="/"> Go Home</Link>
    </div>
);

export default NotFoundComponent;