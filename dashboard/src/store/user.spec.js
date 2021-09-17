import useStore from '../hooks/useStore'
import {
  resetUserStore,
  setApiKey,
  cleanCurrentUser,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Léo' })
    expect(store.User.currentUser.name).toBe('Léo')
  })

  it('should set api_key on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Léo' })
    expect(store.User.currentUser.name).toBe('Léo')
    cleanCurrentUser()

    expect(store.User.currentUser.name).toBeFalsy()
  })
})
