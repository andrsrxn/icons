import type { Icon } from './types'

export const IconFieldSelect: Icon = ({
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
      data-slot='icon-ui-field-select'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.83 18.48c2.31 0 3.47 0 4.35-.47a4 4 0 0 0 1.66-1.66c.47-.88.47-2.04.47-4.35s0-3.47-.47-4.35A4 4 0 0 0 20.18 6c-.88-.47-2.04-.47-4.35-.47H8.17c-2.31 0-3.47 0-4.35.47a4 4 0 0 0-1.66 1.66c-.47.88-.47 2.04-.47 4.35s0 3.47.47 4.35A4 4 0 0 0 3.82 18c.88.47 2.04.47 4.35.47z'
        fill='currentColor'
      />
      <path
        d='m18.8 11-.87.87c-1 1-1.5 1.5-2.13 1.5s-1.12-.5-2.12-1.5L12.8 11'
        stroke='currentColor'
      />
      <path
        d='M1.7 12c0-2.31 0-3.47.46-4.35A4 4 0 0 1 3.82 6c.88-.47 2.04-.47 4.35-.47h7.66c2.31 0 3.47 0 4.35.47a4 4 0 0 1 1.66 1.66c.47.88.47 2.04.47 4.35v0c0 2.31 0 3.47-.47 4.35A4 4 0 0 1 20.18 18c-.88.47-2.04.47-4.35.47H8.17c-2.31 0-3.47 0-4.35-.47a4 4 0 0 1-1.66-1.66c-.47-.88-.47-2.04-.47-4.35'
        stroke='currentColor'
      />
    </svg>
  )
}
