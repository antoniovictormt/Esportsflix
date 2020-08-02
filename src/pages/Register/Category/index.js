import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL)
        .then(async (serverResponse) => {
          if (serverResponse.ok) {
            const response = await serverResponse.json();
            setCategory(response);
            return;
          }
          throw new Error('Unable to load data');
        });
    }
  });

  return (
    <PageDefault>
      <h1>Registration Categories: {values.title}</h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategory([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Name of the Category"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="Color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Register
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((categories) => (
          <li key={`${categories.title}`}>
            {categories.title}
          </li>
        ))}
      </ul>
      <Link to="/register/video">Register Video</Link>
    </PageDefault>
  );
}

export default RegisterCategory;
