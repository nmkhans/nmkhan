import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ActiveLink from '../../components/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className="inner__header container mx-auto">
                <nav className={styles.header__content}>
                    <div className={styles.header__logo}>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/assets/logo.png"
                                    height="70"
                                    width="220"
                                    alt="Logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.header__nav}>
                        <div className={styles.desktop__menu}>
                            <ul>
                                <li>
                                    <ActiveLink href={'/'}>Home</ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href={'/my-projects'}>My Projects</ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href={'/about-me'}>About Me</ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href={'/blog'}>Blog</ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink href={'/contact-me'}>Contact Me</ActiveLink>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.desktop__mobile}></div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;