import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

export const TechTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div id="resume-preview" className="h-full flex font-sans text-slate-900 bg-white">

      {/* Main Content Area */}
      <main className="flex-1 p-8 pr-4 space-y-6">
        <header>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {data.personalInfo.fullName}
          </h1>
          <p className="text-xl text-teal-600 font-medium font-mono leading-relaxed">
            {data.personalInfo.jobTitle}
          </p>
          <div className="h-1 w-20 bg-teal-500"></div>
        </header>

        {data.summary && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              About
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">
              {data.summary}
            </p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Experience
            </h3>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-200 pl-4 relative">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-500"></div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-slate-900">{exp.position}</h4>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-sm text-teal-700 font-medium">
                    {exp.company}
                  </div>
                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.projects.length > 0 && (
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Projects
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {data.projects.map((proj) => (
                <div key={proj.id} className="bg-slate-50 p-4 rounded border border-slate-100">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h4 className="font-bold text-slate-900">{proj.name}</h4>
                    {proj.link && (
                      <span className="text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded font-mono break-all">
                        {proj.link}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    {proj.description}
                  </p>
                  <div className="text-xs font-mono text-slate-500">
                    <span className="font-bold text-slate-400">Stack:</span>{' '}
                    {proj.technologies}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="w-[260px] bg-slate-50 p-6 pl-4 border-l border-slate-200 flex flex-col gap-6">

        {/* Contact */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Contact
          </h3>
          <div className="space-y-3 text-sm">

            {data.personalInfo.email && (
              <div className="flex flex-col w-full">
                <span className="text-xs text-slate-400">Email</span>
                <span className="font-medium break-all leading-tight">
                  {data.personalInfo.email}
                </span>
              </div>
            )}

            {data.personalInfo.phone && (
              <div className="flex flex-col w-full">
                <span className="text-xs text-slate-400">Phone</span>
                <span className="font-medium">
                  {data.personalInfo.phone}
                </span>
              </div>
            )}

            {data.personalInfo.city && (
              <div className="flex flex-col w-full">
                <span className="text-xs text-slate-400">Location</span>
                <span className="font-medium">
                  {data.personalInfo.city}
                </span>
              </div>
            )}

            {data.socialLinks.map((l) => (
              <div key={l.id} className="flex flex-col w-full">
                <span className="text-xs text-slate-400">{l.platform}</span>
                <span className="font-medium text-teal-700 break-all leading-tight">
                  {l.url}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        {data.skills.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Skills
            </h3>
            <div className="flex flex-col gap-2">
              {data.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white border border-slate-200 px-3 py-2 rounded shadow-sm w-full"
                >
                  <span className="text-sm font-semibold text-slate-700 block leading-tight">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider leading-tight">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Education
            </h3>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold text-sm text-slate-800 leading-tight">
                    {edu.school}
                  </div>
                  <div className="text-xs text-slate-600 leading-tight">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </aside>
    </div>
  );
};
