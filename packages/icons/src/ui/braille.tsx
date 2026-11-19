import type { Icon } from './types'

export const IconBraille: Icon = ({
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
      data-slot='icon-ui-braille'
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
        d='M6.2 7.28a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.2 15.51a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.8 7.28a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.74 7.28a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.74 11.4a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.74 15.51a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.62 11.4a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
