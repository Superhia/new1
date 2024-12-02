import { create } from 'zustand'

const useUserStore = create((set) => ({
  userType: null,
  profile: {},
  setUserType: (type) => set({ userType: type }),
  updateProfile: (data) => set((state) => ({
    profile: { ...state.profile, ...data }
  })),
}))

export default useUserStore
