import React from 'react';
import { ResumeData } from '../../types';

export const BoldTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="p-6 min-h-full flex flex-col font-sans text-black bg-white">
      
      {/* ================= HEADER ================= */}
      <header className="mb-5">
        <h1
          className="text-5xl font-black uppercase mb-4 tracking-tighter"
          style={{ lineHeight: '1.1' }}
        >
          {data.personalInfo.fullName}
        </h1>

        <div className="w-24 h-2 bg-black mb-6" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <p
            className="text-xl font-bold uppercase tracking-wide"
            style={{ lineHeight: '1.4' }}
          >
            {data.personalInfo.jobTitle}
          </p>

          <div
            className="text-left md:text-right text-sm font-medium"
            style={{ lineHeight: '1.6' }}
          >
            {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
            {data.personalInfo.city && <div>{data.personalInfo.city}</div>}
          </div>
        </div>
      </header>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-12 gap-10 flex-1">

        {/* ========== LEFT COLUMN ========== */}
        <div className="col-span-12 md:col-span-8 space-y-10">

          {/* PROFILE */}
          {data.summary?.trim() && (
            <section>
              <div className="bg-black px-3 py-2 inline-block mb-4">
                <h3
                  className="text-white uppercase tracking-wide"
                  style={{ lineHeight: '1' }}
                >
                  Profile
                </h3>
              </div>

              <p className="text-sm font-medium leading-relaxed text-justify">
                {data.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {data.experience?.length > 0 && (
            <section>
              <div className="bg-black text-white px-3 py-2 inline-block mb-3">
                <h3 className="text-lg font-black uppercase tracking-wide" style={{ lineHeight: '1' }}>
                  Experience
                </h3>
              </div>

              <div className="space-y-7">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-black pl-5">
                    <h4 className="text-lg font-bold" style={{ lineHeight: '1.3' }}>
                      {exp.position}
                    </h4>

                    <div
                      className="text-sm font-bold mb-2 text-slate-700 mt-1"
                      style={{ lineHeight: '1.4' }}
                    >
                      {exp.company} | {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </div>

                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {data.projects?.length > 0 && (
            <section>
              <div className="bg-black text-white px-3 py-2 inline-block mb-3">
                <h3 className="text-lg font-black uppercase tracking-wide" style={{ lineHeight: '1' }}>
                  Projects
                </h3>
              </div>

              <div className="space-y-6">
                {data.projects.map((proj) => (
                  <div key={proj.id} className="border-l-4 border-slate-300 pl-5">
                    <h4 className="text-lg font-bold" style={{ lineHeight: '1.3' }}>
                      {proj.name}
                    </h4>

                    <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                      {proj.technologies}
                    </div>

                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ========== RIGHT COLUMN ========== */}
        <div className="col-span-12 md:col-span-4 space-y-10">

          {/* EDUCATION */}
          {data.education?.length > 0 && (
            <section>
              <div className="bg-black text-white px-3 py-2 inline-block mb-6">
                <h3 className="text-lg font-black uppercase tracking-wide" style={{ lineHeight: '1' }}>
                  Education
                </h3>
              </div>

              <div className="space-y-5">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-base" style={{ lineHeight: '1.3' }}>
                      {edu.school}
                    </h4>

                    <div className="text-sm mt-1" style={{ lineHeight: '1.4' }}>
                      {edu.degree}
                    </div>

                    <div className="text-xs font-bold mt-1 text-slate-500">
                      {edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}
          {data.skills?.length > 0 && (
            <section>
              <div className="bg-black text-white px-3 py-2 inline-block mb-6">
                <h3 className="text-lg font-black uppercase tracking-wide" style={{ lineHeight: '1' }}>
                  Skills
                </h3>
              </div>

              <ul className="text-sm font-bold space-y-3">
                {data.skills.map((s) => (
                  <li
                    key={s.id}
                    className="border-b-2 border-slate-200 pb-2 leading-relaxed"
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* SOCIAL LINKS */}
          {data.socialLinks?.length > 0 && (
            <section>
              <div className="bg-black text-white px-3 py-2 inline-block mb-6">
                <h3 className="text-lg font-black uppercase tracking-wide" style={{ lineHeight: '1' }}>
                  Links
                </h3>
              </div>

              <ul className="text-sm space-y-3">
                {data.socialLinks.map((l) => (
                  <li key={l.id} className="truncate leading-relaxed">
                    <span className="font-bold block text-xs uppercase text-slate-500 mb-1">
                      {l.platform}
                    </span>
                    <span className="border-b border-slate-300 pb-0.5">
                      {l.url}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* HOBBIES */}
          {data.hobbies?.length > 0 && (
            <section>
              <div className="bg-black text-white px-3 py-2 inline-block mb-6">
                <h3 className="text-lg font-black uppercase tracking-wide" style={{ lineHeight: '1' }}>
                  Hobbies
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.hobbies.map((hobby) => (
                  <span key={hobby.id} className="text-xs bg-black text-white px-2 py-1">
                    {hobby.name}
                  </span>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};
