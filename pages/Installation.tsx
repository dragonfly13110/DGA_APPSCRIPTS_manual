
import React from 'react';
import { Icons, PageHeader, Step, Note } from '../components';

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
            <span className="bg-blue-100 px-2 py-0.5 rounded text-xs">TYPE 1</span> สร้างแบบ Script (สัญลักษณ์สามเหลี่ยมสีฟ้า)
          </h4>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">1. Code</span>
              <span className="text-xs text-slate-400">ระบบจะเติม .gs ให้เอง</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">2. AI_Analysis</span>
              <span className="text-xs text-slate-400">ระบบจะเติม .gs ให้เอง</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">3. RateLimiter</span>
              <span className="text-xs text-slate-400">ระบบจะเติม .gs ให้เอง</span>
            </div>
          </div>
        </div>

        {/* กลุ่มที่ 2: สีส้ม HTML */}
        <div className="border-l-4 border-orange-500 pl-4 bg-slate-50 p-4 rounded-r-lg">
          <h4 className="font-bold text-orange-700 flex items-center gap-2 mb-3">
            <span className="bg-orange-100 px-2 py-0.5 rounded text-xs">TYPE 2</span> สร้างแบบ HTML (สัญลักษณ์ &lt; &gt; สีส้ม)
          </h4>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">4. Index</span>
              <span className="text-xs text-slate-400">ระบบจะเติม .html ให้เอง</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 border rounded">
              <span className="font-mono font-bold text-slate-700 ml-2">5. AI_View</span>
              <span className="text-xs text-slate-400">ระบบจะเติม .html ให้เอง</span>
            </div>
          </div>
        </div>

      </div>
      
      <Note type="warning" title="ระวัง! การตั้งชื่อไฟล์">
         1. ไม่ต้องพิมพ์นามสกุล .gs หรือ .html ต่อท้าย (Google เติมให้แล้ว)<br/>
         2. ตัวพิมพ์เล็ก-ใหญ่ มีผล! (Case Sensitive) พิมพ์ให้เหมือนเป๊ะๆ เช่น <code>Index</code> ต้อง I ใหญ่
      </Note>
    </Step>

    <Step number="4" title="วางโค้ดและบันทึก" isLast={true}>
      <p>เมื่อสร้างไฟล์เปล่าครบแล้ว ให้ทำตามขั้นตอนนี้ซ้ำๆ กับทุกไฟล์ครับ:</p>
      
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-2 space-y-3">
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
          <p className="text-sm">คลิกที่ชื่อไฟล์ทางซ้าย (เริ่มจาก <code>Code.gs</code>)</p>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
          <p className="text-sm">ก๊อปปี้โค้ดที่เราแจกให้ ไปวางทับลงไป</p>
        </div>
        <div className="flex gap-3 items-start">
          <div className="bg-slate-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
          <p className="text-sm font-bold text-blue-600">กดปุ่ม Save (รูปแผ่นดิสก์) 💾 ด้านบนทันที</p>
        </div>
      </div>

      <p className="mt-4 text-slate-600 italic text-sm">
        *ทำแบบนี้ให้ครบทั้ง 5 ไฟล์ จนกระทั่งไม่มี <span className="text-orange-500 font-bold">* สีส้ม</span> อยู่หน้าชื่อไฟล์ทางซ้ายมือ
      </p>
    </Step>
  </div>
);
