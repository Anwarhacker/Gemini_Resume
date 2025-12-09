import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const ModernTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-10 h-full flex flex-col font-sans text-slate-900">
            {/* Header */}
            <header className="border-b-2 border-slate-800 pb-6 mb-6">
                <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2">{data.personalInfo.fullName || 'Your Name'}</h1>
                <p className="text-xl text-primary font-medium mb-3">{data.personalInfo.jobTitle || 'Professional Title'}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                    {data.personalInfo.email && <span className="flex items-center gap-1"><MaterialIcon name="mail" className="text-[16px]" />{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span className="flex items-center gap-1"><MaterialIcon name="call" className="text-[16px]" />{data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span className="flex items-center gap-1"><MaterialIcon name="location_on" className="text-[16px]" />{data.personalInfo.city}{data.personalInfo.country ? `, ${data.personalInfo.country}` : ''}</span>}
                    {data.socialLinks.map(l => (
                        <span key={l.id} className="flex items-center gap-1 text-primary"><MaterialIcon name="link" className="text-[16px]" />{l.platform}</span>
                    ))}
                </div>
            </header>

            {/* Summary */}
            {data.summary && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Professional Summary</h3>
                    <p className="text-sm leading-relaxed text-slate-700 text-justify">{data.summary}</p>
                </section>
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map(skill => (
                            <span key={skill.id} className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded font-semibold">{skill.name}</span>
                        ))}
                    </div>
                </section>
            )}

            {/* Experience */}
            {data.experience.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Experience</h3>
                    <div className="space-y-4">
                        {data.experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-slate-800">{exp.position}</h4>
                                    <span className="text-xs font-medium text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                </div>
                                <div className="text-sm font-semibold text-primary mb-1">{exp.company}</div>
                                <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

             {/* Projects */}
             {data.projects.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Projects</h3>
                    <div className="space-y-4">
                        {data.projects.map(proj => (
                            <div key={proj.id}>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-slate-800">{proj.name}</h4>
                                    {proj.link && <span className="text-xs text-primary">{proj.link}</span>}
                                </div>
                                <div className="text-xs font-medium text-slate-500 mb-1">{proj.technologies}</div>
                                <p className="text-sm text-slate-600 leading-relaxed">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Education</h3>
                    <div className="space-y-3">
                        {data.education.map(edu => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-slate-800">{edu.school}</h4>
                                    <span className="text-xs font-medium text-slate-500">{edu.startDate} - {edu.endDate}</span>
                                </div>
                                <div className="text-sm text-slate-700">{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

             {/* Certifications & Languages Grid */}
             <div className="grid grid-cols-2 gap-8">
                 {data.certifications.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Certifications</h3>
                        <ul className="text-sm text-slate-700 space-y-1">
                            {data.certifications.map(cert => (
                                <li key={cert.id} className="flex justify-between">
                                    <span>{cert.name}</span>
                                    <span className="text-slate-500 text-xs">{cert.year}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                 )}
                 {data.languages.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Languages</h3>
                        <ul className="text-sm text-slate-700 space-y-1">
                            {data.languages.map(lang => (
                                <li key={lang.id} className="flex justify-between">
                                    <span>{lang.name}</span>
                                    <span className="text-slate-500 text-xs">{lang.proficiency}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                 )}
             </div>
        </div>
    );
};