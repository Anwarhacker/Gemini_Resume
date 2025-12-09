import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const OnyxTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="h-full flex flex-col font-sans text-slate-800 bg-white">
            <header className="bg-slate-900 text-white p-10 pb-12">
                <h1 className="text-4xl font-bold tracking-wide mb-2">{data.personalInfo.fullName}</h1>
                <p className="text-lg text-slate-400 uppercase tracking-widest text-sm font-semibold">{data.personalInfo.jobTitle}</p>
                
                <div className="mt-6 flex flex-wrap gap-6 text-xs font-medium text-slate-400">
                    {data.personalInfo.email && <span className="flex items-center gap-2"><MaterialIcon name="mail" className="text-[14px]" /> {data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span className="flex items-center gap-2"><MaterialIcon name="call" className="text-[14px]" /> {data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span className="flex items-center gap-2"><MaterialIcon name="location_on" className="text-[14px]" /> {data.personalInfo.city}</span>}
                </div>
            </header>

            <div className="p-10 -mt-6">
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 space-y-8">
                     {data.summary && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-100 pb-2">Professional Summary</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{data.summary}</p>
                        </section>
                    )}

                    {data.experience.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-100 pb-2">Experience</h3>
                            <div className="space-y-6">
                                {data.experience.map(exp => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-slate-800">{exp.position}</h4>
                                            <span className="text-xs font-bold text-slate-400 uppercase">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                        </div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">{exp.company}</div>
                                        <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <div className="grid grid-cols-2 gap-8">
                         {data.education.length > 0 && (
                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-100 pb-2">Education</h3>
                                <div className="space-y-4">
                                    {data.education.map(edu => (
                                        <div key={edu.id}>
                                            <h4 className="font-bold text-sm text-slate-800">{edu.school}</h4>
                                            <div className="text-xs text-slate-500">{edu.degree}</div>
                                            <div className="text-xs text-slate-400 mt-0.5">{edu.endDate}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                         
                        {data.skills.length > 0 && (
                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-100 pb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.skills.map(skill => (
                                        <span key={skill.id} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded font-medium">{skill.name}</span>
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