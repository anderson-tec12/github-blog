import axios from 'axios';


interface I_PROFILE {
  avatar: string,
  name: string,
  bio: string
  company: string
  github: string
  url: string
  followers: number
}
class HTTP_API {
  private api = axios.create({
    baseURL: "https://api.github.com"
  })



  async getProfileData() {
    try {
      const response = await this.api.get<I_PROFILE>('/users/anderson-tec12', {
        transformResponse(data) {
          const response = JSON.parse(data)

          return {
            avatar: response.avatar_url,
            name: response.name,
            bio: response.bio,
            company: response.company,
            github: response.login,
            followers: response.followers,
            url: response.html_url,
          }
        }
      })

      return response
    } catch (e) {
      console.log({ e })

      return {
        avatar: '',
        name: '',
        bio: ''
      }
    }
  }

  async getIssues(search: string) {
    console.log({ search })
    const response = await this.api.get('/search/issues', {
      params: {
        q: `${search} repo:anderson-tec12/github-blog`
      }
    })

    return response
  }
}


export const github_api = new HTTP_API()