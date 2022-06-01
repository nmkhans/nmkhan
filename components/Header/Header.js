import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className="Header">
            <div className="inner__header container mx-auto">
                <div className={styles.header__content}>
                    <div className={styles.header__logo}>
                        <Link href="/"><a>Moin Khan</a></Link>
                    </div>
                    <nav className={styles.header__nav}>
                        <div className="desktop__menu">
                            
                        </div>
                        <div className="mobile__menu"></div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;