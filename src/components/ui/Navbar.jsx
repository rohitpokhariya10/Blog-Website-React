import React, { useState } from 'react';
import styles from '../../css/ui/Navbar.module.css';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { remove } from '../../utils/localStorage';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const isEmptyUser = (user) => {
        if (Array.isArray(user)) return user.length === 0;
        if (typeof user === "object" && user !== null) return Object.keys(user).length === 0;
        return true;
    };
    const menuStyle = isEmptyUser(user);
    const [menuOpen, setMenuOpen] = useState(false);
    let short = "";
    // console.log(menuStyle, user)

    const logout = () => {
        remove("logUser");
        setUser([]);
        navigate("/");
    }

    if (!menuStyle && user?.name) {
        let arr = user.name.split(" ");

        for (let i = 0; i < arr.length; i++) {
            short += arr[i][0].toUpperCase();
        }
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <i className={`ri-edit-line ${styles.logo}`}></i>
                    <p className={styles.brandName}>Inkwell</p>
                </div>

                <div className={styles.details}>
                    <button className={styles.themeSwitch} onClick={toggleTheme} aria-label="Toggle theme">
                        {
                            theme ? <i className={`ri-moon-line ${styles.themeBtn}`}></i> : <i className={`ri-sun-line ${styles.themeBtn}`}></i>
                        }
                    </button>

                    <div className={`${styles.hamburger} ${menuStyle ? styles.noUser : styles.user} ${open ? styles.active : ""}`} onClick={() => setOpen(prev => !prev)}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={`${styles.buttons} ${styles.menu} ${menuStyle ? styles.noUser : styles.user} ${open ? styles.active : ""}`} onClick={() => setMenuOpen(prev => !prev)}>
                        {
                            menuStyle ? (
                                <>
                                    <button className={styles.login} onClick={() => navigate("/login")}>Login</button>
                                    <button className={styles.register} onClick={() => navigate("/register")}>Sign up</button>
                                </>
                            ) : (
                                <>
                                    <div className={styles.nameFirst}> {short.length <= 1 ? `${short} ` : short} </div>
                                    <div className={styles.Ful}> {user.name} </div>
                                    <div className={`${styles.minMenu} ${menuOpen ? styles.active : ""}`}>
                                        <div className={styles.userDtl}>
                                            <p className={styles.usrName}> {user?.name?.length > 11 ? `${user?.name?.slice(0, 8)}...` : user.name} </p>
                                            <p className={styles.usrEmail}> {user?.email?.length > 11 ? `${user?.email?.slice(0, 8)}...` : user.email} </p>
                                            <p className={styles.usrType}> {user.type} </p>
                                        </div>
                                        <div className={styles.btnss}>
                                            <button className={styles.home} onClick={() => navigate("/")}> <i className="ri-home-4-line"></i> Home </button>
                                            <button className={styles.dash} onClick={() => navigate("/dashboard")}> <i className="ri-dashboard-line"></i> Dashboard </button>
                                            <button className={styles.logOut} onClick={logout}> <i className="ri-logout-box-r-line"></i> Logout </button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
