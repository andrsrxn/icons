import type { Icon } from './types'

export const IconReference: Icon = ({
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
      data-slot='icon-ui-reference'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.16 17.5c.65 0 .97 0 1.24-.05a3 3 0 0 0 2.4-2.4c.06-.27.06-.6.06-1.24v-3.06c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H7.7c-2.82 0-4.24 0-5.12.88s-.88 2.29-.88 5.12v3.06c0 .64 0 .97.05 1.24a3 3 0 0 0 2.41 2.4c.27.05.6.05 1.24.05l.4.01a3 3 0 0 1 1.27.37l.34.22 1.7 1.1c1.05.68 1.58 1.02 2.17 1.02.6 0 1.12-.34 2.17-1.02l1.7-1.1.34-.22a3 3 0 0 1 1.26-.37z'
        fill='currentColor'
      />
      <path
        d='M11.33 4.75H7.7c-2.82 0-4.24 0-5.12.88s-.88 2.29-.88 5.12v2.6c0 1.07 0 1.6.14 2.04a3 3 0 0 0 1.97 1.98c.44.13.97.13 2.05.13.5 0 .74 0 .98.04a3 3 0 0 1 1.38.6c.19.16.36.34.7.7l.13.15c.72.79 1.08 1.18 1.5 1.35a2 2 0 0 0 1.48 0c.41-.15.78-.54 1.52-1.32l.22-.24c.32-.33.48-.5.66-.64a3 3 0 0 1 1.4-.6c.22-.04.46-.04.92-.04h1.34a3 3 0 0 0 2.76-2.76v-.53'
        stroke='currentColor'
      />
      <path
        d='M15.66 3.3h2.59c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v2.6'
        stroke='currentColor'
      />
      <path d='m14.23 11.33 7.14-7.15' stroke='currentColor' />
    </svg>
  )
}
