import emailjs from '@emailjs/browser';

/**
 * Service configuration from Vite environment variables
 */
const getEmailConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const ownerTemplateId = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return {
    serviceId,
    ownerTemplateId,
    autoReplyTemplateId,
    publicKey,
    isConfigured: Boolean(serviceId && ownerTemplateId && publicKey)
  };
};

/**
 * Validates contact form fields on the client side
 * @param {Object} formData { name, email, message }
 * @returns {Object} { isValid: boolean, error: string | null }
 */
export const validateContactForm = ({ name, email, message }) => {
  const trimmedName = (name || '').trim();
  const trimmedEmail = (email || '').trim();
  const trimmedMessage = (message || '').trim();

  if (!trimmedName) {
    return { isValid: false, error: 'Please enter your name.' };
  }

  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long.' };
  }

  if (!trimmedEmail) {
    return { isValid: false, error: 'Please enter your email address.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g. name@example.com).' };
  }

  if (!trimmedMessage) {
    return { isValid: false, error: 'Please enter your message.' };
  }

  if (trimmedMessage.length < 10) {
    return { isValid: false, error: 'Message should be at least 10 characters long.' };
  }

  return { isValid: true, error: null };
};

/**
 * Sends notification email to owner and optional confirmation to visitor using EmailJS
 * @param {Object} formData { name, email, message }
 * @returns {Promise<Object>} { success: boolean, message?: string }
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const { serviceId, ownerTemplateId, autoReplyTemplateId, publicKey, isConfigured } = getEmailConfig();

  // If credentials are not yet configured in .env, log a clear notice and throw
  if (!isConfigured) {
    console.warn(
      '[EmailJS Service] Environment variables not fully configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
    );
    throw new Error('Email service configuration missing. Please verify your .env file.');
  }

  // 1. Template parameters for Owner Notification
  const ownerParams = {
    from_name: name.trim(),
    from_email: email.trim(),
    reply_to: email.trim(),
    to_name: 'Kunal',
    message: message.trim(),
  };

  try {
    // Send Email 1: Notification to Kunal
    const ownerResponse = await emailjs.send(
      serviceId,
      ownerTemplateId,
      ownerParams,
      publicKey
    );

    // Send Email 2: Auto-reply to visitor (if template ID provided)
    if (autoReplyTemplateId) {
      try {
        const autoReplyParams = {
          to_name: name.trim(),
          to_email: email.trim(),
          from_name: 'Kunal',
          message: message.trim(),
        };

        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          autoReplyParams,
          publicKey
        );
      } catch (autoReplyErr) {
        // Log auto-reply error but do not fail the main submission
        console.error('[EmailJS Auto-Reply Error]', autoReplyErr);
      }
    }

    return { success: true, status: ownerResponse.status };
  } catch (err) {
    console.error('[EmailJS Send Error]', err);
    throw err;
  }
};
