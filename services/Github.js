import axios from 'axios'

const getUser = async (user) => {
  try {
    const { data: repos } = await axios.get(
      `https://api.github.com/users/${user}/repos`
    )

    if (repos.status == 200) {
      return await repos
    } else {
      return null
    }
  } catch (error) {
    return error
  }
}

export { getUser }
