import React, { useState } from 'react';
import { FormField as FormFieldType, FormValues } from '../types/form';
import { FormField } from './FormField';

interface DynamicFormProps {
  fields: FormFieldType[];
  onSubmit: (values: FormValues) => void;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const [values, setValues] = useState<FormValues>({});

  const handleFieldChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Dynamic Form</h2>
      
      {fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={values[field.id] || ''}
          onChange={handleFieldChange}
        />
      ))}
      
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};