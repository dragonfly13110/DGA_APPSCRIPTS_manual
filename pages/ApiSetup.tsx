
import React from 'react';
import { Icons, PageHeader, Step, Note } from '../components';

export const ApiSetup = () => (
  <div>
    <PageHeader 
      title="4. ขอ API Key" 
      description="ระบบต้องการกุญแจ 2 ดอกเพื่อปลดล็อคพลัง AI และข้อมูลอากาศ (ฟรีในระดับเริ่มต้น)"
      icon={Icons.Key}
    />

    <Step number="1" title="Gemini API Key (สมอง AI)">
      <ul className="list-disc ml-5 space-y-2 text-slate-700">
        <li>ไปที่ <a href="https://aistudio.google.com/" target="_blank" className="text-blue-600 font-bold underline">Google AI Studio</a></li>
        <li>Login ด้วย Google Account</li>
        <li>กดปุ่ม <strong>Get API Key</strong> มุมบนซ้าย</li>
        <li>กด <strong>Create API Key</strong></li>
        <li>คัดลอก Key ที่ได้เก็บไว้ (ขึ้นต้นด้วย <code>AIzaSy...</code>)</li>
      </ul>
      <Note type="info" title="Free Tier vs Paid Tier">
        Gemini 2.5 Pro มี Free Tier ให้ใช้งานได้เยอะพอสมควร แต่ถ้าต้องการความเสถียรสูงสุดหรือใช้เยอะมาก แนะนำให้ผูก Billing กับ Google Cloud (Pay-as-you-go)
      </Note>
    </Step>

    <Step number="2" title="OpenWeatherMap API Key (ข้อมูลอากาศ)">
      <ul className="list-disc ml-5 space-y-2 text-slate-700">
        <li>ไปที่ <a href="https://openweathermap.org/" target="_blank" className="text-blue-600 font-bold underline">OpenWeatherMap</a></li>
        <li>สมัครสมาชิก (Sign Up) และยืนยันอีเมล</li>
        <li>ไปที่เมนูชื่อเรา &gt; <strong>My API Keys</strong></li>
        <li>คัดลอก Key ที่เป็น Default มาเก็บไว้</li>
      </ul>
    </Step>

    <Step number="3" title="ฝัง Key ลงใน Apps Script (อย่างปลอดภัย)" isLast={true}>
      <p>เราจะไม่แปะ Key ลงในโค้ดตรงๆ เพราะไม่ปลอดภัย เราจะใช้ <strong>Script Properties</strong></p>
      
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-4">
        <h4 className="font-bold text-slate-800 mb-4">วิธีตั้งค่า:</h4>
        <ol className="list-decimal ml-5 space-y-3 text-slate-700">
          <li>กลับไปที่หน้า <strong>Apps Script Editor</strong></li>
          <li>ที่แถบซ้ายมือ คลิกรูปเฟือง ⚙️ <strong>(Project Settings)</strong></li>
          <li>เลื่อนลงมาด้านล่างสุด หาหัวข้อ <strong>Script Properties</strong></li>
          <li>กดปุ่ม <strong>Add script property</strong></li>
          <li>เพิ่ม 2 รายการดังนี้ (ชื่อต้องตรงเป๊ะ ตัวพิมพ์ใหญ่หมด):</li>
        </ol>

        <div className="mt-6 grid gap-3">
          <div className="flex flex-col md:flex-row gap-2 md:items-center bg-white p-3 border rounded shadow-sm">
            <span className="font-mono font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded w-48">GEMINI_API_KEY</span>
            <span className="text-slate-400 text-sm">👉 ใส่ Key AIzaSy... ที่ได้จากข้อ 1</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:items-center bg-white p-3 border rounded shadow-sm">
            <span className="font-mono font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded w-48">OPENWEATHER_API_KEY</span>
            <span className="text-slate-400 text-sm">👉 ใส่ Key ที่ได้จากข้อ 2</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-200">
          <button className="bg-slate-300 text-slate-500 cursor-not-allowed px-4 py-2 rounded font-bold text-sm pointer-events-none">กด Save script properties</button>
          <span className="ml-2 text-sm text-slate-500">(ปุ่มนี้อยู่ใน Apps Script นะครับ)</span>
        </div>
      </div>
    </Step>
  </div>
);
