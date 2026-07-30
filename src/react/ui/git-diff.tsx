import type { Icon } from './types'

export const IconGitDiff: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='git-diff'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM3.974 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V9.621c0-1.248 0-1.872-.269-2.336a2 2 0 0 0-.73-.73c-.464-.269-2.402-.269-3.65-.269M6.474 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v5.379c0 1.248 0 1.872.268 2.336a2 2 0 0 0 .73.73c.465.269 2.403.269 3.651.269m3.394-9.142-.163-.162c-1.002-1-1.503-1.5-1.503-2.122 0-.622.5-1.122 1.5-2.123L14.518 4m-5.06 11.428.163.162c1.002 1 1.503 1.5 1.503 2.122 0 .622-.5 1.122-1.501 2.123L9.457 20'
      />
    </svg>
  )
}
