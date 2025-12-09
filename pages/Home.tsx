import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Layout, Download, Edit3, Eye, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-300 blur-3xl"></div>
           <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-indigo-300 blur-3xl"></div>
           <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-purple-200 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                v2.0 Now Available with AI
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Professional Resume</span> in Minutes
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl lg:max-w-lg leading-relaxed">
                Build ATS-optimized resumes with our AI-powered platform. Choose from 18+ professionally designed templates and get hired faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/editor" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <Edit3 className="w-5 h-5" />
                  Start Building for Free
                </Link>
                <Link 
                  to="/templates" 
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all"
                >
                  <Eye className="w-5 h-5" />
                  View Templates
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ATS Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>18+ Templates</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="https://cdn.dribbble.com/userupload/15462441/file/original-2197c874376195fe4eff8644936f7ab2.png?format=webp&resize=800x600&vertical=center" 
                    alt="Resume Builder Interface" 
                    className="w-full h-auto rounded-xl"
                  />
               </div>
               {/* Floating Badge */}
               <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm flex items-center gap-2">
                 <Sparkles className="w-4 h-4" />
                 AI Powered
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 text-lg">Create your professional resume in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Template</h3>
              <p className="text-slate-600">Pick from 18+ professionally designed, ATS-friendly templates</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fill Your Info</h3>
              <p className="text-slate-600">Add your details with AI-powered suggestions and live preview</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Download PDF</h3>
              <p className="text-slate-600">Export your resume as a high-quality PDF, ready to send</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Everything you need to get hired</h2>
            <p className="text-slate-600 text-lg">Our platform provides all the tools required to build a standout resume that passes ATS screening and impresses recruiters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Writing</h3>
              <p className="text-slate-600 leading-relaxed">Stuck on words? Our Gemini AI integration helps generate professional summaries and skill lists tailored to your job title.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                <Layout className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Real-time Preview</h3>
              <p className="text-slate-600 leading-relaxed">See changes instantly as you type. No more guessing how your resume will look. WYSIWYG editing at its finest.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                <Download className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant PDF Export</h3>
              <p className="text-slate-600 leading-relaxed">Download your resume in high-quality PDF format. Ready to email or upload to job portals immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-black leading-tight">Ready to Land Your Dream Job?</h2>
            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully created professional resumes with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                to="/editor" 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-blue-600 bg-white rounded-xl hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <Edit3 className="w-5 h-5" />
                Create Your Resume Now
              </Link>
              <Link 
                to="/templates" 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all"
              >
                <Eye className="w-5 h-5" />
                Explore Templates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;