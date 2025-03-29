'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם';
    }
    
    // Phone validation - Israeli phone number format
    const phoneRegex = /^(0[23489]\d{7}|05\d{8})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'נא להזין הודעה';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      
      setSubmitSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    } catch (error) {
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 relative overflow-hidden" dir="rtl">
      {/* Glassmorphism container */}
      <div className="relative backdrop-blur-md bg-gradient-to-br from-[#feffd6]/80 to-[#feffd6]/60 rounded-xl p-8 shadow-lg border border-white/20">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fcff2e]/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#fcff2e]/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 tracking-wide">צור קשר</h2>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            יש לכם שאלות על השירותים שלנו במכון כושר ביתא? מעוניינים לשמוע עוד על התוכניות האישיות? 
            מלאו את הטופס ונחזור אליכם בהקדם!
          </p>
          
          {submitSuccess === true && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in-down" role="alert">
              <strong className="font-bold">תודה רבה! </strong>
              <span className="block sm:inline">פנייתך התקבלה בהצלחה, ניצור איתך קשר בהקדם.</span>
            </div>
          )}
          
          {submitSuccess === false && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 animate-fade-in-down" role="alert">
              <strong className="font-bold">אופס! </strong>
              <span className="block sm:inline">אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר.</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition-all duration-300 ease-in-out`}
                placeholder="הכנס את שמך המלא"
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition-all duration-300 ease-in-out`}
                placeholder="הכנס את מספר הטלפון שלך"
                dir="ltr"
              />
              {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition-all duration-300 ease-in-out`}
                placeholder="הכנס את כתובת האימייל שלך"
                dir="ltr"
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#fcff2e] focus:border-transparent transition-all duration-300 ease-in-out`}
                placeholder="כתוב את הודעתך כאן..."
              />
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#fcff2e] hover:bg-[#e4e729] text-gray-800 font-bold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#fcff2e]/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    שולח...
                  </span>
                ) : (
                  'שלח הודעה'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;