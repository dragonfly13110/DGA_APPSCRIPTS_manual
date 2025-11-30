
import React from 'react';
import { Icons, PageHeader, Note } from '../components';

export const Troubleshooting = () => (
  <div>
    <PageHeader 
      title="การแก้ปัญหา (Troubleshooting)" 
      description="รวมฮิตปัญหาที่พบบ่อย พร้อมวิธีแก้ไขด้วยตัวเอง และ 'คำถามตัวช่วย' สำหรับนำไปถาม AI ให้ช่วยแก้ปัญหา"
      icon={Icons.Bug}
    />

    <div className="space-y-8">

      {/* หมวดที่ 1: ปัญหาการเข้าใช้งานและหน้าจอ */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-red-500">🚫</span> หมวด: เข้าเว็บไม่ได้ / หน้าจอขาว
        </h3>

        <div className="space-y-4">
          {/* Case 1.1 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800 flex justify-between items-center cursor-help">
               1. เปิดลิงก์แล้วเจอข้อความ "Script function not found: doGet"
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-red-600">สาเหตุ:</strong> ท่านอาจจะเผลอลบไฟล์ <code>Code.gs</code> หรือเปลี่ยนชื่อฟังก์ชัน <code>doGet</code> ในโค้ด</p>
               <p className="font-bold text-slate-700">วิธีแก้:</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>กลับไปที่ Apps Script Editor</li>
                 <li>ตรวจสอบไฟล์ <code>Code.gs</code> ว่ามีฟังก์ชันชื่อ <code>doGet(e)</code> อยู่ไหม</li>
                 <li>ถ้าไม่มี ให้ไปก๊อปปี้โค้ดจากคู่มือมาวางใหม่ แล้วกด Save + Deploy ใหม่</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ฉันทำ Google Apps Script Web App แล้วเวลาเข้าลิงก์มันขึ้น Error ว่า 'Script function not found: doGet' ฉันต้องเช็คตรงไหนบ้าง?"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Case 1.2 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800 flex justify-between items-center">
               2. หน้าจอขาวหมุนติ้ว (Loading...) ไม่ยอมหยุด
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-red-600">สาเหตุ:</strong> โค้ด JavaScript ฝั่งหน้าบ้าน (Index.html) พัง มักเกิดจาก <strong>Syntax Error</strong> ในตัวแปร <code>districtsData</code> หรือ <code>CROP_VARIETIES</code></p>
               <p className="font-bold text-slate-700">วิธีแก้:</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>เช็คไฟล์ <code>Code.gs</code> ตรงตัวแปร <code>districtsData</code> ดูว่าลืมใส่ลูกน้ำ <code>,</code> ท้ายบรรทัดหรือเปล่า</li>
                 <li>เช็คไฟล์ <code>Index.html</code> ตรงตัวแปร <code>CROP_VARIETIES</code> ว่าใส่วงเล็บครบไหม <code>["..."]</code></li>
                 <li>ลองคลิกขวาที่หน้าเว็บ -> Inspect (ตรวจสอบ) -> Console ดูว่ามีตัวหนังสือสีแดงแจ้ง Error อะไรไหม</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ช่วยเช็ค Syntax ของตัวแปร JSON ใน Javascript ชุดนี้ให้หน่อยว่าฉันลืมใส่ลูกน้ำ (Comma) หรือวงเล็บตรงไหนไหม? [แล้วก๊อปปี้โค้ดส่วน districtsData ไปวางต่อ]"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Case 1.3 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800 flex justify-between items-center">
               3. ขึ้นเตือน "Exception: You do not have permission..."
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-red-600">สาเหตุ:</strong> ท่านเพิ่มบริการใหม่ (เช่น เพิ่ม Gemini API) แต่ยังไม่ได้กดอนุญาตสิทธิ์ (Authorize) รอบใหม่</p>
               <p className="font-bold text-slate-700">วิธีแก้:</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>ไปที่หน้า Editor</li>
                 <li>เลือกฟังก์ชันใดก็ได้ (เช่น <code>getInitialData</code>) จาก Dropdown ด้านบน แล้วกดปุ่ม <strong>Run</strong> (▶)</li>
                 <li>ระบบจะเด้งหน้าต่างขอสิทธิ์ขึ้นมาใหม่ ให้กด Review permissions -> Allow ตามขั้นตอนเดิม</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ฉันรัน Google Apps Script แล้วเจอ error ว่า 'Exception: You do not have permission to call UrlFetchApp.fetch' ฉันต้องไปกดอนุญาตสิทธิ์ตรงไหน?"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* หมวดที่ 2: ปัญหาการบันทึกข้อมูล */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-amber-500">💾</span> หมวด: บันทึกข้อมูลไม่ได้ / ข้อมูลผิด
        </h3>

        <div className="space-y-4">
          {/* Case 2.1 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800">
               4. กดบันทึกแล้วขึ้น "Error: ไม่พบชีท Data_Entry"
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-amber-600">สาเหตุ:</strong> ชื่อ Tab ใน Google Sheet ไม่ตรงกับในโค้ด (พิมพ์ผิด, มีเว้นวรรค, หรือลืมสร้าง)</p>
               <p className="font-bold text-slate-700">วิธีแก้:</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>ไปดูที่ Google Sheet ด้านล่างสุด ว่าชื่อ Tab คือ <code>Data_Entry</code> เป๊ะๆ หรือไม่ (ห้ามมีวรรคท้ายคำ)</li>
                 <li>หรือไปแก้ตัวแปร <code>SHEET_NAME</code> ในไฟล์ <code>Code.gs</code> ให้ตรงกับชื่อ Tab ของท่าน</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ใน Google Apps Script คำสั่ง getSheetByName() มันหาชื่อ Sheet ไม่เจอ ทั้งๆ ที่ฉันสร้างแล้ว สาเหตุที่เป็นไปได้มีอะไรบ้าง? (เช่น เรื่องเว้นวรรค หรือตัวพิมพ์เล็กใหญ่)"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Case 2.2 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800">
               5. บันทึกผ่าน แต่ข้อมูลบางช่องหายไป (เป็นช่องว่างใน Sheet)
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-amber-600">สาเหตุ:</strong> ปัญหาคลาสสิก! เกิดจาก <strong>Mapping ไม่ตรงกัน</strong> ท่านเปลี่ยนชื่อหัวตารางใน Sheet แต่ลืมแก้ในโค้ด</p>
               <p className="font-bold text-slate-700">วิธีแก้:</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>เปิดไฟล์ <code>Code.gs</code> ไปที่ตัวแปร <code>COLUMN_NAMES</code></li>
                 <li>เช็คทีละบรรทัดว่าชื่อทางขวามือ ตรงกับหัวตารางใน Sheet ทุกตัวอักษรหรือไม่</li>
                 <li>ดูบทที่ 3 (การปรับแต่ง) ข้อ 4 อีกครั้ง</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ช่วยเปรียบเทียบ Object นี้กับหัวตาราง Google Sheet ให้หน่อยว่าฉันพิมพ์ตรงไหนผิด [ก๊อปปี้โค้ดส่วน COLUMN_NAMES ไปวาง] และนี่คือชื่อหัวตารางใน Sheet ของฉัน [พิมพ์ชื่อหัวตาราง]"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Case 2.3 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800">
               6. เลือกวันที่อื่นไม่ได้ (ระบบล็อคแค่วันที่ 15 และ 25)
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-amber-600">สาเหตุ:</strong> ระบบถูกตั้งล็อกไว้ในโค้ดเพื่อมาตรฐานข้อมูล</p>
               <p className="font-bold text-slate-700">วิธีแก้ (ถ้าต้องการปลดล็อก):</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>เปิดไฟล์ <code>Code.gs</code> ค้นหาคำว่า <code>if (dayOfMonth !== 15 && dayOfMonth !== 25)</code></li>
                 <li>ลบบล็อก if นั้นทิ้ง หรือ comment ปิดไว้ (ใส่ // ข้างหน้า)</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ฉันมีโค้ด Google Apps Script ที่เช็คเงื่อนไขวันที่ if (dayOfMonth !== 15). ถ้าฉันอยากให้มันบันทึกได้ทุกวัน ฉันต้องแก้โค้ดนี้ยังไง?"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* หมวดที่ 3: ปัญหา AI และอื่นๆ */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
          <span className="text-blue-500">🤖</span> หมวด: AI และการแสดงผล
        </h3>

        <div className="space-y-4">
          {/* Case 3.1 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800">
               7. AI ตอบกลับมาว่า "Error" หรือเงียบหายไป
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-blue-600">สาเหตุ:</strong> Key ผิด, หรือโควต้าเต็ม, หรือ Google ปรับเปลี่ยน Model Name</p>
               <p className="font-bold text-slate-700">วิธีแก้:</p>
               <ul className="list-disc ml-5 space-y-1 mb-3">
                 <li>เช็ค <code>Script Properties</code> ว่าใส่ Key ถูกช่อง ไม่สลับกัน</li>
                 <li>ลองเปลี่ยนชื่อโมเดลในไฟล์ <code>AI_Analysis.gs</code> จาก <code>gemini-2.5-pro</code> เป็น <code>gemini-pro</code> หรือ <code>gemini-1.5-flash</code> (รุ่นเล็กกว่าแต่เสถียร)</li>
               </ul>

               {/* Ask AI Section - Redesigned */}
               <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 p-4 relative">
                 <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                    Prompt สำหรับถาม AI
                 </div>
                 <div className="flex gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">ก๊อปปี้ข้อความนี้ไปถาม:</p>
                      <div className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm font-medium text-slate-800 text-base leading-relaxed font-mono select-all hover:border-indigo-300 transition-colors cursor-text group">
                         "ฉันใช้ Google Gemini API ใน Apps Script แล้วเจอ Error [ใส่ข้อความ Error ที่เจอ] มันแปลว่าอะไร และแก้ยังไงครับ?"
                         <span className="block mt-2 text-xs text-indigo-400 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity text-right">คลิกเพื่อเลือกข้อความ</span>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Case 3.2 */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
             <div className="bg-slate-50 px-4 py-3 font-bold text-slate-800">
               8. แก้โค้ดไปตั้งเยอะ แต่หน้าเว็บยังเหมือนเดิม!
             </div>
             <div className="p-4 text-sm text-slate-600">
               <p className="mb-2"><strong className="text-blue-600">สาเหตุ:</strong> นี่คือกับดักมือใหม่! ท่านกด Save แล้ว แต่ท่านยังไม่ได้ <strong>Deploy New Version</strong></p>
               <Note type="info">
                 <strong>จำไว้เสมอ:</strong> ทุกครั้งที่แก้โค้ดและอยากให้ User เห็นความเปลี่ยนแปลง ต้องกด: <br/>
                 Deploy &gt; Manage deployments &gt; Edit (ดินสอ) &gt; Version: <strong>New Version</strong> &gt; Deploy
               </Note>
             </div>
          </div>
        </div>
      </section>

      {/* Light Theme - Pro Tips */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-purple-100 p-6 rounded-xl mt-8 shadow-sm">
        <h4 className="font-bold text-purple-900 text-lg mb-2 flex items-center gap-2">
          <span className="bg-white p-1 rounded-full shadow-sm text-xl">💡</span> เทคนิคไม้ตาย: เมื่อไปต่อไม่ถูก
        </h4>
        <p className="text-sm mb-4 text-slate-700">ถ้าแก้ทุกวิธีแล้วยังไม่ได้ ลองให้ AI ช่วย debug ทั้งไฟล์ดูครับ:</p>
        <ol className="list-decimal ml-5 space-y-2 text-sm font-mono text-slate-600">
          <li>กด Ctrl+A เพื่อก๊อปปี้โค้ดทั้งหมดในไฟล์ที่มีปัญหา</li>
          <li>ไปที่ ChatGPT หรือ Gemini</li>
          <li>พิมพ์ว่า "ฉันเขียน Apps Script ไฟล์นี้ แล้วเจอ Error ว่า [ใส่ Error] ช่วยหาจุดผิดให้หน่อย นี่คือโค้ดของฉัน..."</li>
          <li>วางโค้ดทั้งหมดลงไป</li>
        </ol>
      </div>

    </div>
  </div>
);
