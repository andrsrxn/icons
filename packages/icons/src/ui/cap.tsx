import type { Icon } from './types'

export const IconCap: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-cap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.08 5.25c.25 0 .38 0 .5.03s.23.1.45.21l3.41 1.84c.34.18.5.27.63.41a2 2 0 0 1 .3.68l1.14 3.2c.47 1.34.7 2 .36 2.44s-1.04.36-2.44.22l-6.25-.6-.23-.02-.22.02-6.15.78c-1.43.18-2.14.27-2.5-.16-.34-.43-.11-1.1.35-2.47L4.6 8.45c.12-.37.19-.56.31-.7.13-.15.3-.24.65-.43l3.52-1.84c.22-.11.33-.17.45-.2s.24-.03.48-.03z'
        fill='currentColor'
      />
      <path
        d='M19.92 14.26c.47.07.7.11.92.22q.32.16.53.45c.14.2.22.44.37.92.42 1.36.64 2.05.5 2.5q-.21.64-.83.92c-.43.19-1.16.05-2.62-.23-2.08-.4-4.61-.77-6.81-.77-2.18 0-4.66.37-6.72.78-1.5.3-2.23.44-2.66.25q-.63-.27-.84-.92c-.14-.45.08-1.14.52-2.53.15-.48.22-.72.37-.92q.2-.28.52-.45c.21-.11.45-.15.92-.22 1.7-.26 4.74-.65 7.89-.65s6.22.39 7.94.65'
        stroke='currentColor'
      />
      <path
        d='M2.76 14.48a9.37 9.37 0 0 1 9.27-9.47 9.37 9.37 0 0 1 9.28 9.47'
        stroke='currentColor'
      />
      <path d='M7.83 13.61c0-3.17 1.58-7.34 4.2-8.6' stroke='currentColor' />
      <path d='M16.23 13.61c0-3.17-1.58-7.34-4.22-8.6' stroke='currentColor' />
      <path d='M12 2.97v2.04' stroke='currentColor' />
    </svg>
  )
}
