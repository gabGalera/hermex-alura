import { type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { useAuthStore } from '@/stores/useAuthStore'
import { useUiStore } from '@/stores/useUiStore'

export function Header() {
  const navigate = useNavigate()
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const logout = useAuthStore((state) => state.logout)
  const headerQuery = useUiStore((state) => state.headerQuery)
  const setHeaderQuery = useUiStore((state) => state.setHeaderQuery)
  const openAuthModal = useUiStore((state) => state.openAuthModal)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <header className="bg-neutral-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Logo />

        <form
          onSubmit={handleSearch}
          className="hidden min-w-[213px] items-center gap-2 rounded border border-neutral-details px-4 py-3 text-neutral-text md:flex"
        >
          <Icon name="search" />
          <input
            value={headerQuery}
            onChange={(event) => setHeaderQuery(event.target.value)}
            placeholder="O que você procura?"
            className="w-full bg-transparent text-base outline-none placeholder:text-neutral-text"
          />
        </form>

        <nav className="hidden items-center gap-6 text-base text-neutral-text md:flex">
          {isLoggedIn ? (
            <>
              <Icon name="account_circle" />
              <button
                type="button"
                className="inline-flex items-center gap-2"
                onClick={logout}
              >
                <Icon name="logout" />
                Sair
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="inline-flex items-center gap-2"
                onClick={() => openAuthModal('signup')}
              >
                <Icon name="account_circle" />
                Cadastro
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2"
                onClick={() => openAuthModal('login')}
              >
                <Icon name="login" />
                Login
              </button>
            </>
          )}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      {menuOpen ? (
        <div className="flex flex-col gap-3 border-t border-neutral-details px-4 py-4 md:hidden">
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 rounded border border-neutral-details px-4 py-3"
          >
            <Icon name="search" />
            <input
              value={headerQuery}
              onChange={(event) => setHeaderQuery(event.target.value)}
              placeholder="O que você procura?"
              className="w-full bg-transparent outline-none"
            />
          </form>
          {isLoggedIn ? (
            <button type="button" className="inline-flex items-center gap-2" onClick={logout}>
              <Icon name="logout" />
              Sair
            </button>
          ) : (
            <>
              <button
                type="button"
                className="inline-flex items-center gap-2"
                onClick={() => openAuthModal('signup')}
              >
                <Icon name="account_circle" />
                Cadastro
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2"
                onClick={() => openAuthModal('login')}
              >
                <Icon name="login" />
                Login
              </button>
            </>
          )}
          <Link to="/" className="text-brand-primary-pure">
            Home
          </Link>
        </div>
      ) : null}
    </header>
  )
}
