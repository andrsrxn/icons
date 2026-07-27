import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2LjE3MSA3Ljg1OEgxMS4zNGEuNjkuNjkgMCAwIDAtLjY3LjUyM2wtMS4wMzUgNC4xNDJhLjY5LjY5IDAgMCAxIC42Ny0uNTIzaDMuMTA1YTQuMTQyIDQuMTQyIDAgMCAwIDQuMTM2LTMuOTA5IDQuMTYzIDQuMTYzIDAgMCAwLTEuMzc1LS4yMzNaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC41MTYgMTdhLjY5LjY5IDAgMCAxLS42Ny41MjJINS4xMjdhLjY5LjY5IDAgMCAxLS42Ny0uODU3TDcuNTY1IDQuMjRhLjY5LjY5IDAgMCAxIC42Ny0uNTIzaDUuMTc2YTQuMTQyIDQuMTQyIDAgMCAxIDAgOC4yODNoLTMuMTA2YS42OS42OSAwIDAgMC0uNjY3LjUyM2wtMS4xMjEgNC40NzZabTAgMC0uNjA0IDIuNDI1YS42OS42OSAwIDAgMCAuNjY3Ljg1OGgyLjcxOGEuNjkuNjkgMCAwIDAgLjY3LS41MjNsLjc3Ni0zLjA5NmEuNjkuNjkgMCAwIDEgLjY2Ny0uNTIyaDIuNzYxYTQuMTQyIDQuMTQyIDAgMCAwIDAtOC4yODRIMTEuMzRhLjY5LjY5IDAgMCAwLS42Ny41MjNsLTEuMDM1IDQuMTQyIi8+PC9zdmc+)
 */
export const IconLogoPaypal: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-paypal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M16.171 7.858H11.34a.69.69 0 0 0-.67.523l-1.035 4.142a.69.69 0 0 1 .67-.523h3.105a4.142 4.142 0 0 0 4.136-3.909 4.163 4.163 0 0 0-1.375-.233Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.516 17a.69.69 0 0 1-.67.522H5.127a.69.69 0 0 1-.67-.857L7.565 4.24a.69.69 0 0 1 .67-.523h5.176a4.142 4.142 0 0 1 0 8.283h-3.106a.69.69 0 0 0-.667.523l-1.121 4.476Zm0 0-.604 2.425a.69.69 0 0 0 .667.858h2.718a.69.69 0 0 0 .67-.523l.776-3.096a.69.69 0 0 1 .667-.522h2.761a4.142 4.142 0 0 0 0-8.284H11.34a.69.69 0 0 0-.67.523l-1.035 4.142'
      />
    </svg>
  )
}
