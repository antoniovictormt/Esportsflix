import { useState } from 'react';

function useForm(initialValues) {
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

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
    setValue,
  };
}

export default useForm;
