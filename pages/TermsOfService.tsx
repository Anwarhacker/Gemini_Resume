import React from 'react';
import { FileText, CheckCircle, XCircle, Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Scale className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-600">Last updated: December 9, 2025</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 lg:p-10 shadow-sm border border-slate-200">
          <div className="prose prose-slate max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using ResumeCraft, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                2. Use License
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Permission is granted to temporarily use ResumeCraft for personal, non-commercial purposes. This includes the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Create and edit resumes using our platform</li>
                <li>Download resumes in PDF format</li>
                <li>Use AI-powered features for content generation</li>
                <li>Save and export your resume data</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-600" />
                3. Restrictions
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                You are specifically restricted from:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Selling, sublicensing, or commercializing any service materials</li>
                <li>Using the service in any unlawful or harmful manner</li>
                <li>Attempting to reverse engineer or copy the service</li>
                <li>Removing copyright or proprietary notations</li>
                <li>Using the service to create resumes for others as a commercial service</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Content</h2>
              <p className="text-slate-600 leading-relaxed">
                You retain all rights to the content you create using ResumeCraft. By using our service, you grant us permission to process your information to provide AI-powered suggestions and service improvements. We do not claim ownership of your resume content.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. AI-Generated Content</h2>
              <p className="text-slate-600 leading-relaxed">
                Our AI features are provided to assist you in creating content. However, you are solely responsible for reviewing, editing, and ensuring the accuracy of all AI-generated suggestions. We do not guarantee the accuracy or suitability of AI-generated content for your specific needs.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">
                ResumeCraft is provided "as is" without any representations or warranties. We do not guarantee that the service will be error-free or uninterrupted. We are not responsible for any employment decisions made based on resumes created using our platform.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall ResumeCraft or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Storage</h2>
              <p className="text-slate-600 leading-relaxed">
                Your resume data is stored locally in your browser. We are not responsible for data loss due to browser cache clearing, device failure, or other technical issues. We recommend regularly exporting your data as a backup.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Modifications</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last updated" date. Continued use of the service after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ResumeCraft operates, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Questions About Terms?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <a href="mailto:legal@resumecraft.ai" className="text-blue-600 font-semibold hover:underline">legal@resumecraft.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
