import React from 'react'
import Form from '../components/newDashboard/Form';
import { useParams } from 'react-router';
import { useArticles } from '../context/ArticleContext';
import { useAuth } from '../context/AuthContext';

const NewDashboard = () => {

  const { id } = useParams();
  const { articles } = useArticles();
  const { user } = useAuth();
  const article = articles.find((elem) => elem.id == id && elem.email == user?.email);

  return (
    <div className='page'>
      <Form article={article} />
    </div>
  )
}

export default NewDashboard
