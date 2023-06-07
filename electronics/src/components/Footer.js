import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h4>Electronics</h4>
            <ul className="list-unstyled">
              <li>356-230-670</li>
              <li>Kenya, Nairobi</li>
              <li>South C, Bellaview</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>Dark Memes</li>
              <li>Other Stuff</li>
              <li>Good Stuff</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>Dark Memes</li>
              <li>Other Stuff</li>
              <li>Good Stuff</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm">
            <p>
              &copy;{new Date().getFullYear()} ELECTRONICS INC | All rights reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;