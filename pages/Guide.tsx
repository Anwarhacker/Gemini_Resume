import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/common/MaterialIcon';

const Guide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      {/* <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <MaterialIcon name="description" className="text-primary text-3xl fill" />
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">ResumeBuilder Guide</h1>
            </Link>
            <div className="flex gap-3">
              <Link to="/editor" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold transition-colors">
                <MaterialIcon name="edit" />
                Open Editor
              </Link>
              <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 font-semibold transition-colors">
                <MaterialIcon name="home" />
                Home
              </Link>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MaterialIcon name="menu_book" className="text-6xl mb-4 fill" />
          <h2 className="text-4xl font-extrabold mb-4">How to Use ResumeBuilder</h2>
          <p className="text-xl text-blue-100">A comprehensive guide to creating your perfect resume</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Getting Started */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MaterialIcon name="rocket_launch" className="text-primary text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Getting Started</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              Welcome to ResumeBuilder! Follow these simple steps to create your professional resume:
            </p>
            <ol className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong>Fill in your information</strong> - Navigate through each section (Personal Info, Education, Experience, etc.) and enter your details
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong>Choose a template</strong> - Select from 20+ professional templates in the preview panel
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong>Customize appearance</strong> - Pick your preferred font style (Sans, Serif, or Mono)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong>Download or Print</strong> - Export your resume as PDF or print it directly
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Editor Sections */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
              <MaterialIcon name="edit_note" className="text-green-600 dark:text-green-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Editor Sections</h3>
          </div>
          <div className="grid gap-6">
            {/* Personal Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="person" className="text-primary text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Personal Info</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Add your basic information including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                <li>Full Name & Job Title</li>
                <li>Contact details (Email, Phone)</li>
                <li>Location (City, Country)</li>
                <li>Profile Photo (Optional)</li>
              </ul>
            </div>

            {/* Professional Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="edit" className="text-purple-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Professional Summary</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Write a compelling 2-3 sentence summary highlighting your key skills, experience, and career objectives. This is your elevator pitch!
              </p>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="school" className="text-blue-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Education</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                List your educational qualifications:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                <li>School/University name</li>
                <li>Degree and major</li>
                <li>Start and end dates</li>
                <li>GPA/Grade (Optional)</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="star" className="text-yellow-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Skills</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Add your technical and soft skills. Use keywords relevant to your industry. You can organize them by categories or list them individually.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="work" className="text-indigo-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Work Experience</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Document your professional experience:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                <li>Company name and location</li>
                <li>Job title and employment dates</li>
                <li>Key responsibilities and achievements</li>
                <li>Use action verbs and quantify results when possible</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="rocket_launch" className="text-orange-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Projects</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Showcase your notable projects:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                <li>Project title and description</li>
                <li>Technologies used</li>
                <li>Project link or GitHub repository</li>
                <li>Impact and outcomes</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="verified" className="text-emerald-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Add professional certifications including the certification name, issuing organization, year obtained, and credential URL if available.
              </p>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="translate" className="text-pink-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Languages</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                List languages you speak and your proficiency level (e.g., Native, Fluent, Intermediate, Basic).
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="share" className="text-cyan-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Social Links</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Add links to your professional profiles (LinkedIn, GitHub, Portfolio, etc.) to help recruiters learn more about you.
              </p>
            </div>
          </div>
        </section>

        {/* Template System */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
              <MaterialIcon name="palette" className="text-purple-600 dark:text-purple-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Template Customization</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Choose from 20+ Professional Templates</h4>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Select a template that best represents your professional style. Each template is designed to be ATS-friendly and visually appealing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white mb-3">Available Templates:</h5>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-green-500 text-sm fill" />
                    Modern, Professional, Prestige
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-green-500 text-sm fill" />
                    Simple, Swiss, Coral, Urban, Onyx
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-green-500 text-sm fill" />
                    Serif, Creative, Clean, Minimalist
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-green-500 text-sm fill" />
                    Compact, Classic, Bold, Executive
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-green-500 text-sm fill" />
                    Elegant, Tech, Academic, Designer
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white mb-3">Font Options:</h5>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="font_download" className="text-primary text-sm" />
                    <strong>Sans:</strong> Clean, modern look (Manrope)
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="font_download" className="text-primary text-sm" />
                    <strong>Serif:</strong> Traditional, professional (Merriweather)
                  </li>
                  <li className="flex items-center gap-2">
                    <MaterialIcon name="font_download" className="text-primary text-sm" />
                    <strong>Mono:</strong> Technical, unique (Roboto Mono)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Management */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <MaterialIcon name="save" className="text-blue-600 dark:text-blue-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Save & Load Data</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MaterialIcon name="save" className="text-green-600 text-2xl fill" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Save Your Data</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Click the <strong className="text-slate-900 dark:text-white">Save</strong> button to export your resume data as a JSON file.
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                  <li>Preserves all your information</li>
                  <li>Easy to back up</li>
                  <li>Can be loaded later to continue editing</li>
                  <li>Share data across devices</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MaterialIcon name="upload_file" className="text-blue-600 text-2xl fill" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Load Your Data</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  Click the <strong className="text-slate-900 dark:text-white">Load</strong> button to import a previously saved JSON file.
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                  <li>Restore your saved resume</li>
                  <li>Continue editing from where you left off</li>
                  <li>Import resume data from backup</li>
                  <li>Maintain multiple resume versions</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>💡 Tip:</strong> Save your data regularly to avoid losing your work. Your data is also automatically saved in your browser's local storage.
              </p>
            </div>
          </div>
        </section>

        {/* Export Options */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
              <MaterialIcon name="download" className="text-red-600 dark:text-red-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Export Your Resume</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="picture_as_pdf" className="text-red-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Download PDF</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Get a high-quality PDF version of your resume:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                <li>Professional formatting preserved</li>
                <li>Ready to submit to employers</li>
                <li>ATS-friendly format</li>
                <li>Includes all styling and colors</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors">
                <MaterialIcon name="download" />
                Download PDF
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MaterialIcon name="print" className="text-slate-600 text-2xl fill" />
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Print Resume</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Print your resume directly from the browser:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 ml-4">
                <li>Opens print-ready view</li>
                <li>Optimized for A4 paper</li>
                <li>Perfect for physical copies</li>
                <li>Print to PDF option available</li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-slate-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-700 transition-colors">
                <MaterialIcon name="print" />
                Print Resume
              </button>
            </div>
          </div>
        </section>

        {/* View Controls */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
              <MaterialIcon name="visibility" className="text-indigo-600 dark:text-indigo-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">View Options</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              On desktop, you can toggle between different view modes for optimal workflow:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MaterialIcon name="edit" className="text-primary" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Editor Only</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Focus on filling in your information without distractions. Best for data entry.
                </p>
              </div>
              <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MaterialIcon name="visibility" className="text-primary" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Preview Only</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  View your resume in full screen to check formatting and appearance.
                </p>
              </div>
              <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MaterialIcon name="width_wide" className="text-primary" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Both Views</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  See both editor and preview side-by-side for real-time updates as you type.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>📱 Mobile:</strong> On mobile devices, use the Editor/Preview tabs at the top to switch between editing and viewing your resume.
              </p>
            </div>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
              <MaterialIcon name="tips_and_updates" className="text-yellow-600 dark:text-yellow-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Tips & Best Practices</h3>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MaterialIcon name="check_circle" className="text-green-500 text-2xl flex-shrink-0 fill" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keep it concise</h4>
                  <p className="text-slate-600 dark:text-slate-300">Aim for 1-2 pages. Recruiters spend an average of 6 seconds scanning a resume.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MaterialIcon name="check_circle" className="text-green-500 text-2xl flex-shrink-0 fill" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Use action verbs</h4>
                  <p className="text-slate-600 dark:text-slate-300">Start bullet points with strong action verbs like "Led," "Developed," "Managed," "Achieved."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MaterialIcon name="check_circle" className="text-green-500 text-2xl flex-shrink-0 fill" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Quantify achievements</h4>
                  <p className="text-slate-600 dark:text-slate-300">Include numbers and metrics where possible (e.g., "Increased sales by 30%" or "Managed team of 10").</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MaterialIcon name="check_circle" className="text-green-500 text-2xl flex-shrink-0 fill" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tailor for each job</h4>
                  <p className="text-slate-600 dark:text-slate-300">Customize your resume for each application by highlighting relevant skills and experiences.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MaterialIcon name="check_circle" className="text-green-500 text-2xl flex-shrink-0 fill" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Proofread carefully</h4>
                  <p className="text-slate-600 dark:text-slate-300">Check for typos, grammar errors, and formatting consistency before submitting.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MaterialIcon name="check_circle" className="text-green-500 text-2xl flex-shrink-0 fill" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Use the Autofill feature</h4>
                  <p className="text-slate-600 dark:text-slate-300">Test different templates quickly by using the Autofill button to populate sample data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
              <MaterialIcon name="bolt" className="text-slate-600 dark:text-slate-400 text-3xl fill" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Quick Reference</h3>
          </div>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <MaterialIcon name="auto_awesome" className="text-indigo-600" />
                  Autofill
                </h4>
                <p className="text-slate-600 dark:text-slate-300">Populate with sample data to see how templates look</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <MaterialIcon name="delete_sweep" className="text-red-600" />
                  Clear
                </h4>
                <p className="text-slate-600 dark:text-slate-300">Remove all data and start fresh</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <MaterialIcon name="upload_file" className="text-blue-600" />
                  Load
                </h4>
                <p className="text-slate-600 dark:text-slate-300">Import previously saved JSON data</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <MaterialIcon name="save" className="text-green-600" />
                  Save
                </h4>
                <p className="text-slate-600 dark:text-slate-300">Export your resume data as JSON file</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Resume?</h3>
            <p className="text-xl text-blue-100 mb-8">Start building your professional resume now!</p>
            <Link to="/editor" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-bold text-lg transition-colors shadow-xl">
              <MaterialIcon name="edit" />
              Open Resume Editor
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 ResumeBuilder. Create your perfect resume today!</p>
        </div>
      </footer>
    </div>
  );
};

export default Guide;
