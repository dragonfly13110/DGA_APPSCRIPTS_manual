
import React, { useState, ReactNode } from 'react';

// --- Icons ---
export const Icons = {
  Book: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Database: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  Code: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Settings: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  Key: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>,
  Rocket: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-12 22.1 22.1 0 0 1 12 2c1.26 1.5.5 3.75-2 5a22 22 0 0 1-3 3z"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48"/></svg>,
  Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Copy: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  Bug: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/><path d="m10 4 1 2"/></svg>,
  Warning: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  Users: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Chart: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
};

// --- UI Components ---

interface PageHeaderProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export const PageHeader = ({ title, description, icon: Icon }: PageHeaderProps) => (
  <div className="mb-8 border-b border-slate-200 pb-6">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-3 bg-blue-100 text-blue-700 rounded-xl shadow-sm">
        <Icon />
      </div>
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
    </div>
    <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">{description}</p>
  </div>
);

interface StepProps {
  number: string;
  title: string;
  children?: ReactNode;
  isLast?: boolean;
}

export const Step = ({ number, title, children, isLast = false }: StepProps) => (
  <div className="flex gap-4 relative">
    <div className="flex-col items-center flex">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm z-10 
        ${number === '!' ? 'bg-amber-100 text-amber-600 border-2 border-amber-200' : 'bg-white border-2 border-blue-100 text-blue-600'}`}>
        {number}
      </div>
      {!isLast && <div className="w-0.5 bg-slate-200 flex-1 my-2"></div>}
    </div>
    <div className="flex-1 pb-10 pt-1">
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <div className="text-slate-600 leading-relaxed space-y-4">{children}</div>
    </div>
  </div>
);

interface NoteProps {
  type?: 'info' | 'warning' | 'danger' | 'success';
  title?: string | null;
  children?: ReactNode;
}

export const Note = ({ type = 'info', title = null, children }: NoteProps) => {
  const styles = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-500' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', icon: 'text-amber-500' },
    danger: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900', icon: 'text-red-500' },
    success: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900', icon: 'text-emerald-500' }
  };
  const s = styles[type] || styles.info;
  
  return (
    <div className={`${s.bg} border-l-4 ${s.border} p-4 rounded-r-lg my-4`}>
      {title && <h4 className={`font-bold ${s.text} mb-1 flex items-center gap-2`}>
        {type === 'warning' && <Icons.Warning />}
        {title}
      </h4>}
      <div className={`${s.text} text-sm leading-relaxed opacity-90`}>{children}</div>
    </div>
  );
};

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

export const CodeBlock = ({ code, language = 'javascript', label }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-md my-4">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
        <span className="text-sm font-mono text-slate-400 font-bold uppercase">{label || language}</span>
        <button 
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm uppercase font-bold"
        >
          {copied ? <><Icons.Check /> Copied</> : <><Icons.Copy /> Copy</>}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-slate-200 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
}

export const Table = ({ headers, rows }: TableProps) => (
  <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm my-4">
    <table className="min-w-full divide-y divide-slate-200">
      <thead className="bg-slate-50">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-6 py-4 text-left text-sm font-bold text-slate-500 uppercase tracking-wider">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-slate-200">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 font-mono border-r last:border-r-0 border-slate-100">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
