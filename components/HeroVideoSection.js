"use client";

export default function HeroVideoSection() {
  return (
    <video
      controls
      preload="metadata"
      className="w-full h-full aspect-video object-cover rounded-3xl"
      poster="https://res.cloudinary.com/dojweqe65/image/upload/f_auto,q_70,w_1200/v1768160617/340_Leads_1_vluy2w.png"
    >
      <source
        src="https://res.cloudinary.com/dojweqe65/video/upload/v1768157515/real_video_for_loom.2026_inpnog.mp4"
        type="video/mp4"
      />
    </video>
  );
}
