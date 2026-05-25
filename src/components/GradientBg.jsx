export default function GradientBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-20 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}
