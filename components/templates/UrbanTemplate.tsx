import React from 'react';
import { ResumeData } from '../../types';

export const UrbanTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="h-full flex font-sans text-slate-900 bg-white">
            {/* Left Main */}
            <main className="flex-1 p-8 pt-10 pr-6 space-y-8">
                <header>
                    <h1 className="text-4xl font-bold uppercase tracking-tight text-slate-800 mb-1">{data.personalInfo.fullName}</h1>
                    <p className="text-lg font-medium text-slate-500">{data.personalInfo.jobTitle}</p>
                </header>

                {data.summary && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-800 text-white px-2 py-1 inline-block mb-3">About</h3>
                        <p className="text-sm leading-relaxed text-slate-700">{data.summary}</p>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-800 text-white px-2 py-1 inline-block mb-4">Experience</h3>
                        <div className="space-y-6">
                            {data.experience.map(exp => (
                                <div key={exp.id} className="border-l-2 border-slate-200 pl-4">
                                    <h4 className="font-bold text-slate-900">{exp.position}</h4>
                                    <div className="text-sm font-semibold text-slate-500 mb-2">{exp.company} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                    <p className="text-sm text-slate-600 whitespace-pre-line">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {data.projects.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-wider bg-slate-800 text-white px-2 py-1 inline-block mb-4">Projects</h3>
                        <div className="space-y-4">
                            {data.projects.map(proj => (
                                <div key={proj.id}>
                                    <h4 className="font-bold text-slate-900 text-sm">{proj.name}</h4>
                                    <p className="text-sm text-slate-600">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-slate-100 p-8 pt-10 flex flex-col gap-8">
                 <section>
                    <h3 className="text-xs font-bold uppercase tracking-wider border-b-2 border-slate-300 pb-1 mb-3">Contact</h3>
                    <div className="space-y-2 text-sm text-slate-600 break-words">
                        {data.personalInfo.email && <div className="font-medium">{data.personalInfo.email}</div>}
                        {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
                        {data.personalInfo.city && <div>{data.personalInfo.city}</div>}
                        {data.socialLinks.map(l => (
                            <div key={l.id} className="text-blue-600">{l.url}</div>
                        ))}
                    </div>
                 </section>

                 {data.education.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-wider border-b-2 border-slate-300 pb-1 mb-3">Education</h3>
                        <div className="space-y-4">
                            {data.education.map(edu => (
                                <div key={edu.id}>
                                    <div className="font-bold text-sm text-slate-800">{edu.school}</div>
                                    <div className="text-xs text-slate-600">{edu.degree}</div>
                                    <div className="text-xs text-slate-400 font-medium">{edu.endDate}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                 )}

                 {data.skills.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-wider border-b-2 border-slate-300 pb-1 mb-3">Skills</h3>
                        <div className="flex flex-col gap-2">
                            {data.skills.map(skill => (
                                <div key={skill.id} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                                    <span className="text-sm text-slate-700">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                 )}

                 {data.hobbies?.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-wider border-b-2 border-slate-300 pb-1 mb-3">Hobbies</h3>
                        <div className="flex flex-col gap-2">
                            {data.hobbies.map(hobby => (
                                <div key={hobby.id} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                                    <span className="text-sm text-slate-700">{hobby.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                 )}
            </aside>
        </div>
    );
};
