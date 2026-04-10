import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import Header from '../components/dashboard/Header';
import Count from '../components/dashboard/Count';
import Articles from '../components/dashboard/Articles';

const Dashboard = () => {

    const navigate = useNavigate();
    const { users, setUser, user, setUsers } = useAuth();


    useEffect(() => {
        if (JSON.stringify(user) == "[]") navigate("/");
    }, []);

    return (
        <section className='page'>
            <Header />
            <Count />
            <Articles />
        </section>
    )
}

export default Dashboard
