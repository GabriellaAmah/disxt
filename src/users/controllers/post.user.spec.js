import makePostUser from './post.user'
import makeFakeUser from '../../../__test__/seed/user'

describe('Post user controller', () => {
  it('successfully post a user', async () => {
    const postUser = makePostUser({ addUser: (u) => u })
    const user = makeFakeUser()
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }
    const toReturn = {
      message: 'User created',
      data: [request.body]
    }

    const expected = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      status: true,
      statusCode: 201,
      data: JSON.stringify(toReturn)
    }
    const posted = await postUser(request)
    expect(posted).toEqual(expected)
  })
})
