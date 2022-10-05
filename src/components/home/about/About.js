import React from 'react';

import profilePic from "../../../assets/images/profile.jpg"

import "../../_common/common.css"
import "./about.css"

import ReactGA from 'react-ga';

const About = () => {

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on CV'
        });
    };

    return (
        <div className="home-section container-about">
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm <span className="about-name">Jessica Wong</span></span>
                <br/><span className="about-text-subtitle">I am a student at  National Tsing Hua University, Taiwan.</span>
                <br/><span> Student Exchange Programme (SEP) of the National University of Singapore(NUS)</span>
                <br/><br/>My major is mathematics, I like to build things with code
                <br/>Some of my interests are: AI, applied mathematics, finance, BI.
                <br/><br/>If you want to know more: <a onClick={onLinkClick} href="https://docs.google.com/document/d/1fxHDVH5iPPs1EgA7Ch4NHau6c01TJJZW/edit?usp=sharing&ouid=114011592345602819714&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><span className="about-cv">HERE is my CV.</span></a>
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>
        </div>
    );
};

export default About;
