"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  //   Twitter,
  //   Facebook,
  //   Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b192c] text-white pt-16 pb-6 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-sky-400 flex items-center justify-center font-bold text-lg text-slate-900">
              S
            </div>
            <span className="text-xl font-bold tracking-tight">
              المنصة السورية
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            المنصة العربية السورية الشاملة لإدارة وتطوير المهارات والتطبيقات
            التعليمية الإلكترونية بأحدث التقنيات.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-sky-400 mb-4">الرئيسية</h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                عن المنصة
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                المدونة
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                المنتدى
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-bold text-sky-400 mb-4">المقالات</h4>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                تصميم UI/UX
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                تطوير الويب
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                تطبيقات الجوال
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition">
                إدارة المشاريع
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-sky-400 mb-4">اتصل بنا</h4>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
            <span>سوريا -حلب - الجميلية</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Mail className="w-4 h-4 text-sky-400 shrink-0" />
            <span>bashar.maaz.dev@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Phone className="w-4 h-4 text-sky-400 shrink-0" />
            <span>+963 998 058 357</span>
          </div>
        </div>
      </div>

      {/* Copyright & Social */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>جميع الحقوق محفوظة © المنصة السورية 2026</p>
        <div className="flex items-center gap-3">
          {/* <a
            href="#"
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition"
          >
            <Instagram className="w-4 h-4" />
          </a> */}
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-400 hover:text-slate-900 transition"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
