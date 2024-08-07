import { api } from './api-client'

interface GetOrganizationResponse {
  organization: {
    id: string
    name: string
    slug: string
    avatarUrl: string | null
    domain: string | null
    shouldAttachUsersByDomain: boolean
    ownerId: string
    createdAt: string
    updatedAt: string
  }
}

export async function getOrganization(org: string) {
  const result = await api
    .get(`organizations/${org}`)
    .json<GetOrganizationResponse>()

  return result
}
