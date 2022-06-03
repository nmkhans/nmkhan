import { useRouter } from 'next/router';
import styles from '../Header/Header.module.css';

const ActiveLink = ({children, href}) => {
    const router = useRouter();

    const handleClick = (event) => {
        event.preventDefault();
        router.push(href);
    }

    return (
        <a href={href} className={(router.asPath === href) ? `${styles.active}` : ''} onClick={handleClick}>
            {children}
        </a>
    )
}

export default ActiveLink;