import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>

        <nav>
          <ul>
            <li className="first">
              <div><a href="https://www.linkedin.com/in/davis-lee-26637914a/">LinkedIn</a></div>
            </li>
            <li className="last">
              <div><a href="https://github.com/davislee7">GitHub</a></div>
            </li>
          </ul>
        </nav>

      </footer>
    );
  }
}

export default Footer;
