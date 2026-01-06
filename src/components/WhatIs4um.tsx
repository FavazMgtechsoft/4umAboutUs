import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Smartphone, Zap, Heart } from 'lucide-react';

export function WhatIs4um() {
  return (
    <section id="what-is" className="pt-16 sm:pt-24 lg:pt-32 pb-10 bg-white " style={{paddingTop:'186px'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[#028383] uppercase tracking-wider text-sm">Platform</span>
          <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">What is 4um?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          4UM is a community-driven social platform where students, creators, and young professionals come together to share ideas, opinions, and conversations around topics that matter to them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761872936122-4aca27d3f258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBmaWxtaW5nfGVufDF8fHx8MTc2NTc5ODk1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Content Creation"
                className="w-full h-full object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#028383] flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 mb-1">Multi-Format Content</h4>
                    <p className="text-sm text-gray-600">
                      Share images, videos, and stories in one unified platform
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#028383]/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-[#028383]" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Cross-Platform Experience</h3>
                <p className="text-gray-600">
                  Seamlessly connect across Web, iOS, and Android. Your community, everywhere
                  you are.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#028383]/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#028383]" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Real-Time Engagement</h3>
                <p className="text-gray-600">
                  Instant interactions, live updates, and dynamic feeds that keep you connected
                  to what matters most.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#028383]/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#028383]" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Built for Communities</h3>
                <p className="text-gray-600">
                  Discover and join communities that share your interests. From hobbies to
                  professional networks, find your people.
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <div className="bg-gradient-to-r from-[#028383]/5 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#028383]/10">
                <p className="text-gray-700">
                  "4um brings together the best aspects of social media: authentic connections,
                  diverse content, and a platform that truly listens to its community."
                </p>
                <div className="mt-3 sm:mt-4 text-sm text-gray-600">
                  — The foundation of tomorrow's social ecosystem
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}