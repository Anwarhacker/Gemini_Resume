import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Layout, Download } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-30">
           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200 blur-3xl"></div>
           <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-indigo-200 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                v2.0 Now Available with AI
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Professional Resume</span> in 5 Minutes
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Use our ATS-optimized builder to land your dream job. Choose from professionally designed templates and let AI help you write the perfect summary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/editor" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Start Building for Free
                </Link>
                <Link to="/templates" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition-all">
                  View Templates
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium pt-4">
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> ATS Friendly</div>
                <div className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> No Credit Card</div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                  <img 
                    src="https://cdn.dribbble.com/userupload/15462441/file/original-2197c874376195fe4eff8644936f7ab2.png?format=webp&resize=800x600&vertical=center" 
                    alt="Resume Builder Interface" 
                    className="w-full h-auto rounded-xl"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to get hired</h2>
            <p className="text-slate-600">Our platform provides all the tools required to build a standout resume that passes screening software and impresses recruiters.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Writing</h3>
              <p className="text-slate-600 leading-relaxed">Stuck on words? Our Gemini AI integration helps generate professional summaries and skill lists tailored to your job title.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Real-time Preview</h3>
              <p className="text-slate-600 leading-relaxed">See changes instantly as you type. No more guessing how your resume will look. WYSIWYG editing at its finest.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant PDF Export</h3>
              <p className="text-slate-600 leading-relaxed">Download your resume in high-quality PDF format. Ready to email or upload to job portals immediately.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;