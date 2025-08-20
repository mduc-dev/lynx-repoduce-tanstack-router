import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <view>
      <view style={{ height: '10vh', backgroundColor: 'red' }} />
      <Outlet />
    </view>
  )
}
