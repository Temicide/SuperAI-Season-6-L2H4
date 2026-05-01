# SuperAI Season 6 L2H4

โปรเจกต์นี้เป็น **Monorepo** สำหรับใช้ใน Hackathon โดยใช้ **npm workspaces** ร่วมกับ **Turborepo** ช่วยให้จัดการ Frontend และ Backend ในที่เดียวได้สะดวกขึ้น

## โครงสร้างโปรเจกต์

```
.
├── apps/
│   ├── web/                 # Frontend: Next.js 16 + Tailwind CSS v4
│   └── api/                 # Backend: Express + TypeScript
├── packages/
│   └── ui/                  # คอมโพเนนต์ UI ที่แชร์ใช้ร่วมกัน
├── package.json             # ตั้งค่า workspace หลัก
└── turbo.json               # ตั้งค่า pipeline ของ Turborepo
```

## เริ่มต้นใช้งาน

### 1. ติดตั้งแพ็กเกจทั้งหมด

รันคำสั่งนี้ที่โฟลเดอร์หลัก (root):

```bash
npm install
```

### 2. รันในโหมดพัฒนา

```bash
npm run dev
```

- Frontend จะเปิดที่ [http://localhost:3000](http://localhost:3000)
- Backend จะเปิดที่ [http://localhost:4000](http://localhost:4000)

## คำสั่งที่ใช้บ่อย

| คำสั่ง | ทำอะไร |
|---|---|
| `npm run dev` | รันทุกแอปในโหมดพัฒนา |
| `npm run build` | สร้างไฟล์ production ของทุกแอป |
| `npm run lint` | ตรวจสอบโค้ดของทุกแอป |
| `npm run clean` | ลบไฟล์ build และ node_modules |

## วิธีเพิ่ม Package ใหม่

1. สร้างโฟลเดอร์ใหม่ใน `packages/`
2. ใส่ `package.json` โดยตั้งชื่อเป็น `"name": "@repo/<ชื่อ-package>"`
3. เรียกใช้ในแอปต่าง ๆ ด้วย `"@repo/<ชื่อ-package>": "*"`
4. รัน `npm install` ที่ root เพื่อลิงก์ workspace

## กลยุทธ์ Vibe Coding สำหรับทีม 5 คน

โปรเจกต์นี้ออกแบบมาให้แต่ละคนในทีม **vibe code ไอเดียของตัวเองแยกกัน** โดยใช้ base นี้เป็นจุดเริ่มต้น แล้วค่อยรวมกันทีหลัง

### ขั้นตอนการทำงาน

#### 1. สร้าง Branch ของตัวเอง

แต่ละคนสร้าง branch จาก `main` โดยตั้งชื่อตามรูปแบบนี้:

```bash
git checkout -b vibe/<ชื่อเล่น>
# ตัวอย่าง: git checkout -b vibe/boss
```

**Branch ที่แนะนำสำหรับทีม 5 คน:**
- `vibe/boss`
- `vibe/first`
- `vibe/mint`
- `vibe/ice`
- `vibe/plug`

> แต่ละคนอย่าไปแก้ branch คนอื่นเด็ดขาด

#### 2. Vibe Code ใน Branch ตัวเอง

- **Frontend:** แก้ไขหรือเพิ่มเติมใน `apps/web/src`
- **Backend:** แก้ไขหรือเพิ่มเติมใน `apps/api/src`
- **UI ส共享:** ถ้าอยากให้คนอื่นใช้คอมโพเนนต์ที่ตัวเองสร้าง ให้ใส่ใน `packages/ui/src`

**ทริค Vibe Coding:**
1. เปิด AI Assistant (Copilot, Cursor, หรือ ChatGPT) พร้อมบอก context ว่า "เรากำลังทำ Next.js 16 + Express monorepo"
2. บอก AI ว่าอยากได้ feature อะไร แล้วให้ AI สร้างโค้ดมา
3. คัดลอกโค้ดที่ได้ใส่ในโปรเจกต์ รัน `npm run dev` เช็คว่าใช้ได้ไหม
4. ถ้าพัง ก็ให้ AI แก้ หรือ `git checkout -- .` แล้วเริ่มใหม่ได้เสมอ

#### 3. Commit อย่างสม่ำเสมอ

```bash
git add .
git commit -m "feat: เพิ่มระบบ login แบบ vibe code"
git push origin vibe/<ชื่อเล่น>
```

#### 4. รวมไอเดียเข้าด้วยกัน (Merge)

เมื่อถึงเวลารวมงาน:

1. สร้าง Pull Request จาก branch ตัวเอง → `main`
2. คนในทีมรีวิวโค้ดกัน (หรือใช้ AI ช่วย review ก็ได้)
3. ถ้ามี conflict ให้แก้ตรงไหนที่ซ้ำซ้อนกัน
4. Merge เข้า `main`

**กฎการ Merge ให้ปลอดภัย:**
- ถ้าแก้ไฟล์เดียวกัน → คุยกันก่อนว่าเอาของใคร
- ถ้าแก้คนละไฟล์ → merge ได้เลยสบาย ๆ
- ถ้าไม่แน่ใจ → สร้าง branch ใหม่ `merge/test` ลอง merge ดูก่อน

### สิ่งที่ห้ามทำเด็ดขาด
- ห้าม push ตรง `main` โดยไม่ผ่าน Pull Request
- ห้ามลบ branch คนอื่น
- ห้ามแก้ `package.json` หลักโดยไม่บอกทีม

## เทคโนโลยีที่ใช้

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Turborepo](https://turbo.build/)
- npm Workspaces
