import type { Icon } from './types'

export const IconTextHeading1: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='text-heading-1'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.255 3.75a.75.75 0 1 0-1.5 0h1.5Zm-1.5 14.75a.75.75 0 0 0 1.5 0h-1.5Zm8.99 0a.75.75 0 0 0 1.5 0h-1.5Zm1.5-14.75a.75.75 0 0 0-1.5 0h1.5Zm4.46 16.614a.75.75 0 0 0 1.5 0h-1.5Zm.75-6.63h.75a.75.75 0 0 0-1.264-.546l.515.546Zm-3.346 2.123a.75.75 0 1 0 1.028 1.092l-.514-.546-.514-.546ZM3.119 3.001a.75.75 0 1 0 0 1.5V3Zm2.712 1.5a.75.75 0 1 0 0-1.5v1.5ZM12.097 3a.75.75 0 0 0 0 1.5V3Zm2.711 1.5a.75.75 0 1 0 0-1.5v1.5ZM3.12 17.78a.75.75 0 0 0 0 1.5v-1.5Zm2.712 1.5a.75.75 0 0 0 0-1.5v1.5Zm6.266-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2.711 1.5a.75.75 0 1 0 0-1.5v1.5ZM4.505 3.75h-.75v7.374h1.5V3.751h-.75Zm0 7.374h-.75V18.5h1.5v-7.375h-.75Zm0 0v.75h8.99v-1.5h-8.99v.75Zm8.99 0h-.75V18.5h1.5v-7.375h-.75Zm0 0h.75V3.751h-1.5v7.374h.75Zm5.96 9.24h.75v-6.631h-1.5v6.63h.75Zm-2.832-3.962.514.546 2.833-2.67-.514-.545-.515-.546-2.832 2.67.514.545ZM3.12 3.751v.75h2.712V3H3.119v.75Zm8.978 0v.75h2.711V3h-2.711v.75ZM3.119 18.53v.75h2.712v-1.5H3.119v.75Zm8.978 0v.75h2.711v-1.5h-2.711v.75Z'
      />
    </svg>
  )
}
