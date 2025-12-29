import { motion } from 'framer-motion';
import { Shield, TrendingUp, Palette, Globe, Users2, Sparkle } from 'lucide-react';

const features = [
  {
    icon: Users2,
    title: 'Community-First',
    description: 'Built around the needs and voices of our users. Every feature is designed to strengthen connections.',
    color: 'from-[#028383] to-teal-600',
  },
  {
    icon: Palette,
    title: 'Creator-Friendly',
    description: 'Powerful tools for creators to share their vision. From images to videos, express yourself freely.',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Format Content',
    description: 'Share text, images, videos, and stories. One platform for all your creative expressions.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Safe & Inclusive',
    description: 'A platform where everyone feels welcome. Strong moderation and community guidelines protect users.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Scalable & Future-Ready',
    description: 'Built on modern infrastructure that grows with you. The foundation of tomorrow\'s SuperApp.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Sparkle,
    title: 'Authentic Connections',
    description: 'No algorithms manipulating what you see. Connect with real people who share your passions.',
    color: 'from-yellow-500 to-green-500',
  },
];

export function Why4um() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[#028383] uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">Why 4um?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're not just another social platform. 4um is designed from the ground up to put
            community, creativity, and connection first.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              <div className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#028383]/5 to-teal-50 rounded-2xl sm:rounded-3xl">
            <div className="text-3xl sm:text-4xl lg:text-5xl text-[#028383] mb-2 sm:mb-3">99.9%</div>
            <p className="text-gray-600">Uptime Reliability</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-teal-50 to-pink-50 rounded-2xl sm:rounded-3xl">
            <div className="text-3xl sm:text-4xl lg:text-5xl text-[#028383] mb-2 sm:mb-3">&lt;100ms</div>
            <p className="text-gray-600">Average Response Time</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-pink-50 to-[#028383]/5 rounded-2xl sm:rounded-3xl">
            <div className="text-3xl sm:text-4xl lg:text-5xl text-[#028383] mb-2 sm:mb-3">24/7</div>
            <p className="text-gray-600">Community Support</p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}