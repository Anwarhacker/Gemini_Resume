import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const DesignerTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="h-full flex flex-col font-sans text-slate-900 bg-white">
            <header className="p-10 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/4"></div>
                
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 tracking-tight">
                        {data.personalInfo.fullName}
                    </h1>
                    <p className="text-xl font-medium text-slate-600 tracking-widest uppercase">{data.personalInfo.jobTitle}</p>
                    
                    <div className="mt-6 flex justify-center flex-wrap gap-4 text-sm font-semibold text-slate-500">
                         {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                         {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
                         {data.personalInfo.city && <span>• {data.personalInfo.city}</span>}
                         {data.socialLinks.map(l => (
                            <span key={l.id} className="text-purple-600">• {l.url}</span>
                         ))}
                    </div>
                </div>
            </header>

            <div className="p-10 grid grid-cols-12 gap-8 flex-1">
                <div className="col-span-8 space-y-8">
                     {data.summary && (
                        <section>
                            <h3 className="text-lg font-black text-slate-800 mb-3 flex items-center gap-2">
                                <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Profile
                            </h3>
                            <p className="text-slate-600 leading-relaxed">{data.summary}</p>
                        </section>
                     )}

                     {data.experience.length > 0 && (
                        <section>
                             <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Experience
                            </h3>
                            <div className="space-y-8">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="relative pl-6 border-l-2 border-slate-100">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-white bg-slate-300"></div>
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-lg text-slate-800">{exp.position}</h4>
                                            <span className="text-xs font-bold text-slate-400 uppercase">{exp.startDate} - {exp.current ? 'Now' : exp.endDate}</span>
                                        </div>
                                        <div className="text-sm font-semibold text-pink-600 mb-2">{exp.company}</div>
                                        <p className="text-sm text-slate-600">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                     )}
                     
                     {data.projects.length > 0 && (
                        <section>
                             <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Selected Works
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {data.projects.map(proj => (
                                    <div key={proj.id} className="bg-slate-50 p-4 rounded-xl hover:bg-slate-100 transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-1">{proj.name}</h4>
                                        <p className="text-xs text-slate-500 mb-2 line-clamp-2">{proj.description}</p>
                                        <span className="text-xs font-bold text-purple-600">{proj.technologies}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                     )}
                </div>

                <div className="col-span-4 space-y-8">
                     {data.skills.length > 0 && (
                        <section>
                             <h3 className="text-lg font-black text-slate-800 mb-4">Skills</h3>
                             <div className="space-y-3">
                                {data.skills.map(skill => (
                                    <div key={skill.id}>
                                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full ${skill.type === 'Technical' ? 'bg-pink-500' : 'bg-purple-500'}`} 
                                                style={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : skill.level === 'Intermediate' ? '60%' : '40%'}}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </section>
                     )}

                     {data.education.length > 0 && (
                        <section>
                             <h3 className="text-lg font-black text-slate-800 mb-4">Education</h3>
                             <div className="space-y-4">
                                {data.education.map(edu => (
                                    <div key={edu.id} className="bg-slate-50 p-4 rounded-xl">
                                        <h4 className="font-bold text-slate-800">{edu.school}</h4>
                                        <div className="text-sm text-pink-600 font-medium">{edu.degree}</div>
                                        <div className="text-xs text-slate-400 mt-1">{edu.endDate}</div>
                                    </div>
                                ))}
                             </div>
                        </section>
                     )}
                </div>
            </div>
        </div>
    );
};