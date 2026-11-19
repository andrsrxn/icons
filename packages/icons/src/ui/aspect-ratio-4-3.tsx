import type { Icon } from './types'

export const IconAspectRatio43: Icon = ({
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
      data-slot='icon-ui-aspect-ratio-4-3'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.27 21.02c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-2.04c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17H9.74c-3.77 0-5.66 0-6.83 1.17s-1.17 3.06-1.17 6.83v2.04c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M1.74 13.02v-2.04c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h4.53c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.04c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17H9.74c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M10.25 6.89H8.77c-1.42 0-2.13 0-2.57.43-.44.44-.44 1.15-.44 2.56v1.5'
        stroke='currentColor'
      />
      <path
        d='M13.76 17.12h1.48c1.42 0 2.13 0 2.57-.44s.44-1.15.44-2.56v-1.5'
        stroke='currentColor'
      />
    </svg>
  )
}
