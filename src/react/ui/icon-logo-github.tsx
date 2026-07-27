import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMS4xNiAyMC41di0zLjRhMi43MiAyLjcyIDAgMCAxIDUuNDQgMHYzLjRoLTUuNDRaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuNTA2IDUuNTRBNC40MiA0LjQyIDAgMCAwIDguNzggMy41YTQuNDEzIDQuNDEzIDAgMCAwLS4yOTcgMy44IDQuMTg5IDQuMTg5IDAgMCAwLS43MjMgMi4zMnYuNjhhNC4wOCA0LjA4IDAgMCAwIDQuMDggNC4wOGg0LjA4QTQuMDggNC4wOCAwIDAgMCAyMCAxMC4zdi0uNjhhNC4xODkgNC4xODkgMCAwIDAtLjcyMy0yLjMyIDQuNDE0IDQuNDE0IDAgMCAwLS4yOTctMy44IDQuNDIgNC40MiAwIDAgMC0zLjcyNiAyLjA0aC0yLjc0OFoiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS4xNiAyMC41di0zLjRhMi43MiAyLjcyIDAgMCAxIDUuNDQgMHYzLjRtLTUuNDQtMi4wNEg4LjQ0YTIuNzIgMi43MiAwIDAgMS0yLjcyLTIuNzJBMi43MiAyLjcyIDAgMCAwIDMgMTMuMDJtOS41MDYtNy40OEE0LjQyIDQuNDIgMCAwIDAgOC43OCAzLjVhNC40MTMgNC40MTMgMCAwIDAtLjI5NyAzLjggNC4xODkgNC4xODkgMCAwIDAtLjcyMyAyLjMydi42OGE0LjA4IDQuMDggMCAwIDAgNC4wOCA0LjA4aDQuMDhBNC4wOCA0LjA4IDAgMCAwIDIwIDEwLjN2LS42OGE0LjE4OSA0LjE4OSAwIDAgMC0uNzIzLTIuMzIgNC40MTQgNC40MTQgMCAwIDAtLjI5Ny0zLjggNC40MiA0LjQyIDAgMCAwLTMuNzI2IDIuMDRoLTIuNzQ4WiIvPjwvc3ZnPg==)
 */
export const IconLogoGithub: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-github'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path fill='currentColor' d='M11.16 20.5v-3.4a2.72 2.72 0 0 1 5.44 0v3.4h-5.44Z' />
        <path
          fill='currentColor'
          d='M12.506 5.54A4.42 4.42 0 0 0 8.78 3.5a4.413 4.413 0 0 0-.297 3.8 4.189 4.189 0 0 0-.723 2.32v.68a4.08 4.08 0 0 0 4.08 4.08h4.08A4.08 4.08 0 0 0 20 10.3v-.68a4.189 4.189 0 0 0-.723-2.32 4.414 4.414 0 0 0-.297-3.8 4.42 4.42 0 0 0-3.726 2.04h-2.748Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.16 20.5v-3.4a2.72 2.72 0 0 1 5.44 0v3.4m-5.44-2.04H8.44a2.72 2.72 0 0 1-2.72-2.72A2.72 2.72 0 0 0 3 13.02m9.506-7.48A4.42 4.42 0 0 0 8.78 3.5a4.413 4.413 0 0 0-.297 3.8 4.189 4.189 0 0 0-.723 2.32v.68a4.08 4.08 0 0 0 4.08 4.08h4.08A4.08 4.08 0 0 0 20 10.3v-.68a4.189 4.189 0 0 0-.723-2.32 4.414 4.414 0 0 0-.297-3.8 4.42 4.42 0 0 0-3.726 2.04h-2.748Z'
      />
    </svg>
  )
}
