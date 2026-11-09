import type { Icon } from './types'

export const IconRepeatOff: Icon = ({
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
      data-slot='icon-ui-repeat-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.2 5.41v5.18c0 3.77 0 5.66-1.18 6.83-1.17 1.17-3.05 1.17-6.83 1.17H2.71V13.4c0-3.77 0-5.66 1.18-6.83C5.06 5.4 6.94 5.4 10.71 5.4z'
        fill='currentColor'
      />
      <path d='m2.67 2.67 18.66 18.66' stroke='currentColor' />
      <path d='M9.4 5.41h11.2' stroke='currentColor' />
      <path d='M2.68 10.13c0-.67 0-1 .04-1.28A3.9 3.9 0 0 1 5.58 5.6' stroke='currentColor' />
      <path d='M3.4 18.57h13.22c.65 0 .97 0 1.24-.03q.3-.04.57-.1' stroke='currentColor' />
      <path d='M21.32 13.87c0 .65 0 .98-.04 1.25a3.6 3.6 0 0 1-.67 1.71' stroke='currentColor' />
      <path
        d='m18.6 1.71.86.87c1.33 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-.87.87'
        stroke='currentColor'
      />
      <path
        d='m5.42 22.29-.88-.88c-1.33-1.34-2-2-2-2.83s.66-1.5 2-2.83l.88-.89'
        stroke='currentColor'
      />
    </svg>
  )
}
