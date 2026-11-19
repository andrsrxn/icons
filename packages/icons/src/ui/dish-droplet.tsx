import type { Icon } from './types'

export const IconDishDroplet: Icon = ({
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
      data-slot='icon-ui-dish-droplet'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.64 15.4q.58-1.6.58-3.4a10.22 10.22 0 1 0-5.85 9.24l-1-2 .5-2.43L19 12.97z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M22.34 11.03A10.39 10.39 0 1 0 12 22.39s.47 0 .87-.1' stroke='currentColor' />
      <path d='M17.3 9.9a5.7 5.7 0 1 0-5.3 7.8s.24 0 .5-.05' stroke='currentColor' />
      <path
        d='M22.78 18.95c0 1.9-1.63 3.44-3.65 3.44-2.01 0-3.65-1.54-3.65-3.44 0-2.29 1.54-4.1 2.62-5.1.43-.4.64-.6 1.03-.6.4 0 .6.2 1.03.6 1.08 1 2.62 2.82 2.62 5.1'
        stroke='currentColor'
      />
      <path d='M20.28 18.44a1.5 1.5 0 0 1-.37.83c-.25.3-.54.43-.84.53' stroke='currentColor' />
    </svg>
  )
}
