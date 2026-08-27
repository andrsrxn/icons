import type { Icon } from './types'

export const IconSword: Icon = ({
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
      data-slot='ui-icon-sword'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m8.35 18.47-2.9-2.9 9.04-11.42 6.94-1.49-1.49 6.95z'
        fill='currentColor'
      />
      <path
        d='m6.46 15.61 7.6-10.27c.39-.53.58-.8.85-.99a4 4 0 0 1 1.21-.47l2.22-.66c1.58-.47 2.37-.7 2.8-.28.41.42.17 1.21-.32 2.79l-.68 2.21a4 4 0 0 1-.47 1.18 4 4 0 0 1-.94.83L8.49 17.7m-3.33 3.88-2.65-2.65m1.33 1.33 3.28-3.29'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m4.85 12.53.02.74a3 3 0 0 0 .62 1.5c.11.14.24.27.5.53l2.73 2.73c.44.44.67.66.92.83a3 3 0 0 0 1.05.44c.3.06.61.06 1.24.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
