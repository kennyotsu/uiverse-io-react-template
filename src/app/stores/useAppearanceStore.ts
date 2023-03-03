import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IAppearance {
  appearance: string
  setActiveAppearance: (newActiveAppearance: string) => void
}
export const useAppearanceStore = create<IAppearance>()(
    persist(
      (set) => ({
        appearance: 'card',
        setActiveAppearance: (newValue: string) => {
          set({ appearance: newValue })
        }
      }),
      {
        name: 'appearance-store',
      }
  )
)
