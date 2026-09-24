import type { Icon } from './types'

export const IconPlayingHeart: Icon = ({
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
      data-slot='icon-ui-playing-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.2 2.92c-1.75 0-3.19.94-4.14 1.88-.57.57-.85.85-1.06.85-.2 0-.5-.28-1.06-.85A6 6 0 0 0 6.8 2.92C3.48 2.92.98 7 2.05 11.3c.97 3.9 6.26 7.14 9.13 10 .4.4.61.6.82.6s.41-.2.82-.6c2.87-2.86 8.16-6.1 9.13-10 1.07-4.3-1.43-8.38-4.75-8.38'
        fill='currentColor'
      />
      <path
        d='M17.2 2.92c-1.75 0-3.19.94-4.14 1.88-.57.57-.85.85-1.06.85-.2 0-.5-.28-1.06-.85A6 6 0 0 0 6.8 2.92C3.48 2.92.98 7 2.05 11.3c.97 3.9 6.26 7.14 9.13 10 .4.4.61.6.82.6s.41-.2.82-.6c2.87-2.86 8.16-6.1 9.13-10 1.07-4.3-1.43-8.38-4.75-8.38'
        stroke='currentColor'
      />
    </svg>
  )
}
