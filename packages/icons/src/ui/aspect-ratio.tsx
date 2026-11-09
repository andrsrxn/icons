import type { Icon } from './types'

export const IconAspectRatio: Icon = ({
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
      data-slot='icon-ui-aspect-ratio'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.34 21.34c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83v-2.68c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17h-2.68c-3.77 0-5.66 0-6.83 1.17S2.66 6.9 2.66 10.66v2.68c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path
        d='M2.66 13.34v-2.68c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.68c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.68c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.68c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M11.75 6.58h-1.16c-1.89 0-2.83 0-3.42.59-.59.58-.59 1.53-.59 3.41v1.17'
        stroke='currentColor'
      />
      <path
        d='M12.25 17.32h1.16c1.89 0 2.83 0 3.42-.58s.59-1.53.59-3.41v-1.17'
        stroke='currentColor'
      />
    </svg>
  )
}
