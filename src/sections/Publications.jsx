import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { publications } from "../data/siteData";
import { SectionHeader, Card, Button, MailIcon, CheckIcon, ArrowRightIcon } from "../components";

function NewsletterSignup({ inView }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-12"
    >
      <Card gradient hover={false} padding="p-0" className="overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {publications.newsletter.status}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-3">
                {publications.newsletter.name}
              </h3>

              <p className="text-navy-600 dark:text-navy-300 mb-6 max-w-lg">
                {publications.newsletter.description}
              </p>

              {/* Email Form */}
              {publications.newsletter.signupEnabled && (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={status === "loading" || status === "success"}
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-navy-100 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 text-navy-900 dark:text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent disabled:opacity-50 transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "loading" || status === "success"}
                    icon={status === "success" ? CheckIcon : ArrowRightIcon}
                    iconPosition="right"
                    className="whitespace-nowrap"
                  >
                    {status === "idle" && "Notify Me"}
                    {status === "loading" && "Subscribing..."}
                    {status === "success" && "Subscribed!"}
                  </Button>
                </form>
              )}

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-green-500"
                >
                  Thanks! You'll be the first to know when we launch.
                </motion.p>
              )}
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-32 h-32">
                <motion.div
                  className="absolute inset-0 bg-accent-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-accent-400 to-purple-600 flex items-center justify-center">
                  <MailIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function PublicationCategory({ title, items, index, inView }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const hasItems = items && items.length > 0;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Card hover padding="p-6" className="h-full">
        <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-4">
          {title}
        </h3>

        {hasItems ? (
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckIcon className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-600 dark:text-navy-300 text-sm">
                  {item.title || item}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-navy-200 dark:bg-navy-700 flex items-center justify-center mb-3">
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-navy-500 dark:text-navy-400 text-sm">
              Coming soon
            </p>
            <p className="text-navy-400 dark:text-navy-500 text-xs mt-1">
              Stay tuned for updates
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  );
}

function Publications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { title: "Books", items: publications.categories.books },
    { title: "Case Studies", items: publications.categories.caseStudies },
    { title: "White Papers", items: publications.categories.whitePapers },
  ];

  return (
    <section id="publications" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Writing & Resources"
          title="Publications & Blog"
          subtitle="Insights, resources, and thought leadership on project management, AI adoption, and international business."
          centered
        />

        <div ref={ref}>
          {/* Newsletter Signup */}
          <NewsletterSignup inView={inView} />

          {/* Publication Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <PublicationCategory
                key={category.title}
                title={category.title}
                items={category.items}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;
