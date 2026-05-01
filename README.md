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

| คำสั่ง          | ทำอะไร                         |
| --------------- | ------------------------------ |
| `npm run dev`   | รันทุกแอปในโหมดพัฒนา           |
| `npm run build` | สร้างไฟล์ production ของทุกแอป |
| `npm run lint`  | ตรวจสอบโค้ดของทุกแอป           |
| `npm run clean` | ลบไฟล์ build และ node_modules  |

## วิธีเพิ่ม Package ใหม่

1. สร้างโฟลเดอร์ใหม่ใน `packages/`
2. ใส่ `package.json` โดยตั้งชื่อเป็น `"name": "@repo/<ชื่อ-package>"`
3. เรียกใช้ในแอปต่าง ๆ ด้วย `"@repo/<ชื่อ-package>": "*"`
4. รัน `npm install` ที่ root เพื่อลิงก์ workspace

## กลยุทธ์ Vibe Coding สำหรับทีม 5 คน

โปรเจกต์นี้ออกแบบมาให้แต่ละคนในทีม **vibe code ไอเดียของตัวเองแยกกัน** โดยใช้ base นี้เป็นจุดเริ่มต้น แล้วค่อยรวมกันทีหลัง

### ขั้นตอนการทำงาน

#### 1. ไปที่ Branch ของตัวเอง

```bash
git checkout -b idea/<เลข>
# ตัวอย่าง: git checkout -b vibe/boss
```

**Branch ที่แนะนำสำหรับทีม 5 คน:**

- `vibe/1`
- `vibe/2`
- `vibe/3`
- `vibe/4`
- `vibe/5`

> แต่ละคนอย่าไปแก้ branch คนอื่นเด็ดขาด

#### 2. Vibe Code ใน Branch ตัวเอง

- **Frontend:** แก้ไขหรือเพิ่มเติมใน `apps/web/src`
- **Backend:** แก้ไขหรือเพิ่มเติมใน `apps/api/src`
- **UI:** ถ้าอยากให้คนอื่นใช้คอมโพเนนต์ที่ตัวเองสร้าง ให้ใส่ใน `packages/ui/src`

**ทริค Vibe Coding:**

1. เปิด AI Assistant (Claude Code, Codex, OpenCode, Copilot) พร้อมบอก context ว่า "เรากำลังทำ Next.js 16 + Express monorepo"
2. บอก AI ว่าอยากได้ feature อะไร แล้วให้ AI สร้างโค้ดมา
3. คัดลอกโค้ดที่ได้ใส่ในโปรเจกต์ รัน `npm run dev` เช็คว่าใช้ได้ไหม
4. ถ้าพัง ก็ให้ AI แก้ หรือ `git checkout -- .` แล้วเริ่มใหม่ได้เสมอ

#### 3. Commit อย่างสม่ำเสมอ

```bash
git add .
git commit -m "feat: เพิ่มระบบ login แบบ vibe code"
git push origin vibe/<เลข>
```

#### 4. รวมไอเดียเข้าด้วยกัน (Merge)

เมื่อถึงเวลารวมงาน:

1. ประชุมกันดูงานของแต่ละคนใน vibe/<เลข> นำข้อดีและ feature ลิสต์ไว้
2. เลือก 1 branch ทำ pull request ขึ้น main
3. นำ feature ที่ลิสต์​ไว้มาเสริมจุดเด่น branch ที่ดึงมา

### สิ่งที่ห้ามทำเด็ดขาด

- ห้าม push ตรง `main` โดยไม่ผ่าน Pull Request
- ห้ามลบ branch คนอื่น

## เทคโนโลยีที่ใช้

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Turborepo](https://turbo.build/)
- npm Workspaces
