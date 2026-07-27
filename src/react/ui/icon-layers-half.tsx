import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTYuNTQgMTEuNzI5Yy0xLjgzLS44LTIuNzQ2LTEuMTk5LTIuNzQxLTEuODU4LjAwNC0uNjYuOTI1LTEuMDQ3IDIuNzY3LTEuODJsNC42Ni0xLjk1NWMuMzgyLS4xNi41NzMtLjI0Ljc3NC0uMjQuMjAxIDAgLjM5Mi4wOC43NzQuMjRsNC42NiAxLjk1NWMxLjg0Mi43NzMgMi43NjMgMS4xNiAyLjc2NyAxLjgyLjAwNS42Ni0uOTEgMS4wNTktMi43NDEgMS44NThsLTQuNjYgMi4wMzNjLS4zOTQuMTcyLS41OTEuMjU4LS44LjI1OC0uMjA5IDAtLjQwNi0uMDg2LS44LS4yNThMNi41NCAxMS43M1oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMTYuOTI1IDExLjk2Mi00LjE0NiAxLjgxYy0uMzg0LjE2Ny0uNTc2LjI1LS43NzkuMjUtLjIwMyAwLS4zOTUtLjA4My0uNzgtLjI1bC00LjE0NS0xLjgxLS42NDUtLjI4MWMtMS43ODQtLjc3OS0yLjY3NS0xLjE2OC0yLjY3LTEuODEuMDA0LS42NDMuOS0xLjAyIDIuNjk1LTEuNzczbDQuNzkxLTIuMDFjLjM3Mi0uMTU3LjU1OC0uMjM1Ljc1NC0uMjM1LjE5NiAwIC4zODIuMDc4Ljc1NC4yMzVsNC43OSAyLjAxYzEuNzk1Ljc1MyAyLjY5MiAxLjEzIDIuNjk3IDEuNzcyLjAwNC42NDMtLjg4NyAxLjAzMi0yLjY3MSAxLjgxbC0uNjQ1LjI4MlptLTkuODUgMC0uNjIuMjZjLTEuNzk0Ljc1My0yLjY5MSAxLjEzLTIuNjk2IDEuNzcyLS4wMDQuNjQzLjg4NyAxLjAzMiAyLjY3MSAxLjgxbC42NDUuMjgyIDQuMTQ2IDEuODFjLjM4NC4xNjcuNTc2LjI1Ljc3OS4yNS4yMDMgMCAuMzk1LS4wODMuNzgtLjI1bDQuMTQ1LTEuODEuNjQ1LS4yODFjMS43ODQtLjc3OSAyLjY3NS0xLjE2OCAyLjY3LTEuODEtLjAwNC0uNjQzLS45LTEuMDItMi42OTUtMS43NzNsLS42Mi0uMjYiLz48L3N2Zz4=)
 */
export const IconLayersHalf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-layers-half'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.54 11.729c-1.83-.8-2.746-1.199-2.741-1.858.004-.66.925-1.047 2.767-1.82l4.66-1.955c.382-.16.573-.24.774-.24.201 0 .392.08.774.24l4.66 1.955c1.842.773 2.763 1.16 2.767 1.82.005.66-.91 1.059-2.741 1.858l-4.66 2.033c-.394.172-.591.258-.8.258-.209 0-.406-.086-.8-.258L6.54 11.73Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m16.925 11.962-4.146 1.81c-.384.167-.576.25-.779.25-.203 0-.395-.083-.78-.25l-4.145-1.81-.645-.281c-1.784-.779-2.675-1.168-2.67-1.81.004-.643.9-1.02 2.695-1.773l4.791-2.01c.372-.157.558-.235.754-.235.196 0 .382.078.754.235l4.79 2.01c1.795.753 2.692 1.13 2.697 1.772.004.643-.887 1.032-2.671 1.81l-.645.282Zm-9.85 0-.62.26c-1.794.753-2.691 1.13-2.696 1.772-.004.643.887 1.032 2.671 1.81l.645.282 4.146 1.81c.384.167.576.25.779.25.203 0 .395-.083.78-.25l4.145-1.81.645-.281c1.784-.779 2.675-1.168 2.67-1.81-.004-.643-.9-1.02-2.695-1.773l-.62-.26'
      />
    </svg>
  )
}
