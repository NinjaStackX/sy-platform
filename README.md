# 🎓 Next.js Multi-Step Course Builder Wizard

A modular, responsive, and RTL-native **Multi-Step Course Creation Wizard** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for LMS platforms with feature-driven architecture and seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js)![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38BDF8?style=for-the-badge&logo=tailwind-css)![RTL Supported](https://img.shields.io/badge/RTL-Native-emerald?style=for-the-badge)\---

## ✨ Features

- **🎯 Multi-Step State Management**: Powered by React Context API for frictionless step transitions without prop-drilling.
- **🌍 Native RTL Layout**: Built specifically for right-to-left languages (Arabic UI) with flexible responsive behavior (`sm`, `md`, `lg`).
- **📚 Modular Course Builder**:
  - **Step 1**: Basic Info, Cover Upload, Category Selector.
  - **Step 2**: Dynamic Educational Modules, Lessons (Video, PDF, Live Stream), and Quiz Builder.
  - **Step 3**: Certificate Upload & Quiz Review.
  - **Status States**: Async Pending (Supervisor Approval) & Success Screen transitions.
- **🏗️ Feature-Driven Architecture**: Decoupled UI primitives, feature components, and state layer for enterprise scale.

---

## 📁 Project Architecture Roadmap

```text
├── app/
│   ├── layout.tsx                   # Global Root Layout (RTL config, Font setup)
│   ├── page.tsx                     # Landing / Dashboard Redirect
│   └── courses/
│       └── create/
│           └── page.tsx             # Course Builder Entry Point
│
├── types/
│   └── course.ts                    # TypeScript Type Definitions & Interfaces
│
├── context/
│   └── course-builder-context.tsx   # Global Form & Step State Manager
│
├── components/
│   ├── ui/                          # Design System Primitives (Input, Button, Dropzone)
│   ├── layout/                      # Application Frame (Header, Navigation)
│   └── features/course-builder/     # Course Builder Core Feature Components
│       ├── course-builder-wizard.tsx# Main Wizard Shell
│       ├── step-indicator.tsx       # Step Progress Bar
│       ├── steps/
│       │   ├── step-1-info.tsx      # Step 1: Basic Info Form
│       │   ├── step-2-modules.tsx   # Step 2: Modules & Lessons Builder
│       │   └── step-3-preview.tsx   # Step 3: Certificate & Quiz Preview
│       └── status/
│           └── status-screens.tsx   # Approval & Success Screens
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18.x or later installed.

### Installation

1. **Clone the repository**:

```bash
git clone [https://github.com/your-username/next-course-builder.git](https://github.com/your-username/next-course-builder.git)
cd next-course-builder
```

2. **Install dependencies**:

```bash
npm install
# or
bun install
```

3. **Run the development server**:

```bash
npm run dev
# or
bun dev
```

4. Open <http://localhost:3000/courses/create> with your browser to view the Course Builder.

---

## 📄 License

This project is licensed under the MIT License.
