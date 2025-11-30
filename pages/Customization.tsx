
import React from 'react';
import { Icons, PageHeader, Step, CodeBlock, Note } from '../components';

export const Customization = () => (
  <div>
    <PageHeader
      title="3. การปรับแต่ง (Customization)"
      description="เพื่อให้ระบบรองรับบริบทจังหวัดและพืชของท่าน จำเป็นต้องมีการแก้ไขโค้ดเล็กน้อย"
      icon={Icons.Settings}
    />

    <Step number="1" title="เชื่อมต่อฐานข้อมูล (Database Connection)">
      <p>เปิดไฟล์ <code>Code.gs</code> และ <code>AI_Analysis.gs</code> (ต้องแก้ทั้ง 2 ไฟล์นี้)</p>
      <p>ค้นหาบรรทัดบนสุด และเปลี่ยนค่า <strong>SPREADSHEET_ID</strong> เป็น ID ของไฟล์ท่าน</p>
      <CodeBlock
        label="Code.gs และ AI_Analysis.gs"
        code={`// เปลี่ยน ID ในเครื่องหมายคำพูดให้เป็นของท่าน
const SPREADSHEET_ID = "1QyruEowKFva5n7JNiizQ-0IR3rV87ReYNPSnWXT9eac"; 

// ตรวจสอบชื่อ Sheet ให้ตรงกับที่สร้างไว้ 
const SHEET_NAME = "Data_Entry";`}
      />
    </Step>

    <Step number="2" title="กำหนดพื้นที่ (Location Configuration)">
      <p>เปิดไฟล์ <code>Code.gs</code> และค้นหาตัวแปร <code>districtsData</code></p>
      <p>แก้ข้อมูลในปีกกา <code>{ }</code> ให้เป็นรายชื่ออำเภอและตำบลของท่าน รูปแบบคือ <code>"ชื่ออำเภอ": ["ตำบล1", "ตำบล2"],</code></p>
      <CodeBlock
        label="Code.gs"
        code={`const districtsData = {
  "เมืองภูเก็ต": ["ตลาดใหญ่", "ตลาดเหนือ", "เกาะแก้ว", "รัษฎา", "วิชิต", "ฉลอง"],
  "กะทู้": ["กะทู้", "ป่าตอง", "กมลา"],
  "ถลาง": ["เทพกระษัตรี", "ศรีสุนทร", "เชิงทะเล", "ป่าคลอก", "ไม้ขาว", "สาคู"]
};`}
      />
    </Step>

    <Step number="3" title="กำหนดชนิดพืช (Frontend)">
      <p>เปิดไฟล์ <code>Index.html</code> แล้วกด Ctrl+F ค้นหาคำว่า <code>RICE_VARIETIES</code> (หรือคำว่า พันธุ์ข้าว)</p>
      <p>เปลี่ยนชื่อตัวแปรและรายการพืชให้ตรงกับโจทย์ท่าน</p>

      <CodeBlock
        label="Index.html (ส่วน Javascript)"
        code={`// แก้ไขรายการตัวเลือก
const CROP_VARIETIES = ["ยางแผ่นดิบ", "น้ำยางสด", "ยางก้อนถ้วย", "ไม้ยางพารา"];
const DEFAULT_CROP = "น้ำยางสด";`}
      />
      <p className="mt-2 text-sm text-slate-600">
        *และอย่าลืมเลื่อนลงไปแก้ในฟังก์ชัน <code>addRiceEntryRow</code> ตรงจุดที่สร้าง Dropdown ให้ใช้ตัวแปร <code>CROP_VARIETIES</code> แทนตัวเดิม
      </p>
    </Step>

    <Step number="4" title="Advanced: การเปลี่ยนหัวตาราง (Backend Mapping)">
      <p className="mb-4 text-slate-700">
        หากท่านเปลี่ยนชื่อหัวตารางใน Google Sheet (เช่น เปลี่ยน Col F จาก "พันธุ์ข้าว" เป็น "เกรดสินค้า")
        ท่านต้องมา "บอก" ระบบหลังบ้านให้รู้ด้วย โดยการแก้ Mapping ในไฟล์ <code>Code.gs</code>
      </p>

      <CodeBlock
        label="Code.gs (ค้นหาตัวแปร COLUMN_NAMES)"
        code={`const COLUMN_NAMES = {
  // ฝั่งซ้าย (KEY) ห้ามแก้เด็ดขาด : ฝั่งขวา (VALUE) แก้ตามชื่อใน Sheet
  TIMESTAMP: "Timestamp บันทึก",
  REPORT_DATE: "วันที่รายงาน",
  DISTRICT: "อำเภอ",
  TAMBON: "ตำบล",
  
  // -- จุดที่แก้ได้ --
  RICE_VARIETY: "เกรดสินค้า",       // <-- แก้ให้ตรงกับหัวตาราง Col F
  AREA_RAI: "จำนวนไร่ (ไร่)",       // <-- แก้ให้ตรงกับหัวตาราง Col G
  YIELD_PER_RAI_KG: "น้ำหนัก (กก.)", // <-- แก้ให้ตรงกับหัวตาราง Col H
  TOTAL_YIELD_TON: "รวมน้ำหนัก (ตัน)", // <-- แก้ให้ตรงกับหัวตาราง Col I
  IRRIGATION_ZONE: "สภาพสวน",       // <-- แก้ให้ตรงกับหัวตาราง Col J
  HARVEST_MONTH: "รอบการกรีด",      // <-- แก้ให้ตรงกับหัวตาราง Col K
  ROW_ID: "เลขอ้างอิงการบันทึก"
};`}
      />
      <Note type="warning" title="หลักการสำคัญ">
        ระบบใช้การจับคู่ชื่อ (Name Matching) ดังนั้น <strong>ชื่อในฝั่งขวาของโค้ด ต้องเหมือนกับ หัวตารางใน Sheet ทุกตัวอักษร</strong> (รวมถึงวรรคตอน)
      </Note>
    </Step>

    <Step number="5" title="ตัวอย่าง: เพิ่มอำเภอใหม่ (Add District)">
      <p>สมมติท่านต้องการเพิ่ม "อำเภอเกาะสมุย" และตำบลในสังกัด</p>
      <ol className="list-decimal ml-6 mt-2 space-y-2 text-slate-700">
        <li>เปิดไฟล์ <code>Code.gs</code></li>
        <li>เลื่อนหาตัวแปร <code>districtsData</code></li>
        <li>เพิ่มบรรทัดใหม่ต่อท้าย (อย่าลืมใส่ลูกน้ำ <code>,</code> คั่นบรรทัดก่อนหน้า)</li>
      </ol>
      <CodeBlock
        label="Code.gs"
        code={`const districtsData = {
  "เมืองภูเก็ต": [...],
  "กะทู้": [...],
  "ถลาง": [...],  // <--- อย่าลืมลูกน้ำตรงนี้
  "เกาะสมุย": ["อ่างทอง", "ลิปะน้อย", "ตลิ่งงาม", "หน้าเมือง", "มะเร็ต", "บ่อผุด", "แม่น้ำ"] // <--- เพิ่มบรรทัดนี้
};`}
      />
    </Step>

    <Step number="6" title="ตัวอย่าง: เปลี่ยนสีและโลโก้ (Branding)">
      <p>เปิดไฟล์ <code>Index.html</code> แล้วแก้ไขส่วน CSS และ Header</p>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        <div className="bg-white p-4 border rounded">
          <h5 className="font-bold text-blue-600 mb-2">เปลี่ยนสีธีม (Theme Color)</h5>
          <p className="text-sm text-slate-600 mb-2">ค้นหาคำว่า <code>bg-blue-600</code> แล้วเปลี่ยนเป็นสีอื่น เช่น:</p>
          <ul className="text-sm font-mono text-slate-500 space-y-1">
            <li>- bg-green-600 (สีเขียวเกษตร)</li>
            <li>- bg-purple-600 (สีม่วง)</li>
            <li>- bg-red-600 (สีแดง)</li>
          </ul>
        </div>
        <div className="bg-white p-4 border rounded">
          <h5 className="font-bold text-blue-600 mb-2">เปลี่ยนชื่อหัวเว็บ</h5>
          <p className="text-sm text-slate-600">
            ค้นหาคำว่า <code>&lt;h1&gt;...&lt;/h1&gt;</code> แล้วเปลี่ยนข้อความข้างในเป็นชื่อหน่วยงานของท่าน
          </p>
        </div>
      </div>
    </Step>

    <Step number="7" title="ปรับสมอง AI (Prompt Engineering)" isLast={true}>
      <p>เปิดไฟล์ <code>AI_Analysis.gs</code> ไปที่ฟังก์ชัน <code>runSmartAIAnalysis</code></p>
      <p>แก้ไขข้อความในตัวแปร <code>prompt</code> เพื่อให้ AI สวมบทบาทที่ถูกต้อง</p>

      <CodeBlock
        label="AI_Analysis.gs"
        code={`const prompt = \`
  คุณคือ "AI ผู้เชี่ยวชาญด้านยางพารา" ของจังหวัดสุราษฎร์ธานี...
  
  [คำสั่งพิเศษ: Google Search]
  ค้นหาข้อมูล:
  1. "ราคายางพาราสุราษฎร์ธานี วันนี้"
  2. "แนวโน้มราคายางตลาดโลก"
  
  [ภารกิจ]
  วิเคราะห์ข้อมูลพื้นที่ปลูกและผลผลิต เพื่อประเมินรายได้เกษตรกร...
\`;`}
      />
    </Step>
  </div>
);
