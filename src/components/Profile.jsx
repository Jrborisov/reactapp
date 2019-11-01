import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>

            <div className={'profile-logo'}>
                <img src={"https://www.mailmunch.com/blog/wp-content/uploads/2017/03/content-distribution-strategies-2017.jpg"}/>
            </div>

            <div className={'profile-content'}>
                ava + descriptions
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>

        </div>
    );
};

export default Profile;