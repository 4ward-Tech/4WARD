"use client";

export default function ContactPage() {

  return (
    <main className="min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24 grid-bg font-jost overflow-x-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* New Stylised Contact Hero Section */}
        <section className="relative mb-32 group">
          {/* Big Background Text */}
          <div className="absolute -top-10 -left-4 md:-left-10 select-none pointer-events-none z-0 overflow-hidden w-full h-[300px] md:h-[350px]">
            <span className="text-[18.5vw] whitespace-nowrap font-black text-[#1a1a1a]/5 uppercase leading-none tracking-tighter block translate-y-10 group-hover:translate-y-0 transition-transform duration-1000">
              Contact
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-4">
            {/* Left Sidebar: Enquiries & Info */}
            <div className="lg:col-span-4 flex flex-col gap-12 order-2 lg:order-1 lg:border-r lg:border-[#1a1a1a]/10 pr-12 pb-12">
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-4 bg-[#1a1a1a] text-white px-6 py-3 rounded-full self-start hover:bg-[#d32f2f] transition-colors group/btn">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] group-hover/btn:bg-[#d32f2f]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Retail Enquiries</span>
                </button>
                <button className="flex items-center gap-4 bg-white border border-[#1a1a1a]/10 text-[#1a1a1a] px-6 py-3 rounded-full self-start hover:border-[#1a1a1a] transition-colors group/btn">
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a]/5 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Join Mailing List</span>
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black text-[#d32f2f] uppercase tracking-widest">Global HQ</span>
                  <p className="text-[11px] font-black text-[#1a1a1a]/80 leading-relaxed uppercase tracking-tight">
                    +250 788 000 000 <br />
                    KK 31 ST, Kicukiro District <br />
                    Kigali, Rwanda <br />
                    PO Box 4410
                  </p>
                </div>
              </div>

              <div className="mt-auto hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-[#d32f2f]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d32f2f]">4WARD.TECH</span>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/60 group-focus-within/field:text-[#d32f2f] transition-colors">Name</label>
                  <input type="text" className="bg-[#1a1a1a]/[0.02] border-b-2 border-[#1a1a1a]/20 outline-none p-3 text-sm font-bold text-[#1a1a1a] focus:border-[#d32f2f] focus:bg-[#d32f2f]/[0.02] transition-all" />
                </div>
                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/60 group-focus-within/field:text-[#d32f2f] transition-colors">Company</label>
                  <input type="text" className="bg-[#1a1a1a]/[0.02] border-b-2 border-[#1a1a1a]/20 outline-none p-3 text-sm font-bold text-[#1a1a1a] focus:border-[#d32f2f] focus:bg-[#d32f2f]/[0.02] transition-all" />
                </div>
                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/60 group-focus-within/field:text-[#d32f2f] transition-colors">Email</label>
                  <input type="email" className="bg-[#1a1a1a]/[0.02] border-b-2 border-[#1a1a1a]/20 outline-none p-3 text-sm font-bold text-[#1a1a1a] focus:border-[#d32f2f] focus:bg-[#d32f2f]/[0.02] transition-all" />
                </div>
                <div className="flex flex-col gap-2 group/field">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/60 group-focus-within/field:text-[#d32f2f] transition-colors">Phone</label>
                  <input type="tel" className="bg-[#1a1a1a]/[0.02] border-b-2 border-[#1a1a1a]/20 outline-none p-3 text-sm font-bold text-[#1a1a1a] focus:border-[#d32f2f] focus:bg-[#d32f2f]/[0.02] transition-all" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2 mt-4 group/field">
                  <label className="text-xl md:text-2xl font-black text-[#1a1a1a] tracking-tighter">Want to know more? Drop us a line!</label>
                  <textarea className="bg-[#1a1a1a]/[0.02] border-b-2 border-[#1a1a1a]/20 outline-none p-4 text-sm font-bold text-[#1a1a1a] focus:border-[#d32f2f] focus:bg-[#d32f2f]/[0.02] transition-all resize-none min-h-[80px]" />
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
                  {/* Mock Captcha */}
                  <div className="flex items-center gap-4 bg-white border border-[#1a1a1a]/5 p-4 rounded-sm shadow-sm">
                    <div className="w-6 h-6 border border-[#1a1a1a]/20 rounded-sm" />
                    <span className="text-[10px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest italic">Verification Required</span>
                  </div>

                  <button type="button" className="flex items-center gap-6 bg-[#1a1a1a] text-white pl-4 pr-10 py-4 rounded-full hover:bg-[#d32f2f] transition-all transform hover:scale-[1.05] group/send">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] group-hover/send:bg-[#d32f2f] animate-pulse" />
                    </div>
                    <span className="text-[12px] font-black uppercase tracking-[0.3em]">Send Request</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 border-t border-[#1a1a1a]/10 pt-12 mt-12 pb-24">
          {/* Communications Section */}
          <div className="md:col-span-4 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">
            Communications
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12 text-[#1a1a1a]">
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Phone
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase whitespace-pre-line">
                +250 788 000 000
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                General Information
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase text-[#d32f2f] hover:underline cursor-pointer">
                info@4ward.tech
              </p>
            </div>
            <div className="sm:col-start-2">
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Human Resources
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase text-[#d32f2f] hover:underline cursor-pointer">
                hr@4ward.tech
              </p>
            </div>
          </div>

          {/* Statutory Section */}
          <div className="md:col-span-4 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40 mt-12 border-t border-[#1a1a1a]/10 pt-12">
            Statutory company name
          </div>
          <div className="md:col-span-8 mt-12 border-t border-[#1a1a1a]/10 pt-12">
            <p className="text-[13px] font-bold leading-normal uppercase">
              4WARD DESIGN NETWORK <br /> 
              Kigali, Rwanda
            </p>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="fixed top-0 bottom-0 left-[33.33%] w-[1px] bg-[#1a1a1a]/5 -z-10 hidden md:block" />
    </main>
  );
}
