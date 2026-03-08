"use client";

export default function WinnerBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border rounded-3xl p-5 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-xl md:text-2xl font-black">{title}</div>
      <div className="text-gray-600 text-sm mt-1">{subtitle}</div>
    </div>
  );
}