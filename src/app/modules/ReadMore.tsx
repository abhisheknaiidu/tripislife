export function ReadMore() {
    return (
      <section className="min-h-screen flex flex-col justify-center px-14 pb-[350px]">
        <h2 className="text-[#294023] text-[64px] mb-[200px] text-center font-anth">
          read more of these stories?
        </h2>
  
        <div className="flex h-[630px] items-center justify-center">
          <div>
            <h3 className="text-[#294023] font-anth text-[64px] font-medium">COLLECTION</h3>
            <p className="text-[#294023] text-[24px] font-bold font-area text-center">by trip is life</p>
          </div>
          
          <div className="w-px h-full bg-[#294023] mx-[150px]"></div>

          <div className="flex items-start flex-col">
            <span className="text-[#294023] text-[40px] font-bold font-area">til</span>
            <span className="text-[#294023] text-[64px] font-area font-bold leading-[30px]">experiences</span>
          </div>
        </div>
      </section>
    );
  }