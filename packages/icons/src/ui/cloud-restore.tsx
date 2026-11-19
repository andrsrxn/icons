import type { Icon } from './types'

export const IconCloudRestore: Icon = ({
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
      data-slot='icon-ui-cloud-restore'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.82 13.39 2.48 3a1 1 0 0 0 .77.37h4.57s-.5-2.7 2.66-2.7c3.27 0 3.68 2.7 3.68 2.7h3.29a1 1 0 0 0 .69-.28l1.64-1.56a1 1 0 0 0 .31-.73v-3.41a1 1 0 0 0-.32-.73L19.71 8.3a1 1 0 0 0-.68-.26h-1.51a1 1 0 0 1-.94-.66l-.5-1.33a1 1 0 0 0-.43-.52l-3.2-1.85a1 1 0 0 0-.9-.06L8.93 4.75a1 1 0 0 0-.4.3L6.73 7.4a1 1 0 0 1-.45.32l-3.1 1.14a1 1 0 0 0-.61.64l-.92 2.97a1 1 0 0 0 .18.93'
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
        d='M9.1 15.81c1.24-1.62 2.46-1.93 3.45-1.93a3.6 3.6 0 1 1-2.53 6.17'
        stroke='currentColor'
      />
      <path
        d='M8.63 13.53c0 1.18 0 1.77.32 2.17q.1.16.26.27c.4.32 1 .32 2.18.32'
        stroke='currentColor'
      />
    </svg>
  )
}
