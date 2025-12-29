import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Users, Image, Video } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#028383]/5 via-white to-teal-50 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-[#028383]/10 rounded-full"
            >
              <span className="text-[#028383]">Welcome to 4um</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 sm:mb-6 text-gray-900"
            >
              Connect with
              <span className="block text-[#028383]">Like-Minded Individuals</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 sm:mb-8 text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              4um is a social media platform where communities thrive. Share pictures, videos,
              and stories while connecting with people who share your passions. The foundation
              of a future Social Media SuperApp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-[#028383] text-white px-8 py-4 rounded-full hover:bg-[#016969] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#028383] text-[#028383] px-8 py-4 rounded-full hover:bg-[#028383] hover:text-white transition-all duration-300">
                Explore Communities
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8"
            >
              {/* <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl text-[#028383]">10M+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl text-[#028383]">500K+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Communities</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl text-[#028383]">50M+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Posts Daily</div>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761957374132-a5137e99f26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NTcyNDQ2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#028383]" />
                  <span className="text-sm sm:text-base">Communities</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow mt-6 sm:mt-12"
              >
                <div className="aspect-square relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1645848977702-69fa784ea954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdG9yfGVufDF8fHx8MTc2NTc5ODk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Creators"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Image className="w-4 h-4 sm:w-5 sm:h-5 text-[#028383]" />
                  <span className="text-sm sm:text-base">Share Media</span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow col-span-2"
              >
                <div className="aspect-[2/1] relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760574764070-1355efaa056c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZyaWVuZHMlMjBjb25uZWN0aW9ufGVufDF8fHx8MTc2NTc5ODk1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Connect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#028383]" />
                  <span className="text-sm sm:text-base">Connect & Share</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-32 sm:w-64 h-32 sm:h-64 bg-[#028383]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-teal-300/20 rounded-full blur-3xl" />
    </section>
  );
}