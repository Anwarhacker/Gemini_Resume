import React from 'react';
import { ResumeData } from '../../types';

export const CleanTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-10 h-full flex flex-col font-sans text-slate-700 bg-white">
            <header className="mb-8 pb-8 border-b border-slate-100">
                <h1 className="text-3xl font-medium text-slate-900 mb-2">{data.personalInfo.fullName}</h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                    <span className="text-slate-800 font-medium">{data.personalInfo.jobTitle}</span>
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span>{data.personalInfo.city}</span>}
                </div>
            </header>

            <div className="flex gap-10 h-full">
                {/* Main Column */}
                <div className="flex-1 space-y-8">
                     {data.summary && (
                        <section>
                            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">About Me</h3>
                            <p className="text-sm leading-relaxed">{data.summary}</p>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Experience</h3>
                            <div className="space-y-6">
                                {data.experience.map(exp => (
                                    <div key={exp.id}>
                                        <h4 className="font-semibold text-slate-900">{exp.position}</h4>
                                        <div className="text-sm text-slate-500 mb-2">{exp.company} &middot; {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                        <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                    
                    {data.projects.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-wider">Projects</h3>
                            <div className="space-y-4">
                                {data.projects.map(proj => (
                                    <div key={proj.id}>
                                        <h4 className="font-semibold text-slate-900">{proj.name}</h4>
                                        <p className="text-sm text-slate-600 mb-1">{proj.description}</p>
                                        <div className="text-xs text-slate-400">{proj.technologies}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Side Column */}
                <div className="w-48 space-y-8 pt-1">
                    {data.education.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Education</h3>
                            <div className="space-y-4">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <div className="font-semibold text-sm text-slate-900">{edu.school}</div>
                                        <div className="text-xs text-slate-500">{edu.degree}</div>
                                        <div className="text-xs text-slate-400 mt-0.5">{edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Skills</h3>
                            <div className="flex flex-col gap-2">
                                {data.skills.map(s => (
                                    <span key={s.id} className="text-sm text-slate-600">{s.name}</span>
                                ))}
                            </div>
                        </section>
                    )}
                    
                    {data.socialLinks.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Links</h3>
                            <div className="flex flex-col gap-2">
                                {data.socialLinks.map(l => (
                                    <span key={l.id} className="text-sm text-slate-600 truncate">{l.platform}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};