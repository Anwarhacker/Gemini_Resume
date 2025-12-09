import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Mail, FileText, Zap } from 'lucide-react';

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <HelpCircle className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Help Center</h1>
          <p className="text-lg text-slate-600">Find answers to common questions and learn how to make the most of ResumeCraft AI</p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">How do I create a resume?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Click on "Create Resume" in the navigation menu or the homepage. Choose a template, fill in your information step by step, and download your resume as a PDF when you're done.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Is ResumeCraft AI really free?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes! ResumeCraft AI is completely free to use. You can create, edit, and download your resume without any payment or credit card required.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">What does ATS-friendly mean?</h3>
                <p className="text-slate-600 leading-relaxed">
                  ATS (Applicant Tracking System) is software used by companies to scan resumes. Our templates are designed to be easily readable by these systems, increasing your chances of getting past the initial screening.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">How does the AI feature work?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our Gemini AI integration helps you write professional summaries based on your job title and experience. Simply click the "AI Suggest Summary" button and let AI generate content for you.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Can I save my resume and come back later?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes! Your resume data is automatically saved in your browser's local storage. You can also export your data as JSON and import it later.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">How many templates are available?</h3>
                <p className="text-slate-600 leading-relaxed">
                  We offer 18+ professionally designed templates suitable for various industries and career levels, from entry-level to executive positions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-6 lg:p-8 text-white">
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                <p className="text-blue-100 mb-4">
                  Can't find what you're looking for? Our support team is here to help you.
                </p>
                <a 
                  href="mailto:support@resumecraft.ai" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/templates" className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Browse Templates</h3>
              <p className="text-slate-600">Explore our collection of professional resume templates</p>
            </Link>
            <Link to="/editor" className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <Zap className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Start Building</h3>
              <p className="text-slate-600">Create your professional resume in minutes</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
