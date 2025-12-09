import React from 'react';
import { ResumeData } from '../../types';

export const SwissTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-10 h-full flex flex-col font-sans text-slate-900 bg-white">
            <header className="mb-12">
                <h1 className="text-6xl font-black tracking-tighter mb-4 leading-none">{data.personalInfo.fullName}</h1>
                <p className="text-2xl font-medium text-slate-400 tracking-tight">{data.personalInfo.jobTitle}</p>
                
                <div className="mt-8 flex flex-wrap gap-8 text-sm font-bold border-t-4 border-black pt-4">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span>{data.personalInfo.city}</span>}
                    {data.socialLinks.map(l => (
                         <span key={l.id}>{l.url}</span>
                    ))}
                </div>
            </header>

            <div className="flex-1 space-y-12">
                {data.summary && (
                    <section className="grid grid-cols-12 gap-6">
                         <div className="col-span-3">
                            <h3 className="text-sm font-black uppercase tracking-widest">Profile</h3>
                         </div>
                         <div className="col-span-9">
                            <p className="text-base font-medium leading-relaxed">{data.summary}</p>
                         </div>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section className="grid grid-cols-12 gap-6">
                        <div className="col-span-3">
                             <h3 className="text-sm font-black uppercase tracking-widest">Experience</h3>
                        </div>
                        <div className="col-span-9 space-y-8">
                            {data.experience.map(exp => (
                                <div key={exp.id}>
                                    <h4 className="text-xl font-bold leading-tight">{exp.position}</h4>
                                    <div className="text-sm font-bold text-slate-400 mb-3">
                                        {exp.company} <span className="text-slate-300 mx-2">/</span> {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-700">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.education.length > 0 && (
                    <section className="grid grid-cols-12 gap-6">
                        <div className="col-span-3">
                             <h3 className="text-sm font-black uppercase tracking-widest">Education</h3>
                        </div>
                        <div className="col-span-9 space-y-6">
                            {data.education.map(edu => (
                                <div key={edu.id}>
                                    <h4 className="text-lg font-bold">{edu.school}</h4>
                                    <div className="text-sm text-slate-500">{edu.degree}</div>
                                    <div className="text-xs font-bold text-slate-300 mt-1">{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.skills.length > 0 && (
                    <section className="grid grid-cols-12 gap-6">
                        <div className="col-span-3">
                             <h3 className="text-sm font-black uppercase tracking-widest">Skills</h3>
                        </div>
                        <div className="col-span-9">
                            <div className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-sm">
                                {data.skills.map(skill => (
                                    <span key={skill.id} className="border-b-2 border-slate-100 pb-0.5">{skill.name}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};