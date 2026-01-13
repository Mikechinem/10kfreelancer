export default function HeadlineSection({
  preHeadline,
  headline,
  subtext,
  footerText,
  className = ""
}) {
  return (
    <section className={`w-full flex flex-col justify-center bg-black px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 items-center">
        <div className="flex flex-col justify-center space-y-6">
          {preHeadline && (
            <div className="text-[#ffff] text-sm font-semibold uppercase tracking-wider">
              {preHeadline}
            </div>
          )}

          {headline && (
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#e8a32d] leading-tight">
              {headline}
            </h2>
          )}

          {subtext && (
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              {subtext}
            </p>
          )}

          {footerText && (
            <div className="text-gray-400 text-sm italic">{footerText}</div>
          )}
        </div>
      </div>
    </section>
  );
}
