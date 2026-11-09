import type { Icon } from './types'

export const IconNineSquare: Icon = ({
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
      data-slot='icon-ui-nine-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.58 21.58c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3.16c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-3.16c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v3.16c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M14.7 9.49c-.2-1.35-1.27-2.73-2.77-2.73A2.73 2.73 0 0 0 9.2 9.49c0 1.5 1.03 2.7 2.54 2.7a2.9 2.9 0 0 0 2.96-2.7m0 0a7.7 7.7 0 0 1-.78 4.96 5.6 5.6 0 0 1-3.32 2.8'
        stroke='currentColor'
      />
    </svg>
  )
}
