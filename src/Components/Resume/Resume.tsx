/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Education from './Sections/Education';
import Layout from '../../Layout';
import Skills from './Sections/Skills';
import Work from './Sections/Work';
import './css/Resume.css'

const Resume = (props) => {

    switch (props.location.state.section) {
        case 'education' : {
            return (
                <Layout>
                    <div className="Resume">
                        <header className="Resume-header">
                            <div className="Section-title"><h1>Education</h1></div>
                        </header>
                        <div className="Resume-body">
                            <Education/>
                        </div>
                    </div>
                </Layout>
            );
        }
        case 'skills' : {
            return (
                <Layout>
                    <div className="Resume">
                        <header className="Resume-header">
                        </header>
                        <div className="Section-title"><h1>Skills & Technologies</h1></div>
                        <div className="Resume-body">
                            <Skills/>
                        </div>
                    </div>
                </Layout>
            );
        }
        default : {
            return (
                <Layout>
                    <div className="Resume">
                        <div className="Section-title"><h1>Work Experience</h1></div>
                        <div className="Resume-body">
                            <Work/>
                        </div>
                    </div>
                </Layout>
            );
        }
    }
};

export default Resume;
