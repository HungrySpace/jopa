'use client';

import { useState } from 'react';
import FloatingParticles from '@/components/variants/v3/FloatingParticles';

export default function V3Page() {
  return (
    <main className="bg-[#FFF8F5] text-[#AB482D] font-['var(--font-inter)']">
      {/* FIXED BACKGROUND ANIMATION */}
      <div className="fixed inset-0 z-0">
        <FloatingParticles fixed />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <p className="text-[#8A8635] text-xs tracking-[0.4em] uppercase mb-8 font-light">Приглашение на свадьбу</p>
            <h1 className="font-['var(--font-cormorant)'] text-6xl md:text-8xl lg:text-9xl font-light text-[#AB482D] leading-none mb-6">
              Соня
            </h1>
            <span className="font-['var(--font-cormorant)'] text-4xl md:text-6xl text-[#CE5A43] font-light block mb-6">&</span>
            <h1 className="font-['var(--font-cormorant)'] text-6xl md:text-8xl lg:text-9xl font-light text-[#AB482D] leading-none mb-10">
              Кирилл
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#F0A599]"/>
              <span className="font-['var(--font-cormorant)'] text-xl md:text-2xl text-[#CE5A43] font-light tracking-wider">03 . 09 . 2026</span>
              <div className="w-12 h-px bg-[#F0A599]"/>
            </div>
            <p className="text-[#AB482D]/50 text-base md:text-lg font-light">свадебная вечеринка и афтепати</p>
          </div>
          
          <div className="absolute bottom-8 animate-bounce">
            <svg className="w-5 h-5 text-[#CE5A43]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <p className="font-['var(--font-cormorant)'] text-xl md:text-2xl font-light leading-relaxed text-[#AB482D]">
              Вы только представьте, сколько всего должно было случиться, чтобы мы собрались все вместе. 
              Как минимум – одно предложение пожениться.
            </p>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <div className="text-center mb-8">
              <span className="text-[#8A8635] text-[10px] tracking-[0.3em] uppercase">Место</span>
              <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light text-[#AB482D] mt-2">Где мы вас ждём</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center md:text-left p-4 bg-white/60 rounded-xl">
                <h3 className="font-['var(--font-cormorant)'] text-xl font-light text-[#CE5A43] mb-2">Резиденция Чехов APi</h3>
                <p className="text-[#AB482D]/60 text-sm leading-relaxed mb-2">
                  Загородная резиденция в 58 км от МКАД. Для вас подготовлена спальня — можно оставить вещи, переодеться и остаться на ночь.
                </p>
                <p className="text-[#8A8635] text-xs"><span className="font-medium">Заселение:</span> скажу чуть позже</p>
              </div>
              <div className="text-center md:text-left p-4 bg-white/60 rounded-xl">
                <h3 className="font-['var(--font-cormorant)'] text-xl font-light text-[#CE5A43] mb-2">Как добраться</h3>
                <p className="text-[#AB482D]/60 text-sm mb-1"><span className="font-medium text-[#CE5A43]">Казань:</span> прилетайте в Домодедово</p>
                <p className="text-[#AB482D]/60 text-sm"><span className="font-medium text-[#CE5A43]">Москва:</span> бесплатная парковка</p>
              </div>
            </div>
            <div className="text-center">
              <a href="https://yandex.ru/maps/?pt=37.394111,55.150639&z=16&l=map" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#CE5A43] hover:text-[#AB482D] transition-colors text-sm">
                Открыть на Яндекс Картах <span>↗</span>
              </a>
              <p className="text-[#8A8635] text-[10px] mt-1">55°09'02.3N 37°23'38.8E</p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <div className="text-center mb-8">
              <span className="text-[#8A8635] text-[10px] tracking-[0.3em] uppercase">Расписание</span>
              <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light text-[#AB482D] mt-2">Программа</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="font-['var(--font-cormorant)'] text-lg text-[#CE5A43] mb-4 text-center">3 сентября</h3>
              <div className="space-y-0">
                {[
                  { time: '13:00', title: 'Заселение', desc: 'Приезжайте, располагайтесь, переодевайтесь' },
                  { time: '15:00', title: 'Welcome', desc: 'Лёгкие закуски и бокал чего-нибудь приятного', loc: 'Яблоневый сад' },
                  { time: '15:30', title: 'Церемония', desc: 'Самый важный момент — и начало нашей вечеринки', loc: 'Яблоневый сад' },
                  { time: '16:15', title: 'Праздничный ужин', desc: 'Много едим, поем, танцуем и плачем' },
                  { time: '23:00', title: 'Афтепати', desc: 'Неофициальная часть начинается. Не забудьте пижамы!' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-[#F0A599]/15">
                    <span className="text-[#8A8635] text-sm w-12 pt-0.5 tabular-nums">{item.time}</span>
                    <div>
                      <h4 className="font-['var(--font-cormorant)'] text-base font-light text-[#AB482D]">{item.title}</h4>
                      <p className="text-[#AB482D]/50 text-sm">{item.desc}</p>
                      {item.loc && <span className="text-[#8A8635] text-[10px]">{item.loc}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['var(--font-cormorant)'] text-lg text-[#889063] mb-4 text-center">4 сентября · утро</h3>
              <div className="space-y-0">
                {[
                  { time: '11:00', title: 'Общий завтрак', desc: 'Собираемся за одним столом', loc: 'Главный корпус' },
                  { time: '12:00', title: 'Выселение', desc: 'Ферма с животными и фермерское мороженое' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-[#F0A599]/15">
                    <span className="text-[#8A8635] text-sm w-12 pt-0.5 tabular-nums">{item.time}</span>
                    <div>
                      <h4 className="font-['var(--font-cormorant)'] text-base font-light text-[#AB482D]">{item.title}</h4>
                      <p className="text-[#AB482D]/50 text-sm">{item.desc}</p>
                      {item.loc && <span className="text-[#8A8635] text-[10px]">{item.loc}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DRESS CODE */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <div className="text-center mb-8">
              <span className="text-[#8A8635] text-[10px] tracking-[0.3em] uppercase">Стиль</span>
              <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light text-[#AB482D] mt-2">Что надеть</h2>
            </div>
            <p className="text-center text-[#AB482D]/60 text-sm mb-6">
              Пожалуйста, приходите в красивой одежде. Но не забудьте кеды на сменку – танцевать будем до ночи!
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-white/60 rounded-xl">
                <span className="text-2xl block mb-2">👗</span>
                <h3 className="font-['var(--font-cormorant)'] text-lg font-light text-[#CE5A43] mb-1">Девушки</h3>
                <p className="text-[#AB482D]/50 text-sm">Вечерние платья, костюмы</p>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl">
                <span className="text-2xl block mb-2">🤵</span>
                <h3 className="font-['var(--font-cormorant)'] text-lg font-light text-[#CE5A43] mb-1">Парни</h3>
                <p className="text-[#AB482D]/50 text-sm">Брюки, поло, рубашки, костюмы</p>
              </div>
            </div>
            <div className="text-center py-3 border-t border-b border-[#F0A599]/30 mb-4">
              <p className="font-['var(--font-cormorant)'] text-base text-[#CE5A43] font-light">Без чёрного цвета</p>
            </div>
            <div className="text-center">
              <a href="https://pin.it/1m84IMKWp" target="_blank" rel="noopener noreferrer" className="text-[#CE5A43] text-sm hover:text-[#AB482D] transition-colors">Доска с референсами на Pinterest ↗</a>
            </div>
            <p className="mt-4 text-center text-[#AB482D]/30 text-xs">Главное – вы и ваше присутствие</p>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <div className="text-center mb-6">
              <span className="text-[#8A8635] text-[10px] tracking-[0.3em] uppercase">Важно</span>
              <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light text-[#AB482D] mt-2">Детали</h2>
            </div>
            <div className="space-y-3">
              {[
                'Без детской площадки и аниматоров. Отдохните на полную катушку!',
                'Пожалуйста, не дарите цветы и алкоголь.',
                'Будем благодарны за вклад в наш семейный бюджет.',
              ].map((d, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-[#F0A599] mt-0.5">✦</span>
                  <p className="text-[#AB482D]/60 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section className="py-12 px-4">
          <div className="max-w-md mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <div className="text-center mb-6">
              <span className="text-[#8A8635] text-[10px] tracking-[0.3em] uppercase">Анкета</span>
              <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light text-[#AB482D] mt-2">Подтвердите присутствие</h2>
              <p className="text-[#AB482D]/40 text-xs mt-2">Заполните форму для каждого гостя</p>
            </div>
            <RSVPForm />
          </div>
        </section>

        {/* TELEGRAM */}
        <section className="py-12 px-4">
          <div className="max-w-md mx-auto text-center bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-[#F0A599]/20">
            <span className="text-[#8A8635] text-[10px] tracking-[0.3em] uppercase">Чат</span>
            <h2 className="font-['var(--font-cormorant)'] text-3xl font-light text-[#AB482D] mt-2 mb-3">Телеграм</h2>
            <p className="text-[#AB482D]/50 text-sm mb-4">Чат праздника — фото, видео и информация</p>
            <a href="https://t.me/+your_chat_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-3 px-8 border border-[#CE5A43] text-[#CE5A43] hover:bg-[#CE5A43] hover:text-white transition-all text-sm rounded-xl">
              Присоединиться ↗
            </a>
          </div>
        </section>

        <footer className="py-8 text-center">
          <p className="font-['var(--font-cormorant)'] text-[#AB482D]/30 text-lg font-light">С любовью, Соня и Кирилл</p>
        </footer>
      </div>
    </main>
  );
}

function RSVPForm() {
  const [name, setName] = useState('');
  const [alcohol, setAlcohol] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, alcoholPreference: alcohol, variant: 'v3' }),
      });
      setSubmitted(true);
    } catch {
      alert('Ошибка отправки');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <p className="font-['var(--font-cormorant)'] text-2xl font-light text-[#AB482D] mb-1">Спасибо!</p>
        <p className="text-[#AB482D]/40 text-sm">Ждём вас!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[#8A8635] text-[10px] tracking-widest uppercase mb-2">Имя</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-transparent border-b border-[#F0A599] text-[#AB482D] py-2 focus:border-[#CE5A43] focus:outline-none transition-colors font-['var(--font-cormorant)'] text-lg" placeholder="Ваше имя"/>
      </div>
      <div>
        <label className="block text-[#8A8635] text-[10px] tracking-widest uppercase mb-2">Пожелания по алкоголю</label>
        <textarea value={alcohol} onChange={(e) => setAlcohol(e.target.value)} required rows={3} className="w-full bg-transparent border-b border-[#F0A599] text-[#AB482D] py-2 focus:border-[#CE5A43] focus:outline-none transition-colors font-['var(--font-cormorant)'] text-lg resize-none" placeholder="Вино, шампанское..."/>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 border border-[#CE5A43] text-[#CE5A43] hover:bg-[#CE5A43] hover:text-white transition-all font-['var(--font-cormorant)'] text-base disabled:opacity-50 rounded-xl">
        {loading ? '...' : 'Отправить'}
      </button>
    </form>
  );
}
