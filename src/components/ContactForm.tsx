'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const alertVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" dir="rtl">
      {/* Background with texture and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary/5 -z-10"></div>
      <div className="absolute inset-0 opacity-5 -z-10 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170')] bg-fixed"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-40 w-72 h-72 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">צור</span> קשר
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            יש לכם שאלות על השירותים שלנו במכון כושר ביתא? מעוניינים לשמוע עוד על התוכניות האישיות? 
            מלאו את הטופס ונחזור אליכם בהקדם!
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-3xl mx-auto relative"
        >
          {/* Glassmorphism container */}
          <div className="relative backdrop-blur-md bg-white/70 rounded-3xl p-10 shadow-xl border border-white/50">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {submitSuccess === true && (
                <motion.div 
                  variants={alertVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-green-50 border-l-4 border-green-500 text-green-700 p-5 rounded-xl mb-8 shadow-md"
                  role="alert"
                >
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="font-bold">תודה רבה!</p>
                      <p>פנייתך התקבלה בהצלחה, ניצור איתך קשר בהקדם.</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {submitSuccess === false && (
                <motion.div 
                  variants={alertVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-red-50 border-l-4 border-red-500 text-red-700 p-5 rounded-xl mb-8 shadow-md"
                  role="alert"
                >
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="font-bold">אופס!</p>
                      <p>אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר.</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="form-group">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out shadow-sm`}
                    placeholder="הכנס את שמך המלא"
                  />
                  {errors.name && <p className="mt-2 text-red-500 text-sm">{errors.name}</p>}
                </motion.div>
                
                <motion.div variants={itemVariants} className="form-group">
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                    טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out shadow-sm`}
                    placeholder="הכנס את מספר הטלפון שלך"
                    dir="ltr"
                  />
                  {errors.phone && <p className="mt-2 text-red-500 text-sm">{errors.phone}</p>}
                </motion.div>
                
                <motion.div variants={itemVariants} className="form-group">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out shadow-sm`}
                    placeholder="הכנס את כתובת האימייל שלך"
                    dir="ltr"
                  />
                  {errors.email && <p className="mt-2 text-red-500 text-sm">{errors.email}</p>}
                </motion.div>
                
                <motion.div variants={itemVariants} className="form-group">
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl border ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out shadow-sm`}
                    placeholder="כתוב את הודעתך כאן..."
                  />
                  {errors.message && <p className="mt-2 text-red-500 text-sm">{errors.message}</p>}
                </motion.div>
                
                <motion.div variants={itemVariants} className="text-center pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        שולח...
                      </span>
                    ) : (
                      'שלח הודעה'
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;