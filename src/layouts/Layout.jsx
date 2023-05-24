import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="h-screen bg-gray-900 py-10">
            {children}
        </div>
    );
};

export default Layout;