import React from 'react';

const App = () => {

  const locations = [
    {
      name: "East Legon",
      address: "3 Maseru Avenue",
      phone: "0302211930 / 0509457991"
    },
    {
      name: "Amrahia",
      address: "Next to the tollbooth",
      phone: "0507686007"
    },
    {
      name: "Korle Bu",
      address: "Opposite Korle-Bu Hospital (Main Gate)",
      phone: "0509855803 / 0501518554"
    },
    {
      name: "South Legon",
      address: "N0. 12 Indian Ocean Street",
      phone: "0507686008"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121235] via-[#252e66] to-[#121235] flex flex-col relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
        
        * {
          font-family: 'Ubuntu', sans-serif;
        }
        
        .font-light { font-weight: 300; }
        .font-regular { font-weight: 400; }
        .font-medium { font-weight: 500; }
        .font-bold { font-weight: 700; }
        
        .gradient-text {
          background: linear-gradient(135deg, #00ccff 0%, #80edb2 50%, #66d463 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        .location-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 204, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .location-card:hover {
          background: linear-gradient(135deg, rgba(0, 204, 255, 0.12) 0%, rgba(128, 237, 178, 0.06) 100%);
          border-color: rgba(0, 204, 255, 0.4);
          transform: translateY(-4px);
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - using DCL brand colors */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ccff]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#80edb2]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2250e3]/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(0, 204, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 204, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Medical Icons */}
        <div className="absolute top-20 left-[15%] text-4xl opacity-20 animate-float">🔬</div>
        <div className="absolute top-40 right-[20%] text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🧬</div>
        <div className="absolute bottom-32 left-[25%] text-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🩺</div>
        <div className="absolute bottom-48 right-[15%] text-4xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>💊</div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
        {/* Logo */}
        <div className="mb-10">
          <img 
            src="/logo.png" 
            alt="Diagnostic Centre Limited" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Coming Soon Text */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00ccff]/10 border border-[#00ccff]/30 text-[#00ccff] text-sm font-medium mb-6">
            🚀 Launching Soon
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Something <span className="gradient-text">Amazing</span> is Coming
          </h2>
          <p className="text-lg md:text-xl text-[#ccd1d6] max-w-2xl mx-auto font-light leading-relaxed">
            For over 15 years, Diagnostic Centre Ltd. has delivered accurate, trusted diagnostic services through 
            state-of-the-art facilities in and around Accra. 
            We are now building new centres across Ghana to serve you better, but our focus remains the same: 
            advanced technology, clinical expertise, a focus on patient care and results you can trust
          </p>
        </div>



        {/* Section Title for Locations */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Our Locations</h3>
          <p className="text-[#ccd1d6] font-light">4 branches across Accra to serve you</p>
        </div>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mb-12">
          {locations.map((location, i) => (
            <div key={i} className="location-card rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00ccff] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-1">{location.name}</h4>
              <p className="text-[#ccd1d6] text-sm mb-3 font-light">{location.address}</p>
              <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-[#00ccff] hover:text-[#80edb2] text-sm font-medium transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {location.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
          {/* Email */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#00ccff]/20 rounded-2xl p-6 text-center hover:bg-[#00ccff]/5 transition-all group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00ccff]/20 to-[#2250e3]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-[#00ccff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
            <p className="text-[#ccd1d6] text-sm leading-relaxed font-light">
              <a href="mailto:info@dcl.com.gh" className="hover:text-[#00ccff] transition-colors">info@dclgh.com</a><br />
              
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#00ccff]/20 rounded-2xl p-6 text-center hover:bg-[#00ccff]/5 transition-all group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00ccff]/20 to-[#2250e3]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-[#00ccff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Working Hours</h3>
            <p className="text-[#ccd1d6] text-sm leading-relaxed font-light">
              Monday - Friday: 7:00AM - 8:00PM<br />
              Saturday - Sunday: 9:00AM - 5:00PM
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-[#00ccff]/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#ccd1d6]/60 text-sm font-light">
            © 2025 Diagnostic Centre Limited. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://x.com/dclghana" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#00ccff]/20 flex items-center justify-center text-[#ccd1d6] hover:text-[#00ccff] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/diagnosticcentreltd" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#00ccff]/20 flex items-center justify-center text-[#ccd1d6] hover:text-[#00ccff] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/dclghana/" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#00ccff]/20 flex items-center justify-center text-[#ccd1d6] hover:text-[#00ccff] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/diagnostic-centre-limited/posts/?feedView=all" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#00ccff]/20 flex items-center justify-center text-[#ccd1d6] hover:text-[#00ccff] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
