import type { Icon } from './types'

export const IconEarthquake: Icon = ({
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
      data-slot='icon-ui-earthquake'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.58 21.58c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-3.16c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17H10.5c-3.73 0-5.6 0-6.77 1.15C2.56 4.73 2.54 6.6 2.5 10.32l-.04 3.17c-.04 3.81-.06 5.72 1.1 6.9 1.18 1.2 3.09 1.2 6.9 1.2z'
        fill='currentColor'
      />
      <path
        d='M2.42 13.58v-3.16c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.16c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='m6.61 16.03 2.47-.94c.64-.24.95-.36 1.28-.34s.62.18 1.22.5l1.12.6c.69.38 1.03.57 1.4.57.38 0 .73-.18 1.42-.54l1.26-.66c.58-.3.88-.46 1.2-.48s.63.1 1.25.33l2.35.89'
        stroke='currentColor'
      />
      <path
        d='m2.42 8.78 2.49-.93c.62-.23.93-.35 1.25-.33.33.03.62.18 1.2.5l1.17.6c.67.37 1.01.55 1.38.55s.71-.17 1.4-.52l1.29-.67c.58-.3.87-.44 1.18-.46s.62.1 1.23.32l2.38.87'
        stroke='currentColor'
      />
    </svg>
  )
}
