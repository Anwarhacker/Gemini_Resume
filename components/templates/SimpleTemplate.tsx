import React from 'react';
import { ResumeData } from '../../types';

export const SimpleTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-12 h-full flex flex-col font-sans text-slate-900 bg-white">
            <header className="border-b border-slate-300 pb-6 mb-6">
                <h1 className="text-3xl font-bold mb-2 text-slate-900">{data.personalInfo.fullName}</h1>
                <p className="text-lg text-slate-600 mb-2">{data.personalInfo.jobTitle}</p>
                <div className="text-sm text-slate-500 flex flex-wrap gap-x-4 gap-y-1">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span>{data.personalInfo.city}, {data.personalInfo.country}</span>}
                </div>
            </header>

            {data.summary && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-slate-500 mb-2">Summary</h3>
                    <p className="text-sm text-slate-800 leading-relaxed">{data.summary}</p>
                </section>
            )}

            {data.experience.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-slate-500 mb-4">Experience</h3>
                    <div className="space-y-5">
                        {data.experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-slate-900">{exp.position}</h4>
                                    <span className="text-sm text-slate-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                                </div>
                                <div className="text-sm font-medium text-slate-700 mb-2">{exp.company}</div>
                                <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.education.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-slate-500 mb-4">Education</h3>
                    <div className="space-y-4">
                        {data.education.map(edu => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-slate-900">{edu.school}</h4>
                                    <span className="text-sm text-slate-500">{edu.startDate} – {edu.endDate}</span>
                                </div>
                                <div className="text-sm text-slate-700">{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <div className="grid grid-cols-2 gap-8">
                {data.skills.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase text-slate-500 mb-3">Skills</h3>
                        <div className="text-sm text-slate-800 leading-relaxed">
                            {data.skills.map(s => s.name).join(', ')}
                        </div>
                    </section>
                )}
                 {data.certifications.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase text-slate-500 mb-3">Certifications</h3>
                        <ul className="text-sm text-slate-800 space-y-1">
                            {data.certifications.map(c => (
                                <li key={c.id}>{c.name} ({c.year})</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>

            {data.hobbies?.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase text-slate-500 mb-3">Hobbies</h3>
                    <div className="text-sm text-slate-800 leading-relaxed">
                        {data.hobbies.map(h => h.name).join(', ')}
                    </div>
                </section>
            )}
        </div>
    );
};