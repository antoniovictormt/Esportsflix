import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) { // key: name, description, color
    setValues({
      ...values,
      [key]: value, // name: 'value
    });
  }

  function handleChange(eventInfo) {
    const { value, name } = eventInfo.target;
    setValue(
      name,
      value,
    );
  }

  return (
    <PageDefault>
      <h1>Registration Categories: {values.name}</h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategory([
          ...categories,
          values,
        ]);

        setValues(initialValues);
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

      <ul>
        {categories.map((categories, indice) => (
          <li key={`${categories}${indice}`}>
            {categories.name}
          </li>
        ))}
      </ul>
      <Link to="/register/video">Register Video</Link>
    </PageDefault>
  );
}

export default RegisterCategory;
