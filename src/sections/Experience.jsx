import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/siteData";
import { SectionHeader, Card, MapPinIcon, CheckIcon } from "../components";

function TimelineItem({ item, index, inView }) {
  const isFounder = item.role.toLowerCase().includes("founder");

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-accent-500 border-4 border-navy-100 dark:border-navy-900 z-10" />
      </div>

      {/* Connecting Line */}
      {index < experience.length - 1 && (
        <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-navy-300 dark:to-navy-700" />
      )}

      {/* Content Card */}
      <Card hover padding="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Badge */}
            {item.isCurrent && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-500/20 text-accent-500 border border-accent-500/30">
                Current
              </span>
            )}
            {isFounder && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                Founder
              </span>
            )}
          </div>

          {/* Date Range */}
          <span className="text-sm text-navy-500 dark:text-navy-400">
            {item.startDate} — {item.endDate}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-1">
          {item.role}
        </h3>
        <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300 mb-4">
          <span className="font-medium text-accent-500">{item.company}</span>
          <span className="text-navy-400">•</span>
          <span className="flex items-center gap-1 text-sm">
            <MapPinIcon className="w-3 h-3" />
            {item.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-navy-600 dark:text-navy-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Highlights (max 3) */}
        {item.highlights && item.highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {item.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-300">
                <CheckIcon className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Clients Tags */}
        {item.clients && item.clients.length > 0 && (
          <div className="pt-4 border-t border-navy-200 dark:border-navy-700">
            <span className="text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-2 block">
              Key Clients
            </span>
            <div className="flex flex-wrap gap-2">
              {item.clients.map((client, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-navy-200 dark:bg-navy-700 text-navy-700 dark:text-navy-300"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {item.technologies && item.technologies.length > 0 && (
          <div className={`flex flex-wrap gap-2 ${item.clients ? 'mt-4' : 'pt-4 border-t border-navy-200 dark:border-navy-700'}`}>
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-accent-500/10 text-accent-500 dark:text-accent-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 md:py-28 bg-navy-50/50 dark:bg-navy-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Career Timeline"
          title="Professional Experience"
          centered
        />

        {/* Timeline */}
        <div ref={ref} className="relative mt-12">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
