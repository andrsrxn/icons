import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuNTYzIDE5Ljc2NGE1LjYzIDUuNjMgMCAxIDAtNS40NDItNC4xODRjLjA2Mi4yMzQuMDcyLjQ4LjAwNi43MTRsLS40NCAxLjU1NmExLjIgMS4yIDAgMCAwIDEuMzEgMS41MTZsMS41Ni0uMjAzYy4yNDctLjAzMi40OTUuMDE3LjcyMi4xMThhNS42MSA1LjYxIDAgMCAwIDIuMjg0LjQ4M1oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC44MDggOS4xMzZjMC0yLjU4MiAyLjUyLTUuMTgxIDUuNjI5LTUuMTgxYTUuNjMgNS42MyAwIDAgMSA1LjUyNiA2LjcwN2MtLjA3LjM2My0uMTA2LjU0NS0uMTA3LjY1NiAwIC4xMTYuMDA2LjE2OC4wMzIuMjgxLjAyNS4xMDguMDc4LjIzLjE4NS40NzIuNDkgMS4xMTguNzM2IDEuNjc3LjYzMiAyLjA4YTEuMiAxLjIgMCAwIDEtLjYyNS43NzJjLS4zNzIuMTg2LS45Ny4wNjMtMi4xNjYtLjE4NGwtLjE0NC0uMDNjLS4yNjItLjA1My0uMzkzLS4wOC0uNTA3LS4wODJhLjk3Ny45NzcgMCAwIDAtLjIyLjAxN2MtLjExMS4wMTktLjI4Ni4wODQtLjYzNi4yMTVhNS42MTcgNS42MTcgMCAwIDEtMS45Ny4zNTRtLjc1NS0xLjA3OWE1LjYzIDUuNjMgMCAwIDEtNy41OTkgNS4yNzVjLS4zNS0uMTMtLjUyNS0uMTk2LS42MzctLjIxNWEuOTcxLjk3MSAwIDAgMC0uMjItLjAxN2MtLjExMy4wMDItLjI0NC4wMjktLjUwNi4wODNsLS4xNDQuMDNjLTEuMTk2LjI0Ni0xLjc5NC4zNy0yLjE2Ni4xODRhMS4yIDEuMiAwIDAgMS0uNjI1LS43NzNjLS4xMDQtLjQwMi4xNDEtLjk2Mi42MzItMi4wOC4xMDctLjI0Mi4xNi0uMzYzLjE4NS0uNDcyYS45ODMuOTgzIDAgMCAwIC4wMzEtLjI4YzAtLjExMi0uMDM2LS4yOTMtLjEwNi0uNjU2YTUuNjMgNS42MyAwIDEgMSAxMS4xNTUtMS4wNzhaIi8+PC9zdmc+)
 */
export const IconChats: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-chats'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.563 19.764a5.63 5.63 0 1 0-5.442-4.184c.062.234.072.48.006.714l-.44 1.556a1.2 1.2 0 0 0 1.31 1.516l1.56-.203c.247-.032.495.017.722.118a5.61 5.61 0 0 0 2.284.483Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M8.808 9.136c0-2.582 2.52-5.181 5.629-5.181a5.63 5.63 0 0 1 5.526 6.707c-.07.363-.106.545-.107.656 0 .116.006.168.032.281.025.108.078.23.185.472.49 1.118.736 1.677.632 2.08a1.2 1.2 0 0 1-.625.772c-.372.186-.97.063-2.166-.184l-.144-.03c-.262-.053-.393-.08-.507-.082a.977.977 0 0 0-.22.017c-.111.019-.286.084-.636.215a5.617 5.617 0 0 1-1.97.354m.755-1.079a5.63 5.63 0 0 1-7.599 5.275c-.35-.13-.525-.196-.637-.215a.971.971 0 0 0-.22-.017c-.113.002-.244.029-.506.083l-.144.03c-1.196.246-1.794.37-2.166.184a1.2 1.2 0 0 1-.625-.773c-.104-.402.141-.962.632-2.08.107-.242.16-.363.185-.472a.983.983 0 0 0 .031-.28c0-.112-.036-.293-.106-.656a5.63 5.63 0 1 1 11.155-1.078Z'
      />
    </svg>
  )
}
