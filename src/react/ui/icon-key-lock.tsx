import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjAuMjc2YTguMjc2IDguMjc2IDAgMSAwIDAtMTYuNTUyIDguMjc2IDguMjc2IDAgMCAwIDAgMTYuNTUyWm0tMS4xNS03Ljc0LS42NzUgMi4xMTUtLjEyNC4zODZjLS4yNzUuODQ0LS40MjUgMS4zMDQtLjE4MyAxLjYzNC4yNzUuMzc2Ljg1LjM3NiAxLjk5OS4zNzZoLjMzMWMxLjE0NCAwIDEuNzE2IDAgMS45OTItLjM3NC4yMi0uMy4wODMtLjcxLS4xNTUtMS40MmEyNS4xNiAyNS4xNiAwIDAgMS0uMTk0LS41OTNsLS42ODctMi4xMjJjLS4xNS0uNDY0LjEwNi0uOTU0LjQ3Mi0xLjI3N2EyLjQ2IDIuNDYgMCAxIDAtMy4yNS4wMDJjLjM2Ni4zMjEuNjIyLjgxLjQ3NCAxLjI3M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMC4yNzYgMTJhOC4yNzYgOC4yNzYgMCAxIDEtMTYuNTUyIDAgOC4yNzYgOC4yNzYgMCAwIDEgMTYuNTUyIDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTAuMzIgMTEuMjEyYy4zODcuMzYyLjY2OC44OTIuNTA4IDEuMzk2bC0uNjUzIDIuMDQzYy0uMzQ4IDEuMDk1LS41ODMgMS42NDMtLjMwNyAyLjAyLjI3NS4zNzYuODUuMzc2IDEuOTk5LjM3NmguMzMxYzEuMTQ0IDAgMS43MTYgMCAxLjk5Mi0uMzc0LjI3Ni0uMzc1LS4wMDgtLjkyMS0uMzQ5LTIuMDEzbC0uNjY0LTIuMDVjLS4xNjMtLjUwNS4xMTgtMS4wMzcuNTA1LTEuNGEyLjQ2MSAyLjQ2MSAwIDEgMC0zLjM2Mi4wMDNaIi8+PC9zdmc+)
 */
export const IconKeyLock: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-key-lock'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.276a8.276 8.276 0 1 0 0-16.552 8.276 8.276 0 0 0 0 16.552Zm-1.15-7.74-.675 2.115-.124.386c-.275.844-.425 1.304-.183 1.634.275.376.85.376 1.999.376h.331c1.144 0 1.716 0 1.992-.374.22-.3.083-.71-.155-1.42a25.16 25.16 0 0 1-.194-.593l-.687-2.122c-.15-.464.106-.954.472-1.277a2.46 2.46 0 1 0-3.25.002c.366.321.622.81.474 1.273Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.276 12a8.276 8.276 0 1 1-16.552 0 8.276 8.276 0 0 1 16.552 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M10.32 11.212c.387.362.668.892.508 1.396l-.653 2.043c-.348 1.095-.583 1.643-.307 2.02.275.376.85.376 1.999.376h.331c1.144 0 1.716 0 1.992-.374.276-.375-.008-.921-.349-2.013l-.664-2.05c-.163-.505.118-1.037.505-1.4a2.461 2.461 0 1 0-3.362.003Z'
      />
    </svg>
  )
}
