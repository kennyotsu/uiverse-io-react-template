import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IType {
  type: string
  setActiveType: (newActiveType: string) => void
}
export const useTypeStore = create<IType>()(
    persist(
      (set) => ({
        type: 'creator profile',
        setActiveType: (newValue: string) => {
          set({ type: newValue })
        }
      }),
      {
        name: 'type-store',
      }
  )
)
