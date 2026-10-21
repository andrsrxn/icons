import type { Icon } from './types'

export const IconDisability: Icon = ({
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
      data-slot='icon-ui-disability'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.03 15.6a5.76 5.76 0 0 1-4.5 6.66 5.57 5.57 0 0 1-2.06-10.95 7 7 0 0 1 2.25 0v3.06h4z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='14.32'
        cy='4.26'
        r='2.59'
        transform='rotate(7.4 14.32 4.26)'
        fill='currentColor'
      />
      <path d='M6.05 13.53a5.57 5.57 0 1 0 9.43 5.88' stroke='currentColor' />
      <circle
        cx='14.32'
        cy='4.26'
        r='2.59'
        transform='rotate(7.4 14.32 4.26)'
        stroke='currentColor'
      />
      <path
        d='m7.96 10.77.9-1.37c.5-.76.75-1.14 1.12-1.37s.83-.3 1.73-.4l1.26-.16'
        stroke='currentColor'
      />
      <path
        d='m19.14 19.21-1.97-3.34c-.34-.6-.52-.89-.78-1.07l-.29-.16c-.3-.13-.64-.12-1.33-.1-1.47.05-2.2.07-2.65-.31a2 2 0 0 1-.35-.45c-.27-.52-.07-1.23.32-2.65l1.12-4.03'
        stroke='currentColor'
      />
    </svg>
  )
}
