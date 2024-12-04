export interface FormField {
  id: string;
  type: 'text' | 'email' | 'number' | 'textarea' | 'select';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}

export interface FormValues {
  [key: string]: string;
}