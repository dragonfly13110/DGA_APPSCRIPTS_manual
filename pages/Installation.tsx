
import React from 'react';
import { Icons, PageHeader, Step, Note, CodeBlock } from '../components';

export const Installation = () => (
  <div>
    <PageHeader
      title="2. ติดตั้งโค้ด (Installation)"
      description="ขั้นตอนนี้เปรียบเสมือนการ 'วางเครื่องยนต์' ให้กับรถของเรา ไม่ต้องเขียนโค้ดเองครับ แค่ก๊อปปี้แล้ววางให้ถูกช่องก็พอ"
      icon={Icons.Code}
    />

    <Step number="1" title="เปิดห้องเครื่อง (Apps Script)">
      <p>กลับไปที่ไฟล์ Google Sheet ที่ท่านสร้างไว้เมื่อสักครู่</p>
      <ol className="list-decimal ml-6 mt-2 space-y-2 text-slate-700">
        <li>มองหาเมนูด้านบนชื่อ <strong className="bg-slate-200 px-1 rounded">Extensions (ส่วนขยาย)</strong></li>
        <li>คลิกเลือก <strong className="bg-slate-200 px-1 rounded">Apps Script</strong></li>
      </ol>
      <div className="mt-3 bg-blue-50 p-3 rounded text-sm text-blue-800 border border-blue-200">
        💡 <strong>สังเกต:</strong> หน้าต่างใหม่จะเด้งขึ้นมา เป็นหน้าจอสีขาวๆ โลโก้สีฟ้าๆ นี่คือ <strong>"ห้องทำงานของระบบ"</strong> ครับ
      </div>
    </Step>

    <Step number="2" title="ล้างของเก่าทิ้งให้หมด">
      <p>ท่านจะเห็นไฟล์ชื่อ <code>Code.gs</code> ที่มีโค้ดคำว่า <code>function myFunction()...</code> ติดมา</p>
      <p className="mt-2 text-red-600 font-bold">🚨 ให้ลบโค้ดพวกนั้นทิ้งให้หมดเลยครับ!</p>
      <p className="text-sm text-slate-500">(กด Ctrl+A เพื่อเลือกทั้งหมด แล้วกด Delete ให้หน้าจอว่างเปล่า)</p>
    </Step>

    <Step number="3" title="สร้างไฟล์ให้ครบ 5 ไฟล์ (สำคัญมาก)">
      <p>ระบบของเราต้องใช้ไฟล์ทั้งหมด 5 ไฟล์ ท่านต้องสร้างให้ครบตามชื่อและประเภทที่ระบุไว้ด้านล่างนี้</p>
      <p className="text-sm text-slate-500 mb-4">วิธีกดสร้าง: ให้กดเครื่องหมายบวก <strong>(+)</strong> ที่มุมซ้ายบน แล้วเลือกประเภทไฟล์</p>

      <div className="mt-6 space-y-6">

        {/* กลุ่มที่ 1: สีฟ้า Script */}
        <div className="border-l-4 border-blue-500 pl-4 bg-slate-50 p-4 rounded-r-lg">
          <h4 className="font-bold text-blue-700 flex items-center gap-2 mb-3">
            <span className="bg-blue-100 px-2 py-0.5 rounded text-sm">TYPE 1</span> สร้างแบบ Script (สัญลักษณ์สามเหลี่ยมสีฟ้า)
          </h4>

          <div className="space-y-2">
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">1. Code</span>
              <span className="text-sm text-slate-400">ระบบจะเติม .gs ให้เอง</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">2. AI_Analysis</span>
              <span className="text-sm text-slate-400">ระบบจะเติม .gs ให้เอง</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">3. RateLimiter</span>
              <span className="text-sm text-slate-400">ระบบจะเติม .gs ให้เอง</span>
            </div>
          </div>
        </div>

        {/* กลุ่มที่ 2: สีส้ม HTML */}
        <div className="border-l-4 border-orange-500 pl-4 bg-slate-50 p-4 rounded-r-lg">
          <h4 className="font-bold text-orange-700 flex items-center gap-2 mb-3">
            <span className="bg-orange-100 px-2 py-0.5 rounded text-sm">TYPE 2</span> สร้างแบบ HTML (สัญลักษณ์ &lt; &gt; สีส้ม)
          </h4>

          <div className="space-y-2">
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">4. Index</span>
              <span className="text-sm text-slate-400">ระบบจะเติม .html ให้เอง</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">5. AI_View</span>
              <span className="text-sm text-slate-400">ระบบจะเติม .html ให้เอง</span>
            </div>
          </div>
        </div>

      </div>

      <Note type="warning" title="ระวัง! การตั้งชื่อไฟล์">
        1. ไม่ต้องพิมพ์นามสกุล .gs หรือ .html ต่อท้าย (Google เติมให้แล้ว)<br />
        2. ตัวพิมพ์เล็ก-ใหญ่ มีผล! (Case Sensitive) พิมพ์ให้เหมือนเป๊ะๆ เช่น <code>Index</code> ต้อง I ใหญ่
      </Note>
    </Step>

    <Step number="4" title="วางโค้ดและบันทึก" isLast={true}>
      <p>เมื่อสร้างไฟล์เปล่าครบแล้ว ให้ทำตามขั้นตอนนี้ซ้ำๆ กับทุกไฟล์ครับ:</p>

      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-2 space-y-3">
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
          <p className="text-sm">คลิกที่ชื่อไฟล์ทางซ้าย (เริ่มจาก <code>Code.gs</code>)</p>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
          <p className="text-sm">เปิดลิงก์ Source Code ด้านล่าง แล้วก๊อปปี้โค้ดมาวางทับลงไป</p>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
          <p className="text-sm font-bold text-blue-600">กดปุ่ม Save (รูปแผ่นดิสก์) 💾 ด้านบนทันที</p>
        </div>
      </div>

      <div className="mt-8">
        <Note type="info" title="ดาวน์โหลด Source Code">
          <p className="mb-2">เพื่อให้ง่ายต่อการใช้งานและได้รับโค้ดเวอร์ชันล่าสุด ท่านสามารถดูและก๊อปปี้โค้ดทั้งหมดได้จากลิงก์ด้านล่างนี้ครับ</p>
          <div className="flex flex-col gap-3 mt-4">
            <a href="https://script.google.com/d/1li9y8x4kfBMYTTw7nfrKnGG31XZXAyoXHyaRizlL8HMLbr9q0e-4qj2d/edit?usp=sharing" target="_blank" className="flex items-center gap-3 p-4 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-all group">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icons.Code />
              </div>
              <div>
                <h5 className="font-bold text-slate-800">Google Apps Script (ต้นฉบับ)</h5>
                <p className="text-sm text-slate-500">คลิกเพื่อเปิดดูไฟล์ทั้งหมด (Code.gs, Index.html, ฯลฯ)</p>
              </div>
            </a>

            <a href="https://github.com/dragonfly13110/DGA_APPSCRIPTS_rice_cs" target="_blank" className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all group">
              <div className="bg-slate-100 p-2 rounded-full text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div>
                <h5 className="font-bold text-slate-800">GitHub Repository</h5>
                <p className="text-sm text-slate-500">สำหรับนักพัฒนาที่ต้องการดูประวัติการแก้ไข หรือ Fork ไปพัฒนาต่อ</p>
              </div>
            </a>
          </div>
        </Note>
      </div>
    </Step>
  </div>
);
