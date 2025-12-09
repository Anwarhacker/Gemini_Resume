import React from 'react';
import { ResumeData } from '../../types';

export const CompactTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-8 h-full flex flex-col font-sans text-slate-900 bg-white">
            <header className="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-5">
                <div>
                    <h1 className="text-2xl font-black uppercase tracking-tighter">{data.personalInfo.fullName}</h1>
                    <p className="text-sm font-bold text-slate-600 uppercase">{data.personalInfo.jobTitle}</p>
                </div>
                <div className="text-right text-xs text-slate-600 leading-tight">
                    {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
                    {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
                    {data.personalInfo.city && <div>{data.personalInfo.city}, {data.personalInfo.country}</div>}
                </div>
            </header>

            <div className="flex-1">
                {data.summary && (
                    <section className="mb-5">
                        <p className="text-xs text-slate-700 leading-relaxed text-justify">{data.summary}</p>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section className="mb-5">
                        <h3 className="text-xs font-black uppercase border-b border-slate-300 mb-3 pb-1">Experience</h3>
                        <div className="space-y-3">
                            {data.experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline">
                                        <h4 className="text-sm font-bold">{exp.position}</h4>
                                        <span className="text-xs font-mono text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className="text-xs font-semibold text-slate-600 mb-1">{exp.company}</div>
                                    <p className="text-xs text-slate-600 whitespace-pre-line">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-6">
                    {data.education.length > 0 && (
                        <section className="mb-5">
                            <h3 className="text-xs font-black uppercase border-b border-slate-300 mb-3 pb-1">Education</h3>
                            <div className="space-y-2">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <h4 className="text-sm font-bold">{edu.school}</h4>
                                        <div className="text-xs text-slate-600">{edu.degree}</div>
                                        <div className="text-xs text-slate-400">{edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <div>
                        {data.skills.length > 0 && (
                            <section className="mb-5">
                                <h3 className="text-xs font-black uppercase border-b border-slate-300 mb-3 pb-1">Skills</h3>
                                <div className="flex flex-wrap gap-1">
                                    {data.skills.map(s => (
                                        <span key={s.id} className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 border border-slate-200">{s.name}</span>
                                    ))}
                                </div>
                            </section>
                        )}
                        
                        {data.projects.length > 0 && (
                            <section>
                                <h3 className="text-xs font-black uppercase border-b border-slate-300 mb-3 pb-1">Projects</h3>
                                <div className="space-y-2">
                                    {data.projects.map(p => (
                                        <div key={p.id}>
                                            <div className="flex justify-between items-baseline">
                                                <h4 className="text-xs font-bold">{p.name}</h4>
                                                <span className="text-[10px] text-slate-500">{p.technologies}</span>
                                            </div>
                                            <p className="text-[10px] text-slate-600 line-clamp-2">{p.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};