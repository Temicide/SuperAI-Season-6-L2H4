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

## เทคโนโลยีที่ใช้

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Turborepo](https://turbo.build/)
- npm Workspaces
