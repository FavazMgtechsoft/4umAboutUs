import { motion } from 'framer-motion';
import { Rocket, Network, Zap, Globe2, Sparkles, ArrowUpRight } from 'lucide-react';

const roadmapItems = [
  {
    icon: Network,
    title: 'Multi-Platform Integration',
    description: 'Seamlessly connect with other social platforms within the 4um ecosystem.',
    status: 'In Progress',
    color: 'bg-green-500',
  },
  {
    icon: Zap,
    title: 'AI-Powered Discovery',
    description: 'Smart recommendations that help you find communities and content you love.',
    status: 'Coming Soon',
    color: 'bg-blue-500',
  },
  {
    icon: Globe2,
    title: 'Global Expansion',
    description: 'Localized experiences in 50+ languages across 200+ countries.',
    status: 'Q1 2025',
    color: 'bg-purple-500',
  },
  {
    icon: Sparkles,
    title: 'Creator Monetization',
    description: 'Enhanced tools for creators to earn from their content and community.',
    status: 'Q2 2025',
    color: 'bg-orange-500',
  },
];

export function Future() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-[#028383]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[#028383] uppercase tracking-wider text-sm">What's Next</span>
          <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">The Future of 4um</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're just getting started. Here's a glimpse into the innovations and expansions that
            will transform 4um into the ultimate Social Media SuperApp.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="relative bg-gradient-to-br from-[#028383] via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-4xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-white mb-4 sm:mb-6">The SuperApp Ecosystem</h3>
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                Imagine a world where all your social needs are met in one place. 4um is building
                that future—a unified ecosystem where communities, content, and connections flow
                seamlessly across platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-white/90">One login, multiple platforms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-white/90">Unified experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-white/90">Infinite possibilities</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roadmap */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-[#028383]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color.replace('bg-', 'text-')}`} />
                </div>
                <span className={`px-3 py-1.5 ${item.color} bg-opacity-10 ${item.color.replace('bg-', 'text-')} rounded-full text-xs sm:text-sm`}>
                  {item.status}
                </span>
              </div>
              <h4 className="text-gray-900 mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-gray-900 text-center mb-8 sm:mb-12">Upcoming Features</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#028383]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="w-5 h-5 text-[#028383]" />
                <h5 className="text-gray-900">Live Streaming</h5>
              </div>
              <p className="text-gray-600 text-sm">Connect with your community in real-time</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#028383]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="w-5 h-5 text-[#028383]" />
                <h5 className="text-gray-900">Marketplace</h5>
              </div>
              <p className="text-gray-600 text-sm">Buy, sell, and trade within communities</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#028383]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="w-5 h-5 text-[#028383]" />
                <h5 className="text-gray-900">Events Platform</h5>
              </div>
              <p className="text-gray-600 text-sm">Host and discover community events</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#028383]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="w-5 h-5 text-[#028383]" />
                <h5 className="text-gray-900">Collaborative Spaces</h5>
              </div>
              <p className="text-gray-600 text-sm">Work together on projects and ideas</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#028383]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="w-5 h-5 text-[#028383]" />
                <h5 className="text-gray-900">Advanced Analytics</h5>
              </div>
              <p className="text-gray-600 text-sm">Deep insights for creators and brands</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-[#028383]/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="w-5 h-5 text-[#028383]" />
                <h5 className="text-gray-900">NFT Integration</h5>
              </div>
              <p className="text-gray-600 text-sm">Showcase and trade digital collectibles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}