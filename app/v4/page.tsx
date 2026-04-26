'use client';

import { useEffect, useRef, useState } from 'react';

export default function V4Page() {
  return (
    <main className="bg-[#F5F0E8] text-[#3D2B1F]">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B1F]/60 via-[#3D2B1F]/30 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80)',
            filter: 'brightness(0.7) saturate(0.8)',
          }}
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="font-['var(--font-cormorant)'] text-7xl md:text-8xl lg:text-9xl font-light italic text-[#F5F0E8] leading-none mb-4">
            Соня
          </h1>
          <span className="font-['var(--font-cormorant)'] text-5xl md:text-6xl text-[#F5F0E8]/70 font-light italic block mb-4">&</span>
          <h1 className="font-['var(--font-cormorant)'] text-7xl md:text-8xl lg:text-9xl font-light italic text-[#F5F0E8] leading-none mb-6">
            Кирилл
          </h1>
          <p className="text-[#F5F0E8]/60 text-sm md:text-base max-w-xs mx-auto leading-relaxed mb-8 font-light">
            Праздник, который мы хотим разделить с теми, кто делает нашу жизнь лучше
          </p>
          <div className="inline-block border border-[#F5F0E8]/50 rounded-full px-8 py-3">
            <span className="font-['var(--font-cormorant)'] text-lg md:text-xl text-[#F5F0E8] font-light tracking-wider">
              03 . 09 . 2026
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 z-20 animate-bounce">
          <svg className="w-5 h-5 text-[#F5F0E8]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#8B7355] text-[10px] tracking-[0.3em] uppercase">Место проведения</span>
            <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light italic text-[#3D2B1F] mt-2">
              Резиденция Чехов APi
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80"
                alt="Дом"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80"
                alt="Сад"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center space-y-2 mb-6">
            <p className="text-sm text-[#3D2B1F]/70">
              <span className="font-medium text-[#3D2B1F]">01</span> Загородная резиденция, 58 км от МКАД
            </p>
            <p className="text-sm text-[#3D2B1F]/70">
              <span className="font-medium text-[#3D2B1F]">02</span> Приём на свежем воздухе + тёплый зал
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://yandex.ru/maps/?pt=37.394111,55.150639&z=16&l=map"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#3D2B1F]/30 rounded-full px-6 py-2 text-sm text-[#3D2B1F] hover:bg-[#3D2B1F]/5 transition-all"
            >
              КАРТА <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* MUSIC & GIFTS — dark */}
      <section className="py-16 px-6 bg-[#3D2B1F]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['var(--font-cormorant)'] text-4xl md:text-5xl font-light italic text-[#F5F0E8] mb-2">
              Пожалуйста
            </h2>
            <p className="text-[#8B7355] text-[10px] tracking-[0.3em] uppercase">Музыка и подарки</p>
          </div>

          {/* Songs */}
          <div className="mb-8">
            <div className="flex items-start gap-4">
              <span className="text-[#8B7355] text-xs font-medium pt-1">01</span>
              <div className="flex-1">
                <h3 className="font-['var(--font-cormorant)'] text-xl font-light italic text-[#F5F0E8] mb-2">
                  Предложения песен
                </h3>
                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">
                  Хотим, чтобы танцпол взорвался! Оставьте свои любимые треки — мы обязательно их включим.
                </p>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#F5F0E8] text-[#3D2B1F] text-[10px] font-bold flex items-center justify-center -rotate-12 shrink-0">
                ♫ песни
              </div>
            </div>
          </div>

          <div className="border-t border-[#8B7355]/20 my-8" />

          {/* Gifts */}
          <div>
            <div className="flex items-start gap-4">
              <span className="text-[#8B7355] text-xs font-medium pt-1">02</span>
              <div className="flex-1">
                <h3 className="font-['var(--font-cormorant)'] text-xl font-light italic text-[#F5F0E8] mb-2">
                  Список подарков
                </h3>
                <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">
                  Ваше присутствие — самый важный подарок. Но если хотите порадовать нас — будем благодарны за вклад в семейный бюджет.
                </p>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#F5F0E8] text-[#3D2B1F] text-[10px] font-bold flex items-center justify-center rotate-6 shrink-0">
                🎁 подарки
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU — striped background */}
      <section className="py-16 px-6 relative" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #F5F0E8, #F5F0E8 18px, #8B7355 18px, #8B7355 20px)',
      }}>
        <div className="absolute inset-0 bg-[#F5F0E8]/80" />
        <div className="relative z-10 max-w-md mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#8B7355] text-[10px] tracking-[0.3em] uppercase">Угощения</span>
            <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light italic text-[#3D2B1F] mt-2">
              Меню
            </h2>
          </div>

          {/* Silver tray with menu card */}
          <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
            <div className="relative" style={{ aspectRatio: '3/4' }}>
              {/* Silver tray SVG */}
              <svg viewBox="0 0 300 400" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 20px 40px rgba(61,43,31,0.25))' }}>
                <defs>
                  <radialGradient id="trayGrad" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#E8E0D4"/>
                    <stop offset="30%" stopColor="#D4CFC4"/>
                    <stop offset="60%" stopColor="#C0B8A8"/>
                    <stop offset="85%" stopColor="#B0A898"/>
                    <stop offset="100%" stopColor="#A09888"/>
                  </radialGradient>
                  <radialGradient id="trayInner" cx="45%" cy="40%" r="50%">
                    <stop offset="0%" stopColor="#F0EBE0"/>
                    <stop offset="50%" stopColor="#E0D8CC"/>
                    <stop offset="100%" stopColor="#C8C0B0"/>
                  </radialGradient>
                  <radialGradient id="highlight" cx="35%" cy="30%" r="40%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.6)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                  </radialGradient>
                </defs>
                <ellipse cx="150" cy="200" rx="140" ry="190" fill="url(#trayGrad)" stroke="#A09888" strokeWidth="2"/>
                <ellipse cx="150" cy="200" rx="125" ry="175" fill="url(#trayInner)" stroke="#B8B0A0" strokeWidth="1"/>
                <ellipse cx="150" cy="200" rx="138" ry="188" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <ellipse cx="150" cy="200" rx="127" ry="177" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="2"/>
                <ellipse cx="130" cy="140" rx="80" ry="100" fill="url(#highlight)"/>
                <ellipse cx="150" cy="200" rx="133" ry="183" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
                <ellipse cx="150" cy="200" rx="130" ry="180" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"/>
              </svg>

              {/* Menu card — small, on top of tray */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#F5F0E8] rounded-md shadow-lg" style={{
                  width: '42%',
                  boxShadow: '0 4px 20px rgba(61,43,31,0.15), 0 1px 3px rgba(0,0,0,0.1)',
                }}>
                  <div className="p-3">
                    <h3 className="font-['var(--font-cormorant)'] text-base font-light italic text-[#3D2B1F] text-center mb-1.5">
                      Меню
                    </h3>
                    <div className="space-y-1.5 text-[9px] text-[#3D2B1F]/70 leading-relaxed">
                      <div>
                        <span className="font-medium text-[#3D2B1F] text-[7px] tracking-wider uppercase block">Приём</span>
                        Сырные станции
                      </div>
                      <div className="border-t border-[#8B7355]/15 pt-1.5">
                        <span className="font-medium text-[#3D2B1F] text-[7px] tracking-wider uppercase block">Закуски</span>
                        Тартар
                      </div>
                      <div className="border-t border-[#8B7355]/15 pt-1.5">
                        <span className="font-medium text-[#3D2B1F] text-[7px] tracking-wider uppercase block">Основное</span>
                        Лосось / Ризотто
                      </div>
                      <div className="border-t border-[#8B7355]/15 pt-1.5">
                        <span className="font-medium text-[#3D2B1F] text-[7px] tracking-wider uppercase block">Десерты</span>
                        Чизкейк
                      </div>
                      <div className="border-t border-[#8B7355]/15 pt-1.5">
                        <span className="font-medium text-[#3D2B1F] text-[7px] tracking-wider uppercase block">Напитки</span>
                        Коктейли, вино
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
              alt="Пара"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <h2 className="font-['var(--font-cormorant)'] text-4xl md:text-5xl font-light italic text-[#3D2B1F] mb-3">
            Галерея
          </h2>
          <p className="text-[#3D2B1F]/50 text-sm max-w-xs mx-auto leading-relaxed mb-6">
            Будет открыт общий альбом, куда вы сможете загрузить фото и видео с мероприятия
          </p>
          <div className="inline-flex items-center gap-2 border border-[#3D2B1F]/30 rounded-full px-6 py-2 text-sm text-[#3D2B1F]">
            ФОТО <span>→</span>
          </div>
        </div>
      </section>

      {/* DRESS CODE — dark */}
      <section className="py-16 px-6 bg-[#3D2B1F]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['var(--font-cormorant)'] text-3xl md:text-4xl font-light italic text-[#F5F0E8] mb-2">
              Дресс-код
            </h2>
            <p className="text-[#8B7355] text-[10px] tracking-[0.3em] uppercase">Элегантный и естественный</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#7A9B76] rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative group mt-6">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#7A9B76] -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative group -mt-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#7A9B76] -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative group mt-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#7A9B76] rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center p-4 border border-[#8B7355]/20 rounded-lg">
            <p className="font-['var(--font-cormorant)'] text-base font-light italic text-[#8B7355]">
              Без чёрного цвета · Главное — вы
            </p>
          </div>
        </div>
      </section>

      {/* SAVE THE DATE — striped */}
      <section className="py-16 px-6 relative" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #F5F0E8, #F5F0E8 18px, #8B7355 18px, #8B7355 20px)',
      }}>
        <div className="absolute inset-0 bg-[#F5F0E8]/80" />
        <div className="relative z-10 max-w-md mx-auto text-center">
          <div className="inline-block bg-[#F5F0E8]/90 rounded-full px-10 py-4 shadow-lg">
            <p className="font-['var(--font-cormorant)'] text-sm font-light text-[#8B7355] tracking-wider uppercase mb-1">
              СУББОТА
            </p>
            <p className="font-['var(--font-cormorant)'] text-5xl md:text-6xl font-light italic text-[#3D2B1F] leading-none">
              03 . 09
            </p>
            <p className="font-['var(--font-cormorant)'] text-xl font-light text-[#8B7355] mt-1">
              2026
            </p>
          </div>
        </div>
      </section>

      {/* RSVP — envelope */}
      <section className="py-16 px-6 relative" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #F5F0E8, #F5F0E8 18px, #8B7355 18px, #8B7355 20px)',
      }}>
        <div className="absolute inset-0 bg-[#F5F0E8]/80" />
        <div className="relative z-10 max-w-md mx-auto">
          <div className="bg-[#7A9B76] rounded-xl p-1 shadow-xl">
            <div className="bg-[#F5F0E8] rounded-lg p-8 relative overflow-hidden">
              {/* Envelope flap decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#7A9B76]" />

              <div className="text-center mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7A9B76]/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-[#7A9B76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 className="font-['var(--font-cormorant)'] text-2xl md:text-3xl font-light italic text-[#3D2B1F] mb-1">
                  Подтвердите присутствие
                </h2>
                <p className="text-[#8B7355] text-[10px] tracking-wider uppercase">
                  Пожалуйста, ответьте до 18 августа
                </p>
              </div>

              <RSVPForm />

              {/* Wax seal */}
              <div className="flex justify-center mt-6">
                <div className="w-12 h-12 rounded-full bg-[#7A9B76] flex items-center justify-center shadow-lg" style={{
                  boxShadow: '0 4px 12px rgba(122,155,118,0.4), inset 0 1px 2px rgba(255,255,255,0.2)',
                }}>
                  <span className="text-[#F5F0E8] text-xs font-bold">S&K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#3D2B1F]">
        <p className="font-['var(--font-cormorant)'] text-[#8B7355]/40 text-lg font-light italic">
          Соня & Кирилл
        </p>
      </footer>
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
      <div className="text-center py-6">
        <p className="font-['var(--font-cormorant)'] text-2xl font-light italic text-[#3D2B1F] mb-1">Спасибо!</p>
        <p className="text-[#8B7355] text-sm">Ваш ответ отправлен. Ждём вас!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[#8B7355] text-[10px] tracking-widest uppercase mb-2">Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-[#F5F0E8] border border-[#8B7355]/20 text-[#3D2B1F] px-4 py-3 rounded-lg focus:border-[#7A9B76] focus:outline-none transition-colors font-['var(--font-cormorant)'] text-lg"
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label className="block text-[#8B7355] text-[10px] tracking-widest uppercase mb-2">Пожелания по алкоголю</label>
        <textarea
          value={alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
          required
          rows={3}
          className="w-full bg-[#F5F0E8] border border-[#8B7355]/20 text-[#3D2B1F] px-4 py-3 rounded-lg focus:border-[#7A9B76] focus:outline-none transition-colors font-['var(--font-cormorant)'] text-lg resize-none"
          placeholder="Вино, шампанское..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-[#7A9B76] text-[#F5F0E8] hover:bg-[#6A8B66] transition-all font-['var(--font-cormorant)'] text-base disabled:opacity-50 rounded-full"
      >
        {loading ? '...' : 'ПОДТВЕРДИТЬ'}
      </button>
    </form>
  );
}
