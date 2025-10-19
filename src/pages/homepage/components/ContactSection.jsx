import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import AppIcon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { name: 'github', url: 'https://github.com', label: 'GitHub' },
    { name: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { name: 'email', url: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-terminal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text mb-2">
            $ send_message
          </h2>
          <div className="h-1 w-20 bg-terminal-text mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="terminal-window p-6">
              <div className="terminal-header mb-6">
                <span className="terminal-button bg-terminal-error"></span>
                <span className="terminal-button bg-terminal-warning"></span>
                <span className="terminal-button bg-terminal-text"></span>
                <span className="ml-4 text-terminal-text/60 text-sm">contact_form.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-terminal-text/70 mb-2 font-mono text-sm">
                    $ echo "name"
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-terminal-text/70 mb-2 font-mono text-sm">
                    $ echo "email"
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-terminal-text/70 mb-2 font-mono text-sm">
                    $ cat message.txt
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-terminal-bg/50 border border-terminal-text/30 text-terminal-text font-mono placeholder:text-terminal-text/40 focus:outline-none focus:border-terminal-text focus:shadow-lg focus:shadow-terminal-text/10 transition-all duration-300 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-terminal-text text-sm font-mono"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? '$ sending...' : '$ send_message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="terminal-window p-6">
                <h3 className="text-xl font-bold text-terminal-accent mb-4">
                  Let's Connect
                </h3>
                <p className="text-terminal-text/70 leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or 
                  opportunities to be part of your visions. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-terminal-text/70 hover:text-terminal-text transition-colors group"
                    >
                      <AppIcon name={link.name} size={20} />
                      <span className="font-mono">{link.label}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="terminal-window p-6">
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-terminal-text/60">$ location</p>
                  <p className="text-terminal-text pl-4">→ Remote / Worldwide</p>
                  
                  <p className="text-terminal-text/60 mt-4">$ availability</p>
                  <p className="text-terminal-text pl-4">→ Open to opportunities</p>
                  
                  <p className="text-terminal-text/60 mt-4">$ response_time</p>
                  <p className="text-terminal-text pl-4">→ Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
