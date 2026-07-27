import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjggNi4yMTJjMCAuMTMxLS4wMS4yNi0uMDI4LjM4Ni0uMDU0LjM3NC4yLjc3OC41NzguNzc4IDEuNTIzIDAgMi4yODUgMCAyLjc1OC40NzMuNDczLjQ3My40NzMgMS4yMzUuNDczIDIuNzU4IDAgLjQ5LS41MjIuODI1LTEuMDEuODA5YTIuNjggMi42OCAwIDEgMCAuNTA4IDUuMjljLjI0Mi0uMDU2LjUwMi4xMTIuNTAyLjM2MSAwIDEuNTIzIDAgMi4yODUtLjQ3MyAyLjc1OC0uNDczLjQ3My0xLjIzNS40NzMtMi43NTguNDczSDguNzdjLTEuNTIzIDAtMi4yODUgMC0yLjc1OC0uNDczLS40NzMtLjQ3My0uNDczLTEuMjM1LS40NzMtMi43NTh2LTYuNDZjMC0xLjUyMyAwLTIuMjg1LjQ3My0yLjc1OC40NzMtLjQ3MyAxLjIzNS0uNDczIDIuNzU4LS40NzMuMzc4IDAgLjYzMi0uNDA0LjU3OC0uNzc4YTIuNjggMi42OCAwIDEgMSA1LjMzLS4zODdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTQuNjggNi4yMTJjMCAuMTMxLS4wMS4yNi0uMDI4LjM4Ni0uMDU0LjM3NC4yLjc3OC41NzguNzc4IDEuNTIzIDAgMi4yODUgMCAyLjc1OC40NzMuNDczLjQ3My40NzMgMS4yMzUuNDczIDIuNzU4IDAgLjQ5LS41MjIuODI1LTEuMDEuODA5YTIuNjggMi42OCAwIDEgMCAuNTA4IDUuMjljLjI0Mi0uMDU2LjUwMi4xMTIuNTAyLjM2MSAwIDEuNTIzIDAgMi4yODUtLjQ3MyAyLjc1OC0uNDczLjQ3My0xLjIzNS40NzMtMi43NTguNDczSDguNzdjLTEuNTIzIDAtMi4yODUgMC0yLjc1OC0uNDczLS40NzMtLjQ3My0uNDczLTEuMjM1LS40NzMtMi43NTh2LTYuNDZjMC0xLjUyMyAwLTIuMjg1LjQ3My0yLjc1OC40NzMtLjQ3MyAxLjIzNS0uNDczIDIuNzU4LS40NzMuMzc4IDAgLjYzMi0uNDA0LjU3OC0uNzc4YTIuNjggMi42OCAwIDEgMSA1LjMzLS4zODdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
 */
export const IconPuzzle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-puzzle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M14.68 6.212c0 .131-.01.26-.028.386-.054.374.2.778.578.778 1.523 0 2.285 0 2.758.473.473.473.473 1.235.473 2.758 0 .49-.522.825-1.01.809a2.68 2.68 0 1 0 .508 5.29c.242-.056.502.112.502.361 0 1.523 0 2.285-.473 2.758-.473.473-1.235.473-2.758.473H8.77c-1.523 0-2.285 0-2.758-.473-.473-.473-.473-1.235-.473-2.758v-6.46c0-1.523 0-2.285.473-2.758.473-.473 1.235-.473 2.758-.473.378 0 .632-.404.578-.778a2.68 2.68 0 1 1 5.33-.387Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.68 6.212c0 .131-.01.26-.028.386-.054.374.2.778.578.778 1.523 0 2.285 0 2.758.473.473.473.473 1.235.473 2.758 0 .49-.522.825-1.01.809a2.68 2.68 0 1 0 .508 5.29c.242-.056.502.112.502.361 0 1.523 0 2.285-.473 2.758-.473.473-1.235.473-2.758.473H8.77c-1.523 0-2.285 0-2.758-.473-.473-.473-.473-1.235-.473-2.758v-6.46c0-1.523 0-2.285.473-2.758.473-.473 1.235-.473 2.758-.473.378 0 .632-.404.578-.778a2.68 2.68 0 1 1 5.33-.387Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
