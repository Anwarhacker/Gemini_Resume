import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Shield className="w-16 h-16 mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">Last updated: December 9, 2025</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 lg:p-10 shadow-sm border border-slate-200">
          <div className="prose prose-slate max-w-none">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At ResumeCraft AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our resume building platform.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Personal information (name, email, phone number, address)</li>
                <li>Professional information (work history, education, skills)</li>
                <li>Resume content and formatting preferences</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Provide and improve our resume building services</li>
                <li>Generate AI-powered content suggestions</li>
                <li>Save your resume data locally in your browser</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Send important updates about our service (with your consent)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-blue-600" />
                Data Storage
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Your resume data is primarily stored locally in your browser's storage. This means your information stays on your device and is not automatically uploaded to our servers. When you use AI features, only necessary information is sent to our AI service provider (Google Gemini) to generate suggestions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Access and download your resume data</li>
                <li>Delete your resume data at any time</li>
                <li>Opt-out of analytics tracking</li>
                <li>Request clarification about our data practices</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
              <p className="text-slate-600 leading-relaxed">
                We use Google Gemini AI for content generation. When you use AI features, your job title and experience information may be sent to Google's servers. Please refer to Google's Privacy Policy for information about how they handle data.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@resumecraft.ai" className="text-blue-600 font-semibold hover:underline">privacy@resumecraft.ai</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
