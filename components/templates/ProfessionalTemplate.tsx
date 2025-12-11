import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const ProfessionalTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="h-full flex font-sans text-slate-900 bg-white">
            {/* Left Sidebar */}
            <aside className="w-[35%] h-[1122px] bg-slate-800 text-white p-8 flex flex-col gap-6">
                {/* Profile Section */}
                <div className="pb-6 border-b border-slate-600">
                    <h1 className="text-2xl font-bold mb-1">{data.personalInfo.fullName}</h1>
                    <p className="text-slate-300 text-sm">{data.personalInfo.jobTitle}</p>
                </div>

                {/* Contact Info */}
                <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Contact</h3>
                    <div className="space-y-2 text-sm">
                        {data.personalInfo.email && (
                            <div className="flex items-start gap-2">
                                <MaterialIcon name="mail" className="text-[16px] text-slate-400 mt-0.5" />
                                <span className="break-all">{data.personalInfo.email}</span>
                            </div>
                        )}
                        {data.personalInfo.phone && (
                            <div className="flex items-center gap-2">
                                <MaterialIcon name="call" className="text-[16px] text-slate-400" />
                                <span>{data.personalInfo.phone}</span>
                            </div>
                        )}
                        {data.personalInfo.city && (
                            <div className="flex items-center gap-2">
                                <MaterialIcon name="location_on" className="text-[16px] text-slate-400" />
                                <span>{data.personalInfo.city}, {data.personalInfo.country}</span>
                            </div>
                        )}
                    </div>
                </section>

                {/* Skills */}
                {data.skills.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Skills</h3>
                        <div className="space-y-2">
                            {data.skills.map(skill => (
                                <div key={skill.id} className="text-sm">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-xs text-slate-400">{skill.level}</span>
                                    </div>
                                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-blue-400 rounded-full"
                                            style={{ 
                                                width: skill.level === 'Expert' ? '100%' : 
                                                       skill.level === 'Advanced' ? '75%' : 
                                                       skill.level === 'Intermediate' ? '50%' : '25%' 
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Languages */}
                {data.languages.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Languages</h3>
                        <div className="space-y-1 text-sm">
                            {data.languages.map(lang => (
                                <div key={lang.id} className="flex justify-between">
                                    <span>{lang.name}</span>
                                    <span className="text-slate-400 text-xs">{lang.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Social Links */}
                {data.socialLinks.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Links</h3>
                        <div className="space-y-2 text-sm">
                            {data.socialLinks.map(link => (
                                <div key={link.id} className="flex items-center gap-2">
                                    <MaterialIcon name="link" className="text-[16px] text-blue-400" />
                                    <span className="truncate text-slate-300">{link.platform}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </aside>

            {/* Right Content */}
            <main className="flex-1 p-4 space-y-3">
                {/* Summary */}
                {data.summary && (
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1 border-b-2 border-blue-500">Profile</h2>
                        <p className="text-sm leading-relaxed text-slate-700">{data.summary}</p>
                    </section>
                )}

                {/* Experience */}
                {data.experience.length > 0 && (
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2 border-b-2 border-blue-500">Experience</h2>
                        <div className="space-y-4">
                            {data.experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-slate-900">{exp.position}</h3>
                                        <span className="text-xs text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className="text-sm font-semibold text-blue-600">{exp.company} • {exp.location}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {data.education.length > 0 && (
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1 border-b-2 border-blue-500">Education</h2>
                        <div className="space-y-3">
                            {data.education.map(edu => (
                                <div key={edu.id}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-slate-900">{edu.school}</h3>
                                        <span className="text-xs text-slate-500">{edu.endDate}</span>
                                    </div>
                                    <div className="text-sm text-slate-700">{edu.degree}</div>
                                    {edu.grade && <div className="text-xs text-slate-500 mt-0.5">{edu.grade}</div>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.projects.length > 0 && (
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1 border-b-2 border-blue-500">Projects</h2>
                        <div className="space-y-3">
                            {data.projects.map(proj => (
                                <div key={proj.id}>
                                    <h3 className="font-bold text-slate-900">{proj.name}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-1">{proj.description}</p>
                                    <div className="text-xs text-blue-600 font-medium">{proj.technologies}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Certifications */}
                {data.certifications.length > 0 && (
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-1 border-b-2 border-blue-500">Certifications</h2>
                        <div className="space-y-2">
                            {data.certifications.map(cert => (
                                <div key={cert.id} className="flex justify-between items-baseline">
                                    <div>
                                        <div className="font-semibold text-sm text-slate-900">{cert.name}</div>
                                        <div className="text-xs text-slate-600">{cert.issuer}</div>
                                    </div>
                                    <span className="text-xs text-slate-500">{cert.year}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};
