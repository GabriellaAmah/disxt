import 'regenerator-runtime'
import makeFakeUser from '../../../__test__/seed/user'
import makeUser from '.'

describe('User', () => {
  it('must have a username', async () => {
    const user = makeFakeUser({ username: undefined })
    expect(() => makeUser(user)).toThrow('Username cannot be null or undefined')
  })

  it('must have a password', async () => {
    const user = makeFakeUser({ password: undefined })
    expect(() => makeUser(user)).toThrow('Password cannot be null or undefined')
  })

  it('must have a name', async () => {
    const user = makeFakeUser({ name: undefined })
    expect(() => makeUser(user)).toThrow('Name cannot be null or undefined')
  })

  it('must have a lastName', async () => {
    const user = makeFakeUser({ lastName: undefined })
    expect(() => makeUser(user)).toThrow(
      'Last name cannot be null or undefined'
    )
  })

  it('must have an age', async () => {
    const user = makeFakeUser({ age: undefined })
    expect(() => makeUser(user)).toThrow('Age cannot be null or undefined')
  })

  it('must have a role specified', async () => {
    const user = makeFakeUser({ role: undefined })
    expect(() => makeUser(user)).toThrow('Role cannot be null or undefined')
  })

  it('must have a password longer than 8 characters', async () => {
    const user = makeFakeUser({ password: 'some123' })
    expect(() => makeUser(user)).toThrow(
      'Password must be at least 8 characters long and must contain at least one Uppercase character, one special sign and a number.'
    )
  })

  it('role can either be client or admin', async () => {
    const user = makeFakeUser({ role: 'manager' })
    expect(() => makeUser(user)).toThrow('Role must either be admin or client.')
  })
})
