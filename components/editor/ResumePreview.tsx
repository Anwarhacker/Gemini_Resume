import React, { Suspense } from 'react';
import { ResumeData } from '../../types';
import { ResumeSkeleton } from './ResumeSkeleton';

// Lazy load templates to improve initial load time and support code splitting
const ModernTemplate = React.lazy(() => import('../templates/ModernTemplate').then(m => ({ default: m.ModernTemplate })));
const CreativeTemplate = React.lazy(() => import('../templates/CreativeTemplate').then(m => ({ default: m.CreativeTemplate })));
const MinimalistTemplate = React.lazy(() => import('../templates/MinimalistTemplate').then(m => ({ default: m.MinimalistTemplate })));
const ClassicTemplate = React.lazy(() => import('../templates/ClassicTemplate').then(m => ({ default: m.ClassicTemplate })));
const ExecutiveTemplate = React.lazy(() => import('../templates/ExecutiveTemplate').then(m => ({ default: m.ExecutiveTemplate })));
const TechTemplate = React.lazy(() => import('../templates/TechTemplate').then(m => ({ default: m.TechTemplate })));
const AcademicTemplate = React.lazy(() => import('../templates/AcademicTemplate').then(m => ({ default: m.AcademicTemplate })));
const DesignerTemplate = React.lazy(() => import('../templates/DesignerTemplate').then(m => ({ default: m.DesignerTemplate })));
const SimpleTemplate = React.lazy(() => import('../templates/SimpleTemplate').then(m => ({ default: m.SimpleTemplate })));
const CompactTemplate = React.lazy(() => import('../templates/CompactTemplate').then(m => ({ default: m.CompactTemplate })));
const BoldTemplate = React.lazy(() => import('../templates/BoldTemplate').then(m => ({ default: m.BoldTemplate })));
const ElegantTemplate = React.lazy(() => import('../templates/ElegantTemplate').then(m => ({ default: m.ElegantTemplate })));
const CleanTemplate = React.lazy(() => import('../templates/CleanTemplate').then(m => ({ default: m.CleanTemplate })));
const SwissTemplate = React.lazy(() => import('../templates/SwissTemplate').then(m => ({ default: m.SwissTemplate })));
const CoralTemplate = React.lazy(() => import('../templates/CoralTemplate').then(m => ({ default: m.CoralTemplate })));
const UrbanTemplate = React.lazy(() => import('../templates/UrbanTemplate').then(m => ({ default: m.UrbanTemplate })));
const OnyxTemplate = React.lazy(() => import('../templates/OnyxTemplate').then(m => ({ default: m.OnyxTemplate })));
const SerifTemplate = React.lazy(() => import('../templates/SerifTemplate').then(m => ({ default: m.SerifTemplate })));

const ResumePreview = ({ data, scale = 1 }: { data: ResumeData, scale?: number }) => {
    
    // Define font family strings based on selection
    const fontFamilies = {
        sans: '"Manrope", sans-serif',
        serif: '"Merriweather", serif',
        mono: '"Roboto Mono", monospace'
    };
    
    const selectedFont = fontFamilies[data.font || 'sans'];

    const renderTemplate = () => {
        switch(data.templateId) {
            case 'creative': return <CreativeTemplate data={data} />;
            case 'minimalist': return <MinimalistTemplate data={data} />;
            case 'classic': return <ClassicTemplate data={data} />;
            case 'executive': return <ExecutiveTemplate data={data} />;
            case 'tech': return <TechTemplate data={data} />;
            case 'academic': return <AcademicTemplate data={data} />;
            case 'designer': return <DesignerTemplate data={data} />;
            case 'simple': return <SimpleTemplate data={data} />;
            case 'compact': return <CompactTemplate data={data} />;
            case 'bold': return <BoldTemplate data={data} />;
            case 'elegant': return <ElegantTemplate data={data} />;
            case 'clean': return <CleanTemplate data={data} />;
            case 'swiss': return <SwissTemplate data={data} />;
            case 'coral': return <CoralTemplate data={data} />;
            case 'urban': return <UrbanTemplate data={data} />;
            case 'onyx': return <OnyxTemplate data={data} />;
            case 'serif': return <SerifTemplate data={data} />;
            case 'modern':
            default: return <ModernTemplate data={data} />;
        }
    };

    return (
        <div 
            id="resume-preview" 
            className="bg-white shadow-2xl origin-top mx-auto transition-all duration-300 relative"
            style={{ 
                width: '210mm', 
                minHeight: '297mm', 
                transform: `scale(${scale})`,
                transformOrigin: 'top center'
            }}
        >
            <style>
            {`
                #resume-preview, #resume-preview * {
                   font-family: ${selectedFont} !important;
                }
                /* Exclude icons from font override */
                #resume-preview .material-symbols-outlined {
                   font-family: 'Material Symbols Outlined' !important;
                }
            `}
            </style>
            <Suspense fallback={<ResumeSkeleton />}>
                {renderTemplate()}
            </Suspense>
        </div>
    )
}

export default ResumePreview;