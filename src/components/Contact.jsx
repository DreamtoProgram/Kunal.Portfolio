import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sendContactEmail, validateContactForm } from '../utils/emailService';
import { ScrollReveal } from './animations/ScrollReveal';
import { TiltCard } from './animations/TiltCard';
import { MagneticButton } from './animations/MagneticButton';
import { SectionHeading } from './animations/SectionHeading';
import { AmbientBackground } from './animations/AmbientBackground';

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
      className={`relative py-16 md:py-20 transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#09090b] text-white' : 'bg-white text-black'
      }`}
    >
      <AmbientBackground isDark={isDark} position="top-right" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          icon={Send}
          title="Let's Connect!"
          isDark={isDark}
          className="mb-10"
        />

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" distance={18} delay={80} duration={600}>
              <p
                className={`text-sm sm:text-base leading-relaxed font-medium ${
                  isDark ? 'text-zinc-300' : 'text-neutral-700'
                }`}
              >
                I'm open to internship opportunities, collaborations, projects or just a friendly hello.
              </p>
            </ScrollReveal>

            <div className="space-y-4 pt-2">
              <ScrollReveal direction="up" distance={16} delay={160} duration={550}>
                <div className="flex items-center gap-3.5 group">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500/60 group-hover:shadow-[0_0_15px_rgba(109,40,217,0.3)] ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-700 text-violet-400'
                        : 'bg-neutral-100 border-neutral-300 text-violet-600'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-sm font-extrabold hover:underline break-all transition-colors ${
                      isDark ? 'text-white hover:text-violet-400' : 'text-black hover:text-violet-600'
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={16} delay={240} duration={550}>
                <div className="flex items-center gap-3.5 group">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500/60 group-hover:shadow-[0_0_15px_rgba(109,40,217,0.3)] ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-700 text-violet-400'
                        : 'bg-neutral-100 border-neutral-300 text-violet-600'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className={`text-sm font-extrabold hover:underline transition-colors ${
                      isDark ? 'text-white hover:text-violet-400' : 'text-black hover:text-violet-600'
                    }`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={16} delay={320} duration={550}>
                <div className="flex items-center gap-3.5 group">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500/60 group-hover:shadow-[0_0_15px_rgba(109,40,217,0.3)] ${
                      isDark
                        ? 'bg-zinc-900 border-zinc-700 text-violet-400'
                        : 'bg-neutral-100 border-neutral-300 text-violet-600'
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
              </ScrollReveal>
            </div>

            {/* Quick Response Banner */}
            <ScrollReveal direction="up" distance={16} delay={380} duration={550}>
              <div
                className={`p-4 rounded-xl border text-xs font-bold flex items-center gap-2 transition-colors ${
                  isDark
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                    : 'bg-neutral-50 border-neutral-300 text-neutral-800'
                }`}
              >
                <Sparkles className="w-4 h-4 flex-shrink-0 text-violet-500 animate-pulse" />
                <span>Typically responding within 24 hours.</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form with Violet Focus Glow & Magnetic Button */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" distance={22} delay={120} duration={650}>
              {status === 'success' ? (
                <div
                  className={`rounded-2xl p-8 border text-center space-y-4 animate-scaleUp ${
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
                  <MagneticButton as="div" strength={0.25}>
                    <button
                      type="button"
                      onClick={handleReset}
                      className={`px-5 py-2.5 rounded-xl text-sm font-extrabold shadow-sm focus:outline-none ${
                        isDark
                          ? 'bg-white text-black hover:bg-zinc-200'
                          : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                    >
                      Send Another Message
                    </button>
                  </MagneticButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Confirmation Email Notice */}
                  <div className={`flex items-center gap-2 text-xs font-semibold ${
                    isDark ? 'text-zinc-400' : 'text-neutral-600'
                  }`}>
                    <Mail className="w-3.5 h-3.5 flex-shrink-0 text-violet-500" />
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
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-4 transition-all duration-200 border disabled:opacity-60 ${
                          isDark
                            ? 'bg-black border-zinc-700 text-white placeholder-zinc-500 focus:border-violet-400 focus:ring-violet-400/20'
                            : 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-500 focus:border-violet-600 focus:ring-violet-600/20'
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
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-4 transition-all duration-200 border disabled:opacity-60 ${
                          isDark
                            ? 'bg-black border-zinc-700 text-white placeholder-zinc-500 focus:border-violet-400 focus:ring-violet-400/20'
                            : 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-500 focus:border-violet-600 focus:ring-violet-600/20'
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
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-4 transition-all duration-200 resize-y min-h-[110px] border disabled:opacity-60 ${
                        isDark
                          ? 'bg-black border-zinc-700 text-white placeholder-zinc-500 focus:border-violet-400 focus:ring-violet-400/20'
                          : 'bg-neutral-50 border-neutral-300 text-black placeholder-neutral-500 focus:border-violet-600 focus:ring-violet-600/20'
                      }`}
                    />
                  </div>

                  <div className="flex justify-start pt-1">
                    <MagneticButton as="div" strength={0.25} maxOffset={6}>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none shadow-md transition-all duration-200 ${
                          isDark
                            ? 'bg-white text-black hover:bg-zinc-200 shadow-white/10'
                            : 'bg-black hover:bg-neutral-800 text-white shadow-black/10'
                        }`}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-violet-600" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 -rotate-12 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5 text-violet-600 dark:text-violet-400" />
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
