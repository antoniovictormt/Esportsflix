import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange, choices,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasChoices = Boolean(choices.length);
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasChoices ? 'off' : 'on'}
          list={hasChoices ? `choiceFor_${fieldId}` : undefined}
          required
        />
        <Label.Text>
          {label}:
        </Label.Text>
        {
          hasChoices && (
            <datalist id={`choiceFor_${fieldId}`}>
              {
                choices.map((choice) => (
                  <option value={choice} key={`choiceFor_${fieldId}_option${choice}`}>
                    {choice}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  choices: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  choices: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
