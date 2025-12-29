import { motion } from 'framer-motion';
import { Target, Sparkles } from 'lucide-react';

export function MissionVision() {
  return (
    <section id="mission" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-[#028383]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[#028383] uppercase tracking-wider text-sm">Our Purpose</span>
          <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">Mission & Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're building more than a platform—we're creating the future of social connection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#028383] to-teal-600 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#028383] flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
                To connect like-minded individuals through a platform that celebrates authentic
                expression, diverse content, and genuine community building.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#028383] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Foster meaningful connections across communities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#028383] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Empower creators with tools to share their stories
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#028383] mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Create a safe, inclusive space for all voices
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-[#028383] rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-[#028383] flex items-center justify-center mb-4 sm:mb-6">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
                To become the anchor platform of a Social Media SuperApp ecosystem—bringing
                multiple social communities together in one unified, seamless experience.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Unified ecosystem connecting diverse social platforms
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Seamless experience across all your social needs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">
                    Innovation-driven, community-focused growth
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#028383] to-teal-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
              "Social media should bring people together, not divide them. At 4um, we're
              building bridges between communities."
            </blockquote>
            <p className="text-white/90">— The 4um Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}