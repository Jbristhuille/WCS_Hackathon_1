/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 16:17:41
 * @ Description: Configuration context
 */

/* SUMMARY
    * React
*/

/* React */
import React, { createContext, useState, useEffect } from 'react';
/***/

interface Props {
    children?: any
};

const ThemeContext = createContext({});

const ThemeContextProvider = (props: Props) => {
    const [config, setConfig] = useState({
        theme: 'light',
        start: 'PAR'
    });

    const updateConfig = (newConfig: any) => {
        localStorage.setItem('config', JSON.stringify(newConfig));
        setConfig(newConfig);
    };
    
    useEffect(() => {
        let saved = localStorage.getItem('config');
        if (saved) setConfig(JSON.parse(saved));
    }, []);

    useEffect(() => {
        document.body.classList.remove('dark');
        if (config.theme === 'dark') document.body.classList.add('dark');
    }, [config]);

    return (
        <ThemeContext.Provider value={{config, updateConfig}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { 
    ThemeContext,
    ThemeContextProvider
};