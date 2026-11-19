import type { Icon } from './types'

export const IconCloudRefresh: Icon = ({
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
      data-slot='icon-ui-cloud-refresh'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.48 12.97 3.12 3.79h3.61s.85-3.62 3.86-3.4c3.18.23 3.52 3.4 3.52 3.4h4.08l2.24-2.14v-4.28l-2.48-2.3h-2.61l-.86-2.33L12 3.43 8.7 4.85 6.53 7.61 2.71 9.02z'
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
        d='M15.75 15.78c-.94-1.33-2.07-2.24-3.68-2.24q-2.4 0-3.52 2.08l-.24.46'
        stroke='currentColor'
      />
      <path d='M8.76 18.82c.93 1.32 2.06 2.25 3.66 2.25q2.41 0 3.53-2.09' stroke='currentColor' />
      <path
        d='m16.27 13.36-.04.86c-.06.94-.08 1.41-.39 1.69-.3.28-.78.25-1.72.2l-.86-.05'
        stroke='currentColor'
      />
      <path
        d='m8.19 21.08.05-.7c.07-.95.1-1.42.42-1.69s.79-.23 1.73-.16l.71.06'
        stroke='currentColor'
      />
    </svg>
  )
}
