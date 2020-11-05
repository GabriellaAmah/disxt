export function makeHttpError({ statusCode, title, errorMessage, stack }) {
  const toReturn = {
    errors: [
      {
        title,
        error: errorMessage,
        stack
      }
    ]
  }

  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify(toReturn)
  }
}

export const apiResponse = ({
  status,
  statusCode,
  message,
  data,
  ...props
}) => {
  const toReturn = {
    status,
    message,
    data,
    ...props
  }
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    statusCode,
    data: JSON.stringify(toReturn)
  }
}
