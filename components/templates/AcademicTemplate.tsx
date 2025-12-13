import React from 'react';
import { ResumeData } from '../../types';

export const AcademicTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-12 h-full flex flex-col font-serif text-black bg-white leading-relaxed">
            <header className="text-center mb-6">
                <h1 className="text-2xl font-bold uppercase mb-2 tracking-wide">{data.personalInfo.fullName}</h1>
                <div className="text-sm flex flex-wrap justify-center gap-x-4 gap-y-1">
                     {data.personalInfo.jobTitle && <span className="font-semibold">{data.personalInfo.jobTitle}</span>}
                     {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                     {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                     {data.personalInfo.city && <span>{data.personalInfo.city}, {data.personalInfo.country}</span>}
                </div>
            </header>

            <div className="w-full h-px bg-black mb-6"></div>

            {/* Academic CVs typically prioritize Education */}
            {data.education.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase mb-3">Education</h3>
                    <div className="space-y-3">
                        {data.education.map(edu => (
                            <div key={edu.id} className="flex gap-4">
                                <div className="w-24 text-sm flex-shrink-0">{edu.endDate}</div>
                                <div>
                                    <div className="font-bold text-sm">{edu.school}, {edu.location}</div>
                                    <div className="text-sm italic">{edu.degree}</div>
                                    {edu.grade && <div className="text-sm text-slate-600">Grade: {edu.grade}</div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Experience */}
            {data.experience.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase mb-3">Professional Experience</h3>
                    <div className="space-y-4">
                        {data.experience.map(exp => (
                            <div key={exp.id} className="flex gap-4">
                                <div className="w-24 text-sm flex-shrink-0">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                <div className="flex-1">
                                    <div className="font-bold text-sm">{exp.company}, {exp.location}</div>
                                    <div className="text-sm italic mb-1">{exp.position}</div>
                                    <p className="text-sm whitespace-pre-line leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase mb-3">Skills</h3>
                    <div className="text-sm leading-relaxed">
                        {data.skills.map(s => s.name).join(' • ')}
                    </div>
                </section>
            )}

            {/* Certifications */}
             {data.certifications.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase mb-3">Certifications</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        {data.certifications.map(c => (
                            <li key={c.id}>
                                <span className="font-semibold">{c.name}</span>, {c.issuer} ({c.year})
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            
            {/* Projects / Publications Style */}
             {data.projects.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase mb-3">Key Projects</h3>
                     <div className="space-y-3">
                        {data.projects.map(proj => (
                            <div key={proj.id}>
                                <div className="font-bold text-sm">{proj.name}</div>
                                <div className="text-sm">{proj.description}</div>
                                {proj.link && <div className="text-sm italic text-slate-600">{proj.link}</div>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.hobbies?.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-sm font-bold uppercase mb-3">Hobbies & Interests</h3>
                    <div className="text-sm">
                        {data.hobbies.map(h => h.name).join(', ')}
                    </div>
                </section>
            )}
        </div>
    );
};
