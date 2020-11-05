import makePostUser from './post.user'
import makeFakeUser from '../../../__test__/seed/user'

describe('Post user', async () => {
  it('successfully posts a user', async () => {
    const user = makeFakeUser()
    const postUser = makePostUser({ addUser: (u) => u })
    const request = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: user
    }

    const expected = {
      status: true,
      statusCode: 201,
      data: [{ posted: request.body }],
      headers: {
        'Content-Type': 'application/json'
      },
      message: 'User created.'
    }

    const actual = await postUser(request)
    expected(actual).toHaveProperty('data[0].user.token')
  })
})
