import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const ContactContainer = styled.section`
  background: ${({ darkMode }) =>
    darkMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(249, 250, 251, 0.2)'};
  padding: 4rem 1rem;
`;

const Contact = ({ darkMode }) => {
  const { t } = useTranslation();
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm(
        'service_z9855mb',
        'template_ktid41y', 
        form.current,
        'UxzNRiH3MQOc6m498' 
      )
      .then(() => {
        toast.success(t('contact.success'));
        e.target.reset();
        setSending(false);
      })
      .catch(() => {
        toast.error(t('contact.error'));
        setSending(false);
      });
  };

  return (
    <ContactContainer
      darkMode={darkMode}
      id="contact"
      className="max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-primary dark:text-white"
      >
        {t('contact.title')}
        <span className="block w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 flex flex-col justify-center"
        >
          <p className="flex items-center text-xs sm:text-sm md:text-base">
            <FaEnvelope className="mr-1 sm:mr-2 text-accent dark:text-accentDark text-base sm:text-lg" />{' '}
            {t('contact.email')}
          </p>
          <p className="flex items-center text-xs sm:text-sm md:text-base">
            <FaPhone className="mr-1 sm:mr-2 text-accent dark:text-accentDark text-base sm:text-lg" />{' '}
            {t('contact.phone')}
          </p>
          <p className="flex items-center text-xs sm:text-sm md:text-base">
            <FaMapMarkerAlt className="mr-1 sm:mr-2 text-accent dark:text-accentDark text-base sm:text-lg" />{' '}
            {t('contact.location')}
          </p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 bg-white dark:bg-bgDark p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-divider dark:border-dividerDark glass-effect"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder={t('contact.name_placeholder')}
            className="w-full p-2 sm:p-3 border rounded-lg dark:bg-bgDark dark:border-dividerDark dark:text-textSecondaryDark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark transition text-xs sm:text-sm md:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.email_placeholder')}
            className="w-full p-2 sm:p-3 border rounded-lg dark:bg-bgDark dark:border-dividerDark dark:text-textSecondaryDark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark transition text-xs sm:text-sm md:text-base"
            required
          />
          <textarea
            name="message"
            placeholder={t('contact.message_placeholder')}
            className="w-full p-2 sm:p-3 border rounded-lg h-32 sm:h-36 dark:bg-bgDark dark:border-dividerDark dark:text-textSecondaryDark focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accentDark transition text-xs sm:text-sm md:text-base"
            required
          />
          <button
            type="submit" disabled={sending}
            className="flex items-center justify-center w-full px-4 sm:px-5 py-2 bg-primary dark:bg-primaryDark text-white rounded-full hover:bg-accent dark:hover:bg-accent transition shadow-lg hover:shadow-glow text-xs sm:text-sm md:text-base"
          >
            {sending ? t("...") : <><FaPaperPlane className="mr-1 sm:mr-2" /> {t("contact.send")}</>}
          </button>
        </motion.form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </ContactContainer>
  );
};

export default Contact;