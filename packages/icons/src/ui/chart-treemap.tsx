import type { Icon } from './types'

export const IconChartTreemap: Icon = ({
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
      data-slot='icon-ui-chart-treemap'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 15.6c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h5.58c.95 0 1.42 0 1.71-.3.3-.29.3-.76.3-1.7v-1.52c0-3.44 0-5.17-1-6.3l-.37-.37c-1.13-1-2.86-1-6.3-1-.87 0-1.3 0-1.58.26l-.1.09c-.24.28-.24.71-.24 1.57v2.5c0 .92 0 1.38-.29 1.68-.28.29-.75.3-1.68.31l-5.65.1c-.92.01-1.39.02-1.68.31-.28.3-.28.76-.28 1.68v3c0 3.45 0 5.18.99 6.31l.37.37c1.13 1 2.86 1 6.3 1 .87 0 1.3 0 1.58-.26l.1-.09c.24-.28.24-.71.24-1.57z'
        fill='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path d='M12 2.42v19.16' stroke='currentColor' />
      <path d='M2.41 8.79H12' stroke='currentColor' />
      <path d='M12 13.82h9.59' stroke='currentColor' />
      <path d='M16.8 21.31v-7.5' stroke='currentColor' />
    </svg>
  )
}
