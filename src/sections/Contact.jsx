import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/siteData";
import {
  SectionHeader,
  Card,
  Button,
  SocialLinks,
  MailIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckIcon,
} from "../components";

function ContactInfo({ inView }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-6"
    >
      <div>
        <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-3">
          Let's Work Together
        </h3>
        <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
          I'm always interested in hearing about new projects, opportunities, and
          collaborations. Whether you need project management expertise, training
          solutions, or consulting services, feel free to reach out.
        </p>
      </div>

      {/* Email Card */}
      <a
        href={`mailto:${personalInfo.email}`}
        className="group block"
      >
        <Card hover padding="p-4" className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center group-hover:bg-accent-500/30 transition-colors">
            <MailIcon className="w-6 h-6 text-accent-500" />
          </div>
          <div>
            <p className="text-sm text-navy-500 dark:text-navy-400">Email me at</p>
            <p className="font-medium text-navy-900 dark:text-white group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
              {personalInfo.email}
            </p>
          </div>
        </Card>
      </a>

      {/* Location Card */}
      <Card hover={false} padding="p-4" className="flex items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <MapPinIcon className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <p className="text-sm text-navy-500 dark:text-navy-400">Based in</p>
          <p className="font-medium text-navy-900 dark:text-white">
            {personalInfo.location}
          </p>
          <p className="text-xs text-navy-500 dark:text-navy-400">
            Available for {personalInfo.locationNote.toLowerCase()} work worldwide
          </p>
        </div>
      </Card>

      {/* Social Links */}
      <div>
        <p className="text-sm text-navy-500 dark:text-navy-400 mb-3">
          Connect with me
        </p>
        <SocialLinks size="md" />
      </div>
    </motion.div>
  );
}

function ContactForm({ inView }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus("sending");

    // Simulate sending then open mailto
    setTimeout(() => {
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setStatus("success");

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus("idle");
      }, 3000);
    }, 500);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-navy-100 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all";

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Card hover={false} padding="p-6 md:p-8">
        <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-6">
          Send a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
              >
                Name <span className="text-accent-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={status === "sending"}
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
              >
                Email <span className="text-accent-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={status === "sending"}
                className={inputClasses}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              disabled={status === "sending"}
              className={inputClasses}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy-700 dark:text-navy-300 mb-2"
            >
              Message <span className="text-accent-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              rows={5}
              required
              disabled={status === "sending"}
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "sending" || status === "success"}
            icon={status === "success" ? CheckIcon : ArrowRightIcon}
            iconPosition="right"
            className="w-full"
            animate
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Opening Email Client..."}
            {status === "success" && "Message Ready!"}
          </Button>

          {/* Success Message */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-center text-green-500"
            >
              Your email client should open with the message. If not, please email
              me directly.
            </motion.p>
          )}

          {/* Note */}
          <p className="text-xs text-center text-navy-500 dark:text-navy-400">
            This form opens your default email client with your message pre-filled.
          </p>
        </form>
      </Card>
    </motion.div>
  );
}

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-50/50 dark:bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Get in Touch"
          title="Contact Me"
          centered
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left: Contact Info */}
          <ContactInfo inView={inView} />

          {/* Right: Contact Form */}
          <ContactForm inView={inView} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
