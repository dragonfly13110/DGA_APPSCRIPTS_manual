
import React from 'react';
import { Icons, PageHeader, Note } from '../components';

export const Introduction = () => (
  <div>
    <PageHeader 
      title="บทนำ: ระบบข้อมูลครบวงจร" 
      description="คู่มือการติดตั้งและใช้งาน 'ระบบการเก็บข้อมูลและแสดงผลแบบครบวงจร' (Integrated Data Collection & Visualization System) นวัตกรรมเปลี่ยนกระดาษเป็นดิจิทัล เพื่อการตัดสินใจที่แม่นยำระดับจังหวัด"
      icon={Icons.Book}
    />
    
    <div className="prose prose-slate max-w-none">
      
      {/* Section 1: Origin & Importance */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3 mb-6">
          1. ที่มาและความสำคัญ (Origin & Importance)
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-200 text-red-800 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">BEFORE</div>
            <h4 className="font-bold text-red-800 text-xl mb-4 flex items-center gap-2">
              <span className="text-3xl">📉</span> การทำงานรูปแบบเดิม
            </h4>
            <ul className="space-y-4 text-red-900 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">1</span>
                <span><strong>Manual Process:</strong> เจ้าหน้าที่ 11 อำเภอ ต้องรวบรวมข้อมูลใส่ Excel และส่งรายงานทุก 15 วัน ทำให้เกิดไฟล์กระจัดกระจายหลายชุด</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">2</span>
                <span><strong>Sync Issues:</strong> แต่ละอำเภอ/ตำบล รายงานไม่พร้อมกัน จังหวัดต้องเสียเวลารอให้ครบก่อนจึงจะสรุปงานได้</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">3</span>
                <span><strong>Data Silo:</strong> การรายงานเป็นรูปแบบตารางและกระดาษ ทำให้ "ไม่เห็นความเชื่อมโยง" ระหว่างข้อมูล นำไปวิเคราะห์ต่อได้ยาก</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">4</span>
                <span><strong>High Error Rate:</strong> การตรวจสอบความถูกต้องทำด้วยมือ (Manual Verification) เสี่ยงต่อความผิดพลาดของตัวเลข</span>
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">AFTER</div>
            <h4 className="font-bold text-emerald-800 text-xl mb-4 flex items-center gap-2">
              <span className="text-3xl">🚀</span> การทำงานรูปแบบใหม่
            </h4>
            <ul className="space-y-4 text-emerald-900 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="bg-emerald-200 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">1</span>
                <span><strong>Web Form:</strong> กรอกข้อมูลผ่านเว็บไซต์ รองรับทุกอุปกรณ์ ลดขั้นตอนซ้ำซ้อน กำหนดรอบรายงานชัดเจน (วันที่ 15 และ 25)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-emerald-200 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">2</span>
                <span><strong>Centralized Cloud:</strong> เก็บข้อมูลรวมศูนย์ใน Google Sheets แบบ Real-time จังหวัดเห็นข้อมูลทันทีที่อำเภอกรอก</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-emerald-200 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">3</span>
                <span><strong>Auto Validation:</strong> มีระบบตรวจสอบความถูกต้องอัตโนมัติก่อนบันทึก ช่วยลดความผิดพลาดตั้งแต่ต้นทาง</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-emerald-200 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-xs">4</span>
                <span><strong>AI Dashboard:</strong> สรุปผลเป็น Visual Dashboard แสดงพื้นที่เพาะปลูก ผลผลิต ต้นทุน และความเสี่ยงได้ทันที</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits by Stakeholders */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-amber-500 pl-3 mb-6">
          2. ประโยชน์ต่อผู้ใช้งาน (Stakeholder Benefits)
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Executive */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
             <div className="w-12 h-12 bg-slate-800 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">👔</div>
             <h4 className="font-bold text-lg text-slate-800 mb-2">ผู้บริหาร / นักวางนโยบาย</h4>
             <ul className="text-sm text-slate-600 space-y-2 list-disc ml-4">
               <li>ได้ข้อมูลภาพรวมแบบ Real-time ผ่านการวิเคราะห์แล้ว</li>
               <li>ไม่ต้องรอรายงานสรุปรายสัปดาห์/เดือน</li>
               <li>บริหารจัดการความเสี่ยงเชิงรุกได้ทันที</li>
             </ul>
          </div>

          {/* Officer */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
             <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">👩‍💻</div>
             <h4 className="font-bold text-lg text-slate-800 mb-2">เจ้าหน้าที่ปฏิบัติงาน</h4>
             <ul className="text-sm text-slate-600 space-y-2 list-disc ml-4">
               <li>ลดขั้นตอนการรวบรวมไฟล์ Excel ซ้ำซ้อน</li>
               <li>ลดเวลาทำงานเอกสาร เพิ่มเวลาลงพื้นที่</li>
               <li>ส่งเสริมและแก้ปัญหาให้เกษตรกรได้ตรงจุด</li>
             </ul>
          </div>

          {/* Farmer */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
             <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">🌾</div>
             <h4 className="font-bold text-lg text-slate-800 mb-2">เกษตรกร และประชาชน</h4>
             <ul className="text-sm text-slate-600 space-y-2 list-disc ml-4">
               <li>ได้รับความช่วยเหลือจากภาครัฐที่ตรงเป้าและทันท่วงที</li>
               <li>ใช้เครื่องมือคำนวณต้นทุนเพื่อวางแผนการผลิต</li>
               <li>วางแผนการผลิตและการตัดสินใจได้ดีขึ้น</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Cross-Department Benefits (New Highlight - Light Theme) */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10 flex items-center gap-3">
             3. ประโยชน์ข้ามหน่วยงานระดับจังหวัด
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl relative z-10">
            ระบบนี้ไม่ได้มีประโยชน์แค่กับเกษตรจังหวัด แต่ยังเป็นฐานข้อมูลกลาง (Data Backbone) 
            ที่เชื่อมโยงไปยังหน่วยงานพันธมิตรเพื่อการบูรณาการงานระดับจังหวัด
          </p>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {/* Irrigation */}
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 font-bold mb-2 text-lg flex items-center gap-2">💧 สำนักงานชลประทาน</div>
              <h5 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Precision Water Management</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>"วางแผนปล่อยน้ำตามความต้องการจริง"</strong> Dashboard แสดงพิกัดการเพาะปลูกหนาแน่น และช่วงอายุข้าวที่ต้องการน้ำมากที่สุด ช่วยให้บริหารน้ำในเขื่อนได้อย่างมีประสิทธิภาพ
              </p>
            </div>

            {/* Disaster Prevention */}
            <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-orange-600 font-bold mb-2 text-lg flex items-center gap-2">🚨 ปภ. จังหวัด</div>
              <h5 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Proactive Prevention</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>"ระบุพื้นที่เฝ้าระวังพิเศษ"</strong> เมื่อทราบพิกัดและอายุข้าวที่เปราะบาง (เช่น ช่วงตั้งท้อง) เทียบกับพยากรณ์อากาศ สามารถแจ้งเตือนภัยและเตรียมเครื่องสูบน้ำล่วงหน้าได้
              </p>
            </div>

            {/* Commerce */}
            <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-purple-600 font-bold mb-2 text-lg flex items-center gap-2">💰 พาณิชย์จังหวัด</div>
              <h5 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wide">Price Stabilization</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>"พยากรณ์ผลผลิตล่วงหน้า"</strong> ทราบว่าอีก 2 เดือนข้างหน้าจะมีผลผลิตออกสู่ตลาดเท่าไหร่ เพื่อวางแผนหาตลาดรองรับหรือจัดกิจกรรมส่งเสริมการขายก่อนราคาตกต่ำ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Future Roadmap */}
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-indigo-500 pl-3 mb-6">
          4. การขยายผลในอนาคต (Scale Out & Scale Up)
        </h3>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Scale Out */}
          <div className="flex-1 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
             <h4 className="font-bold text-indigo-800 text-lg mb-3 flex items-center gap-2">
               <span className="bg-indigo-200 p-1 rounded">↗️</span> การขยายผล (Scale Out)
             </h4>
             <p className="text-indigo-900 font-bold mb-2">แนวคิด "แจก Template"</p>
             <p className="text-sm text-slate-600 leading-relaxed mb-4">
               ส่งต่อ Source Code, Google Sheet Template, และ Looker Studio ให้จังหวัดอื่นๆ นำไปปรับใช้กับ "พืชเศรษฐกิจ" ของตนเองได้ทันที
             </p>
             <div className="flex gap-2 flex-wrap">
               <span className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs text-indigo-600">มันสำปะหลัง</span>
               <span className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs text-indigo-600">อ้อย</span>
               <span className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs text-indigo-600">ทุเรียน</span>
               <span className="px-2 py-1 bg-white border border-indigo-200 rounded text-xs text-indigo-600">มังคุด</span>
             </div>
          </div>

          {/* Scale Up */}
          <div className="flex-1 bg-teal-50 p-6 rounded-xl border border-teal-100">
             <h4 className="font-bold text-teal-800 text-lg mb-3 flex items-center gap-2">
               <span className="bg-teal-200 p-1 rounded">⬆️</span> การพัฒนาต่อยอด (Scale Up)
             </h4>
             <p className="text-teal-900 font-bold mb-2">มุ่งสู่ Predictive Model</p>
             <ul className="text-sm text-slate-600 space-y-2 list-disc ml-4">
               <li><strong>เชื่อมโยงข้อมูลสภาพอากาศ (กรมอุตุฯ):</strong> เพื่อพยากรณ์ผลผลิตแม่นยำขึ้น</li>
               <li><strong>เชื่อมโยงข้อมูลราคาตลาด (สศก./พาณิชย์):</strong> เพื่อประเมินรายได้เกษตรกร</li>
               <li><strong>Machine Learning:</strong> สร้างโมเดลทำนายความเสี่ยงโรคระบาดจากประวัติข้อมูล</li>
             </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 border-t border-slate-200 pt-6 text-center">
        <p className="text-slate-500 italic mb-4">
          "ระบบที่ดี ไม่ใช่ระบบที่ซับซ้อน แต่คือระบบที่คนหน้างานใช้งานง่าย และผู้บริหารได้ข้อมูลจริง"
        </p>
        <Note type="info" title="พร้อมเริ่มติดตั้งแล้วใช่ไหม?">
          ไปที่เมนู <strong>"1. เตรียมฐานข้อมูล"</strong> เพื่อเริ่มสร้างระบบของคุณเองได้เลยครับ
        </Note>
      </div>
    </div>
  </div>
);
