import React, { useState } from 'react';
import { ResumeData } from '../../../types';
import { MaterialIcon } from '../../common/MaterialIcon';
import { generateResumeSummary } from '../../../services/geminiService';
import { Loader } from '../../common/Loader';

interface Props {
  data: ResumeData;
  update: (data: Partial<ResumeData>) => void;
}

const SummaryForm: React.FC<Props> = ({ data, update }) => {
  const [loading, setLoading] = useState(false);
  const generateAI = async () => {
    setLoading(true);
    const summary = await generateResumeSummary(data.personalInfo.jobTitle, data.experience, data.skills);
    update({ summary });
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col w-full gap-2">
        <span className="text-sm font-semibold text-slate-700">Professional Summary</span>
        <textarea 
          value={data.summary}
          onChange={e => update({ summary: e.target.value })}
          className="form-textarea w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary min-h-[200px] text-base leading-relaxed p-4"
          placeholder="e.g. Highly motivated professional with..."
        />
      </label>
      <div className="flex justify-between items-center">
        <button 
          onClick={generateAI}
          disabled={loading || !data.personalInfo.jobTitle}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors font-semibold text-sm disabled:opacity-50 min-w-[180px] justify-center"
        >
          {loading ? (
             <>
               <Loader size="sm" />
               <span>Generating...</span>
             </>
          ) : (
             <>
               <MaterialIcon name="auto_awesome" className="text-[18px]" />
               <span>AI Suggest Summary</span>
             </>
          )}
        </button>
        <span className="text-xs text-slate-500 font-medium">{data.summary.split(' ').filter(w => w).length} words</span>
      </div>
    </div>
  );
};

export default SummaryForm;