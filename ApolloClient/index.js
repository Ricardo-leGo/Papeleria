import { useMemo }                      from 'react'
import { ApolloClient, InMemoryCache }  from '@apollo/client'
import { SchemaLink }                   from '@apollo/client/link/schema'
import backendSchema                    from '../backend/graphql/schema'
import { HttpLink }                     from '@apollo/client/link/http'
let apolloClient = null;

ç
const auth = setContext((operation, context) => {
  const token = localStorage.getItem('TokenUser');

  if (token === null) {
    return {};
  } else {
    return {
      headers: {
        authorization: `Bearer ${token}`
      }
    };
  }
});

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    const { schema } = backendSchema
    return new SchemaLink({ schema })
  } else {
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    })
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}