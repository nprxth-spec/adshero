import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('adshero_cookie_consent');
    if (!consent) {
      // Small delay before showing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('adshero_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('adshero_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-50 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-5 md:p-6 flex flex-col gap-4">
        <div>
          <h4 className="text-sm font-bold text-primary mb-1.5 flex items-center gap-2">
            🍪 การใช้คุกกี้ (Cookie Usage)
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพในการใช้งานและมอบประสบการณ์การท่องเว็บที่ดีที่สุดแก่คุณ รวมถึงศึกษาพฤติกรรมการใช้งานบนเว็บไซต์เพื่อนำเสนอโฆษณาที่ตรงใจคุณ การคลิก &quot;ยอมรับ&quot; ถือว่าคุณยินยอมให้เราใช้คุกกี้ตามนโยบายความเป็นส่วนตัว
          </p>
        </div>
        
        <div className="flex justify-end gap-3 pt-1 border-t border-slate-100">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            ปฏิเสธ
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-bold text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors shadow-md shadow-accent/10"
          >
            ยอมรับทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
}
