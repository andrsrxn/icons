import type { Icon } from './types'

export const IconListRefresh: Icon = ({
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
      data-slot='icon-ui-list-refresh'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.42 6H2.67' stroke='currentColor' />
      <path d='M10.2 12H2.67' stroke='currentColor' />
      <path d='M10.2 18H2.67' stroke='currentColor' />
      <path
        opacity='.2'
        d='M18.03 10.68a4.34 4.34 0 1 0 0 8.68 4.34 4.34 0 0 0 0-8.68'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.91 16.76c.9 1.61 2.2 2.6 4.23 2.6a4.5 4.5 0 0 0 3.93-2.6'
        stroke='currentColor'
      />
      <path
        d='M22.04 13.07a4.8 4.8 0 0 0-4.23-2.6c-1.97 0-3.25 1.31-4.05 2.6'
        stroke='currentColor'
      />
      <path
        d='M19.88 13.46h.84c.78 0 1.17 0 1.4-.24.25-.24.25-.63.25-1.4v-.84'
        stroke='currentColor'
      />
      <path d='M13.46 19.27v-1c0-.92 0-1.39.29-1.68s.75-.29 1.68-.29h.65' stroke='currentColor' />
    </svg>
  )
}
