import { useNavigate } from 'react-router-dom'
import google from '@/assets/icons/google.png'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { TextField } from '@/components/Field'
import { useAuthStore } from '@/stores/useAuthStore'
import { useUiStore } from '@/stores/useUiStore'

export function AuthModal() {
  const navigate = useNavigate()
  const modal = useUiStore((state) => state.authModal)
  const closeAuthModal = useUiStore((state) => state.closeAuthModal)
  const openAuthModal = useUiStore((state) => state.openAuthModal)
  const login = useAuthStore((state) => state.login)
  const pendingReservationId = useUiStore((state) => state.pendingReservationId)
  const setPendingReservationId = useUiStore((state) => state.setPendingReservationId)

  if (!modal) {
    return null
  }

  function completeLogin() {
    login()
    closeAuthModal()
    if (pendingReservationId) {
      navigate(`/reserva/${pendingReservationId}`)
      setPendingReservationId(null)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="flex w-full max-w-[384px] flex-col gap-10 rounded-2xl bg-neutral-white px-6 pt-4 pb-10">
        <button type="button" className="self-end" onClick={closeAuthModal} aria-label="Fechar">
          <Icon name="close" />
        </button>

        <div className="flex flex-col items-center gap-10">
          <Logo />

          {modal === 'login' ? (
            <form
              className="flex w-full flex-col gap-10"
              onSubmit={(event) => {
                event.preventDefault()
                completeLogin()
              }}
            >
              <div className="flex flex-col gap-4">
                <TextField label="E-mail" type="email" placeholder="Insira seu e-mail" required />
                <TextField
                  label="Senha"
                  type="password"
                  placeholder="Insira sua senha"
                  trailing={<Icon name="visibility" />}
                  required
                />
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </div>

              <div className="flex items-center gap-[19px] text-neutral-text">
                <span className="h-px flex-1 bg-neutral-text" />
                Ou entrar com
                <span className="h-px flex-1 bg-neutral-text" />
              </div>

              <Button variant="google" type="button" className="w-full" onClick={completeLogin}>
                <img src={google} alt="" width={24} height={25} />
                Google
              </Button>

              <Button
                variant="ghost"
                type="button"
                className="w-full"
                onClick={() => openAuthModal('signup')}
              >
                <Icon name="person_add" />
                Ainda não tenho conta
              </Button>
            </form>
          ) : (
            <form
              className="flex w-full flex-col gap-10"
              onSubmit={(event) => {
                event.preventDefault()
                completeLogin()
              }}
            >
              <div className="flex flex-col gap-4">
                <TextField label="Nome" placeholder="Digite seu nome" required />
                <TextField label="Telefone" placeholder="(+55) XXXX-XXXX" required />
                <TextField label="E-mail" type="email" placeholder="Insira seu e-mail" required />
                <TextField
                  label="Senha"
                  type="password"
                  placeholder="Crie uma senha"
                  trailing={<Icon name="visibility" />}
                  required
                />
                <TextField
                  label="Repita a senha"
                  type="password"
                  placeholder="Repita a senha acima"
                  trailing={<Icon name="visibility" />}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Criar conta
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
