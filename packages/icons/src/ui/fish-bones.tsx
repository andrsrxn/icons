import type { Icon } from './types'

export const IconFishBones: Icon = ({
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
      data-slot='icon-ui-fish-bones'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M5.23 12h12.09' stroke='currentColor' />
      <path d='M8.01 15.19V8.8' stroke='currentColor' />
      <path d='M11.34 15.19V8.8' stroke='currentColor' />
      <path d='M14.66 15.19V8.8' stroke='currentColor' />
      <path
        opacity='.2'
        d='M22.42 12c0 1.8-1.04 3.15-2.19 4.1-1.01.84-1.52 1.27-2.11.95-.6-.31-.52-1.08-.37-2.61.08-.84.14-1.7.14-2.44s-.06-1.6-.14-2.44c-.15-1.53-.22-2.3.37-2.61s1.1.1 2.11.95c1.15.95 2.2 2.3 2.2 4.1'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.23 12c0 1.06-.47 1.93-1.08 2.62-.87.97-1.31 1.46-1.97 1.18s-.6-1.11-.45-2.76a12 12 0 0 0 0-2.08c-.14-1.65-.21-2.47.45-2.76s1.1.2 1.97 1.18A4 4 0 0 1 5.23 12'
        fill='currentColor'
      />
      <path
        d='M20.23 16.1c1.15-.95 2.2-2.3 2.2-4.1s-1.05-3.15-2.2-4.1c-1.01-.84-1.52-1.27-2.11-.95-.6.31-.52 1.08-.37 2.61.08.84.14 1.7.14 2.44s-.06 1.6-.14 2.44h0c-.15 1.53-.22 2.3.37 2.61s1.1-.1 2.11-.95'
        stroke='currentColor'
      />
      <path
        d='M4.15 14.62A4 4 0 0 0 5.23 12c0-1.06-.47-1.93-1.08-2.62-.87-.97-1.31-1.46-1.97-1.18s-.6 1.11-.45 2.76a12 12 0 0 1 0 2.08c-.14 1.65-.21 2.47.45 2.76s1.1-.2 1.97-1.18'
        stroke='currentColor'
      />
    </svg>
  )
}
