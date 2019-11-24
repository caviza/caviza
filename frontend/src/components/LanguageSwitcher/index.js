import React from 'react';

import LanguageItem from './LanguageItem';
import languageData from './data';
import CustomScrollbars from 'util/CustomScrollbars';

/**
 * Language switcher presented in the Header bar. It allows to select the Language in which to show the application
 * content.
 *
 * @param switchLanguage {Function} that makes the actual switch whe passed the selected language information.
 * @param handleRequestClose {Function} handles the event of closing the language switch menu.
 * @returns {Object} JSX representation of the Language Switcher.
 */
const LanguageSwitcher = ({switchLanguage, handleRequestClose}) => {
    return (
        <CustomScrollbars className="messages-list language-list scrollbar" style={{height: 77}}>
            <ul className="list-unstyled">
                {languageData.map((language, index) => <LanguageItem key={index} language={language}
                                                                     handleRequestClose={handleRequestClose}
                                                                     switchLanguage={switchLanguage}/>)}
            </ul>
        </CustomScrollbars>
    )
};

export default LanguageSwitcher;
