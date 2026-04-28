import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/siteData";
import { Card, Button, SectionHeader, SocialLinks } from "../components";
import { MailIcon, MapPinIcon, SendIcon } from "../components/Icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(formData.subject || "Contact from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-navy-100 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <section className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Contact"
            title="Get in Touch"
            subtitle="Have a project in mind? Let's discuss how I can help."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-4">
                  {personalInfo.closingStatement}
                </h2>
                <p className="text-navy-600 dark:text-navy-300 mb-6">
                  I&apos;m open to consulting opportunities in project management, GenAI adoption,
                  and corporate training. Whether you need help with a specific project or
                  want to explore a long-term partnership, I&apos;d love to hear from you.
                </p>
              </div>

              {/* Email Card */}
              <Card hover={false}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors">
                    <MailIcon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 dark:text-navy-400">Email</p>
                    <p className="text-navy-900 dark:text-white font-medium group-hover:text-accent-500 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
              </Card>

              {/* Location Card */}
              <Card hover={false}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-navy-200 dark:bg-navy-700">
                    <MapPinIcon className="w-6 h-6 text-navy-600 dark:text-navy-300" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-500 dark:text-navy-400">Location</p>
                    <p className="text-navy-900 dark:text-white font-medium">
                      {personalInfo.location}
                    </p>
                    <p className="text-sm text-navy-500 dark:text-navy-400">
                      {personalInfo.locationNote}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div>
                <p className="text-sm text-navy-500 dark:text-navy-400 mb-4">
                  Connect with me
                </p>
                <SocialLinks size="md" />
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <Card hover={false} padding="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={SendIcon}
                    iconPosition="right"
                    className="w-full"
                    animate
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-navy-500 dark:text-navy-400 text-center">
                    This will open your default email client with the message pre-filled.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Contact;
