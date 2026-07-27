import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjk5NyA3LjUxNmMwLTEuODg2IDAtMi44MjkuMTMzLTMuNDE0LjEzMi0uNTg2LjM0NS0uNTg2Ljc3LS41ODZoMS45MTZjLjQyNSAwIC42MzggMCAuNzcuNTg2LjEzMy41ODUuMTMzIDEuNTI4LjEzMyAzLjQxNFYxNmMwIDEuODg2IDAgMi44MjgtLjEzMyAzLjQxNC0uMTMyLjU4Ni0uMzQ1LjU4Ni0uNzcuNTg2SDE0LjljLS40MjUgMC0uNjM4IDAtLjc3LS41ODYtLjEzMy0uNTg2LS4xMzMtMS41MjgtLjEzMy0zLjQxNFY3LjUxNloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNy43MTkgMy42ODJ2MTYuNjM2TTEzLjkxNSAzLjY4MnYxNi42MzZtNS44ODMtMTYuNjM2SDkuNDAxYy0yLjg3MiAwLTUuMiAyLjA5NS01LjIgNC42NzlzMi4zMSA0LjY3OSA1LjIgNC42NzloNC41MTRtLTEuODU4IDcuMjc4aDcuNzQxIi8+PC9zdmc+)
 */
export const IconPilcrow: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-pilcrow'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.997 7.516c0-1.886 0-2.829.133-3.414.132-.586.345-.586.77-.586h1.916c.425 0 .638 0 .77.586.133.585.133 1.528.133 3.414V16c0 1.886 0 2.828-.133 3.414-.132.586-.345.586-.77.586H14.9c-.425 0-.638 0-.77-.586-.133-.586-.133-1.528-.133-3.414V7.516Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.719 3.682v16.636M13.915 3.682v16.636m5.883-16.636H9.401c-2.872 0-5.2 2.095-5.2 4.679s2.31 4.679 5.2 4.679h4.514m-1.858 7.278h7.741'
      />
    </svg>
  )
}
