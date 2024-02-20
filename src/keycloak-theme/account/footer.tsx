// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{

            color: '#808080',
            padding: '10px',
            textAlign: 'center',
            position: 'fixed',
            paddingRight: '30px',
            width: '100%',
            bottom: '0',
            fontSize: '12px',
        }}>
            <p>Copyright &copy; 2024. All rights reserved. Powered by Keycloak</p>
        </footer>
    );
}

export default Footer;
