import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNOC45MDMgMjAuMjE5Yy0xLjAwOSAwLTEuNTEzIDAtMS45MDYtLjE3OGEyIDIgMCAwIDEtLjk5OC0uOTk4Yy0uMTc4LS4zOTMtLjE3OC0uODk3LS4xNzgtMS45MDZ2LTIuNzYyYTIgMiAwIDAgMC0xLjQyLTEuOTA0bC0uMDM4LS4wMTFhLjUuNSAwIDAgMSAwLS45NTZsLjAzNy0uMDExYTIgMiAwIDAgMCAxLjQyMS0xLjkwNVY2Ljg2M2MwLTEuMDA5IDAtMS41MTMuMTc4LTEuOTA2YTIgMiAwIDAgMSAuOTk4LS45OThjLjM5My0uMTc4Ljg5Ny0uMTc4IDEuOTA2LS4xNzhtNi4xOTQgMTYuNDM4YzEuMDA4IDAgMS41MTMgMCAxLjkwNi0uMTc4YTIgMiAwIDAgMCAuOTk4LS45OThjLjE3OC0uMzkzLjE3OC0uODk3LjE3OC0xLjkwNnYtMi43NjJhMiAyIDAgMCAxIDEuNDItMS45MDRsLjAzOC0uMDExYS41LjUgMCAwIDAgMC0uOTU2bC0uMDM3LS4wMTFhMiAyIDAgMCAxLTEuNDIxLTEuOTA1VjYuODYzYzAtMS4wMDkgMC0xLjUxMy0uMTc4LTEuOTA2YTIgMiAwIDAgMC0uOTk4LS45OThjLS4zOTMtLjE3OC0uODk4LS4xNzgtMS45MDYtLjE3OCIvPjwvc3ZnPg==)
 */
export const IconBrackets: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-brackets'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.903 20.219c-1.009 0-1.513 0-1.906-.178a2 2 0 0 1-.998-.998c-.178-.393-.178-.897-.178-1.906v-2.762a2 2 0 0 0-1.42-1.904l-.038-.011a.5.5 0 0 1 0-.956l.037-.011a2 2 0 0 0 1.421-1.905V6.863c0-1.009 0-1.513.178-1.906a2 2 0 0 1 .998-.998c.393-.178.897-.178 1.906-.178m6.194 16.438c1.008 0 1.513 0 1.906-.178a2 2 0 0 0 .998-.998c.178-.393.178-.897.178-1.906v-2.762a2 2 0 0 1 1.42-1.904l.038-.011a.5.5 0 0 0 0-.956l-.037-.011a2 2 0 0 1-1.421-1.905V6.863c0-1.009 0-1.513-.178-1.906a2 2 0 0 0-.998-.998c-.393-.178-.898-.178-1.906-.178'
      />
    </svg>
  )
}
