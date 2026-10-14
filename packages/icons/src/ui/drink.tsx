import type { Icon } from './types'

export const IconDrink: Icon = ({
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
      data-slot='icon-ui-drink'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m4.55 10.11 1.06 7.24c.36 2.44.54 3.66 1.39 4.4.84.72 2.08.72 4.55.72h.4c2.46 0 3.69 0 4.53-.73.85-.72 1.03-1.94 1.4-4.38l1.08-7.25-3 .42c-.5.07-.77.1-1.03.1-.26-.01-.51-.07-1.02-.18L10 9.63a6 6 0 0 0-1.1-.18c-.29-.01-.57.04-1.12.13z'
        fill='currentColor'
      />
      <path
        d='m5.43 17.12-.87-7.98c-.16-1.56-.25-2.33.2-2.83s1.23-.5 2.79-.5h8.43c1.55 0 2.33 0 2.77.5.45.5.37 1.27.21 2.81l-.83 7.97c-.27 2.56-.4 3.84-1.25 4.6-.86.78-2.15.78-4.72.78h-.76c-2.56 0-3.84 0-4.7-.77-.85-.76-1-2.04-1.27-4.58'
        stroke='currentColor'
      />
      <path
        d='M19.62 1.74h-.1c-1.7 0-2.56 0-3.13.5-.57.52-.66 1.37-.85 3.06l-1.18 10.82'
        stroke='currentColor'
      />
      <path
        d='M18.67 10.4c-1.85.5-2.94.61-4.82.46-1.92-.15-2.9-1.22-4.83-1.26a9 9 0 0 0-4.18.8'
        stroke='currentColor'
      />
      <path
        d='M9.4 13.94a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.34 18.6a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
