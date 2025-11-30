
import React from 'react';
import { Icons, PageHeader } from '../components';

export const Credits = () => (
   <div>
      <PageHeader
         title="คณะผู้จัดทำ"
         description="กรมส่งเสริมการเกษตร (Department of Agricultural Extension)"
         icon={Icons.Users}
      />

      {/* DOAE Banner Style Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 mb-10 border border-emerald-200 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-green-200 rounded-full opacity-30 blur-2xl"></div>
         <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-emerald-200 rounded-full opacity-30 blur-2xl"></div>

         <div className="flex flex-col items-center justify-center text-center relative z-10">
            <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
               <span className="text-3xl font-black text-emerald-800 tracking-widest">DOAE</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-2">คณะผู้จัดทำ</h2>
            <p className="text-emerald-700 font-medium">DEPARTMENT OF AGRICULTURAL EXTENSION</p>
         </div>
      </div>

      {/* Members Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

         {/* Member 1 */}
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-24 h-24 bg-emerald-100 group-hover:bg-emerald-200 transition-colors rounded-full flex items-center justify-center text-4xl mb-4 text-emerald-700 border-4 border-white shadow-sm">
               👩‍💼
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">นางสาวสรัสรัตน์ จำเดิม</h3>
            <div className="h-0.5 w-10 bg-emerald-400 mb-3"></div>
            <p className="text-sm text-slate-600 font-medium">นักวิชาการส่งเสริมการเกษตร<br />ชำนาญการ</p>
            <p className="text-sm text-slate-400 mt-2">กรมส่งเสริมการเกษตร</p>
         </div>

         {/* Member 2 */}
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-24 h-24 bg-blue-100 group-hover:bg-blue-200 transition-colors rounded-full flex items-center justify-center text-4xl mb-4 text-blue-700 border-4 border-white shadow-sm">
               👨‍💼
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">นายอภิสิทธิ์ ไชยชาติ</h3>
            <div className="h-0.5 w-10 bg-blue-400 mb-3"></div>
            <p className="text-sm text-slate-600 font-medium">นักวิชาการส่งเสริมการเกษตร<br />ชำนาญการ</p>
            <p className="text-sm text-slate-400 mt-2">กรมส่งเสริมการเกษตร</p>
         </div>

         {/* Member 3 */}
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-24 h-24 bg-emerald-100 group-hover:bg-emerald-200 transition-colors rounded-full flex items-center justify-center text-4xl mb-4 text-emerald-700 border-4 border-white shadow-sm">
               👩‍💼
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">นางสาวกิติยา รัศมี</h3>
            <div className="h-0.5 w-10 bg-emerald-400 mb-3"></div>
            <p className="text-sm text-slate-600 font-medium">นักวิชาการส่งเสริมการเกษตร<br />ชำนาญการ</p>
            <p className="text-sm text-slate-400 mt-2">กรมส่งเสริมการเกษตร</p>
         </div>

      </div>

      {/* Footer Section */}
      <div className="text-center border-t border-slate-200 pt-8">
         <p className="text-slate-500 text-sm">
            พัฒนาและเผยแพร่โดย กรมส่งเสริมการเกษตร <br />
            เพื่อประโยชน์ต่อเกษตรกรและเจ้าหน้าที่ผู้ปฏิบัติงาน
         </p>
         <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-slate-600 font-bold mb-1">ติดต่อสอบถามรายละเอียดได้ที่:</p>
            <a href="https://www.facebook.com/RebelliousKasetTambon" target="_blank" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
               Facebook: เกษตรตำบล คนใช้แรงงาน
            </a>
         </div>
      </div>

   </div >
);
