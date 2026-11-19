import type { Icon } from './types'

export const IconCloudReload: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-cloud-reload'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.82 13.39 2.48 3a1 1 0 0 0 .77.37H8.7s.02-3.05 3.6-2.7c3.26.33 2.77 2.7 2.77 2.7h4.2a1 1 0 0 0 .69-.28l1.64-1.56a1 1 0 0 0 .31-.73v-3.41a1 1 0 0 0-.32-.73L19.71 8.3a1 1 0 0 0-.68-.26h-1.51a1 1 0 0 1-.94-.66l-.5-1.33a1 1 0 0 0-.43-.52l-3.2-1.85a1 1 0 0 0-.9-.06L8.93 4.75a1 1 0 0 0-.4.3L6.73 7.4a1 1 0 0 1-.45.32l-3.1 1.14a1 1 0 0 0-.61.64l-.92 2.97a1 1 0 0 0 .18.93'
        fill='currentColor'
      />
      <path
        d='M6.83 7.57a5.09 5.09 0 0 1 9.34-1.17c.52.9.7 1.83.72 2.63 0 .47-.06.7-.06.7'
        stroke='currentColor'
      />
      <path
        d='M4.87 16.36c-.44 0-1.22-.32-2-1.1a4.27 4.27 0 0 1 3.06-7.28c1.4 0 2.64.67 3.43 1.7'
        stroke='currentColor'
      />
      <path
        d='M16.92 8.44a3.6 3.6 0 0 1 3.37.12 4.3 4.3 0 0 1 1.57 5.84c-.7 1.21-1.37 2-2.36 2.12'
        stroke='currentColor'
      />
      <path
        d='M15.63 15.81c-1.23-1.62-2.45-1.93-3.43-1.93a3.6 3.6 0 1 0 2.52 6.17'
        stroke='currentColor'
      />
      <path
        d='M16.1 13.53c0 1.18 0 1.77-.3 2.17q-.12.16-.27.27c-.4.32-1 .32-2.18.32'
        stroke='currentColor'
      />
    </svg>
  )
}
