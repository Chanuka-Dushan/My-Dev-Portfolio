import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would typically be an API call to your backend
    // For this implementation, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset the form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset the status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-primary text-xl p-3 bg-[#1a1a1a] rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-400">Colombo, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-primary text-xl p-3 bg-[#1a1a1a] rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-400">dushanc@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-primary text-xl p-3 bg-[#1a1a1a] rounded-full">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+94 123 456 7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-xl bg-[#1a1a1a] p-3 rounded-full hover:bg-[#333]"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#ffffff",
                    boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-[#0077b5] transition-colors text-xl bg-[#1a1a1a] p-3 rounded-full hover:bg-[#333]"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#0077b5",
                    boxShadow: "0 0 15px rgba(0, 119, 181, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-[#1DA1F2] transition-colors text-xl bg-[#1a1a1a] p-3 rounded-full hover:bg-[#333]"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#1DA1F2",
                    boxShadow: "0 0 15px rgba(29, 161, 242, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-twitter"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-[#E4405F] transition-colors text-xl bg-[#1a1a1a] p-3 rounded-full hover:bg-[#333]"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#E4405F",
                    boxShadow: "0 0 15px rgba(228, 64, 95, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-instagram"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none transition-all duration-300"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none transition-all duration-300 min-h-[150px]"
                  placeholder="Let me know how I can help..."
                ></textarea>
              </div>
              
              <div>
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm
                        flex items-center justify-center transition-all duration-300
                        shadow-lg shadow-primary/20 hover:shadow-primary/40 w-full sm:w-auto
                        ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    className="mt-3 text-green-500 flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <i className="fas fa-check-circle mr-2"></i>
                    Your message has been sent successfully!
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p 
                    className="mt-3 text-red-500 flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    There was an error sending your message. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}