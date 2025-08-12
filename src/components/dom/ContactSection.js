import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [windowWidth, setWindowWidth] = useState(1200); // fallback for SSR
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth); // set actual width on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission - replace with your actual form handling logic
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use a default layout until mounted, then use responsive layout
  const gridTemplateColumnsMain = !hasMounted ? '1fr' : windowWidth >= 1024 ? '1fr 1fr' : '1fr';
  const gridTemplateColumnsDetails = !hasMounted ? '1fr' : windowWidth >= 640 ? '1fr 1fr' : '1fr';

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Contact our team of satellite technology experts for consulting services, 
            RF equipment solutions, and VSAT management.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: gridTemplateColumnsMain }}>
          {/* Contact Information */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <MapPin style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb', marginTop: '0.25rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Address</h4>
                  <p style={{ color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
                    11, Rue Pierre Werner<br />
                    L-6832 Betzdorf<br />
                    Luxembourg
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <Phone style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb', marginTop: '0.25rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Phone</h4>
                  <a 
                    href="tel:+35226710828" 
                    style={{ color: '#2563eb', textDecoration: 'none' }}
                    onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.color = '#2563eb'}
                  >
                    +352 267 10 828
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <Mail style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb', marginTop: '0.25rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Email</h4>
                  <a 
                    href="mailto:info@tstgroup.de" 
                    style={{ color: '#2563eb', textDecoration: 'none' }}
                    onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.color = '#2563eb'}
                  >
                    info@tstgroup.de
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb', marginTop: '0.25rem' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Business Hours</h4>
                  <p style={{ color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
                    Monday - Friday: 8:00 - 16:00<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Company Details</h4>
              <div style={{ display: 'grid', gridTemplateColumns: gridTemplateColumnsDetails, gap: '1rem', fontSize: '0.875rem' }}>
                <div>
                  <span style={{ color: '#6b7280', display: 'block' }}>Trade Registry:</span>
                  <p style={{ fontWeight: '500', color: '#111827', margin: 0 }}>B168575</p>
                </div>
                <div>
                  <span style={{ color: '#6b7280', display: 'block' }}>VAT Number:</span>
                  <p style={{ fontWeight: '500', color: '#111827', margin: 0 }}>LU25464314</p>
                </div>
                <div>
                  <span style={{ color: '#6b7280', display: 'block' }}>Founded:</span>
                  <p style={{ fontWeight: '500', color: '#111827', margin: 0 }}>April 2012</p>
                </div>
                <div>
                  <span style={{ color: '#6b7280', display: 'block' }}>Capital:</span>
                  <p style={{ fontWeight: '500', color: '#111827', margin: 0 }}>€31,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>Send us a Message</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name and Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: gridTemplateColumnsDetails, gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem 1rem 0.75rem 2.5rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem', 
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                    Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem 1rem 0.75rem 2.5rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem', 
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div style={{ display: 'grid', gridTemplateColumns: gridTemplateColumnsDetails, gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                    Phone Number
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem 1rem 0.75rem 2.5rem', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '0.5rem', 
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                      placeholder="+352 123 456 789"
                    />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem', 
                      fontSize: '1rem', 
                      backgroundColor: 'white',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="service-management">Service Management</option>
                    <option value="technology-services">Technology Services</option>
                    <option value="service-support">Service Support</option>
                    <option value="software-development">Software Development</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                  Message *
                </label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare style={{ position: 'absolute', left: '0.75rem', top: '0.75rem', width: '1.25rem', height: '1.25rem', color: '#9ca3af' }} />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem 0.75rem 2.5rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem', 
                      fontSize: '1rem', 
                      resize: 'vertical', 
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div style={{ padding: '1rem', border: '1px solid #bbf7d0', borderRadius: '0.5rem', fontSize: '0.875rem', backgroundColor: '#f0fdf4', color: '#166534' }}>
                  <p style={{ margin: 0 }}>
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{ padding: '1rem', border: '1px solid #fecaca', borderRadius: '0.5rem', fontSize: '0.875rem', backgroundColor: '#fef2f2', color: '#991b1b' }}>
                  <p style={{ margin: 0 }}>
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.5rem', 
                  backgroundColor: isSubmitting ? '#60a5fa' : '#2563eb', 
                  color: 'white', 
                  fontWeight: '600', 
                  padding: '0.75rem 1.5rem', 
                  border: 'none', 
                  borderRadius: '0.5rem', 
                  cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                  fontSize: '1rem'
                }}
                onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#1d4ed8')}
                onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#2563eb')}
              >
                {isSubmitting ? (
                  <>
                    <div style={{ 
                      animation: 'spin 1s linear infinite', 
                      borderRadius: '50%', 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      border: '2px solid white', 
                      borderTopColor: 'transparent' 
                    }}></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;