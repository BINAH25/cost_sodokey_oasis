export default function WaterRipple() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] rounded-full border-2 border-emerald-400/40 animate-ripple" />
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full border-2 border-oasis-gold/30 animate-ripple [animation-delay:2s]" />
      <div className="absolute top-[60%] left-[20%] w-[350px] h-[350px] rounded-full border-2 border-emerald-400/35 animate-ripple [animation-delay:4s]" />
      <div className="absolute top-[30%] left-[70%] w-[250px] h-[250px] rounded-full border-2 border-oasis-gold/25 animate-ripple [animation-delay:1s]" />
      <div className="absolute top-[50%] left-[40%] w-[450px] h-[450px] rounded-full border-2 border-emerald-400/30 animate-ripple [animation-delay:3s]" />
      <div className="absolute top-[15%] left-[55%] w-[200px] h-[200px] rounded-full border-2 border-oasis-gold/35 animate-ripple [animation-delay:1.5s]" />
      <div className="absolute top-[65%] left-[60%] w-[320px] h-[320px] rounded-full border-2 border-emerald-300/30 animate-ripple [animation-delay:0.5s]" />
    </div>
  );
}
