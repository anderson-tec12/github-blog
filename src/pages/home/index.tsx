import githubImage from '../../assets/github.svg'
import worksImage from '../../assets/works.svg'
import userImage from '../../assets/user.svg'

import { useForm } from 'react-hook-form'

import { ContainerHome, ContainerList, Content, Form, Profile } from './styles';
import { useEffect, useState } from 'react';
import { github_api } from '../../lib/api';

export function Home() {
  const [profileData, setProfileData] = useState({
    avatar: '',
    name: '',
    desc: '',
    github: '',
    company: '',
    url: '',
    followers: 0
  })

  const [issues, setIssues] = useState<{
    title: string,
    id: number,
    body: string,
    created_at: string
  }[]>([])

  const [totalIssues, setTotalIssues] = useState(0)

  const { register, handleSubmit } = useForm()

  async function getProfile() {
    const response: any = await github_api.getProfileData()

    setProfileData({
      avatar: response.data.avatar,
      desc: response.data.bio,
      github: response.data.github,
      name: response.data.name,
      followers: response.data.followers,
      url: response.data.url,
      company: response.data.company
    })
  }

  async function getIssues(search: string) {

    const response = await github_api.getIssues(search)
    console.log('issues', response)

    const dataDTO = response.data.items.map((issue: any) => {
      return {
        title: issue.title,
        id: issue.id,
        body: `${issue.body.slice(0, 60)}...`,
        created_at: issue.created_at
      }
    })
    setIssues(dataDTO)
    setTotalIssues(response.data.total_count)
  }

  function handleSearchTransactions(values: any) {
    console.log({ values })
    getIssues(values.search)
  }

  useEffect(() => {
    getProfile()
    getIssues('')
  }, [])

  return (
    <ContainerHome>
      <Content>
        <Profile>
          <div className='container-image'>
            <img src={profileData.avatar} alt="" />
          </div>

          <div className='container-profile'>
            <div className='author'>
              <strong>{profileData.name}</strong>
              <a target='_blank' href={profileData.url}>Github</a>
            </div>

            <p>{profileData.desc}</p>

            <footer>
              <span>
                <img src={githubImage} alt="github" />
                <small>{profileData.github}</small>
              </span>

              <span>
                <img src={worksImage} alt="github" />
                <small>{profileData.company || 'Não informado'}</small>
              </span>

              <span>
                <img src={userImage} alt="github" />
                <small>{profileData.followers}</small>
              </span>
            </footer>
          </div>
        </Profile>

        <Form onSubmit={handleSubmit(handleSearchTransactions)} action=''>
          <header>
            <span>Publicações</span>

            <small>{totalIssues} publicações</small>
          </header>

          <input
            type="text"
            placeholder='Buscar Conteúdo'
            {...register('search')}
          />
        </Form>

        <ContainerList>
          {
            issues.map(issue => (
              <article key={issue.id}>
                <header>
                  <h2>
                    {issue.title}
                  </h2>

                  <span>{issue.created_at}</span>
                </header>

                <p>
                  {issue.body}
                </p>
              </article>
            ))
          }
        </ContainerList>

      </Content>
    </ContainerHome>
  )
}