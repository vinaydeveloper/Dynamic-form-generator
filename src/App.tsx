import React, { useState } from 'react';
import { FormBuilder } from './components/FormBuilder';
import { DynamicForm } from './components/DynamicForm';
import { FormField, FormValues } from './types/form';

function App() {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleSaveForm = (fields: FormField[]) => {
    setFormFields(fields);
    setShowPreview(true);
  };

  const handleFormSubmit = (values: FormValues) => {
    console.log('Form submitted with values:', values);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Dynamic Form Generator
        </h1>
        
        <div className="space-y-8">
          <FormBuilder onSave={handleSaveForm} />
          
          {showPreview && formFields.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Form Preview
              </h2>
              <DynamicForm
                fields={formFields}
                onSubmit={handleFormSubmit}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;