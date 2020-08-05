import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { ButtonRegister } from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRespository from '../../../repositories/categories';

function RegisterCategory() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    id: '',
    category: '',
    title: '',
    color: '',
    extra_link: {
      text: '',
      url: '',
    },
  });

  useEffect(() => {
    categoriesRespository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Registration Categories</h1>

      <form onSubmit={(eventInfo) => {
        eventInfo.preventDefault();

        // eslint-disable-next-line no-alert
        alert('Sucessful Registrarion');
        categoriesRespository.create({
          id: values.id,
          title: values.title,
          color: values.color,
          extra_link: {
            text: values.text,
            url: values.url,
          },
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Title of the Category"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          choices={categoryTitles}
        />

        <FormField
          label="Color"
          type="Color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="URL of the Category"
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <ButtonRegister>Register Category</ButtonRegister>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

    </PageDefault>
  );
}

export default RegisterCategory;
