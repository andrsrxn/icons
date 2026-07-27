import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE3LjU4NSAxMS4zNTFhNS41ODMgNS41ODMgMCAxIDEtMTEuMTY2IDAgNS41ODMgNS41ODMgMCAwIDEgMTEuMTY2IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTAuMTcyIDE2LjQ5MmgzLjY2YTUuNTc2IDUuNTc2IDAgMSAwLTMuNjYgMFptMy42NiAwIC4zMzgtLjEzdjEuNjZjMCAuMTQzIDAgLjIxNi0uMDA0LjI3N2EyLjAxNSAyLjAxNSAwIDAgMS0xLjg5IDEuODg5Yy0uMDYuMDAzLS4xMzIuMDAzLS4yNzYuMDAzLS4xNDUgMC0uMjE3IDAtLjI3OC0uMDAzYTIuMDE1IDIuMDE1IDAgMCAxLTEuODg5LTEuODljLS4wMDQtLjA2LS4wMDQtLjEzMy0uMDA0LS4yNzdWMTYuMzZsLjM0My4xMzJNNC40MyAxMS4zNGgtLjk2bTE3LjE3IDBoLS45Nm0tNy42NzgtOC42OTV2Ljk2TTQuODM2IDQuODQ5bC42NzkuNjc5bTEyLjg2LjA3NS42NzktLjY3OCIvPjwvc3ZnPg==)
 */
export const IconLightbulb: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-lightbulb'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M17.585 11.351a5.583 5.583 0 1 1-11.166 0 5.583 5.583 0 0 1 11.166 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.172 16.492h3.66a5.576 5.576 0 1 0-3.66 0Zm3.66 0 .338-.13v1.66c0 .143 0 .216-.004.277a2.015 2.015 0 0 1-1.89 1.889c-.06.003-.132.003-.276.003-.145 0-.217 0-.278-.003a2.015 2.015 0 0 1-1.889-1.89c-.004-.06-.004-.133-.004-.277V16.36l.343.132M4.43 11.34h-.96m17.17 0h-.96m-7.678-8.695v.96M4.836 4.849l.679.679m12.86.075.679-.678'
      />
    </svg>
  )
}
