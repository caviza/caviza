import React from 'react';

import IntlMessages from 'util/IntlMessages';

/**
 * Represents the Footer component, the one containing the copyright.
 * @returns {Object} being the JSX representation of the Footer component
 */
const Footer = () =>
    <footer className="app-footer">
        <span className="d-inline-block">
            Copyright Caviza &copy; 2019 - <IntlMessages id="footer.all-rights-reserved"/>
        </span>
    </footer>

export default Footer;
