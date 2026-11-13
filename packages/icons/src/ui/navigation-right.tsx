import type { Icon } from './types'

export const IconNavigationRight: Icon = ({
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
      data-slot='icon-ui-navigation-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.41 12.44C13.88 9.94 13.12 8.7 12 8.7s-1.88 1.25-3.41 3.74l-1.66 2.7C5.2 18 4.32 19.41 4.67 20.34q.23.57.72.92c.8.56 2.4.06 5.6-.94.43-.14.65-.21.88-.23h.32c.22.02.45.09.89.23 3.13.99 4.7 1.49 5.5.95a2 2 0 0 0 .76-.98c.33-.9-.53-2.3-2.25-5.1z'
        fill='currentColor'
      />
      <path
        d='M10.98 20.32c.44-.14.66-.21.89-.23h.32c.22.02.45.09.89.23 3.13.99 4.7 1.49 5.5.95a2 2 0 0 0 .76-.98c.33-.9-.53-2.3-2.25-5.1l-1.68-2.75C13.88 9.94 13.12 8.7 12 8.7s-1.88 1.25-3.41 3.74l-1.66 2.7C5.2 18 4.32 19.41 4.67 20.34q.23.57.72.92c.8.56 2.4.06 5.6-.94'
        stroke='currentColor'
      />
      <path d='M14.6 5.28h6.3' stroke='currentColor' />
      <path
        d='M19.54 2.5c1.22 1.22 1.83 1.83 1.88 2.58v.27c-.05.75-.66 1.36-1.88 2.58'
        stroke='currentColor'
      />
    </svg>
  )
}
