'use client';

import { useState } from 'react';
import FloatingLeaves from '@/components/variants/v2/FloatingLeaves';

export default function V2Page() {
  return (
    <main className="bg-gradient-to-br from-[#1a0a08] via-[#0a1a0a] to-[#1a0a08] text-[#F4C599] font-['var(--font-dm-sans)']">
      {/* FIXED BACKGROUND ANIMATION */}
      <div className="fixed inset-0 z-0">
        <FloatingLeaves fixed />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full border border-[#C64632]/30 text-[#C64632] text-sm tracking-wider backdrop-blur-sm">
                03 . 09 . 2026
              </span>
            </div>
            
            <h1 className="font-['var(--font-playfair)'] text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-[#F4C599] drop-shadow-[0_0_30px_rgba(198,69,50,0.3)]">
              Соня <span className="text-[#C60550]">&</span> Кирилл
            </h1>

            <p className="text-[#9AA988] text-xl md:text-2xl mb-3 font-light">
              свадебная вечеринка и афтепати
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C64632] to-transparent mx-auto my-6" />

            <p className="text-[#F4C599]/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Вы только представьте, сколько всего должно было случиться, 
              чтобы мы собрались все вместе.
            </p>

            <div className="mt-8 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-[#C64632]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section id="intro" className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
            <p className="font-['var(--font-playfair)'] text-lg md:text-xl leading-relaxed text-[#F4C599] italic">
              "Как минимум – одно предложение пожениться."
            </p>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="py-12 px-4">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <span className="text-[#C64632] text-xs tracking-widest uppercase">Место проведения</span>
              <h2 className="font-['var(--font-playfair)'] text-3xl md:text-4xl font-bold text-[#F4C599] mt-2">
                Где мы вас ждём
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#C64632]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#C64632]/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#C64632]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold text-[#F4C599] mb-2">
                  Резиденция Чехов APi
                </h3>
                <p className="text-[#F4C599]/70 text-sm mb-3">
                  Загородная резиденция в 58 км от МКАД. Для вас подготовлена спальня — 
                  можно оставить вещи, переодеться и остаться на ночь.
                </p>
                <div className="text-[#9AA988] text-xs">
                  <span className="text-[#C64632]">Заселение:</span> скажу чуть позже
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#9AA988]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#9AA988]/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#9AA988]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold text-[#F4C599] mb-2">
                  Как добраться
                </h3>
                <div className="space-y-2 text-[#F4C599]/70 text-sm">
                  <p>
                    <span className="text-[#C64632] font-medium">Казань</span> — прилетайте в Домодедово
                  </p>
                  <p>
                    <span className="text-[#C64632] font-medium">Москва</span> — бесплатная парковка
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://yandex.ru/maps/?pt=37.394111,55.150639&z=16&l=map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C64632]/20 border border-[#C64632]/30 text-[#F4C599] hover:bg-[#C64632]/30 transition-all text-sm"
              >
                Открыть на Яндекс Картах
                <span className="text-xs">↗</span>
              </a>
              <p className="mt-2 text-[#9AA988] text-xs">55°09'02.3N 37°23'38.8E</p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="py-12 px-4">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <span className="text-[#C64632] text-xs tracking-widest uppercase">Расписание</span>
              <h2 className="font-['var(--font-playfair)'] text-3xl md:text-4xl font-bold text-[#F4C599] mt-2">
                Программа
              </h2>
            </div>

            <div className="mb-8">
              <h3 className="font-['var(--font-playfair)'] text-xl text-[#C64632] mb-6 text-center">3 сентября</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { time: '13:00', title: 'Заселение', desc: 'Приезжайте и располагайтесь' },
                  { time: '15:00', title: 'Welcome', desc: 'Закуски и напитки', loc: 'Яблоневый сад' },
                  { time: '15:30', title: 'Церемония', desc: 'Самый важный момент', loc: 'Яблоневый сад' },
                  { time: '16:15', title: 'Ужин', desc: 'Едим, поём, танцуем' },
                  { time: '23:00', title: 'Афтепати', desc: 'До утра! Не забудьте пижамы' },
                ].map((item, i) => (
                  <div key={i} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C64632]/30 transition-all">
                    <div className="text-[#C64632] text-xs font-bold mb-1">{item.time}</div>
                    <h4 className="font-['var(--font-playfair)'] text-sm font-bold text-[#F4C599] mb-1">{item.title}</h4>
                    <p className="text-[#F4C599]/60 text-xs">{item.desc}</p>
                    {item.loc && <span className="text-[#9AA988] text-[10px] mt-1 block">{item.loc}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['var(--font-playfair)'] text-xl text-[#9AA988] mb-6 text-center">4 сентября · утро</h3>
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                {[
                  { time: '11:00', title: 'Завтрак', desc: 'За одним столом', loc: 'Главный корпус' },
                  { time: '12:00', title: 'Выселение', desc: 'Ферма и мороженое!' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#9AA988]/30 transition-all">
                    <div className="text-[#9AA988] text-xs font-bold mb-1">{item.time}</div>
                    <h4 className="font-['var(--font-playfair)'] text-sm font-bold text-[#F4C599] mb-1">{item.title}</h4>
                    <p className="text-[#F4C599]/60 text-xs">{item.desc}</p>
                    {item.loc && <span className="text-[#9AA988] text-[10px] mt-1 block">{item.loc}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DRESS CODE */}
        <section id="dresscode" className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <span className="text-[#C64632] text-xs tracking-widest uppercase">Стиль</span>
              <h2 className="font-['var(--font-playfair)'] text-3xl md:text-4xl font-bold text-[#F4C599] mt-2">
                Что надеть
              </h2>
            </div>

            <p className="text-center text-[#F4C599]/70 text-sm mb-8 max-w-2xl mx-auto">
              Пожалуйста, приходите в красивой одежде, которая соответствует торжественному настроению. 
              Но не забудьте кеды на сменку – танцевать будем до ночи!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#C60550]/30 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C60550]/20 to-[#C64632]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👗</span>
                </div>
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold text-[#F4C599] mb-2">Девушки</h3>
                <p className="text-[#F4C599]/70 text-sm">Вечерние платья, костюмы</p>
              </div>
              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#9AA988]/30 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9AA988]/20 to-[#F4C599]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🤵</span>
                </div>
                <h3 className="font-['var(--font-playfair)'] text-xl font-bold text-[#F4C599] mb-2">Парни</h3>
                <p className="text-[#F4C599]/70 text-sm">Брюки, поло, легкие рубашки, костюмы</p>
              </div>
            </div>

            <div className="text-center p-6 rounded-xl bg-[#C60550]/10 border border-[#C60550]/20 mb-4">
              <p className="font-['var(--font-playfair)'] text-lg text-[#C60550] font-bold">
                Без чёрного цвета
              </p>
            </div>

            <div className="text-center mb-3">
              <a
                href="https://pin.it/1m84IMKWp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F4C599] hover:text-[#C64632] transition-colors text-sm"
              >
                Доска с референсами на Pinterest
                <span className="text-xs">↗</span>
              </a>
            </div>

            <p className="text-center text-[#F4C599]/50 text-xs">
              Главное – вы и ваше присутствие, а не то, что на вас одето.
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <span className="text-[#C64632] text-xs tracking-widest uppercase">Важно</span>
              <h2 className="font-['var(--font-playfair)'] text-3xl md:text-4xl font-bold text-[#F4C599] mt-2">
                Детали
              </h2>
            </div>

            <div className="space-y-4">
              {[
                'Формат мероприятия не предполагает детской площадки и аниматоров. Отдохните этим вечером на полную катушку!',
                'Пожалуйста, не дарите цветы и алкоголь.',
                'Если вы задумываетесь о подарке, то будем благодарны за вклад в наш семейный бюджет.',
              ].map((detail, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#C64632]">✦</span>
                  <p className="text-[#F4C599]/80 text-sm">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <span className="text-[#C64632] text-xs tracking-widest uppercase">Анкета</span>
              <h2 className="font-['var(--font-playfair)'] text-3xl md:text-4xl font-bold text-[#F4C599] mt-2">
                Подтвердите присутствие
              </h2>
              <p className="text-[#F4C599]/60 text-sm mt-2">
                Заполните форму для каждого гостя отдельно.
              </p>
            </div>

            <RSVPForm />
          </div>
        </section>

        {/* TELEGRAM */}
        <section id="telegram" className="py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="font-['var(--font-playfair)'] text-2xl md:text-3xl font-bold text-[#F4C599] mb-3">
              Телеграм
            </h2>
            <p className="text-[#F4C599]/70 text-sm mb-6">
              Мы создали телеграм-чат нашего праздника, где можно будет узнать дополнительную информацию, 
              поделиться фотографиями и видео.
            </p>
            <a
              href="https://t.me/+your_chat_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#C64632] to-[#C60550] text-[#F4C599] font-medium hover:shadow-[0_0_40px_rgba(198,69,50,0.3)] transition-all text-sm"
            >
              Присоединиться к чату
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C64632]/30 to-transparent mx-auto mb-6" />
          <p className="font-['var(--font-playfair)'] text-[#F4C599]/50 text-base">
            С любовью, Соня и Кирилл
          </p>
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
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center">
        <p className="font-['var(--font-playfair)'] text-xl text-[#F4C599] mb-1">Спасибо!</p>
        <p className="text-[#F4C599]/60 text-sm">Ваш ответ отправлен. Ждём вас!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 space-y-4">
      <div>
        <label className="block text-[#C64632] text-sm mb-2">1. Имя *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-white/5 border border-white/10 text-[#F4C599] px-4 py-3 rounded-xl focus:border-[#C64632] focus:outline-none transition-colors text-sm"
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label className="block text-[#C64632] text-sm mb-2">2. Пожелания по алкоголю *</label>
        <textarea
          value={alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
          required
          rows={4}
          className="w-full bg-white/5 border border-white/10 text-[#F4C599] px-4 py-3 rounded-xl focus:border-[#C64632] focus:outline-none transition-colors resize-none text-sm"
          placeholder="Например: вино, шампанское..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C64632] to-[#C60550] text-[#F4C599] font-medium hover:shadow-[0_0_30px_rgba(198,69,50,0.3)] transition-all disabled:opacity-50 text-sm"
      >
        {loading ? 'Отправка...' : 'Отправить ответ'}
      </button>
    </form>
  );
}
