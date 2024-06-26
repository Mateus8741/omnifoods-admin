import { UserScheema } from '@/schemas/UserSchema'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserProps = {
  user: UserScheema | null
  setUser: (user: UserScheema) => void
  removeUser: () => void
}

const userStore = create<UserProps>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export function useUserStorage() {
  const { user, setUser, removeUser } = userStore()

  return { user, setUser, removeUser }
}
