import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactEmail, validateContactForm } from '../utils/emailService';

export const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-reset success state after 6 seconds so form becomes available again
  useEffect(() => {
    let timer;
    if (status === 'success') {
      timer = setTimeout(() => {
        setStatus('idle');
      }, 6000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const handleChange = (e) => {
    // Clear error when user types
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setStatus('error');
      setErrorMessage(validation.error);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await sendContactEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      // User-friendly error message without technical noise
      setErrorMessage('Something went wrong. Please try again or write directly to ' + personalInfo.email);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      className={`py-16 md:py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#09090b] text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white'
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            <Send className="w-5 h-5 -rotate-12" />
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Let's Connect!
          </h2>
        </div>

        {/* 2-Column Contact Layout in Pure Black & White */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-6">
            <p
              className={`text-sm sm:text-base leading-relaxed font-medium ${
                isDark ? 'text-zinc-300' : 'text-neutral-700'
              }`}
            >
              I'm open to internship opportunities, collaborations, projects or just a friendly hello.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 group">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-700 text-white'
                      : 'bg-neutral-100 border-neutral-300 text-black'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`text-sm font-extrabold hover:underline break-all ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-700 text-white'
                      : 'bg-neutral-100 border-neutral-300 text-black'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className={`text-sm font-extrabold hover:underline ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${
                    isDark
                      ? 'bg-zinc-900 border-zinc-700 text-white'
                      : 'bg-neutral-100 border-neutral-300 text-black'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <span
                  className={`text-sm font-extrabold ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Quick response banner */}
            <div
              className={`p-4 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                isDark
                  ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-800'
              }`}
            >
              <Sparkles className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
              <span>Typically responding within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div
                className={`rounded-2xl p-8 border text-center space-y-4 animate-fadeIn ${
                  isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-neutral-50 border-neutral-300'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto border ${
                  isDark ? 'bg-zinc-800 border-zinc-700 text-emerald-400' : 'bg-neutral-200 border-neutral-300 text-emerald-600'
                }`}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
                  Message sent successfully!
                </h3>
                <p className={`text-sm max-w-md mx-auto font-medium ${isDark ? 'text-zinc-300' : 'text-neutral-700'}`}>
                  Thanks for reaching out. I've received your message and will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className={`px-5 py-2.5 rounded-xl text-sm font-extrabold transition-colors shadow-sm focus:outline-none ${
                    isDark
                      ? 'bg-white text-black hover:bg-zinc-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Confirmation Email Notice */}
                <div className={`flex items-center gap-2 text-xs font-semibold ${
                  isDark ? 'text-zinc-400' : 'text-neutral-600'
                }`}>
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>You will get a confirmation email</span>
                </div>

                {status === 'error' && (
                  <div className={`p-3.5 rounded-xl border text-xs font-bold flex items-center gap-2.5 animate-fadeIn ${
                    isDark ? 'bg-zinc-900 border-rose-800 text-rose-300' : 'bg-neutral-100 border-black text-black'
                  }`}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      disabled={status === 'submitting'}
                      required
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 transition-all border disabled:opacity-60 ${
                        isDark
                          ? 'bg-black border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:ring-white/20'
                          : 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-500 focus:border-black focus:ring-black/10'
                      }`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      disabled={status === 'submitting'}
                      required
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 transition-all border disabled:opacity-60 ${
                        isDark
                          ? 'bg-black border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:ring-white/20'
                          : 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-500 focus:border-black focus:ring-black/10'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    disabled={status === 'submitting'}
                    required
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 transition-all resize-y min-h-[110px] border disabled:opacity-60 ${
                      isDark
                        ? 'bg-black border-zinc-700 text-white placeholder-zinc-500 focus:border-white focus:ring-white/20'
                        : 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-500 focus:border-black focus:ring-black/10'
                    }`}
                  ></textarea>
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm sm:text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none shadow-md ${
                      isDark
                        ? 'bg-white text-black hover:bg-zinc-200 shadow-white/10'
                        : 'bg-black hover:bg-neutral-800 text-white shadow-black/10'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 -rotate-12" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
