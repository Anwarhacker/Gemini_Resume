import React from 'react';
import { ResumeData } from '../../types';

export const SerifTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-12 h-full flex flex-col font-serif text-slate-900 bg-white">
            <header className="text-center mb-8 pb-4 border-b-2 border-slate-200">
                <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{data.personalInfo.fullName}</h1>
                <p className="text-base italic text-slate-600 mb-3">{data.personalInfo.jobTitle}</p>
                <div className="text-sm text-slate-500 space-x-3">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span>• {data.personalInfo.city}</span>}
                </div>
            </header>

            <div className="space-y-6">
                {data.summary && (
                    <section>
                        <h3 className="text-sm font-bold uppercase text-slate-800 mb-2">Profile</h3>
                        <p className="text-sm leading-relaxed text-slate-700">{data.summary}</p>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase text-slate-800 mb-4 bg-slate-50 p-1 pl-2">Professional Experience</h3>
                        <div className="space-y-5">
                            {data.experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-900">{exp.company}</h4>
                                        <span className="text-sm italic text-slate-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className="text-sm font-medium italic text-slate-700 mb-1">{exp.position}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.education.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase text-slate-800 mb-4 bg-slate-50 p-1 pl-2">Education</h3>
                        <div className="space-y-3">
                            {data.education.map(edu => (
                                <div key={edu.id}>
                                    <div className="flex justify-between items-baseline">
                                        <h4 className="font-bold text-slate-900">{edu.school}</h4>
                                        <span className="text-sm text-slate-500">{edu.endDate}</span>
                                    </div>
                                    <div className="text-sm italic text-slate-700">{edu.degree}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-8">
                    {data.skills.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase text-slate-800 mb-3">Skills</h3>
                            <div className="text-sm text-slate-700 leading-relaxed">
                                {data.skills.map(s => s.name).join(', ')}
                            </div>
                        </section>
                    )}
                    {data.certifications.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase text-slate-800 mb-3">Certifications</h3>
                            <ul className="text-sm text-slate-700 list-inside list-disc">
                                {data.certifications.map(c => (
                                    <li key={c.id}>{c.name} ({c.year})</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};