import type { Icon } from './types'

export const IconRocket: Icon = ({
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
      data-slot='icon-ui-rocket'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.34 11.05a1.66 1.66 0 1 0 3.32 0 1.66 1.66 0 0 0-3.32 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m4.52 10.82 1.32-.79a1 1 0 0 1 1.51.86v6.1a1 1 0 0 1-.95 1l-2.26.1a1 1 0 0 1-1.03-1.17l.93-5.41a1 1 0 0 1 .48-.7'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m19.43 10.82-1.32-.79a1 1 0 0 0-1.51.86v6.1a1 1 0 0 0 .95 1l2.25.1a1 1 0 0 0 1.03-1.17l-.92-5.41a1 1 0 0 0-.48-.7'
        fill='currentColor'
      />
      <path
        d='M8.38 6.55C9.95 3.24 10.73 1.58 12 1.58s2.05 1.66 3.62 4.97l.17.37c.29.6.43.91.5 1.23.08.33.08.67.08 1.34v5.98c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58h-.74c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V9.5c0-.67 0-1.01.07-1.34.08-.32.22-.62.5-1.23z'
        stroke='currentColor'
      />
      <path
        d='m7.35 9.27-.24.1c-1.5.64-2.25.96-2.73 1.58s-.6 1.43-.84 3.04l-.3 2c-.2 1.31-.3 1.97.1 2.33.38.36 1.03.2 2.33-.1l1.68-.38'
        stroke='currentColor'
      />
      <path
        d='m16.78 9.27.18.08c1.48.65 2.23.98 2.7 1.6.47.61.58 1.42.82 3.02l.29 2c.2 1.33.29 1.99-.1 2.35-.4.35-1.05.2-2.35-.11l-1.72-.42'
        stroke='currentColor'
      />
      <path
        d='M10.34 11.05A1.66 1.66 0 0 0 12 12.71a1.66 1.66 0 1 0-1.66-1.66'
        stroke='currentColor'
      />
      <path d='M8.65 22.22h6.7' stroke='currentColor' />
    </svg>
  )
}
