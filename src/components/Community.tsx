import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle, Heart, Share2, BookmarkPlus } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#028383]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[#028383] uppercase tracking-wider text-sm">Our Community</span>
          <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">Community & Culture</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            4um is powered by diverse, passionate communities. From artists and entrepreneurs to
            gamers and activists—everyone has a place here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-gray-900 mb-3 sm:mb-4">Built by the Community, for the Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature, every update, every decision—it all starts with listening to you.
                Our community shapes the platform, making 4um truly yours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#028383]/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#028383]" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Inclusive & Welcoming</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    A space where every voice matters, every perspective is valued, and everyone
                    feels they belong.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#028383]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#028383]" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Engagement-Focused</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Real conversations, meaningful interactions, and genuine connections—not just
                    likes and follows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#028383]/10 flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#028383]" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Creator Empowerment</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Tools and features designed to help creators grow, monetize, and connect with
                    their audience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761957374132-a5137e99f26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NTcyNDQ2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community Members"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTc5NzE5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6 pt-8 sm:pt-12"
              >
                <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762330463580-9bfa9645b0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY29tbXVuaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU3OTg5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Digital Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760574764070-1355efaa056c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZyaWVuZHMlMjBjb25uZWN0aW9ufGVufDF8fHx8MTc2NTc5ODk1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Friends"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Community Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center border border-gray-100">
            <div className="text-3xl sm:text-4xl text-[#028383] mb-2">150+</div>
            <p className="text-gray-600 text-sm sm:text-base">Countries</p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center border border-gray-100">
            <div className="text-3xl sm:text-4xl text-[#028383] mb-2">50K+</div>
            <p className="text-gray-600 text-sm sm:text-base">Active Communities</p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center border border-gray-100">
            <div className="text-3xl sm:text-4xl text-[#028383] mb-2">1M+</div>
            <p className="text-gray-600 text-sm sm:text-base">Daily Connections</p>
          </div>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg text-center border border-gray-100">
            <div className="text-3xl sm:text-4xl text-[#028383] mb-2">98%</div>
            <p className="text-gray-600 text-sm sm:text-base">User Satisfaction</p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}