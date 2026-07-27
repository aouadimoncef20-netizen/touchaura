import { motion } from "framer-motion";

/**
 * Gallery Component
 * Style inspiration image gallery with grayscale hover effects
 *
 * @param {Array} images - Array of image objects with src and alt
 */
export default function Gallery({ images = [] }) {
  const defaultImages = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbBkB08GcEbl4MBWl9Fs7uok8EkuvovIDOXh0pseOxjjqWaGgnFVY5nT2Hey4MXt7qqD2_4KvwomigyRNRFCJhvDqQinxP1nSD-YL8wBhiJ9DQsHVD-hNoFtmbi5ptDrk4JvIk9NLMpLMqB2coEINQMnZ_5XTVuwN4oVBqNcNqE17E7VLtWbfxS3RqlISSIe-l_BwMYkxoMYXN9uZq2C1coKK6rQu-SQN9kk7B3_3MiScpua_OLKGw",
      alt: "Luxury modest fashion editorial",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdheKrPwm2uFUYmdFgNWrpGYsaVVlKq_GFtWQQ9hDv7aoY5I-yq65R4cLQ0-q27Y1BtGXnqI8ixi8a_3l_8PSNexrTWjOnom6PZomVGk7IbPBgvvK5LwdBUuOeO1mebWORo_s0u6oLKhwC2LhMjWh8S2vVQAHljEiVyy6dDsrS2b3KW71GSFo2p8f5WdsEnX90WKtmt5_i0tNiyr5KlvD1NOgHdXzmhQ9oy6JN8Z77KpwDthGxvsvb",
      alt: "Gold filigree embroidery details",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbRLK8rp3RkziL5jBXJpAn3NxY5Hepe59t0WxnNI115iKbpGR0PDV_arG0tHIRsbY9_tlm64nMMHUcEI-oJg6kAd6KI9b9VWMvMQWW9O1SAF3-HOGxwt9cwYFa5-9BvxF4mZv_fpJIGRuRLTw1QzHHqwcXUjhnQ_ReBXWmZ8qpxfj63i29b7n24z_PPnA580DNFxtZK_jlRPJmA9ZICaNv1OtYNSeE5uW-exz3UELg75PlgugKmoeM",
      alt: "Women in elegant modest attire",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCozGAlLKTB1SzIKMmQWssp7L3B40ecAXM9ERHT8uRPaRVyK-0lMhAuWpoiqx5tbV0b_66cRFtYSPpCK3tFAtIgfNB3pU1fEs-vIeCuPJQ8vX6UFXp9YcodYP6GpHzPUjq6lB9ym_uUZGdU_H7VHLj-fyJWg2VB1Eiwh7vKI9udt-TGmk8eKRnJ-YiFP9DNu9ImxjGHxOLyz0GJ6_j7A3ek6O_UwUicYRa4BmFMxLVCioGwgHYrve4p",
      alt: "Luxury gift box with silk scarf",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv7h0ULhocIAa4GLHPrspPskYoAW9ponIT8FRkVnYmaTA0WdzWIf0gcBhhTUliFvyVXZez9hBA9Ud195v6uEL2b3a3WrdbkSUKFTIdm0BEj3-7O-wkNUdCaepXpipDuyLIA7wOyARFhyZktFyqAeblv7wM2SUnzcCGIu2eKNDA64SHgkfc44ZmTLUOBb2138oyHMk55o0UkCPVJlyemcKEEiAiayC6BJW9UfHi8n55f_Hpf_9FQY3H",
      alt: "Portrait with backlit studio lighting",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCee1IIaj6yw_s433AqEmOQs98TdKDnlEiZ5pG300bBW53hLtAaMOcHeVJDjRI9GVFUmHpuUiO1IbINR_4eUBxJhYoWCewMVbhcac5wZQskQG03_QMlSQCWdCV4ba_oj9SO-y9BMFgn1AuXqyh7a_UpRF2Ipw9poXXgL23ZdH0r3IL8mm607u8VmUIcJPuQPJPZUSVoY9EPlqoKEXNZQ9Oq0dSjnhCPg90zqHVFjCXWrDm5LFbxm3VM",
      alt: "Gold and ruby hairpin on satin",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGjF9_siSrXzuQAmhNb33qCZio_f04JlH1Lxbac2gCxrXexDgl_RMKtn-ddZ6bBiE7jIqBUl_RmVgZSwWqoIamXA6DtE7hUXqfgPxAIs45p4o8CIVrB741MOvvaIyclza-Y9fOg8EQY93I6N41dDUG6EQJo8qJEtd1wPe5s0Zq4OU0m92s--ilnwDiPawgwJ-em7UHAPwt_NeX0JpuxEtC7VSRRema3CtQm83_5jY0JTwM25sJVnT",
      alt: "Minimalist abaya on mannequin",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj6qknHYO-d1WT4jE8zunyYQoMYfSc_U0kFgTZhfoUej17GgM2CL6j_H6fgB2bKzFdKstua-pV9iUxdZxvqtOPqrncGQD9wLOfCPWzotAArEzOkXqWALSjo4WpiKYgb6EPK4wvn7awBSAinOxn1dQuIvx5LOtmcG_7iIyBIx9dfVBxzXD3Rot8D9DwEv7DQK5moAvCsR4aOnAOfgOKsykz5DR2U2FTQRvlBmwnSfiZR18BL3SsbQ4a",
      alt: "Luxury modest fashion runway",
    },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  // Split into 4 columns with offset
  const columns = [
    galleryImages.slice(0, 2),
    galleryImages.slice(2, 4),
    galleryImages.slice(4, 6),
    galleryImages.slice(6, 8),
  ];

  const columnOffsets = [0, 12, 0, 8];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-margin-desktop max-w-full overflow-hidden">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="space-y-4" style={{ paddingTop: columnOffsets[colIdx] + "px" }}>
          {col.map((img, imgIdx) => (
            <motion.div
              key={imgIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colIdx * 0.15 + imgIdx * 0.1 }}
              className="overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
