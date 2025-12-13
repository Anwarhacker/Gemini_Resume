import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const PrestigeTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-8 h-full flex flex-col font-serif text-slate-900 bg-white">
            {/* Header with Accent */}
            <header className="mb-4 pb-6 border-b-4 border-amber-600">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">{data.personalInfo.fullName}</h1>
                        <p className="text-xl text-amber-700 font-medium mb-4">{data.personalInfo.jobTitle}</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                    {data.personalInfo.email && (
                        <span className="flex items-center gap-1.5">
                            <MaterialIcon name="mail" className="text-[16px] text-amber-600" />
                            {data.personalInfo.email}
                        </span>
                    )}
                    {data.personalInfo.phone && (
                        <span className="flex items-center gap-1.5">
                            <MaterialIcon name="call" className="text-[16px] text-amber-600" />
                            {data.personalInfo.phone}
                        </span>
                    )}
                    {data.personalInfo.city && (
                        <span className="flex items-center gap-1.5">
                            <MaterialIcon name="location_on" className="text-[16px] text-amber-600" />
                            {data.personalInfo.city}, {data.personalInfo.country}
                        </span>
                    )}
                    {data.socialLinks.map(link => (
                        <span key={link.id} className="flex items-center gap-1.5 text-amber-700">
                            <MaterialIcon name="link" className="text-[16px]" />
                            {link.platform}
                        </span>
                    ))}
                </div>
            </header>

            {/* Two Column Layout */}
            <div className="grid grid-cols-3 gap-4 flex-1">
                {/* Left Column - Main Content */}
                <div className="col-span-2 space-y-4">
                    {/* Professional Summary */}
                    {data.summary && (
                        <section>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-8 bg-amber-600 rounded-full"></div>
                                <h2 className="text-lg font-bold uppercase tracking-wide text-slate-800">Professional Summary</h2>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-700 pl-5">{data.summary}</p>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-8 bg-amber-600 rounded-full"></div>
                                <h2 className="text-lg font-bold uppercase tracking-wide text-slate-800">Professional Experience</h2>
                            </div>
                            <div className="space-y-3 pl-5">
                                {data.experience.map(exp => (
                                    <div key={exp.id} className="relative">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-slate-900 text-base">{exp.position}</h3>
                                            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                            </span>
                                        </div>
                                        <div className="text-sm font-semibold text-amber-700 mb-2">{exp.company}</div>
                                        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.projects.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-8 bg-amber-600 rounded-full"></div>
                                <h2 className="text-lg font-bold uppercase tracking-wide text-slate-800">Key Projects</h2>
                            </div>
                            <div className="space-y-3 pl-5">
                                {data.projects.map(proj => (
                                    <div key={proj.id} className="border-l-2 border-amber-200 pl-4">
                                        <h3 className="font-bold text-slate-900">{proj.name}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-1">{proj.description}</p>
                                        <div className="text-xs text-amber-700 font-medium">{proj.technologies}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="col-span-1 space-y-4">
                    {/* Education */}
                    {data.education.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-2 pb-2 border-b-2 border-amber-200">Education</h2>
                            <div className="space-y-3">
                                {data.education.map(edu => (
                                    <div key={edu.id}>
                                        <h3 className="font-bold text-sm text-slate-900 leading-tight">{edu.degree}</h3>
                                        <div className="text-sm text-slate-700 mt-1">{edu.school}</div>
                                        <div className="text-xs text-slate-500 mt-0.5">{edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-3 pb-2 border-b-2 border-amber-200">Core Competencies</h2>
                            <div className="space-y-2">
                                {data.skills.map(skill => (
                                    <div key={skill.id} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0"></div>
                                        <span className="text-sm text-slate-800 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Certifications */}
                    {data.certifications.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-3 pb-2 border-b-2 border-amber-200">Certifications</h2>
                            <div className="space-y-2">
                                {data.certifications.map(cert => (
                                    <div key={cert.id}>
                                        <div className="font-semibold text-sm text-slate-900 leading-tight">{cert.name}</div>
                                        <div className="text-xs text-slate-600">{cert.issuer}, {cert.year}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {data.languages.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-3 pb-2 border-b-2 border-amber-200">Languages</h2>
                            <div className="space-y-1">
                                {data.languages.map(lang => (
                                    <div key={lang.id} className="flex justify-between text-sm">
                                        <span className="text-slate-800">{lang.name}</span>
                                        <span className="text-slate-500 text-xs">{lang.proficiency}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Hobbies */}
                    {data.hobbies?.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-3 pb-2 border-b-2 border-amber-200">Hobbies</h2>
                            <div className="flex flex-wrap gap-2">
                                {data.hobbies.map(hobby => (
                                    <span key={hobby.id} className="text-xs bg-amber-50 text-amber-900 px-2 py-1 rounded border border-amber-200">{hobby.name}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
