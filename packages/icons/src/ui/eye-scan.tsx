import type { Icon } from './types'

export const IconEyeScan: Icon = ({
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
      data-slot='icon-ui-eye-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M6.73 10.44c1-1.2 2.74-2.65 5.27-2.65a6.9 6.9 0 0 1 5.27 2.65c.47.56.7.84.7 1.56.01.72-.22 1-.69 1.57A6.8 6.8 0 0 1 12 16.24a6.8 6.8 0 0 1-5.28-2.67c-.47-.56-.7-.85-.7-1.57s.24-1 .7-1.56'
        stroke='currentColor'
      />
      <path
        d='M15.99 21.45c1.86 0 2.78 0 3.5-.34a3.5 3.5 0 0 0 1.65-1.64c.34-.72.34-1.65.34-3.51h0'
        stroke='currentColor'
      />
      <path
        d='M16.02 2.58c1.83 0 2.74 0 3.45.33a3.5 3.5 0 0 1 1.68 1.68c.33.7.33 1.62.33 3.45'
        stroke='currentColor'
      />
      <path
        d='M8.01 21.45c-1.86 0-2.79 0-3.5-.34a3.5 3.5 0 0 1-1.65-1.64c-.34-.72-.34-1.65-.34-3.51'
        stroke='currentColor'
      />
      <path
        d='M8.01 2.58c-1.86 0-2.79 0-3.5.34a3.5 3.5 0 0 0-1.65 1.65c-.34.71-.34 1.65-.34 3.51'
        stroke='currentColor'
      />
      <circle cx='12.01' cy='12' r='1.77' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.47 2.53c3.3 0 4.95 0 5.97 1.03 1.03 1.02 1.03 2.67 1.03 5.97v4.94c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03H9.53c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.53c0-3.3 0-4.95 1.03-5.97 1.02-1.03 2.67-1.03 5.97-1.03zM12 7.8c-3.09 0-5 2.16-5.83 3.38-.34.5-.34 1.15 0 1.66.82 1.23 2.72 3.41 5.83 3.41s5-2.18 5.83-3.41c.34-.5.34-1.15 0-1.66C16.99 9.95 15.09 7.8 12 7.8m1.78 4.2a1.77 1.77 0 1 1-3.54 0 1.77 1.77 0 0 1 3.54 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
