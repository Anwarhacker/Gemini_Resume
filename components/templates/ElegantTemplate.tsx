import React from 'react';
import { ResumeData } from '../../types';

export const ElegantTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-12 h-full flex flex-col font-serif text-slate-800 bg-[#fdfbf7]">
            <header className="text-center mb-10">
                <h1 className="text-4xl italic font-normal mb-3 text-slate-900">{data.personalInfo.fullName}</h1>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-4">{data.personalInfo.jobTitle}</div>
                <div className="flex justify-center gap-4 text-sm italic text-slate-600">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span>{data.personalInfo.city}</span>}
                </div>
                <div className="w-1/2 mx-auto border-b border-slate-300 mt-6"></div>
            </header>

            {data.summary && (
                <section className="mb-8 text-center px-8">
                    <p className="text-sm leading-relaxed text-slate-700">{data.summary}</p>
                </section>
            )}

            {data.experience.length > 0 && (
                <section className="mb-8">
                    <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Experience</h3>
                    <div className="space-y-6">
                        {data.experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-lg text-slate-900">{exp.company}</h4>
                                    <span className="text-sm italic text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                </div>
                                <div className="text-sm italic text-slate-700 mb-2">{exp.position}</div>
                                <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.education.length > 0 && (
                <section className="mb-8">
                    <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Education</h3>
                    <div className="space-y-4">
                        {data.education.map(edu => (
                            <div key={edu.id} className="flex justify-between items-end border-b border-dotted border-slate-300 pb-2">
                                <div>
                                    <h4 className="font-bold text-slate-900">{edu.school}</h4>
                                    <div className="text-sm italic text-slate-700">{edu.degree}</div>
                                </div>
                                <div className="text-sm text-slate-500">{edu.endDate}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.skills.length > 0 && (
                <section>
                    <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Skills</h3>
                    <div className="text-center text-sm text-slate-700 italic">
                        {data.skills.map(s => s.name).join('  ~  ')}
                    </div>
                </section>
            )}

            {data.hobbies?.length > 0 && (
                <section className="mt-8">
                    <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Hobbies</h3>
                    <div className="text-center text-sm text-slate-700 italic">
                        {data.hobbies.map(h => h.name).join('  ~  ')}
                    </div>
                </section>
            )}
        </div>
    );
};
