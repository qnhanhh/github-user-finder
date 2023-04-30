import { create } from 'zustand'

type usernameType = {
    username: string
    setUsername: (name: string) => void
}
export const useUsernameStore = create<usernameType>((set) => ({
    username: '',
    setUsername: (name: string) => set({ username: name })
}))

type dataProps = {
    created_at: Date
    name: string
    login: string
    avatar_url: string
    bio: string
    public_repos: number
    followers: number
    following: number
    location: string
    twitter_username: string
    blog: string
    company: string
} | null
type dataType = {
    data: dataProps
    setData: (data: dataProps) => void
}
export const useDataStore = create<dataType>((set) => ({
    data: null,
    setData: (newData: dataProps) => set({ data: newData })
}))