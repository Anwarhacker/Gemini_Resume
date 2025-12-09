import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MaterialIcon } from '../components/common/MaterialIcon';
import { useResume } from '../hooks/useResume';
import { usePDFExport } from '../hooks/usePDFExport';

// Import Components
import ResumePreview from '../components/editor/ResumePreview';
import FinalReview from '../components/editor/FinalReview';
import PersonalForm from '../components/editor/forms/PersonalForm';
import SummaryForm from '../components/editor/forms/SummaryForm';
import EducationForm from '../components/editor/forms/EducationForm';
import SkillsForm from '../components/editor/forms/SkillsForm';
import ExperienceForm from '../components/editor/forms/ExperienceForm';
import ProjectsForm from '../components/editor/forms/ProjectsForm';
import CertificationsForm from '../components/editor/forms/CertificationsForm';
import LanguagesForm from '../components/editor/forms/LanguagesForm';
import SocialForm from '../components/editor/forms/SocialForm';

const steps = [
  { id: 'personal', label: 'Personal Info', icon: 'check_circle' },
  { id: 'summary', label: 'Professional Summary', icon: 'edit' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'skills', label: 'Skills', icon: 'star' },
  { id: 'experience', label: 'Experience', icon: 'work' },
  { id: 'projects', label: 'Projects', icon: 'rocket_launch' },
  { id: 'certifications', label: 'Certifications', icon: 'verified' },
  { id: 'languages', label: 'Languages', icon: 'translate' },
  { id: 'social', label: 'Social Links', icon: 'share' },
  { id: 'review', label: 'Final Review', icon: 'flag' },
];

const availableTemplates = [
    { id: 'modern', name: 'Modern', color: 'bg-slate-800' },
    { id: 'simple', name: 'Simple', color: 'bg-slate-400' },
    { id: 'swiss', name: 'Swiss', color: 'bg-red-600' },
    { id: 'coral', name: 'Coral', color: 'bg-orange-400' },
    { id: 'urban', name: 'Urban', color: 'bg-stone-500' },
    { id: 'onyx', name: 'Onyx', color: 'bg-slate-900' },
    { id: 'serif', name: 'Serif', color: 'bg-amber-700' },
    { id: 'creative', name: 'Creative', color: 'bg-blue-600' },
    { id: 'clean', name: 'Clean', color: 'bg-slate-200 border border-slate-400' },
    { id: 'minimalist', name: 'Minimalist', color: 'bg-emerald-600' },
    { id: 'compact', name: 'Compact', color: 'bg-slate-600' },
    { id: 'classic', name: 'Classic', color: 'bg-indigo-900' },
    { id: 'bold', name: 'Bold', color: 'bg-black' },
    { id: 'executive', name: 'Executive', color: 'bg-slate-900' },
    { id: 'elegant', name: 'Elegant', color: 'bg-[#fdfbf7] border border-slate-300' },
    { id: 'tech', name: 'Tech', color: 'bg-teal-600' },
    { id: 'academic', name: 'Academic', color: 'bg-gray-500' },
    { id: 'designer', name: 'Designer', color: 'bg-pink-500' }
];

const fontOptions = [
    { id: 'sans', label: 'Sans', class: 'font-sans' },
    { id: 'serif', label: 'Serif', class: 'font-serif' },
    { id: 'mono', label: 'Mono', class: 'font-mono' }
];

const Editor: React.FC = () => {
  // Use Custom Hooks
  const { 
    resumeData, 
    updateResume, 
    loadDemoData, 
    clearResumeData, 
    setTemplate,
    setFont,
    importJson 
  } = useResume();
  
  const { downloadPDF, isGenerating } = usePDFExport();

  const [currentStep, setCurrentStep] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [previewScale, setPreviewScale] = useState(0.65);
  const [mobileTab, setMobileTab] = useState<'edit'|'preview'>('edit');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Sync URL template param with state
  useEffect(() => {
    const templateId = searchParams.get('template');
    if (templateId && templateId !== resumeData.templateId) {
        setTemplate(templateId);
    } else if (resumeData.templateId && !templateId) {
        setSearchParams({ template: resumeData.templateId });
    }
  }, [searchParams, resumeData.templateId, setTemplate, setSearchParams]);

  // Robust Scale Logic using ResizeObserver
  useEffect(() => {
    if (!previewContainerRef.current) return;

    const calculateScale = () => {
        if (!previewContainerRef.current) return;
        const containerWidth = previewContainerRef.current.clientWidth;
        const padding = 64; // p-8 * 2
        const availableWidth = containerWidth - padding;
        const a4WidthPx = 794; // approx width of A4 at 96dpi
        
        let newScale = availableWidth / a4WidthPx;
        // Clamp scale to reasonable limits
        newScale = Math.min(Math.max(newScale, 0.3), 1.0);
        setPreviewScale(newScale);
    };

    const resizeObserver = new ResizeObserver(() => {
        calculateScale();
    });

    resizeObserver.observe(previewContainerRef.current);
    calculateScale(); // Initial call

    return () => resizeObserver.disconnect();
  }, []);

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `${resumeData.personalInfo.fullName.replace(/\s+/g, '_') || 'resume'}_data.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = e => {
            if (e.target?.result) {
                const success = importJson(e.target.result as string);
                if (success) {
                    alert("Resume data loaded successfully!");
                } else {
                    alert("Invalid file structure.");
                }
            }
        };
        event.target.value = '';
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0: return <PersonalForm data={resumeData} update={updateResume} />;
      case 1: return <SummaryForm data={resumeData} update={updateResume} />;
      case 2: return <EducationForm data={resumeData} update={updateResume} />;
      case 3: return <SkillsForm data={resumeData} update={updateResume} />;
      case 4: return <ExperienceForm data={resumeData} update={updateResume} />;
      case 5: return <ProjectsForm data={resumeData} update={updateResume} />;
      case 6: return <CertificationsForm data={resumeData} update={updateResume} />;
      case 7: return <LanguagesForm data={resumeData} update={updateResume} />;
      case 8: return <SocialForm data={resumeData} update={updateResume} />;
      case 9: return <FinalReview data={resumeData} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-background-dark overflow-hidden">
        {/* Sticky Top Bar */}
        <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-between px-4 lg:px-6 z-50">
            <div className="flex items-center gap-3 md:gap-4">
                <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:bg-slate-100 hover:text-primary dark:text-slate-400 dark:hover:bg-slate-800 transition-colors" title="Back to Home">
                    <MaterialIcon name="home" />
                </Link>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
                <Link to="/" className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    <MaterialIcon name="description" className="text-primary fill" /> 
                    <span className="hidden md:inline">ResumeBuilder</span>
                </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
                 <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImportJSON} 
                    className="hidden" 
                    accept=".json" 
                 />
                 
                 <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 mr-2 hidden md:flex">
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 px-3 py-1.5 text-slate-600 hover:text-slate-900 text-sm font-semibold hover:bg-white rounded-md transition-all"
                        title="Load data from JSON"
                    >
                        <MaterialIcon name="upload_file" className="text-[18px]" /> Load
                    </button>
                    <button 
                        onClick={handleExportJSON}
                        className="flex items-center gap-2 px-3 py-1.5 text-slate-600 hover:text-slate-900 text-sm font-semibold hover:bg-white rounded-md transition-all"
                        title="Save data as JSON"
                    >
                        <MaterialIcon name="save" className="text-[18px]" /> Save
                    </button>
                 </div>

                 <button 
                    onClick={loadDemoData}
                    className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 text-sm font-semibold transition-colors active:bg-indigo-200"
                    title="Autofill with sample data"
                 >
                    <MaterialIcon name="auto_awesome" className="text-[18px]" /> <span className="hidden sm:inline">Autofill</span>
                 </button>
                 <button 
                    onClick={clearResumeData}
                    className="flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-red-600 text-sm font-semibold transition-colors hover:bg-red-50 rounded-lg"
                    title="Clear all fields"
                 >
                    <MaterialIcon name="delete_sweep" className="text-[18px]" /> <span className="hidden sm:inline">Clear</span>
                 </button>
                 <button 
                    onClick={() => downloadPDF('resume-preview', resumeData)} 
                    disabled={isGenerating}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 text-sm font-bold shadow-sm transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-wait"
                 >
                    {isGenerating ? (
                        <>
                           <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                           <span className="hidden sm:inline">Processing...</span>
                        </>
                    ) : (
                        <>
                           <MaterialIcon name="download" className="text-[18px]" /> <span className="hidden xs:inline">Download PDF</span>
                        </>
                    )}
                 </button>
            </div>
        </header>

        <div className="flex flex-1 overflow-hidden relative">
            {/* Left Sidebar Steps */}
            <aside className={`w-72 border-r border-gray-200 bg-white dark:bg-gray-900 flex-col overflow-y-auto hidden lg:flex z-30`}>
                <div className="p-6">
                   <div className="flex gap-3 items-center mb-6">
                        <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-primary font-bold">
                            {resumeData.personalInfo.fullName ? resumeData.personalInfo.fullName.charAt(0).toUpperCase() : 'JD'}
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-slate-900 font-bold text-sm truncate">{resumeData.personalInfo.fullName || 'John Doe'}</h1>
                            <p className="text-slate-500 text-xs truncate">{resumeData.personalInfo.email || 'john.doe@email.com'}</p>
                        </div>
                   </div>
                   <nav className="flex flex-col gap-1">
                      {steps.map((step, index) => {
                          const active = index === currentStep;
                          return (
                              <button key={step.id} onClick={() => setCurrentStep(index)} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:bg-slate-50'}`}>
                                  <MaterialIcon name={step.icon} className={`text-[20px] ${active ? 'fill' : ''}`} />
                                  {step.label}
                              </button>
                          )
                      })}
                   </nav>
                </div>
            </aside>

            {/* Mobile Tab Toggle */}
            <div className="lg:hidden absolute top-0 left-0 right-0 h-12 bg-white border-b border-gray-200 flex z-40">
                <button onClick={() => setMobileTab('edit')} className={`flex-1 font-bold text-sm ${mobileTab === 'edit' ? 'text-primary border-b-2 border-primary' : 'text-slate-500'}`}>Editor</button>
                <button onClick={() => setMobileTab('preview')} className={`flex-1 font-bold text-sm ${mobileTab === 'preview' ? 'text-primary border-b-2 border-primary' : 'text-slate-500'}`}>Preview</button>
            </div>

            {/* Middle Form Area */}
            <main className={`flex-1 overflow-y-auto p-4 lg:p-12 lg:pb-24 bg-white dark:bg-background-dark ${mobileTab === 'preview' ? 'hidden lg:block' : 'block'} mt-12 lg:mt-0`}>
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">{steps[currentStep].label}</h2>
                        <p className="text-slate-500">Fill in the details below. They will automatically appear in the preview.</p>
                        
                        {/* Mobile Save/Load controls */}
                        <div className="md:hidden flex gap-2 mt-4">
                             <button 
                                onClick={() => fileInputRef.current?.click()}
                                className="flex items-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold"
                             >
                                <MaterialIcon name="upload_file" className="text-[16px]" /> Load Data
                            </button>
                             <button 
                                onClick={handleExportJSON}
                                className="flex items-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold"
                             >
                                <MaterialIcon name="save" className="text-[16px]" /> Save Data
                            </button>
                        </div>
                    </div>
                    
                    {renderStep()}

                    {/* Nav Buttons */}
                    <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
                        <button 
                            disabled={currentStep === 0} 
                            onClick={() => setCurrentStep(p => p - 1)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-slate-700 font-bold text-sm hover:bg-gray-200 disabled:opacity-50"
                        >
                            <MaterialIcon name="arrow_back" /> Back
                        </button>
                        <button 
                            disabled={currentStep === steps.length - 1}
                            onClick={() => setCurrentStep(p => p + 1)}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 disabled:opacity-50"
                        >
                            Next Step <MaterialIcon name="arrow_forward" />
                        </button>
                    </div>
                </div>
            </main>

            {/* Right Live Preview Area */}
            <aside ref={previewContainerRef} className={`w-full lg:w-[450px] xl:w-[550px] bg-slate-100 dark:bg-gray-900 flex flex-col border-l border-gray-200 ${mobileTab === 'edit' ? 'hidden lg:flex' : 'flex'} mt-12 lg:mt-0 h-full overflow-hidden`}>
                
                {/* Template & Font Toolbar */}
                <div className="p-4 border-b border-gray-200 bg-white dark:bg-gray-800 z-10 flex flex-col gap-4 shadow-sm">
                    {/* Template Selector */}
                    <div className="flex flex-col gap-2">
                         <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Select Template</h3>
                         <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {availableTemplates.map(t => (
                                <button 
                                    key={t.id} 
                                    onClick={() => setTemplate(t.id)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap border transition-all ${resumeData.templateId === t.id ? 'bg-primary text-white border-primary shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                                >
                                    <span className={`w-3 h-3 rounded-full ${t.color}`}></span>
                                    {t.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Font Selector */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Typography</h3>
                        <div className="flex p-1 bg-slate-100 rounded-lg w-full">
                            {fontOptions.map(f => (
                                <button
                                    key={f.id}
                                    onClick={() => setFont(f.id as any)}
                                    className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                                        (resumeData.font || 'sans') === f.id 
                                        ? 'bg-white text-primary shadow-sm ring-1 ring-black/5' 
                                        : 'text-slate-500 hover:text-slate-700'
                                    } ${f.class}`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-8 flex justify-center bg-slate-100/50 dark:bg-gray-900 custom-scrollbar">
                    <ResumePreview data={resumeData} scale={previewScale} />
                </div>
            </aside>
        </div>
    </div>
  );
};

export default Editor;
