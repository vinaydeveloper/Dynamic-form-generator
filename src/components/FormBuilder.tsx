import React, { useState } from 'react';
import { PlusCircle, Save } from 'lucide-react';
import { FormField as FormFieldType } from '../types/form';

interface FormBuilderProps {
  onSave: (fields: FormFieldType[]) => void;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ onSave }) => {
  const [fields, setFields] = useState<FormFieldType[]>([]);

  const addField = () => {
    const newField: FormFieldType = {
      id: `field_${Date.now()}`,
      type: 'text',
      label: '',
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (index: number, updates: Partial<FormFieldType>) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, ...updates } : field
    );
    setFields(updatedFields);
  };

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSave(fields);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Form Builder</h2>
      
      {fields.map((field, index) => (
        <div key={field.id} className="mb-6 p-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field Label
              </label>
              <input
                type="text"
                value={field.label}
                onChange={(e) => updateField(index, { label: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter field label"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field Type
              </label>
              <select
                value={field.type}
                onChange={(e) => updateField(index, { type: e.target.value as FormFieldType['type'] })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="textarea">Textarea</option>
                <option value="select">Select</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => updateField(index, { required: e.target.checked })}
                className="mr-2"
              />
              Required field
            </label>
            
            <button
              onClick={() => removeField(index)}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      
      <div className="flex justify-between mt-6">
        <button
          onClick={addField}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Field
        </button>
        
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Form
        </button>
      </div>
    </div>
  );
};