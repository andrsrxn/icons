import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTUuNzEgOS4xNDVhMi42OCAyLjY4IDAgMSAwIDAgNS4zNiAyLjY4IDIuNjggMCAwIDAgMC01LjM2Wm0wIDBoLTIuNjhtMi42OCAwYTIuNjggMi42OCAwIDEgMCAwLTUuMzZoLTIuNjhtMCA1LjM2SDkuNjhtMy4zNSAwdi01LjM2bTAgNS4zNnY1LjM2bTAtMTAuNzJIOS42OGEyLjY4IDIuNjggMCAxIDAgMCA1LjM2bTAgMGEyLjY4IDIuNjggMCAxIDAgMCA1LjM2aDMuMzVtMCAwaC0zLjAxNWEzLjAxNSAzLjAxNSAwIDEgMCAzLjAxNSAzLjAxNXYtMy4wMTVaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTUuNzEgMTQuNTA1YTIuNjggMi42OCAwIDEgMCAwLTUuMzYgMi42OCAyLjY4IDAgMCAwIDAgNS4zNlptLTIuNjgtMTAuNzJIOS42OGEyLjY4IDIuNjggMCAxIDAgMCA1LjM2aDMuMzV2LTUuMzZabTAgMTAuNzJoLTMuMDE1YTMuMDE1IDMuMDE1IDAgMSAwIDMuMDE1IDMuMDE1di0zLjAxNVoiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+)
 */
export const IconLogoFigma: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-figma'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.71 9.145a2.68 2.68 0 1 0 0 5.36 2.68 2.68 0 0 0 0-5.36Zm0 0h-2.68m2.68 0a2.68 2.68 0 1 0 0-5.36h-2.68m0 5.36H9.68m3.35 0v-5.36m0 5.36v5.36m0-10.72H9.68a2.68 2.68 0 1 0 0 5.36m0 0a2.68 2.68 0 1 0 0 5.36h3.35m0 0h-3.015a3.015 3.015 0 1 0 3.015 3.015v-3.015Z'
      />
      <path
        fill='currentColor'
        d='M15.71 14.505a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36Zm-2.68-10.72H9.68a2.68 2.68 0 1 0 0 5.36h3.35v-5.36Zm0 10.72h-3.015a3.015 3.015 0 1 0 3.015 3.015v-3.015Z'
        opacity='.2'
      />
    </svg>
  )
}
