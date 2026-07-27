import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNzM3IDUuNjlhMS45NzUgMS45NzUgMCAxIDEgMy45NSAwdjIuOTk0YTEuOTc1IDEuOTc1IDAgMCAxLTMuOTUgMFY1LjY5Wm0xMi41NzUgMGExLjk3NSAxLjk3NSAwIDEgMSAzLjk1IDB2Mi45OTRhMS45NzUgMS45NzUgMCAxIDEtMy45NSAwVjUuNjlabS02LjI4NyA5LjYwNGExLjk3NSAxLjk3NSAwIDAgMSAzLjk1IDB2Mi45OTRhMS45NzUgMS45NzUgMCAxIDEtMy45NSAwdi0yLjk5NFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMi42NTggMTAuMzk2VjMuNzE0bC0yLjYzMyAyLjYzNE02LjM3IDIwdi02LjY4bC0yLjYzNCAyLjYzM00xOS40NDcgMjB2LTYuNjhsLTIuNjMzIDIuNjMzTTUuNzEyIDEwLjY2YTEuOTc1IDEuOTc1IDAgMCAxLTEuOTc1LTEuOTc1VjUuNjlhMS45NzUgMS45NzUgMCAxIDEgMy45NSAwdjIuOTk0YzAgMS4wOS0uODg0IDEuOTc1LTEuOTc1IDEuOTc1Wm0xMi41NzYgMGExLjk3NSAxLjk3NSAwIDAgMS0xLjk3Ni0xLjk3NVY1LjY5YTEuOTc1IDEuOTc1IDAgMSAxIDMuOTUgMHYyLjk5NGMwIDEuMDktLjg4NCAxLjk3NS0xLjk3NCAxLjk3NVpNMTIgMjAuMjYzYTEuOTc1IDEuOTc1IDAgMCAxLTEuOTc1LTEuOTc1di0yLjk5NGExLjk3NSAxLjk3NSAwIDAgMSAzLjk1IDB2Mi45OTRjMCAxLjA5LS44ODQgMS45NzUtMS45NzUgMS45NzVaIi8+PC9zdmc+)
 */
export const IconBinary: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-binary'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.737 5.69a1.975 1.975 0 1 1 3.95 0v2.994a1.975 1.975 0 0 1-3.95 0V5.69Zm12.575 0a1.975 1.975 0 1 1 3.95 0v2.994a1.975 1.975 0 1 1-3.95 0V5.69Zm-6.287 9.604a1.975 1.975 0 0 1 3.95 0v2.994a1.975 1.975 0 1 1-3.95 0v-2.994Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.658 10.396V3.714l-2.633 2.634M6.37 20v-6.68l-2.634 2.633M19.447 20v-6.68l-2.633 2.633M5.712 10.66a1.975 1.975 0 0 1-1.975-1.975V5.69a1.975 1.975 0 1 1 3.95 0v2.994c0 1.09-.884 1.975-1.975 1.975Zm12.576 0a1.975 1.975 0 0 1-1.976-1.975V5.69a1.975 1.975 0 1 1 3.95 0v2.994c0 1.09-.884 1.975-1.974 1.975ZM12 20.263a1.975 1.975 0 0 1-1.975-1.975v-2.994a1.975 1.975 0 0 1 3.95 0v2.994c0 1.09-.884 1.975-1.975 1.975Z'
      />
    </svg>
  )
}
