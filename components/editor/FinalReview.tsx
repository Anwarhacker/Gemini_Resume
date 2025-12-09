import React from 'react';
import { ResumeData } from '../../types';
import { MaterialIcon } from '../common/MaterialIcon';

const FinalReview = ({ data }: { data: ResumeData }) => (
    <div className="text-center py-10">
        <MaterialIcon name="check_circle" className="text-6xl text-green-500 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Resume Ready!</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">Your resume is complete. Review the preview on the right and click "Download PDF" in the top bar when you are satisfied.</p>
        
        <div className="bg-slate-50 rounded-xl p-6 max-w-md mx-auto text-left border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-4">Resume Completeness</h3>
            <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><MaterialIcon name="check" className="text-green-500 text-[18px]" /> Personal Info</li>
                <li className="flex items-center gap-2"><MaterialIcon name={data.summary ? "check" : "close"} className={data.summary ? "text-green-500 text-[18px]" : "text-slate-300 text-[18px]"} /> Summary</li>
                <li className="flex items-center gap-2"><MaterialIcon name={data.experience.length ? "check" : "close"} className={data.experience.length ? "text-green-500 text-[18px]" : "text-slate-300 text-[18px]"} /> Experience ({data.experience.length})</li>
                <li className="flex items-center gap-2"><MaterialIcon name={data.education.length ? "check" : "close"} className={data.education.length ? "text-green-500 text-[18px]" : "text-slate-300 text-[18px]"} /> Education ({data.education.length})</li>
                <li className="flex items-center gap-2"><MaterialIcon name={data.skills.length ? "check" : "close"} className={data.skills.length ? "text-green-500 text-[18px]" : "text-slate-300 text-[18px]"} /> Skills ({data.skills.length})</li>
            </ul>
        </div>
    </div>
);

export default FinalReview;