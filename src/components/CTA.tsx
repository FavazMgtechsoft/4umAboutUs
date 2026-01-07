import { motion } from 'framer-motion';
import { ArrowRight, Apple, PlayCircle, Globe } from 'lucide-react';

export function CTA() {
  return (
    <section id="cta" className="bg-white relative overflow-hidden" style={{ display:'flex',position:'fixed',width:'100%',zIndex:9,marginTop:'80px' }}>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#028383]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-300/20 rounded-full blur-3xl" />
      
      <div className="relative z-10" style={{width:'100%'}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#028383] via-teal-600 to-cyan-600  p-1 sm:p-1 text-white relative overflow-hidden" style={{borderRadius:"0px 0px 15px 15px"}}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 sm:w-48 h-32 sm:h-48 border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 border border-white rounded-full" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white text-xl sm:text-2xl mb-3">Join the 4um Community</h4>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
              >
                <a 
                  href="https://apps.apple.com/us/app/4um/id6505145871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto bg-white text-[#028383] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl text-sm"
                >
                  <Apple className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on</div>
                    <div className="text-xs font-semibold">App Store</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.whiteknight.forum&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto bg-white text-[#028383] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl text-sm"
                >
                  <PlayCircle className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-xs font-semibold">Google Play</div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://4um.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#028383] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Web App</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white/80 text-xs"
              >
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Free to Join</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>10M+ Users</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Available Worldwide</span>
                </div>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}