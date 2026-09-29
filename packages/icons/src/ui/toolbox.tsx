import type { Icon } from './types'

export const IconToolbox: Icon = ({
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
      data-slot='icon-ui-toolbox'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.76'
        y='13.54'
        width='20.48'
        height='7.23'
        rx='2'
        fill='currentColor'
      />
      <path
        d='M3.32 9.06c.63-1.02.95-1.54 1.4-1.88a3 3 0 0 1 .7-.39c.53-.2 1.13-.2 2.34-.2h8.38c1.19 0 1.78 0 2.3.2a3 3 0 0 1 .66.36c.46.32.79.82 1.44 1.82.72 1.1 1.08 1.66 1.31 2.27q.16.4.25.83c.14.64.14 1.3.14 2.63v.3c0 2.61 0 3.92-.76 4.77l-.25.25c-.85.76-2.16.76-4.76.76H7.63c-2.7 0-4.05 0-4.91-.8l-.15-.16c-.8-.86-.8-2.21-.8-4.9v-.38c0-1.25 0-1.87.12-2.47a6 6 0 0 1 .23-.84c.22-.58.54-1.11 1.2-2.17'
        stroke='currentColor'
      />
      <path
        d='M8 6.59c0-1.28 0-1.92.28-2.39a2 2 0 0 1 .7-.7c.47-.28 1.1-.28 2.38-.28h1.37c1.27 0 1.9 0 2.38.28a2 2 0 0 1 .7.7c.28.47.28 1.11.28 2.39'
        stroke='currentColor'
      />
      <path d='M21.9 14H2.1' stroke='currentColor' />
      <path d='M7.02 15.8v-3.6' stroke='currentColor' />
      <path d='M17 15.8v-3.6' stroke='currentColor' />
      <path d='M12 15.8v-3.6' stroke='currentColor' />
    </svg>
  )
}
