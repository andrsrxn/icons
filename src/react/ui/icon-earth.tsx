import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOTEzIDMuNTZjMS4yIDAgMi4zNC4yNiAzLjM3LjcyOWwuNTU0IDQuODIyLTMuNiAxLjUzM0w5LjY5IDEzLjE5IDcuNDU5IDEwbC4yNTMtNS4yNzNhOC4xMiA4LjEyIDAgMCAxIDQuMjAxLTEuMTY2Wk05Ljk1MSAyMC4yMDJjLjI2NC4wNjUuNTM0LjExOC44MDcuMTU3bDUuMDc5LTMuNzh2LTIuOTY3bC02LjE0Ny0uNDJMMTEuNTEgMTZsLTEuNTYgNC4yMDFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy44NiA0Ljg4NmMtLjA0IDEuNTc1LS44MiA0LjcyLjE5IDYuMjQ4LjQ3NC43MTYgMS4yOTkgMS40OCAyLjAxMiAyLjMwMW0wIDBjLjAwNy4wMDgtLjAwNy0uMDA4IDAgMFptMCAwYy42NDkuNzUyIDEuMjIyIDEuNTc2IDEuMzIzIDIuNDMyLjI0IDIuMDItMi4yODIgNC4yMTYtMS4yNTMgNC40OTIgMS44NDcuNDk1IDIuODUtMS4zNTkgNC40NjQtMi45ODcgMS4xNTQtMS4xNjQgMS45NzUtMi4xMzUuOTEtMy43NC0xLjMwMy0xLjk2Ni01LjEzNy4xNDEtNS40NDQtLjE5N1ptMCAwYy0uNjQ2LS43ODQuNzEzLTIuODc4IDMuNjAyLTMuMzYxIDIuMDgtLjM0OCAyLjQyLTIuOTA2IDIuMDA0LTQuMTc1LS40MTgtMS4yNy0uODg4LTEuNjctLjk2Ni0xLjc4M201Ljg3OCA4LjA0NGE4LjQ0IDguNDQgMCAxIDEtMTYuODc5IDAgOC40NCA4LjQ0IDAgMCAxIDE2Ljg3OSAwWiIvPjwvc3ZnPg==)
 */
export const IconEarth: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-earth'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11.913 3.56c1.2 0 2.34.26 3.37.729l.554 4.822-3.6 1.533L9.69 13.19 7.459 10l.253-5.273a8.12 8.12 0 0 1 4.201-1.166ZM9.951 20.202c.264.065.534.118.807.157l5.079-3.78v-2.967l-6.147-.42L11.51 16l-1.56 4.201Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M7.86 4.886c-.04 1.575-.82 4.72.19 6.248.474.716 1.299 1.48 2.012 2.301m0 0c.007.008-.007-.008 0 0Zm0 0c.649.752 1.222 1.576 1.323 2.432.24 2.02-2.282 4.216-1.253 4.492 1.847.495 2.85-1.359 4.464-2.987 1.154-1.164 1.975-2.135.91-3.74-1.303-1.966-5.137.141-5.444-.197Zm0 0c-.646-.784.713-2.878 3.602-3.361 2.08-.348 2.42-2.906 2.004-4.175-.418-1.27-.888-1.67-.966-1.783m5.878 8.044a8.44 8.44 0 1 1-16.879 0 8.44 8.44 0 0 1 16.879 0Z'
      />
    </svg>
  )
}
