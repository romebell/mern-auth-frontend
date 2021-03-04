import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
//    const {} = props;

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            {/* { Add code here } */}
        </div>
    );

}

export default Profile;