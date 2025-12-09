import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const CoralTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-10 h-full flex flex-col font-sans text-slate-700 bg-white">
            <header className="text-center mb-10 pb-6 border-b border-orange-100">
                <h1 className="text-4xl font-bold mb-2 text-slate-800">{data.personalInfo.fullName}</h1>
                <p className="text-lg font-medium text-[#ff7f50] mb-4">{data.personalInfo.jobTitle}</p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
                    {data.personalInfo.email && <span className="flex items-center gap-1"><MaterialIcon name="mail" className="text-[14px]" />{data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span className="flex items-center gap-1"><MaterialIcon name="call" className="text-[14px]" />{data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span className="flex items-center gap-1"><MaterialIcon name="location_on" className="text-[14px]" />{data.personalInfo.city}</span>}
                </div>
            </header>

            <div className="space-y-8">
                {data.summary && (
                    <section>
                         <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#ff7f50] mb-3">Professional Profile</h3>
                         <p className="text-center text-sm leading-relaxed max-w-xl mx-auto">{data.summary}</p>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section>
                        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#ff7f50] mb-6">Work History</h3>
                        <div className="space-y-6">
                            {data.experience.map(exp => (
                                <div key={exp.id} className="relative pl-6 border-l-2 border-orange-100 max-w-2xl mx-auto">
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#ff7f50]"></div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-800">{exp.position}</h4>
                                        <span className="text-xs font-medium text-slate-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className="text-sm text-[#ff7f50] font-medium mb-2">{exp.company}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto w-full">
                    {data.education.length > 0 && (
                        <section>
                            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#ff7f50] mb-4">Education</h3>
                            <div className="space-y-4 text-center">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <h4 className="font-bold text-sm text-slate-800">{edu.school}</h4>
                                        <div className="text-xs text-slate-500">{edu.degree}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section>
                            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#ff7f50] mb-4">Skills</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {data.skills.map(skill => (
                                    <span key={skill.id} className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded">{skill.name}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};