import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjThree } from './Data';

function SignUp() {
    return (
        <>
            <HeroSection {...homeObjThree} />
        </>
    );
}

export default SignUp;
