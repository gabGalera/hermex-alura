import instagram from '@/assets/icons/instagram.svg'
import tiktok from '@/assets/icons/tiktok.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'
import { Logo } from '@/components/Logo'

const socials = [
  { href: 'https://wa.me', src: whatsapp, label: 'WhatsApp' },
  { href: 'https://instagram.com', src: instagram, label: 'Instagram' },
  { href: 'https://tiktok.com', src: tiktok, label: 'TikTok' },
]

export function Footer() {
  return (
    <footer className="bg-brand-secondary-dark text-neutral-white">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-8 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-[220px]">
        <div className="flex flex-col gap-6">
          <Logo variant="light" />
          <p className="text-base">O carro ideal para sua ocasião</p>
        </div>
        <p className="text-base">
          Desenvolvido por Alura. Projeto fictício sem fins comerciais.
        </p>
        <div className="flex flex-col gap-4">
          <p className="font-heading text-[25px] font-bold leading-[1.25]">
            Siga nossas redes:
          </p>
          <div className="flex gap-2">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                <img src={social.src} alt="" width={32} height={32} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
