import React from 'react';
import { ResumeData } from '../../types';

export const ClassicTemplate = ({ data }: { data: ResumeData }) => {
    return (
        <div className="p-12 h-full flex flex-col font-serif text-black bg-white leading-relaxed">
            <header className="border-b-4 border-black pb-4 mb-6">
                <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName}</h1>
                <div className="flex flex-col sm:flex-row sm:justify-between items-baseline">
                    <p className="text-lg italic">{data.personalInfo.jobTitle}</p>
                    <div className="text-sm mt-2 sm:mt-0">
                        <span>{data.personalInfo.email}</span>
                        {data.personalInfo.phone && <span className="mx-2">•</span>}
                        <span>{data.personalInfo.phone}</span>
                        {data.personalInfo.city && <span className="mx-2">•</span>}
                        <span>{data.personalInfo.city}</span>
                    </div>
                </div>
            </header>

            {data.summary && (
                <section className="mb-6">
                    <h3 className="text-base font-bold uppercase border-b border-black mb-3">Professional Summary</h3>
                    <p className="text-sm">{data.summary}</p>
                </section>
            )}

            {data.experience.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-base font-bold uppercase border-b border-black mb-4">Experience</h3>
                    <div className="space-y-5">
                        {data.experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between font-bold text-sm">
                                    <h4>{exp.company}</h4>
                                    <span>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                                </div>
                                <div className="italic text-sm mb-1">{exp.position}</div>
                                <p className="text-sm whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {data.education.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-base font-bold uppercase border-b border-black mb-4">Education</h3>
                    <div className="space-y-3">
                        {data.education.map(edu => (
                            <div key={edu.id}>
                                <div className="flex justify-between font-bold text-sm">
                                    <h4>{edu.school}</h4>
                                    <span>{edu.startDate} – {edu.endDate}</span>
                                </div>
                                <div className="text-sm">{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <div className="grid grid-cols-2 gap-8">
                {data.skills.length > 0 && (
                    <section>
                         <h3 className="text-base font-bold uppercase border-b border-black mb-3">Skills</h3>
                         <div className="text-sm">
                            {data.skills.map(s => s.name).join(', ')}
                         </div>
                    </section>
                )}
                 {data.certifications.length > 0 && (
                    <section>
                         <h3 className="text-base font-bold uppercase border-b border-black mb-3">Certifications</h3>
                         <ul className="text-sm list-disc pl-4">
                            {data.certifications.map(c => (
                                <li key={c.id}>{c.name} ({c.year})</li>
                            ))}
                         </ul>
                    </section>
                )}
            </div>

            {data.hobbies?.length > 0 && (
                <section className="mt-6">
                    <h3 className="text-base font-bold uppercase border-b border-black mb-3">Hobbies</h3>
                    <div className="text-sm">
                        {data.hobbies.map(h => h.name).join(', ')}
                    </div>
                </section>
            )}
        </div>
    );
};
