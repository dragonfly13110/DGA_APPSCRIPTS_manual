
import React from 'react';
import { Icons, PageHeader, Step, Note } from '../components';

export const Deployment = () => (
  <div>
    <PageHeader
      title="5. เริ่มใช้งานจริง (Deployment)"
      description="ขั้นตอนสุดท้าย! เปลี่ยนโค้ดให้กลายเป็น Web App ที่ส่งลิงก์ให้เกษตรกรใช้งานได้ทันที"
      icon={Icons.Rocket}
    />

    <Step number="1" title="สร้าง Deployment ใหม่">
      <p>ที่มุมขวาบนของหน้า Apps Script กดปุ่มสีน้ำเงิน <strong>Deploy</strong></p>
      <p>เลือกเมนูแรก <strong>New deployment (การทำให้ใช้งานได้รายการใหม่)</strong></p>
    </Step>

    <Step number="2" title="ตั้งค่าสิทธิ์การเข้าถึง (จุดวัดใจ)">
      <p>หน้าต่างตั้งค่าจะเด้งขึ้นมา ให้กดรูปเฟือง (Select type) เลือก <strong>Web app</strong> </p>
      <p>แล้วตั้งค่าตามภาพนี้เป๊ะๆ (ห้ามผิดแม้แต่อันเดียว):</p>

      <div className="mt-4 bg-white border-2 border-blue-200 rounded-lg overflow-hidden max-w-lg shadow-md">
        <div className="p-4 border-b border-slate-100 grid grid-cols-3 items-center">
          <span className="text-sm font-bold text-slate-500 uppercase">Description</span>
          <span className="col-span-2 text-sm text-slate-800">V1.0 (พิมพ์อะไรก็ได้)</span>
        </div>

        <div className="p-4 border-b border-slate-100 grid grid-cols-3 items-center bg-yellow-50">
          <span className="text-sm font-bold text-slate-500 uppercase">Execute as</span>
          <div className="col-span-2">
            <span className="text-sm font-bold text-slate-900 block">Me (ชื่ออีเมลของคุณ)</span>
            <span className="text-sm text-slate-500">*สำคัญมาก: ถ้าเลือกอันอื่น ระบบจะพังทันที</span>
          </div>
        </div>

        <div className="p-4 grid grid-cols-3 items-center bg-green-50">
          <span className="text-sm font-bold text-slate-500 uppercase">Who has access</span>
          <div className="col-span-2">
            <span className="text-sm font-bold text-slate-900 block">Anyone (ทุกคน)</span>
            <span className="text-sm text-slate-500">*เพื่อให้เกษตรกรใช้ได้โดยไม่ต้อง Login Gmail</span>
          </div>
        </div>
      </div>
    </Step>

    <Step number="3" title="ผ่านด่านรักษาความปลอดภัย (Authorization)">
      <p>พอกด Deploy ระบบจะเด้งถามสิทธิ์ (Authorize Access) ให้ทำตามนี้:</p>
      <ol className="list-decimal ml-6 mt-2 space-y-2 text-slate-700">
        <li>กดปุ่ม <strong>Review permissions</strong></li>
        <li>เลือกบัญชี Gmail ของเรา</li>
        <li><span className="text-red-600 font-bold">เจอหน้าจอแดงๆ เตือนว่าอันตราย?</span> ไม่ต้องตกใจ!</li>
        <li>มองหาคำว่า <strong className="text-slate-900 underline">Advanced</strong> (ขั้นสูง) ตัวเล็กๆ ด้านซ้ายล่าง</li>
        <li>กดที่คำว่า <strong>Go to ... (unsafe)</strong> ด้านล่างสุด</li>
        <li>กดปุ่ม <strong>Allow</strong> (อนุญาต)</li>
      </ol>
    </Step>

    <Step number="4" title="รับลิงก์ใช้งาน" isLast={true}>
      <p>เมื่อเสร็จสิ้น คุณจะได้ URL ยาวๆ ที่ลงท้ายด้วย <code>/exec</code></p>
      <div className="bg-slate-800 text-white p-3 rounded font-mono text-sm md:text-sm mt-2 break-all shadow-inner">
        https://script.google.com/macros/s/AKfycbx.../exec
      </div>
      <p className="mt-4 text-green-700 font-bold flex items-center gap-2">
        <Icons.Check /> เสร็จสิ้น! ก๊อปลิงก์นี้ไปทำ QR Code หรือส่งเข้ากลุ่มไลน์ได้เลย
      </p>
    </Step>

    <Step number="5" title="เมื่อแก้โค้ด ต้องทำสิ่งนี้ (Update Version)">
      <p>หลายคนตกม้าตายตรงนี้! เมื่อท่านกลับไปแก้โค้ด (เช่น เพิ่มอำเภอ) แล้วกด Save อย่างเดียว <strong>หน้าเว็บจะไม่เปลี่ยนตาม</strong></p>
      <p className="mt-2 text-slate-700 font-bold">ท่านต้อง "ดันเวอร์ชันใหม่" ทุกครั้ง ดังนี้:</p>
      <ol className="list-decimal ml-6 mt-2 space-y-2 text-slate-700">
        <li>กดปุ่ม <strong>Deploy</strong> สีน้ำเงินปุ่มเดิม</li>
        <li>เลือก <strong>Manage deployments (จัดการการทำให้ใช้งานได้)</strong></li>
        <li>กดรูปดินสอ ✏️ (Edit) ด้านบนขวา</li>
        <li>ตรง Version ให้เลือกเป็น <strong>New version (เวอร์ชันใหม่)</strong> <span className="text-red-500 font-bold">*ห้ามลืม!</span></li>
        <li>กดปุ่ม <strong>Deploy</strong></li>
      </ol>
      <div className="mt-3 bg-blue-50 p-3 rounded text-sm text-blue-800 border border-blue-200">
        💡 <strong>Tip:</strong> URL ของเว็บจะยังคงเป็น <strong>ลิงก์เดิม</strong> ไม่เปลี่ยน ท่านไม่ต้องส่งลิงก์ใหม่ให้เกษตรกร
      </div>
    </Step>
  </div>
);
