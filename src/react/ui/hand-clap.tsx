import type { Icon } from './types'

export const IconHandClap: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-hand-clap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m18.9 4.05.95-1.88m.56 4.7 1.95-.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='m12.04 3.46 1.28.67.39 1.09 2.57-.17.49 1.58-2.15 2.18-4.04 3.11-.62-1.94-1.35-.95-3.44 7.16-2.35-4.29L5 4.84l2.1.31.54 2.15z'
        fill='currentColor'
      />
      <path
        d='m11.58 7.49 1.5-1.41a1.5 1.5 0 0 0-2.05-2.2l-4.1 3.76'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m6.9 7.58.32-1.08a1.52 1.52 0 0 0-2.9-.94l-1.5 4.29a4.9 4.9 0 0 0 1.1 4.99l2 2.02m9.18-8.53 1.03-1.02a1.5 1.5 0 0 0-2.09-2.15L11.5 7.6m1.6 6.35 3.22-3.08a1.49 1.49 0 0 0-2.05-2.15l-4.19 3.99'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m10.02 12.76.43-1.46a1.52 1.52 0 0 0-2.9-.94l-1.32 3.77a5.7 5.7 0 0 0 1.31 5.9l.1.09a4.6 4.6 0 0 0 2.8 1.45 7 7 0 0 0 3.35-.4c2.38-1.13 2.38-1.95 4.05-3.53'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m15.12 16.12 4.22-4.01a1.49 1.49 0 0 0-2.06-2.16l-4.21 4.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m18.07 17.42 1.07-1.02a1.49 1.49 0 1 0-2.05-2.16l-2.1 2.01'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
