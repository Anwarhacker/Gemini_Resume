import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const MinimalistTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-12 h-full flex flex-col font-sans text-slate-900 bg-white">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-light tracking-widest uppercase mb-2">{data.personalInfo.fullName}</h1>
                <p className="text-sm tracking-widest text-slate-500 uppercase mb-4">{data.personalInfo.jobTitle}</p>
                <div className="flex justify-center gap-4 text-xs text-slate-500">
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span>| {data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span>| {data.personalInfo.city}</span>}
                </div>
            </header>

            <div className="flex-1 space-y-8">
                {data.summary && (
                    <section>
                         <p className="text-sm leading-7 text-center max-w-lg mx-auto italic text-slate-600">{data.summary}</p>
                         <div className="w-16 h-0.5 bg-slate-200 mx-auto mt-6"></div>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-center mb-6 text-slate-400">Experience</h3>
                        <div className="space-y-6">
                            {data.experience.map(exp => (
                                <div key={exp.id} className="grid grid-cols-12 gap-4">
                                    <div className="col-span-3 text-right text-xs text-slate-500 pt-1">
                                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                    </div>
                                    <div className="col-span-9">
                                        <h4 className="font-semibold text-slate-800">{exp.position}</h4>
                                        <div className="text-xs text-slate-500 mb-2 uppercase tracking-wide">{exp.company}</div>
                                        <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.education.length > 0 && (
                    <section>
                         <h3 className="text-sm font-bold uppercase tracking-widest text-center mb-6 text-slate-400 mt-8">Education</h3>
                         <div className="space-y-4">
                            {data.education.map(edu => (
                                <div key={edu.id} className="text-center">
                                    <h4 className="font-semibold text-slate-800">{edu.school}</h4>
                                    <div className="text-sm text-slate-600">{edu.degree}</div>
                                    <div className="text-xs text-slate-400 mt-1">{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                         </div>
                    </section>
                )}

                {data.skills.length > 0 && (
                    <section className="text-center mt-8">
                         <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-400">Skills</h3>
                         <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {data.skills.map(skill => (
                                <span key={skill.id} className="text-sm text-slate-600">{skill.name}</span>
                            ))}
                         </div>
                    </section>
                )}
            </div>
        </div>
    );
};