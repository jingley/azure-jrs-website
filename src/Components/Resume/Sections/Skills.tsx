/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';

/**
 * Skills component in resume
 *
 * @constructor
 */
const Skills = () => {
    /**
     * string for communication description
     */
    const communication = 'Communication is something we all do every day, but my experience as a captain ' +
        'for the Men\'s Club frisbee team has fine-tuned my ' +
        'ability to communicate as well as to listen. I am constantly communicating with the team via emails, ' +
        'providing feedback, explaining drills at practice, discussing strategy with fellow leadership, and more.';

    return (
      <div className="Skills">
          <h2 className="Resume-title" id="coding" >Coding Languages & Technologies</h2>
          <div className="Resume-bullets">
              <ul className="Coding-skills">
                  <li>Java</li>
                  <li><span className="Standout-text">JavaScript</span></li>
                  <li><span className="Standout-text">React</span></li>
                  <li>Redux</li>
                  <li>RxJs</li>
                  <li>Git</li>
                  <li>SQL</li>
              </ul>
          </div>
          <h2 className="Resume-title" id="communication" >Communication</h2>
          <div className="Resume-bullets">
              <ul>
                  <li>{ communication }</li>
              </ul>
          </div>
      </div>
    );
};

export default  Skills;