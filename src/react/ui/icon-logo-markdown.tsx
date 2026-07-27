import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE5Ljc1NyA2LjQ2OEg0LjI0M2EuNjA2LjYwNiAwIDAgMC0uNTk3LjYxNHY5LjgzNmMwIC4zMzkuMjY3LjYxNC41OTcuNjE0aDE1LjUxNGMuMzMgMCAuNTk3LS4yNzUuNTk3LS42MTRWNy4wODJhLjYwNi42MDYgMCAwIDAtLjU5Ny0uNjE0WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTYuNjMgMTMuODQ0di0zLjY4OGwyLjM4NiAyLjQ1OSAyLjM4Ny0yLjQ2djMuNjltNC4xNzctMy42OXYzLjY5TTEzLjc5IDEybDEuNzkgMS44NDRMMTcuMzcgMTJNNC4yNDMgNi40NjhoMTUuNTE0Yy4zMyAwIC41OTcuMjc1LjU5Ny42MTR2OS44MzZhLjYwNi42MDYgMCAwIDEtLjU5Ny42MTRINC4yNDNhLjYwNi42MDYgMCAwIDEtLjU5Ny0uNjE0VjcuMDgyYzAtLjM0LjI2Ny0uNjE0LjU5Ny0uNjE0WiIvPjwvc3ZnPg==)
 */
export const IconLogoMarkdown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-markdown'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.757 6.468H4.243a.606.606 0 0 0-.597.614v9.836c0 .339.267.614.597.614h15.514c.33 0 .597-.275.597-.614V7.082a.606.606 0 0 0-.597-.614Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.63 13.844v-3.688l2.386 2.459 2.387-2.46v3.69m4.177-3.69v3.69M13.79 12l1.79 1.844L17.37 12M4.243 6.468h15.514c.33 0 .597.275.597.614v9.836a.606.606 0 0 1-.597.614H4.243a.606.606 0 0 1-.597-.614V7.082c0-.34.267-.614.597-.614Z'
      />
    </svg>
  )
}
