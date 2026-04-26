'use client';

import { useState } from 'react';
import MatrixRain from '@/components/variants/v1/MatrixRain';
import Typewriter from '@/components/variants/v1/Typewriter';

export default function V1Page() {
  const [typewriterDone, setTypewriterDone] = useState(false);

  return (
    <main className="bg-[#FCD3C5] text-[#571310] font-['var(--font-mono)']">
      {/* FIXED BACKGROUND ANIMATION */}
      <div className="fixed inset-0 z-0">
        <MatrixRain lightMode />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-[#A72913]/60 text-sm tracking-[0.3em] uppercase">
                [ wedding_invitation.exe ]
              </span>
            </div>
            
            <div className="mb-3">
              <span className="text-[#E8AF59] text-lg md:text-xl">
                {'>'} initializing ceremony...
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-[#571310]">
              {typewriterDone ? (
                'Соня и Кирилл'
              ) : (
                <Typewriter 
                  text="Соня и Кирилл" 
                  speed={80} 
                  onComplete={() => setTypewriterDone(true)}
                />
              )}
            </h1>

            <div className="space-y-3">
              <p className="text-[#A72913] text-xl md:text-2xl">
                свадебная вечеринка и афтепати
              </p>
              <div className="inline-block border-2 border-[#A72913] px-6 py-3 bg-[#FCD3C5]/80 backdrop-blur-sm">
                <span className="text-[#571310] text-2xl md:text-3xl tracking-widest font-bold">
                  03 . 09 . 2026
                </span>
              </div>
            </div>

            <div className="mt-10 text-[#A72913]/50 text-sm">
              <span className="animate-pulse">▼</span> scroll down <span className="animate-pulse">▼</span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section id="intro" className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10">
            <div className="mb-4">
              <span className="text-[#A72913]/50 text-xs">01 / intro</span>
            </div>
            <div className="border-l-2 border-[#A72913] pl-6">
              <p className="text-base md:text-lg leading-relaxed text-[#571310]">
                Вы только представьте, сколько всего должно было случиться, 
                чтобы мы собрались все вместе. Как минимум – одно предложение пожениться.
              </p>
            </div>
            <div className="mt-4 text-[#A72913]/40 text-xs">
              {'//'} love_story.loaded
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10">
            <div className="mb-6">
              <span className="text-[#A72913]/50 text-xs">02 / location</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#571310] mt-1">Место</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-[#A72913]/20 p-5 bg-white/30 rounded-xl">
                <div className="text-[#A72913] text-xs mb-3">{'>'} venue_info</div>
                <h3 className="text-xl font-bold text-[#571310] mb-2">
                  Резиденция Чехов APi
                </h3>
                <p className="text-[#571310]/70 text-sm mb-3">
                  Загородная резиденция в 58 км от МКАД. Для вас подготовлена спальня — 
                  можно оставить вещи, переодеться и остаться на ночь.
                </p>
                <div className="text-[#E8AF59] text-xs font-medium">
                  <span className="text-[#A72913]">{'>'}</span> заселение: скажу чуть позже
                </div>
              </div>

              <div className="border border-[#A72913]/20 p-5 bg-white/30 rounded-xl">
                <div className="text-[#A72913] text-xs mb-3">{'>'} transport</div>
                <h3 className="text-lg font-bold text-[#571310] mb-2">Как добраться</h3>
                <div className="space-y-2 text-[#571310]/70 text-sm">
                  <p>
                    <span className="text-[#E8AF59] font-medium">[казань]</span> прилетайте в Домодедово
                  </p>
                  <p>
                    <span className="text-[#E8AF59] font-medium">[москва]</span> бесплатная парковка
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://yandex.ru/maps/?pt=37.394111,55.150639&z=16&l=map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A72913] hover:text-[#571310] transition-colors border-b border-[#A72913]/40 pb-1 text-sm"
              >
                <span className="text-[#A72913]">{'>'}</span>
                Открыть на Яндекс Картах
                <span className="text-xs">↗</span>
              </a>
              <p className="mt-1 text-[#A72913]/40 text-xs">
                55°09'02.3N 37°23'38.8E
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10">
            <div className="mb-8">
              <span className="text-[#A72913]/50 text-xs">03 / timeline</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#571310] mt-1">Программа</h2>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-[#E8AF59] text-base font-medium mb-4 border-b border-[#A72913]/20 pb-2">
                  {'>'} 3 сентября
                </div>
                <div className="space-y-3">
                  {[
                    { time: '13:00', title: 'Заселение', desc: 'Приезжайте, располагайтесь, переодевайтесь' },
                    { time: '15:00', title: 'Welcome', desc: 'Лёгкие закуски и бокал чего-нибудь приятного', loc: 'Яблоневый сад' },
                    { time: '15:30', title: 'Церемония', desc: 'Самый важный момент — и начало нашей вечеринки', loc: 'Яблоневый сад' },
                    { time: '16:15', title: 'Праздничный ужин', desc: 'Много едим, поем, танцуем и плачем' },
                    { time: '23:00', title: 'Афтепати', desc: 'Неофициальная часть начинается. Не забудьте пижамы!' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="text-[#A72913] text-sm font-medium w-14 pt-0.5 tabular-nums">
                        {item.time}
                      </div>
                      <div className="flex-1 border-l border-[#A72913]/20 pl-4 group-hover:border-[#A72913] transition-colors">
                        <h4 className="text-[#571310] font-bold text-base">{item.title}</h4>
                        <p className="text-[#571310]/60 text-sm">{item.desc}</p>
                        {item.loc && (
                          <span className="text-[#E8AF59] text-xs font-medium">{'>'} {item.loc}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[#E8AF59] text-base font-medium mb-4 border-b border-[#A72913]/20 pb-2">
                  {'>'} 4 сентября · утро
                </div>
                <div className="space-y-3">
                  {[
                    { time: '11:00', title: 'Общий завтрак', desc: 'Собираемся за одним столом', loc: 'Главный корпус' },
                    { time: '12:00', title: 'Выселение', desc: 'Освобождаем номера. Ферма с животными и мороженое!' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="text-[#A72913] text-sm font-medium w-14 pt-0.5 tabular-nums">
                        {item.time}
                      </div>
                      <div className="flex-1 border-l border-[#A72913]/20 pl-4 group-hover:border-[#A72913] transition-colors">
                        <h4 className="text-[#571310] font-bold text-base">{item.title}</h4>
                        <p className="text-[#571310]/60 text-sm">{item.desc}</p>
                        {item.loc && (
                          <span className="text-[#E8AF59] text-xs font-medium">{'>'} {item.loc}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DRESS CODE */}
        <section id="dresscode" className="py-12 px-4">
          <div className="max-w-4xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10">
            <div className="mb-6">
              <span className="text-[#A72913]/50 text-xs">04 / dress_code</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#571310] mt-1">Что надеть</h2>
            </div>

            <p className="text-[#571310]/70 text-sm mb-6">
              Пожалуйста, приходите в красивой одежде, которая соответствует торжественному настроению. 
              Но не забудьте кеды на сменку – танцевать будем до ночи!
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-[#A72913]/20 p-5 bg-white/30 rounded-xl">
                <div className="text-[#A72913] text-xs mb-1">{'>'} girls</div>
                <h3 className="text-lg font-bold text-[#571310] mb-1">Девушки</h3>
                <p className="text-[#571310]/60 text-sm">Вечерние платья, костюмы</p>
              </div>
              <div className="border border-[#A72913]/20 p-5 bg-white/30 rounded-xl">
                <div className="text-[#A72913] text-xs mb-1">{'>'} boys</div>
                <h3 className="text-lg font-bold text-[#571310] mb-1">Парни</h3>
                <p className="text-[#571310]/60 text-sm">Брюки, поло, легкие рубашки, костюмы</p>
              </div>
            </div>

            <div className="border-2 border-[#A72913] p-4 text-center mb-4 bg-[#A72913]/5 rounded-xl">
              <p className="text-[#A72913] font-bold text-sm">
                ⚠ главное пожелание – без черного цвета
              </p>
            </div>

            <div className="text-center mb-3">
              <a
                href="https://pin.it/1m84IMKWp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#A72913] hover:text-[#571310] transition-colors border-b border-[#A72913]/40 pb-1 text-sm"
              >
                <span className="text-[#A72913]">{'>'}</span>
                Доска с референсами на Pinterest
                <span className="text-xs">↗</span>
              </a>
            </div>

            <p className="text-center text-[#571310]/40 text-xs">
              Но помните, главное – вы и ваше присутствие, а не то, что на вас одето.
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="py-12 px-4">
          <div className="max-w-3xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10">
            <div className="mb-6">
              <span className="text-[#A72913]/50 text-xs">05 / details</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#571310] mt-1">Детали</h2>
            </div>

            <div className="space-y-4">
              {[
                'Формат мероприятия не предполагает детской площадки и аниматоров. Отдохните этим вечером на полную катушку!',
                'Пожалуйста, не дарите цветы и алкоголь.',
                'Если вы задумываетесь о подарке, то будем благодарны за вклад в наш семейный бюджет.',
              ].map((detail, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#A72913] text-sm">{'>'}</span>
                  <p className="text-[#571310]/70 text-sm">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="py-12 px-4">
          <div className="max-w-2xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10">
            <div className="mb-6">
              <span className="text-[#A72913]/50 text-xs">06 / rsvp</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#571310] mt-1">Анкета</h2>
            </div>

            <p className="text-[#571310]/70 text-sm mb-6">
              пожалуйста, ответьте на несколько вопросов
              <br />
              <span className="text-[#A72913]/50 text-xs">*Заполните форму для каждого гостя отдельно.</span>
            </p>

            <RSVPForm />
          </div>
        </section>

        {/* TELEGRAM */}
        <section id="telegram" className="py-12 px-4">
          <div className="max-w-2xl mx-auto bg-[#FCD3C5]/70 backdrop-blur-md rounded-2xl p-8 border border-[#A72913]/10 text-center">
            <div className="mb-4">
              <span className="text-[#A72913]/50 text-xs">07 / telegram</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#571310] mb-3">Телеграм</h2>
            <p className="text-[#571310]/70 text-sm mb-6">
              Мы создали телеграм-чат нашего праздника, где можно будет узнать дополнительную информацию, 
              поделиться фотографиями и видео в день и после свадьбы.
            </p>

            <a
              href="https://t.me/+your_chat_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-3 px-6 border-2 border-[#A72913] text-[#A72913] hover:bg-[#A72913] hover:text-[#FCD3C5] transition-all text-sm font-medium rounded-xl"
            >
              <span className="text-[#A72913]">{'>'}</span>
              Присоединиться к чату
              <span className="text-xs">↗</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center">
          <div className="text-[#A72913]/40 text-xs mb-1">{'//'} end of file</div>
          <p className="text-[#571310] text-sm font-medium">С любовью, Соня и Кирилл</p>
          <div className="mt-2 text-[#A72913]/40 text-xs">
            {'>'} process completed successfully
          </div>
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
      <div className="border-2 border-[#A72913] p-6 text-center bg-[#A72913]/5 rounded-xl">
        <div className="text-[#E8AF59] mb-1 text-sm font-medium">{'>'} response_sent</div>
        <p className="text-[#571310] text-lg font-bold">Спасибо!</p>
        <p className="text-[#571310]/60 text-sm">Ваш ответ отправлен. Ждём вас на празднике!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[#A72913] text-sm mb-2">{'>'} 1. Имя *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-white/40 border border-[#A72913]/30 text-[#571310] px-4 py-3 font-mono focus:border-[#A72913] focus:outline-none transition-colors text-sm placeholder:text-[#A72913]/30 rounded-xl"
          placeholder="Ваше имя"
        />
      </div>
      <div>
        <label className="block text-[#A72913] text-sm mb-2">{'>'} 2. Пожелания по алкоголю *</label>
        <textarea
          value={alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
          required
          rows={4}
          className="w-full bg-white/40 border border-[#A72913]/30 text-[#571310] px-4 py-3 font-mono focus:border-[#A72913] focus:outline-none transition-colors resize-none text-sm placeholder:text-[#A72913]/30 rounded-xl"
          placeholder="Например: вино, шампанское, безалкогольное..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 border-2 border-[#A72913] text-[#A72913] hover:bg-[#A72913] hover:text-[#FCD3C5] transition-all font-mono disabled:opacity-50 text-sm font-medium rounded-xl"
      >
        {loading ? 'sending...' : '> отправить ответ'}
      </button>
    </form>
  );
}
