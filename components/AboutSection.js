import Image from 'next/image';

export default function AboutSection({
  imageSrc = "/michael.jpg",
  imageAlt = "Michael Ehumadu",
  name = "Michael Ehumadu",
  story = null, // Pass custom story if needed
  psText = "PS. I only can handle 2-3 clients account at a time, message me to confirm availability."
}) {
  const defaultStory = (
    <>
      <span className="block">I'm not a web designer.</span>
      
      <span className="block mt-6">
        I spent 8 years doing door-to-door sales for NEOLIFE.<br/>
        Got doors slammed in my face over 10,000 times.<br/>
        Convinced 40 other crazy humans to join me 😂.
      </span>
      
      <span className="block mt-6">
        But I kept thinking... there's gotta be a faster way to reach people 
        with the internet.
      </span>
      
      <span className="block mt-6">
        So I decided to learn to code. Taught myself. Built my own landing page.<br/>
        Ran some ads on Facebook and Instagram just to see what would happen.
      </span>
      
      <span className="block mt-6">
        48 hours later? 340+ leads. <strong>No cold calling or relating. No rejection. Just results.</strong>
      </span>
      
      <span className="block mt-6">
        That's when it clicked for me...<br/>
        I could use the same persuasion skills I'd been sharpening for 8 years — but online, at scale, without getting doors slammed in my face.
      </span>
      
      <span className="block mt-6">
        I fell in love with digital advertising. And then people started asking for help.
      </span>
      
      <span className="block mt-6">
        Now I help businesses get leads and sales using the same strategies that worked for me.
      </span>
      
      <span className="block mt-8 text-xl md:text-2xl font-semibold">
        If you want landing page and ads that actually sell, not just pretty — let's talk.
      </span>
    </>
  );

  return (
    <section className="w-full max-w-5xl mx-auto my-12 flex flex-col md:flex-row items-center bg-zinc-900 rounded-2xl p-6 shadow-lg">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={256}
          height={256}
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-white shadow-lg"
        />
      </div>

      <div className="text-left flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e8a32d] mb-4">
          Hi, I'm {name}
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed space-y-4">
          {story || defaultStory}
        </p>

        {psText && (
          <p className="text-gray-400 mb-6 mt-12">
            {psText}
          </p>
        )}
      </div>
    </section>
  );
}