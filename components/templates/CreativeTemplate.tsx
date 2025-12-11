import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const CreativeTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="h-full flex font-sans">
            {/* Left Sidebar */}
            <aside className="w-[35%] bg-slate-900 text-white p-6 flex flex-col gap-4">
                <div className="text-center mb-4">
                     {data.personalInfo.photoUrl && (
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-700 mb-4">
                             <img src={data.personalInfo.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                     )}
                     <h2 className="text-xl font-bold uppercase tracking-wide break-words">{data.personalInfo.fullName}</h2>
                     <p className="text-indigo-400 text-sm font-medium mt-1">{data.personalInfo.jobTitle}</p>
                </div>

                <div className="space-y-3 text-sm">
                    {data.personalInfo.email && <div className="flex items-center gap-3"><MaterialIcon name="mail" className="text-[18px] text-indigo-400" /> <span className="break-all">{data.personalInfo.email}</span></div>}
                    {data.personalInfo.phone && <div className="flex items-center gap-3"><MaterialIcon name="call" className="text-[18px] text-indigo-400" /> <span>{data.personalInfo.phone}</span></div>}
                    {data.personalInfo.city && <div className="flex items-center gap-3"><MaterialIcon name="location_on" className="text-[18px] text-indigo-400" /> <span>{data.personalInfo.city}, {data.personalInfo.country}</span></div>}
                </div>

                {data.socialLinks.length > 0 && (
                    <div className="mt-2">
                         <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3 border-b border-slate-800 pb-1">Social</h3>
                         <div className="space-y-2 text-sm">
                            {data.socialLinks.map(l => (
                                <div key={l.id} className="flex items-center gap-2">
                                    <MaterialIcon name="link" className="text-[16px] text-indigo-400" />
                                    <span>{l.platform}</span>
                                </div>
                            ))}
                         </div>
                    </div>
                )}

                {data.skills.length > 0 && (
                    <div className="mt-2">
                        <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3 border-b border-slate-800 pb-1">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map(s => (
                                <span key={s.id} className="bg-slate-800 text-xs px-2 py-1 rounded text-slate-300">{s.name}</span>
                            ))}
                        </div>
                    </div>
                )}
            </aside>

            {/* Right Content */}
            <main className="flex-1 p-8 text-slate-800 bg-white">
                {data.summary && (
                    <section className="mb-2">
                        <h3 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-100 pb-2 mb-1">Profile</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{data.summary}</p>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section className="mb-4">
                        <h3 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-100 pb-2 mb-2">Work Experience</h3>
                        <div className="space-y-4">
                            {data.experience.map(exp => (
                                <div key={exp.id} className="relative pl-4 border-l-2 border-indigo-100">
                                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                                    <h4 className="font-bold text-slate-900">{exp.position}</h4>
                                    <div className="text-sm font-semibold text-indigo-600 mb-1">{exp.company} <span className="text-slate-400 font-normal">| {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span></div>
                                    <p className="text-sm text-slate-600 whitespace-pre-line mt-2">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                 {data.projects.length > 0 && (
                    <section className="mb-2">
                        <h3 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-100 pb-2 mb-2">Projects</h3>
                        <div className="space-y-2">
                            {data.projects.map(proj => (
                                <div key={proj.id} className="bg-slate-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-bold text-slate-900">{proj.name}</h4>
                                        <span className="text-xs text-indigo-500">{proj.technologies}</span>
                                    </div>
                                    <p className="text-sm text-slate-600">{proj.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-1 gap-8">
                    {data.education.length > 0 && (
                        <section>
                             <h3 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-100 pb-2 mb-2">Education</h3>
                             <div className="space-y-4">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <h4 className="font-bold text-slate-900">{edu.school}</h4>
                                        <div className="text-sm text-slate-600">{edu.degree}</div>
                                        <div className="text-xs text-slate-400 mt-1">{edu.startDate} - {edu.endDate}</div>
                                    </div>
                                ))}
                             </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
};