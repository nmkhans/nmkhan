import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const [mobileMenu, setMobilMenu] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentLocation = window.pageYOffset;
            if(currentLocation > 200) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    return (
        <div className={`${styles.Header} ${sticky ? styles.sticky : ""}`}>
            <div className="inner__header container">
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
                        <div className={styles.mobile__menu}>
                            <div onClick={() => setMobilMenu(!mobileMenu)} className={styles.mobile__icon}>
                                {
                                    mobileMenu ? <FaTimes /> : <FaBars />
                                }
                            </div>
                            {
                                mobileMenu && (
                                    <ul>
                                        <li>
                                            <ActiveLink href={'/'}>Home Mobile</ActiveLink>
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
                                )
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;