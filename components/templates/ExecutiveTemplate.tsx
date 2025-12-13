import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const ExecutiveTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="h-full flex flex-col font-sans text-slate-800 bg-white">
            {/* Header */}
            <header className="bg-slate-800 text-white p-10">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">{data.personalInfo.fullName}</h1>
                        <p className="text-lg text-slate-300 font-medium tracking-wide">{data.personalInfo.jobTitle}</p>
                    </div>
                    {data.personalInfo.photoUrl && (
                        <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-slate-600">
                            <img src={data.personalInfo.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-600 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                    {data.personalInfo.email && <span className="flex items-center gap-2"><MaterialIcon name="mail" className="text-[16px]" /> {data.personalInfo.email}</span>}
                    {data.personalInfo.phone && <span className="flex items-center gap-2"><MaterialIcon name="call" className="text-[16px]" /> {data.personalInfo.phone}</span>}
                    {data.personalInfo.city && <span className="flex items-center gap-2"><MaterialIcon name="location_on" className="text-[16px]" /> {data.personalInfo.city}, {data.personalInfo.country}</span>}
                    {data.socialLinks.map(l => (
                        <span key={l.id} className="flex items-center gap-2"><MaterialIcon name="link" className="text-[16px]" /> {l.platform}</span>
                    ))}
                </div>
            </header>

            {/* Content */}
            <div className="p-10 flex-1 space-y-8">
                {data.summary && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b-2 border-slate-800 pb-4 mb-4">Executive Profile</h3>
                        <p className="text-sm leading-relaxed text-slate-700 text-justify">{data.summary}</p>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">Professional Experience</h3>
                        <div className="space-y-6">
                            {data.experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-lg text-slate-900">{exp.position}</h4>
                                        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">{exp.company}</div>
                                    <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-10">
                    {data.education.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">Education</h3>
                            <div className="space-y-4">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <h4 className="font-bold text-slate-900">{edu.school}</h4>
                                        <div className="text-sm text-slate-600">{edu.degree}</div>
                                        <div className="text-xs text-slate-500 mt-1">{edu.startDate} - {edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.skills.length > 0 && (
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">Core Competencies</h3>
                            <div className="flex flex-wrap gap-2">
                                {data.skills.map(skill => (
                                    <span key={skill.id} className="text-slate-700 text-xs px-3 py-1 font-medium">{skill.name}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {data.hobbies?.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b-2 border-slate-800 pb-2 mb-4">Hobbies</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.hobbies.map(hobby => (
                                <span key={hobby.id} className="text-xs bg-slate-100 px-2 py-1 rounded">{hobby.name}</span>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
