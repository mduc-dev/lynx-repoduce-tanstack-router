import 'url-search-params-polyfill'

import { root } from '@lynx-js/react'
import '@lynx-js/react/debug'
import { App } from 'App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false
    },
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      structuralSharing: false
    }
  }
})

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
