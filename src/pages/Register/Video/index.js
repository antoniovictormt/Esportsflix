import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { ButtonRegister } from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRespository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    id: '',
    category: '',
    title: '',
    url: '',
    description: '',
  });

  useEffect(() => {
    categoriesRespository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  // eslint-disable-next-line no-console
  // console.log(categoryTitles);

  return (
    <PageDefault>
      <h1>Registration Video</h1>

      <form onSubmit={(eventInfo) => {
        eventInfo.preventDefault();
        const chooseCategory = categories.find((category) => category.title === values.category);

        // console.log('chooseCategory', chooseCategory);
        // eslint-disable-next-line no-alert
        alert('Sucessful Registrarion');
        videosRepository.create({
          title: values.title,
          url: values.url,
          description: values.description,
          categoryId: chooseCategory.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Category"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          choices={categoryTitles}
        />

        <FormField
          label="Name of the Video"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL of the video"
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <div>
          <ButtonRegister className="register">Register Video</ButtonRegister>
          <Link to="/register/category">
            <ButtonRegister className="register">Register New Category</ButtonRegister>
          </Link>
        </div>
      </form>

    </PageDefault>
  );
}

export default RegisterVideo;
